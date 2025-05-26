import React from 'react'
import { Car } from '@/types/Car'

export default function BestsellerCar(props: {car: Car}) {
  return (
    <div className="bg-white rounded-2xl border-1 text-muted p-8 max-w-[300px] flex flex-col">
      <div className="w-[231px] h-[140px] mb-6">
        <img src={props.car.zdjecia?.[0] || 'https://via.placeholder.com/150'} alt={props.car.marka + ' ' + props.car.model} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="headline-2 mb-2">{props.car.marka} {props.car.model}</div>
      <div className="flex items-center mb-4">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="gold" className="mr-1 align-middle relative -top-[2px]"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
        <span className="text-4-1 font-league-spartan pr-1 flex items-center">{props.car.ocena}</span>
        <span className="text-muted text-4 flex items-center">({props.car.ilosc_ocen} ocen)</span>
      </div>
      <div className="flex gap-18 mb-2">
          <span className="text-4 text-muted">{props.car.pasazerowie} Pasażerów</span>
          <span className="text-4 text-muted">{props.car.typ}</span>
      </div>
      <div className="flex gap-20 mb-3">
          <span className="text-4 text-muted">{props.car.drzwi} Drzwiowe</span>
          <span className="text-4 text-muted">{props.car.rocznik}</span>
      </div>
      <hr className="w-full border-t border-gray-200 py-3" />
      <div className="flex justify-between w-full items-center mb-6">
        <span className="text-3 font-medium text-muted">Cena</span>
        <span className="headline-2 font-semibold">{props.car.cena_za_dzien}zł <span className="text-[#9C9C9C] text-4 font-normal">/dzień</span></span>
      </div>
      <a href={`/currentoffer/${props.car.id_samochodu}`} className="bg-primary hover:bg-primary/60 hover:cursor-pointer text-white rounded-md py-3 w-full text-3 flex items-center justify-center gap-1 transition">
        Wypożycz
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  )
}
