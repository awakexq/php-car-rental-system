import React from 'react'
import Register from '../components/register'
import Navbar from '../components/navbar'
export default function registerpage() {
  return (
    <>
    <div className='flex flex-col h-screen w-screen'>
        <div className='pb-14'>
    <Navbar/>
    </div>
    
    <Register/>
    </div>
    </>
  )
}
