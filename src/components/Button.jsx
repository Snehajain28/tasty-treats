import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'


export default function Button({click}) {
    return (
        <div className=''>
            <div className=' border-[2px]  rounded-full px-2 py-2' >
                {click ? (<BsHeartFill className='text-red-500' />) : (<BsHeart  className=''/>) }
                </div>
        </div>
    )
}
