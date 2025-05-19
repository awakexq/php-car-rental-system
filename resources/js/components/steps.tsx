import React from 'react'

export default function Steps() {
  return (
    <div className="text-center pt-15 pb-30">
      <h2 className="headline-1">Jak <span className="text-sky-500">wynająć</span>?</h2>
      <div className="text-muted mb-10 text-2">Wypożycz pojazd w paru krokach</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center px-0">
        <div className="bg-white rounded-2xl flex flex-col items-center w-2xs h-56">
          <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-[#ECF5FF] mt-6 mb-8">
            <img src="/Group.png" alt="Ogłoszenia" />
          </div>
          <div className="text-2 text-muted">Zobacz aktualne <br/>ogłoszenia</div>
        </div>
        <div className="bg-white rounded-2xl flex flex-col items-center w-2xs h-56">
            <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-[#ECF5FF] mt-6 mb-8">
            <img src="/mdi_car-cog.png" alt="Szczegóły" className="w-12 h-12" />
          </div>
          <div className="text-2 text-muted">Dopasuj szczegóły <br/>wynajmu</div>
        </div>
        <div className="bg-white rounded-2xl flex flex-col items-center w-2xs h-56">
          <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-[#ECF5FF] mt-6 mb-8">
            <img src="/game-icons_f1-car.png" alt="Samochód" className="w-12 h-12" />
          </div>
          <div className="text-2 text-muted">Wybierz idealny <br/>samochód</div>
        </div>
      </div>
    </div>
  )
}
