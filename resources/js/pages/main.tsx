import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import React from 'react'
import Steps from '@/components/steps'
import { Slider } from '@/components/slider'
export default function main() {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Steps />
      <Slider/>
    </div>
  )
}
