import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import { Car } from '@/types/Car';
import { toast } from 'react-hot-toast';
import { router } from '@inertiajs/react';

interface RentCarProps {
    car: Car;
}

interface Rental {
    rental_start: string;
    rental_end: string;
}

export default function RentCar({ car }: RentCarProps) {
    const [loading, setLoading] = useState(false);
    const [rentals, setRentals] = useState<Rental[]>([]);
    const [isAvailable, setIsAvailable] = useState(true);
    const [dateError, setDateError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        rental_start: '',
        rental_end: '',
        notes: ''
    });

    useEffect(() => {
        const fetchRentals = async () => {
            try {
                const response = await axios.get(`/api/cars/${car.id_samochodu}/rentals`);
                setRentals(response.data);
            } catch (error) {
                console.error('Error fetching rentals:', error);
            }
        };

        fetchRentals();
    }, [car.id_samochodu]);

    useEffect(() => {
        if (formData.rental_start && formData.rental_end) {
            const start = new Date(formData.rental_start);
            const end = new Date(formData.rental_end);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            if (start < tomorrow) {
                setDateError('Data rozpoczęcia musi być co najmniej jeden dzień później od aktualnej');
                setIsAvailable(false);
                return;
            }

            if (end <= start) {
                setDateError('Data zakończenia musi być później niż data rozpoczęcia');
                setIsAvailable(false);
                return;
            }

            setDateError(null);

            const isDateAvailable = !rentals.some(rental => {
                const rentalStart = new Date(rental.rental_start);
                const rentalEnd = new Date(rental.rental_end);
                return (
                    (start >= rentalStart && start <= rentalEnd) ||
                    (end >= rentalStart && end <= rentalEnd) ||
                    (start <= rentalStart && end >= rentalEnd)
                );
            });

            setIsAvailable(isDateAvailable);
        }
    }, [formData.rental_start, formData.rental_end, rentals]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAvailable) {
            toast.error(dateError || 'Samochód jest niedostępny w wybranym terminie');
            return;
        }
        setLoading(true);

        try {
            const response = await axios.post('/api/rentals', {
                car_id: car.id_samochodu,
                rental_start: formData.rental_start,
                rental_end: formData.rental_end,
                notes: formData.notes
            }, {
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            toast.success('Samochód został pomyślnie zarezerwowany!');
            router.visit('/account');
        } catch (error: any) {
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Wystąpił błąd podczas rezerwacji samochodu');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pl-PL');
    };

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    return (
        <>
            <div className="relative">
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                <div className="container mx-auto px-4 py-8 mt-20">
                    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            Wypożycz {car.marka} {car.model}
                        </h1>

                        <div className="mb-6">
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <p className="text-lg font-medium text-gray-600">
                                    Cena za dzień: <span className="text-primary font-bold">{car.cena_za_dzien} zł</span>
                                </p>
                            </div>

                            {rentals.length > 0 && (
                                <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                                    <h3 className="text-lg font-medium text-yellow-800 mb-2">
                                        Terminy niedostępne:
                                    </h3>
                                    <ul className="space-y-2">
                                        {rentals.map((rental, index) => (
                                            <li key={index} className="text-yellow-700">
                                                {formatDate(rental.rental_start)} - {formatDate(rental.rental_end)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Data rozpoczęcia
                                    </label>
                                    <input
                                        type="date"
                                        name="rental_start"
                                        min={minDate}
                                        required
                                        value={formData.rental_start}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Data zakończenia
                                    </label>
                                    <input
                                        type="date"
                                        name="rental_end"
                                        min={formData.rental_start || minDate}
                                        required
                                        value={formData.rental_end}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>

                            {formData.rental_start && formData.rental_end && !isAvailable && (
                                <div className="bg-red-50 text-red-800 p-4 rounded-lg">
                                    {dateError || 'Samochód jest niedostępny w wybranym terminie'}
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Dodatkowe uwagi
                                </label>
                                <textarea
                                    name="notes"
                                    rows={4}
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    placeholder="Opcjonalne uwagi do wypożyczenia..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading || !isAvailable}
                                className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
                            >
                                {loading ? 'Przetwarzanie...' : 'Potwierdź wypożyczenie'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
} 