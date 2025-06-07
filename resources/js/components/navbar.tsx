import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import React, { useState } from 'react'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = () => {
    if (window.location.pathname === '/') {
      const section = document.getElementById('jak-wynajac');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#jak-wynajac';
    }
  };
const user = usePage<SharedData>().props.auth.user;  
  return (
    <section className='flex justify-center items-center h-16 w-full px-4 bg-white pt-10'>
        <div className='flex justify-between items-center w-full max-w-6xl'>
            <a href="/" className='text-3 text-primary font-bold md:ml-0 ml-auto mr-auto md:mr-0'>RENT<span className='text-black'>CAR</span></a>
            
        
            <button 
                className='md:hidden'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className='hidden md:flex items-center gap-4 lg:gap-18'>
                <a href="/currentoffer" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Aktualna oferta</a>
                <button onClick={handleScrollToSection} className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Jak wynająć?</button>
                <a href="/terms" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Warunki wynajmu</a>
            </div>
            
            <div className='hidden md:flex items-center gap-4'>
                {user ? (
                    <>
                    <a href="/account" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>
                        <h1 className='text-3'>{user.email}</h1>
                    </a>
                    <Link 
                        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition-colors hover:cursor-pointer" 
                        method="post" 
                        href={route('logout')} 
                        as="button"
                    >
                        <span className="text-3">Wyloguj się</span>
                    </Link>
                    </>
                ) : (
                    <> 
                    <a href="/register" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Zarejestruj się</a>
                    <a href="/login" className='bg-primary text-white px-4 py-1 rounded-md hover:bg-primary/60 hover:cursor-pointer transition-colors'>
                        <h1 className='text-3'>Logowanie</h1>
                    </a>
                    </>
                )}
            </div>
        </div>
 
        {isMenuOpen && (
            <div className='absolute top-20 left-0 w-full bg-white shadow-lg md:hidden'>
                <div className='flex flex-col p-4 space-y-4'>
                    <a href="/currentoffer" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Aktualna oferta</a>
                    <button onClick={handleScrollToSection} className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer text-left'>Jak wynająć?</button>
                    <a href="/terms" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Warunki wynajmu</a>    
{user &&<>
                    <a href="/account" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>
                        <h1 className='text-3'>{user.email}</h1>
                    </a>
                    <Link 
                        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition-colors hover:cursor-pointer w-full text-center" 
                        method="post" 
                        href={route('logout')} 
                        as="button"
                    >
                        <span className="text-3">Wyloguj się</span>
                    </Link>
                    </>}
{!user &&<>
                    <a href="/register" className='text-3 text-black hover:text-primary relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer'>Zarejestruj się</a>
                    <a href="/login" className='bg-primary text-white px-4 py-1 rounded-md hover:bg-primary/60 hover:cursor-pointer transition-colors w-full'>
                        <h1 className='text-3'>Logowanie</h1>
                    </a>
                    </>}
                </div>
            </div>
        )}
    </section>
  )
}
