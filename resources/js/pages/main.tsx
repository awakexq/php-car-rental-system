import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import React from 'react'
import Steps from '@/components/steps'
import Choice from '@/components/choice'
export default function main() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> 
      <Hero />
      <Steps />
      <Choice />
    </div>
  )
}

