import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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
    status: 'pending' | 'active' | 'completed' | 'cancelled';
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

    const getStatusBadgeColor = (status: Rental['status']) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pl-PL');
    };

    const getStatusText = (status: Rental['status']) => {
        switch (status) {
            case 'pending':
                return 'Oczekujące';
            case 'active':
                return 'Aktywne';
            case 'completed':
                return 'Zakończone';
            case 'cancelled':
                return 'Anulowane';
            default:
                return status;
        }
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

    const recentRentals = rentals.slice(0, 4);

    return (
        <Card className="mb-6">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🚗</span>
                        <span>Ostatnie wypożyczenia</span>
                    </div>
                    {rentals.length > 3 && (
                        <a href="/rentals" className="text-sm text-primary hover:underline">
                            Zobacz wszystkie →
                        </a>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="space-y-3">
                    {recentRentals.map((rental) => (
                        <div key={rental.id} className="flex items-center justify-between py-2 border-b last:border-0">
                            <div className="flex items-center gap-3">
                                <img
                                    src={rental.car?.zdjecia?.[0] || '/placeholder.jpg'}
                                    alt={rental.car ? `${rental.car.marka} ${rental.car.model}` : 'Samochód niedostępny'}
                                    className="w-12 h-12 object-cover rounded"
                                />
                                <div>
                                    <h4 className="font-medium text-sm">
                                        {rental.car ? `${rental.car.marka} ${rental.car.model}` : 'Samochód niedostępny'}
                                    </h4>
                                    <p className="text-xs text-muted">
                                        {formatDate(rental.rental_start)} - {formatDate(rental.rental_end)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium">{rental.total_price} zł</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(rental.status)}`}>
                                    {getStatusText(rental.status)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
} 