import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

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

export default function AllUserRentals() {
    const [rentals, setRentals] = useState<Rental[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredRentals = rentals.filter(rental => {
        return rental.car 
            ? `${rental.car.marka} ${rental.car.model}`.toLowerCase().includes(searchTerm.toLowerCase())
            : false;
    });

    if (loading) {
        return (
            <Card className="container mx-auto max-w-4xl my-8">
                <CardContent className="flex justify-center items-center py-6">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </CardContent>
            </Card>
        );
    }

    if (error) {
        return (
            <Card className="container mx-auto max-w-4xl my-8">
                <CardContent className="text-center py-4">
                    <p className="text-sm text-red-600">{error}</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="container mx-auto max-w-4xl my-8">
            <Card>
                <CardHeader>
                    <CardTitle>Historia wypożyczeń</CardTitle>
                    <div className="flex gap-4 mt-4">
                        <Input
                            placeholder="Szukaj po marce lub modelu..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="max-w-sm"
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    {filteredRentals.length === 0 ? (
                        <p className="text-center text-muted py-4">
                            {searchTerm 
                                ? 'Nie znaleziono wypożyczeń spełniających kryteria wyszukiwania.'
                                : 'Nie masz jeszcze żadnych wypożyczeń.'}
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {filteredRentals.map((rental) => (
                                <div 
                                    key={rental.id} 
                                    className="flex items-center justify-between p-4 rounded-lg border"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={rental.car?.zdjecia?.[0] || '/placeholder.jpg'}
                                            alt={rental.car ? `${rental.car.marka} ${rental.car.model}` : 'Samochód niedostępny'}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h4 className="font-medium">
                                                {rental.car ? `${rental.car.marka} ${rental.car.model}` : 'Samochód niedostępny'}
                                            </h4>
                                            <p className="text-sm text-muted">
                                                {formatDate(rental.rental_start)} - {formatDate(rental.rental_end)}
                                            </p>
                                            {rental.notes && (
                                                <p className="text-sm text-muted mt-1">
                                                    Uwagi: {rental.notes}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="font-medium">{rental.total_price} zł</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
} 