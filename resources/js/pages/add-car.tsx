import React from 'react'
import AddCarForm from '../components/add-car-form'
import Navbar from '@/components/navbar'

export default function AddCarPage() {
  return (
    <>
    <div className='pb-10'>
    <Navbar/>
    </div>
    <div className="container mx-auto py-8">
      <AddCarForm />
    </div>
    </>
  )
} 