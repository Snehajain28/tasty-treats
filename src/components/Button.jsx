import React from 'react'
import { BsHeart } from 'react-icons/bs'


export default function Button({click}) {
    return (
        <div className=''>
            <div className=' border-[2px]  rounded-full px-2 py-2' >
                {click ? (<BsHeart className='hover:bg-red-400 hover:text-white' />) : (<BsHeart  className='bg-red-500'/>) }
                </div>
        </div>
    )
}
