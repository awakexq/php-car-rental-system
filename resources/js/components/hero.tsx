import React from 'react'

export default function hero() {
  return (
    <section className='w-full mt-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto h-150 items-center">
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
                <h1 className='text-4xl sm:text-3xl md:text-4xl leading-tight headline-1'>
                    Wynajmij
                    idealny <span className='text-primary'>Samochód </span>
                    <br/>
                    Szybko, Wygodnie i z Dostawą!
                </h1>
                <p className='text-sm sm:text-base md:text-lg text-muted mt-2 sm:mt-3 md:mt-4 max-w-[90%] md:max-w-full'>
                    Wynajmij auto z dostawą do 500 km! Działamy w Częstochowie dostarczając samochód pod wskazany adres. 
                    Nowoczesna flota, łatwa rezerwacja online i pełen komfort jazdy. Zarezerwuj teraz i ruszaj w drogę!
                </p>
                <button className="mt-6 px-6 py-3 bg-primary hover:cursor-pointer text-white rounded-md font-semibold text-base hover:bg-primary/60 transition-colors">
                    Zobacz ofertę
                </button>
            </div>
            <div className="flex justify-center md:justify-end">
                <img
                    src="/Car-right.png"
                    alt="auto"
                    className="w-full h-full object-cover max-w-[1200px] scale-175"
                />
            </div>
        </div>
    </section>
  )
}
