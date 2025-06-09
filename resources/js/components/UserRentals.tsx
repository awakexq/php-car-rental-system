import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Link } from '@inertiajs/react';

interface Car {
    id_samochodu: number;
    marka: string;
    model: string;
    zdjecia: string[];
}

interface Rental {
    id: number;
    car: Car | null;
    rental_start: string;
    rental_end: string;
    total_price: number;
    notes?: string;
}

export default function UserRentals() {
    const [rentals, setRentals] = useState<Rental[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRentals = async () => {
            try {
                const response = await axios.get('/api/user/rentals', {
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    withCredentials: true
                });
                
                if (response.data && Array.isArray(response.data)) {
                    setRentals(response.data);
                    setError(null);
                } else {
                    setError('Nieprawidłowy format danych z serwera');
                }
            } catch (error: any) {
                console.error('Error fetching rentals:', error);
                if (error.response?.status === 401) {
                    setError('Musisz być zalogowany, aby zobaczyć swoje wypożyczenia');
                } else {
                    setError('Nie udało się pobrać wypożyczeń. Spróbuj ponownie później.');
                }
                toast.error(error.response?.data?.message || 'Wystąpił błąd podczas pobierania wypożyczeń');
            } finally {
                setLoading(false);
            }
        };

        fetchRentals();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pl-PL');
    };

    if (loading) {
        return (
            <Card className="mb-6">
                <CardContent className="flex justify-center items-center py-6">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </CardContent>
            </Card>
        );
    }

    if (error) {
        return (
            <Card className="mb-6">
                <CardContent className="text-center py-4">
                    <p className="text-sm text-red-600">{error}</p>
                </CardContent>
            </Card>
        );
    }

    if (rentals.length === 0) {
        return (
            <Card className="mb-6">
                <CardContent className="text-center py-4">
                    <p className="text-sm text-muted">Nie masz jeszcze żadnych wypożyczeń.</p>
                </CardContent>
            </Card>
        );
    }

    const recentRentals = rentals
        .sort((a, b) => new Date(b.rental_start).getTime() - new Date(a.rental_start).getTime())
        .slice(0, 4);

    return (
        <Card className="mb-6">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🚗</span>
                        <span>Ostatnie wypożyczenia</span>
                    </div>
                    {rentals.length > 3 && (
                        <Link 
                            href="/rentals" 
                            className="text-sm text-primary hover:underline"
                        >
                            Zobacz wszystkie →
                        </Link>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="space-y-3">
                    {recentRentals.map((rental, index) => (
                        <div key={rental.id} className="flex items-center justify-between py-3 border-b last:border-0">
                            <div className="flex items-center gap-4">
                                <img
                                    src={rental.car?.zdjecia?.[0] || '/placeholder.jpg'}
                                    alt={rental.car ? `${rental.car.marka} ${rental.car.model}` : 'Samochód niedostępny'}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <h4 className="font-medium text-base">
                                        {rental.car ? `${rental.car.marka} ${rental.car.model}` : 'Samochód niedostępny'}
                                    </h4>
                                    <p className="text-sm text-muted">
                                        {formatDate(rental.rental_start)} - {formatDate(rental.rental_end)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 justify-end min-w-[150px]">
                                {index === 0 && (
                                    <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                        Najnowsze
                                    </span>
                                )}
                                <span className="text-base font-medium">{rental.total_price} zł</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
} 