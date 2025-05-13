import React from 'react'

export default function hero() {
  return (
    <section className='h-screen w-full'>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 mx-auto h-150">
            <div className="flex flex-col items-start justify-center flex-1">
                <h1 className='text-4xl font-bold'>
                    Wynajmij Swój Idealny <span className='text-primary'>Samochód </span>
                    <br />
                    Szybko, Wygodnie i z Dostawą!
                </h1>
                <p className='text-2 text-muted mt-4'>
                    Wynajmij auto z dostawą do 500 km! Działamy w Częstochowie dostarczając samochód pod wskazany adres. 
                    Nowoczesna flota, łatwa rezerwacja online i pełen komfort jazdy. Zarezerwuj teraz i ruszaj w drogę!
                </p>
            </div>
            <div className="flex-1 flex justify-end mt-8 md:mt-0">
                <img
                    src="/Car-right.png"
                    alt="auto"
                    className=""
                />
            </div>
        </div>
    </section>
  )
}
