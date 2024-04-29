import React from 'react'
import {  BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className=" bg-gray-200 mx-auto  md:text-md text-sm py-4 text-center  mt-20">

      <h1 className=" text-lg">Connect with us:</h1>
      <div className="flex flex-wrap gap-5 justify-center my-[1rem] w-[90vw] mx-auto">
        <div className="hover:text-yellow-400   cursor-pointer"><a className='flex items-center gap-2 text-[1rem]' href="https://www.linkedin.com/in/sneha-jain-65b87a228/" target='_blank' rel="noreferrer" > <BsLinkedin /> LinkedIn</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a className='flex items-center gap-2 text-[1rem]'  href="https://github.com/Snehajain28" target='_blank' rel="noreferrer" > <BsGithub /> Github</a></div>
        <div className="hover:text-yellow-400 cursor-pointer"><a className='flex items-center gap-2 text-[1rem]'  href="https://www.instagram.com/_._sneha__jain_._/" target='_blank' rel="noreferrer" > <BsInstagram /> Instagram</a></div>
      </div>
      <h2 className="mt-4">Developed using <span className="text-yellow-600">React</span> and <span className="text-yellow-600">Tailwind CSS</span></h2>
    </div>
  )
}

export default Footer