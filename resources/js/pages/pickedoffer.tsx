import { Car } from '@/types/Car'
import React, { useState } from 'react'
import Navbar from '../components/navbar'

export default function pickedoffer(props: {car: Car}) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar/>
          </div>
          <div className="container mx-auto px-4 py-8 mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">{props.car.marka} {props.car.model}</h1>
                <div className="flex items-center justify-center md:justify-end bg-gray-50 px-4 py-2 rounded-lg mx-auto md:mx-0">
                  <span className="text-yellow-400 text-xl mr-1">★</span>
                  <span className="font-semibold text-lg">{props.car.ocena}</span>
                  <span className="text-muted text-sm ml-1">({props.car.ilosc_ocen} ocen)</span>
                </div>
              </div>
          
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative w-full aspect-video mb-4">
                    <img 
                      src={props.car.zdjecia?.[selectedImage] || 'https://via.placeholder.com/800x400'} 
                      alt={props.car.marka + ' ' + props.car.model} 
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex gap-4 pb-4 scrollbar-hide w-full justify-center lg:justify-start">
                    {props.car.zdjecia?.map((zdjecie: string, index: number) => (
                      <img
                        key={index}
                        src={zdjecie}
                        alt={`${props.car.marka} ${props.car.model} - zdjęcie ${index + 1}`}
                        className={`w-24 h-24 object-cover rounded-md cursor-pointer transition flex-shrink-0 ${
                          selectedImage === index ? 'ring-2 ring-primary shadow-lg' : 'hover:opacity-80'
                        }`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 mb-4 text-center lg:text-left">
                    <h2 className="text-lg font-medium text-gray-600 mb-2">Cena za dzień</h2>
                    <p className="text-4xl font-bold text-primary">{props.car.cena_za_dzien} zł</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center lg:text-left">
                      <h2 className="text-3 text-muted mb-1">Rocznik</h2>
                      <p className="text-lg font-medium">{props.car.rocznik}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center lg:text-left">
                      <h2 className="text-3 text-muted mb-1">Kolor</h2>
                      <p className="text-lg font-medium">{props.car.kolor}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center lg:text-left">
                      <h2 className="text-3 text-muted mb-1">Rodzaj</h2>
                      <p className="text-lg font-medium">{props.car.rodzaj}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center lg:text-left">
                      <h2 className="text-3 text-muted mb-1">Moc</h2>
                      <p className="text-lg font-medium">{props.car.ilosc_koni} KM</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center lg:text-left">
                      <h2 className="text-3 text-muted mb-1">Typ</h2>
                      <p className="text-lg font-medium">{props.car.typ}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center lg:text-left">
                      <h2 className="text-3 text-muted mb-1">Miejsca</h2>
                      <p className="text-lg font-medium">{props.car.drzwi} drzwi, {props.car.pasazerowie} osób</p>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <a 
                      href="/login" 
                      className="bg-primary hover:bg-primary/60 text-white rounded-lg px-8 py-4 font-semibold  text-lg inline-block  w-full sm:w-auto"
                    >
                      Wypożycz teraz →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
