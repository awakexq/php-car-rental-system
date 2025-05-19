import React from 'react';
import { FaRegClock, FaDollarSign, FaHeadset } from 'react-icons/fa';

export default function Choice() {
  return (
    <section className="w-full py-16 px-0 grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
      <div className="flex justify-start items-center">
        <img 
          src="Car-left.png" 
          alt="Samochód" 
          className="w-[625px] max-w-none object-contain drop-shadow-xl"
        />
      </div>

      <div className="flex flex-col items-start justify-center pr-8">
        <h2 className="text-4xl font-bold mb-2">Dlaczego <span className="text-primary">my</span>?</h2>
        <p className="text-xl text-gray-500 mb-8">Oferujemy najlepsze samochody do jazdy od zaraz.</p>
        <div className="grid gap-8 w-full">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 rounded-xl p-3 text-primary text-2xl flex items-center justify-center min-w-[48px] min-h-[48px]">
              <FaRegClock />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Dostarczenie samochodu 24/7</h3>
              <p className="text-gray-500 text-sm">Zarezerwuj auto o dowolnej porze, a zostanie ono do Ciebie <br/> dostarczone bez względu na godzinę.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 rounded-xl p-3 text-primary text-2xl flex items-center justify-center min-w-[48px] min-h-[48px]">
              <FaDollarSign />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Najlepsza cena na rynku</h3>
              <p className="text-gray-500 text-sm">Oferujemy najlepszą cenę na rynku.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 rounded-xl p-3 text-primary text-2xl flex items-center justify-center min-w-[48px] min-h-[48px]">
              <FaHeadset />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Pomoc techniczna 24/7</h3>
              <p className="text-gray-500 text-sm">Masz pytanie? Skontaktuj się z nami klikając opcję <br/>kontaktu w swoim panelu użytkownika.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}