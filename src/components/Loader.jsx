import React from 'react'
import Navbar from './Navbar'

function Loader() {
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <div className='h-[100vh] w-[100vw] mt-[-4rem] flex justify-center items-center'>
        Loading...
      </div>
    </div>
  )
}

export default Loader
