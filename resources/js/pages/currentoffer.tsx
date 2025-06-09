import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Offer from '../components/offer'
import Filters, { FilterParams } from '../components/filters'
import { Car } from '../types/Car'
import axios from 'axios'
import { usePage } from '@inertiajs/react'

type PaginatedResponse = {
  data: Car[]
  current_page: number
  last_page: number
  per_page: number
  total: number
}

export default function CurrentOffer() {
  const { auth } = usePage().props as any
  const [cars, setCars] = useState<Car[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState<FilterParams>({})
  const carsPerPage = 4

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const params: Record<string, string> = {
          page: currentPage.toString(),
          per_page: carsPerPage.toString(),
        }
        if (filters.marka) params.marka = filters.marka
        if (filters.model) params.model = filters.model
        if (filters.min_cena) params.min_cena = filters.min_cena.toString()
        if (filters.max_cena) params.max_cena = filters.max_cena.toString()
        if (filters.min_rok) params.min_rok = filters.min_rok.toString()
        if (filters.max_rok) params.max_rok = filters.max_rok.toString()
        if (filters.min_konie) params.min_konie = filters.min_konie.toString()
        if (filters.max_konie) params.max_konie = filters.max_konie.toString()
        if (filters.typ) params.typ = filters.typ
        if (filters.rodzaj) params.rodzaj = filters.rodzaj

        const queryParams = new URLSearchParams(params)
        const response = await axios.get<PaginatedResponse>(`/api/cars?${queryParams}`)
        setCars(response.data.data)
        setTotalPages(response.data.last_page)
      } catch (error) {
        console.error('Blad podczas pobierania samochodów:', error)
      }
    }

    fetchCars()
  }, [currentPage, filters])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFilterChange = (newFilters: FilterParams) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleFilterReset = () => {
    setFilters({})
    setCurrentPage(1)
  }

  return (
    <>
    <div className='pb-24'>
      <Navbar/>
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold">Dostępne samochody</h1>
        {auth.user?.role === 'ADMIN' && (
          <a href="/add-car" className="bg-primary hover:bg-primary/50 text-white rounded-md px-6 sm:px-8 py-2 sm:py-3 font-semibold transition text-4 sm:text-4 w-auto hover:cursor-pointer inline-block text-center">
            Dodaj samochód
          </a>
        )}
      </div>
      
      <Filters onFilterChange={handleFilterChange} onReset={handleFilterReset} />
      
      <div className="pb-12 space-y-8">
        {cars.length > 0 ? (
          cars.map((car) => (
            <Offer key={car.id_samochodu} car={car} />
          ))
        ) : (
          <div className="text-center text-gray-500">
            Nie znaleziono samochodów spełniających kryteria wyszukiwania
          </div>
        )}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-end pb-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 rounded-md ${
                currentPage === pageNumber
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-gray-700'
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      )}
    </div>
    </>
  )
}
