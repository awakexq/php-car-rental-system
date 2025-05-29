import React from 'react'

export default function Footer() {
  return (
    <footer className="w-[85%] mx-auto bg-[#001630] text-white pt-20 text-4 font-normal rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-6 md:px-10">

        <div className="mb-10 md:mb-0">
          <div className="text-4 font-semibold mb-5">RENTCAR</div>
          <div className="flex items-center mb-2 text-4">
            Częstochowa ul.Michałowskiego
          </div>
          <div className="flex items-center mb-2 text-4">
            +48 600 253 222
          </div>
          <div className="flex items-center text-4">
            rentcar@gmail.com
          </div>
        </div>

        <div className="mb-10 md:mb-0">
          <div className="font-semibold text-4 mb-5">Oferta</div>
          <div className="mb-2 cursor-pointer text-4 hover:text-primary">
            <a href="/currentoffer">Aktualne auta</a>
          </div>
          <div className="mb-2 cursor-pointer text-4 hover:text-primary">
            <a href="/account">Konto na stronie</a>
          </div>
        </div>

        <div className="mb-10 md:mb-0">
          <div className="font-semibold text-4 mb-5">Informacje</div>
          <div className="mb-2 cursor-pointer text-4 hover:text-primary">
            <a href="/#jak-wynajac">Jak wynająć?</a>
          </div>
          <div className="mb-2 cursor-pointer text-4 hover:text-primary">
            <a href="/terms">Regulamin</a>
          </div>
          <div className="mb-2 cursor-pointer text-4 hover:text-primary">
            <a href="/terms">Warunki wynajmu</a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-4 mb-5">Śledź nas na social mediach</div>
          <div className="flex gap-4">
            <span className="text-4 cursor-pointer hover:text-primary">Facebook</span>
            <span className="text-4 cursor-pointer hover:text-primary">Instagram</span>
            <span className="text-4 cursor-pointer hover:text-primary">Youtube</span>
          </div>
        </div>
      </div>
      <div className="border-t border-muted mt-12 pb-4"></div>
      <div className="text-left text-4 py-4 px-6 md:px-10 max-w-7xl mx-auto pb-10">
        © 2025 Rentcar. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  )
}
