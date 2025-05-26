import React from 'react'
import Bestsellercar from './bestsellercar'
import { Car } from '@/types/Car'

export default function bestsellercarsection(props: {cars: Car[]}) {
  return (
    <div>
      <div className="mb-8 text-center md:text-left md:pl-60 pb-10">
        <p className="headline-1">
          Najpopularniejsze <span className="text-sky-500">samochody</span>
        </p>
        <p className="text-2 text-muted mt-2">
          Wypożycz najczęściej wybierane samochody na naszej stronie
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <a href="/currentoffer" className="text-muted text-2 hover:text-primary flex items-center gap-2 pb-2">
          Zobacz wszystkie oferty <span aria-hidden>→</span>
        </a>
      </div>
      <div className="flex flex-wrap justify-center pb-25 gap-30">
        {props.cars.slice(0, 4).map((car) => (
          <Bestsellercar key={car.id_samochodu} car={car} />
        ))}
      </div>
    </div>
  )
}
