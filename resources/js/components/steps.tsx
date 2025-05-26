import React from 'react'

export default function Steps() {
  return (
    <div id="jak-wynajac" className="text-center pt-15 pb-15">
      <p className="headline-1">Jak <span className="text-sky-500">wynająć</span>?</p>
      <div className="text-muted mb-10 text-2">Wypożycz pojazd w paru krokach</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center px-0">
        <div className="bg-white rounded-2xl flex flex-col items-center w-2xs h-56">
          <div className="flex items-center justify-center w-18 h-18 rounded-2xl mt-6 mb-6">
            <img src="/Group.png" alt="Ogłoszenia" className="w-13 h-13" />
          </div>
          <div className="text-2 text-muted">Zobacz aktualne <br/>ogłoszenia</div>
        </div>
        <div className="bg-white rounded-2xl flex flex-col items-center w-2xs h-56">
            <div className="flex items-center justify-center w-18 h-18 rounded-2xl mt-6 mb-6">
            <img src="/mdi_car-cog.png" alt="Szczegóły" className="w-15 h-15" />
          </div>
          <div className="text-2 text-muted">Dopasuj szczegóły <br/>wynajmu</div>
        </div>
        <div className="bg-white rounded-2xl flex flex-col items-center w-2xs h-56">
          <div className="flex items-center justify-center w-18 h-18 rounded-2xl mt-6 mb-6">
            <img src="/game-icons_f1-car.png" alt="Samochód" className="w-15 h-15" />
          </div>
          <div className="text-2 text-muted">Wybierz idealny <br/>samochód</div>
        </div>
      </div>
    </div>
  )
}
