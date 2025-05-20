import React from 'react'

export default function BestsellerCar() {
  return (
    <div className="bg-white rounded-2xl border-1 text-muted p-8 max-w-[300px] flex flex-col">
      <img src="jaguar.png" alt="Jaguar XE L P250" className=" mb-6" />
      <div className="headline-2 mb-2">Jaguar XE L P250</div>
      <div className="flex items-center mb-4">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="gold" className="mr-1 align-middle relative -top-[2px]"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
        <span className="text-4-1 font-league-spartan pr-1 flex items-center">4.8</span>
        <span className="text-muted text-4 flex items-center">(543 ocen)</span>
      </div>
      <div className="flex justify-between w-full mb-2">
        <div className="flex items-center gap-2">
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg> */}
          <span className="text-4 text-muted">4 Pasażerów</span>
        </div>
        <div className="flex justify-between gap-2">
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="3"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/></svg> */}
          <span className="text-4 text-muted">Sedan</span>
        </div>
      </div>
      <div className="flex justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2"><rect x="3" y="11" width="18" height="7" rx="2"/><rect x="7" y="7" width="10" height="4" rx="1"/></svg> */}
          <span className="text-4 text-muted">4 Drzwiowe</span>
        </div>
        <div className="flex justify-between gap-2 pr-2.5">
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/></svg> */}
          <span className="text-4 text-muted">2017</span>
        </div>
      </div>
      <hr className="w-full border-t border-gray-200 py-3" />
      <div className="flex justify-between w-full items-center mb-6">
        <span className="text-3 font-medium text-muted">Cena</span>
        <span className="headline-2 font-semibold">300zł <span className="text-[#9C9C9C] text-4 font-normal">/dzień</span></span>
      </div>
      <button className="bg-primary hover:bg-primary/70 hover:cursor-pointer text-white rounded-xl py-3 w-full text-3 flex items-center justify-center gap-1 transition">
        Wypożycz
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </div>
  )
}
