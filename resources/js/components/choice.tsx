import React from 'react';
import { FaRegClock, FaDollarSign, FaHeadset } from 'react-icons/fa';

export default function Choice() {
  return (
    <section className="w-full py-2 px-0 grid grid-cols-1 pb-32 md:grid-cols-2 gap-20 md:gap-28 items-center">
      <div className="flex justify-start items-center">
        <img 
          src="Car-left.png" 
          alt="Samochód" 
          className="w-full max-w-[400px] md:max-w-[750px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center md:pr-8 w-full text-center md:text-left">
        <h2 className="headline-1">Dlaczego <span className="text-primary">my</span>?</h2>
        <p className="text-2 text-gray-500 pb-8">Oferujemy najlepsze samochody do jazdy od zaraz.</p>
        <div className="grid gap-8 w-full">
        
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 text-center sm:text-left">
            <div className="bg-blue-100 rounded-xl p-4 text-primary text-2xl flex items-center justify-center min-w-[48px] min-h-[48px]">
              <FaRegClock />
            </div>
            <div>
              <h3 className="headline-2 pb-3">Dostarczenie samochodu 24/7</h3>
              <p className="text-muted text-4">Zarezerwuj auto o dowolnej porze, a zostanie ono do Ciebie <br/> dostarczone bez względu na godzinę.</p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 text-center sm:text-left">
            <div className="bg-blue-100 rounded-xl p-4 text-primary text-2xl flex items-center justify-center min-w-[48px] min-h-[48px]">
              <FaDollarSign />
            </div>
            <div>
              <h3 className="headline-2 pb-3">Najlepsza cena na rynku</h3>
              <p className="text-muted text-4">Oferujemy najlepszą cenę na rynku.</p>
            </div>
          </div>
        
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 text-center sm:text-left">
            <div className="bg-blue-100 rounded-xl p-4 text-primary text-2xl flex items-center justify-center min-w-[48px] min-h-[48px]">
              <FaHeadset />
            </div>
            <div>
              <h3 className="headline-2 pb-3">Pomoc techniczna 24/7</h3>
              <p className="text-muted text-4">Masz pytanie? Skontaktuj się z nami klikając opcję kontaktu <br/>w swoim panelu użytkownika.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}