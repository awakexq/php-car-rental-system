import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import React, { useEffect } from 'react'
import Steps from '@/components/steps'
import Choice from '@/components/choice'
import Bestsellercarsection from '@/components/bestsellercarsection'
import Footer from '@/components/footer'
import { Car } from '@/types/Car'

export default function main(props: {cars: Car[]}) {
  useEffect(() => {
    if (window.location.hash === '#jak-wynajac') {
      setTimeout(() => {
        const section = document.getElementById('jak-wynajac');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar /> 
      <Hero />
      <Steps />
      <Choice />
      <Bestsellercarsection cars={props.cars} />
      <Footer />
      <div className="h-8 bg-white"></div>
    </div>
  )
}

