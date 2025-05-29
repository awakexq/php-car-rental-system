import React from 'react'
import Login from '@/components/login'
import Navbar from '@/components/navbar'
export default function loginpage() {
  return (
    <>
    <div className='flex flex-col h-screen w-screen'>
        <div className='pb-14'>
    <Navbar/>
    </div>
    
    <Login/>
    </div>
    </>
  )
}
