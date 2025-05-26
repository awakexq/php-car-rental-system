import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Offer from '../components/offer'
import { Car } from '../types/Car'

type currentofferProps = {
  cars: Car[]
}

export default function currentoffer( {cars} : currentofferProps ) {
  const [currentPage, setCurrentPage] = useState(1)
  const carsPerPage = 4
  
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar)
  const totalPages = Math.ceil(cars.length / carsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
    <div className='pb-24'>
      <Navbar/>
    </div>
    <div className="container mx-auto flex justify-center sm:justify-start sm:pl-40">
      <a href="/add-car" className="bg-primary hover:bg-primary/50 text-white rounded-md px-6 sm:px-8 py-2 sm:py-3 font-semibold transition text-4 sm:text-4 w-auto hover:cursor-pointer inline-block text-center">
        Dodaj samochód
      </a>
    </div>
    <div className="pb-12">
      {currentCars.map((car) => (
        <Offer key={car.id_samochodu} car={car} />
      ))}
    </div>
    <div className="container mx-auto flex justify-end pb-8 gap-2 pr-40">
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
    </>
  )
}
