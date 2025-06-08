import React from 'react'
import { Car } from '../types/Car'
export default function offer(props: {car: Car}) {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-md border-0.5 pt-6 border-gray-200 shadow-sm p-6 sm:p-6 items-center max-w-screen-xl mx-auto">
      <img
        src={props.car.zdjecia?.[0] || 'https://via.placeholder.com/150'}
        alt={props.car.marka + ' ' + props.car.model}
        className="w-full sm:w-80 lg:w-55 h-40 sm:h-48 lg:h-35 object-cover rounded-md lg:mr-8"
      />
      <div className="flex-1 text-center lg:text-left">
        <div className="headline-2 mb-2">
          {props.car.marka} {props.car.model}
        </div>
        <div className="text-muted text-4 ">
          {props.car.ilosc_koni}KM &nbsp; {props.car.rocznik} &nbsp; {props.car.kolor} &nbsp; {props.car.typ} &nbsp; {props.car.rodzaj}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center lg:justify-end">
        <div className="flex flex-row sm:flex-col gap-2 sm:gap-2">
          <span className="flex items-center text-4 ">
            <img className="mr-2" src="Doors.png" alt="Doors" />
            {props.car.drzwi} Drzwiowe
          </span>
          <span className="flex items-center text-4">
            <img className="mr-2" src="Passenger.png" alt="Passenger" />
            {props.car.pasazerowie} Pasażerów
          </span>
        </div>
        <span className="flex flex-col text-4">
          <span className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            {props.car.ocena} <span className="text-muted text-4 ml-1">({props.car.ilosc_ocen} ocen)</span>
          </span>
          <span className="mt-1 text-primary">
            {props.car.cena_za_dzien} zł/dzień
          </span>
        </span>
        <a href={`/currentoffer/${props.car.id_samochodu}`} className="bg-primary hover:bg-primary/60 text-white rounded-md px-6 sm:px-8 py-2 sm:py-3 font-semibold transition text-sm sm:text-base w-full sm:w-auto hover:cursor-pointer">
          Wynajmij →
        </a>
      </div>
    </div>
  )
}
