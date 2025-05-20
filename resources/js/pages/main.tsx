import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import React from 'react'
import Steps from '@/components/steps'
import Choice from '@/components/choice'
import Bestsellercarsection from '@/components/bestsellercarsection'
import Footer from '@/components/footer'
export default function main() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> 
      <Hero />
      <Steps />
      <Choice />
      <Bestsellercarsection />
      <Footer />
      <div className="h-8 bg-white"></div>
    </div>
  )
}

