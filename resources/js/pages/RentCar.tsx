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
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalDays, setTotalDays] = useState<number>(0);
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
                console.error('Blad podczas pobierania wypożyczeń:', error);
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

    
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setTotalDays(diffDays);
            setTotalPrice(diffDays * car.cena_za_dzien);

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
        } else {
            setTotalDays(0);
            setTotalPrice(0);
        }
    }, [formData.rental_start, formData.rental_end, rentals, car.cena_za_dzien]);

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
        <div className="min-h-screen bg-gray-50">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            
            <div className="container mx-auto px-4 py-8 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            {car.marka} {car.model}
                        </h1>

                        <div className="space-y-6">
                            <div className="bg-primary/5 rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Szczegóły cenowe</h2>
                                <div className="space-y-3">
                                    <p className="text-lg">
                                        Cena za dzień: <span className="font-bold text-primary">{car.cena_za_dzien} zł</span>
                                    </p>
                                    {totalDays > 0 && (
                                        <>
                                            <p className="text-lg">
                                                Liczba dni: <span className="font-bold text-primary">{totalDays}</span>
                                            </p>
                                            <div className="border-t border-gray-200 pt-3">
                                                <p className="text-xl font-bold">
                                                    Całkowita cena: <span className="text-primary">{totalPrice} zł</span>
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {rentals.length > 0 && (
                                <div className="bg-yellow-50 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                                        Terminy niedostępne:
                                    </h3>
                                    <ul className="space-y-2">
                                        {rentals.map((rental, index) => (
                                            <li key={index} className="text-yellow-700 flex items-center">
                                                <span className="w-4 h-4 bg-yellow-200 rounded-full mr-2"></span>
                                                {formatDate(rental.rental_start)} - {formatDate(rental.rental_end)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                   
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Formularz wypożyczenia</h2>
                        
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            {formData.rental_start && formData.rental_end && !isAvailable && (
                                <div className="bg-red-50 text-red-800 p-4 rounded-lg border border-red-200">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {dateError || 'Samochód jest niedostępny w wybranym terminie'}
                                    </div>
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="Opcjonalne uwagi do wypożyczenia..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading || !isAvailable}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Przetwarzanie...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Potwierdź wypożyczenie</span>
                                        {totalPrice > 0 && <span>({totalPrice} zł)</span>}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
} 