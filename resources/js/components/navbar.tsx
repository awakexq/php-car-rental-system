import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className='flex justify-center items-center h-16 w-full px-4 bg-white pt-12'>
        <div className='flex justify-between items-center w-full max-w-6xl'>
            <h1 className='text-3 text-primary font-bold md:ml-0 ml-auto mr-auto md:mr-0'>RENT<span className='text-black'>CAR</span></h1>
            
        
            <button 
                className='md:hidden'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className='hidden md:flex items-center gap-4 lg:gap-18'>
                <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Aktualna oferta</h1>
                <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Jak wynająć?</h1>
                <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Promocje</h1>
            </div>
            
            <div className='hidden md:flex items-center gap-4'>
                <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Zarejestruj się</h1>
                <button className='bg-primary text-white px-4 py-1 rounded-md hover:bg-primary/60 hover:cursor-pointer transition-colors'>
                    <h1 className='text-3'>Logowanie</h1>
                </button>
            </div>
        </div>
 
        {isMenuOpen && (
            <div className='absolute top-20 left-0 w-full bg-white shadow-lg md:hidden'>
                <div className='flex flex-col p-4 space-y-4'>
                    <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Aktualna oferta</h1>
                    <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Jak wynająć?</h1>
                    <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Promocje</h1>
                    <h1 className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Zarejestruj się</h1>
                    <button className='bg-primary text-white px-4 py-1 rounded-md hover:bg-primary/60 hover:cursor-pointer transition-colors w-full'>
                        <h1 className='text-3'>Logowanie</h1>
                    </button>
                </div>
            </div>
        )}
    </section>
  )
}
