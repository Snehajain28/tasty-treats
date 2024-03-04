import React from 'react'
import cupcake from '../assests/categories/icons8-cupcake-emoji-96.png'
import burger from '../assests/categories/icons8-hamburger-96.png'
import pizza from '../assests/categories/icons8-pizza-96.png'
import spagheti from '../assests/categories/icons8-spaghetti-96.png'
import takeout from '../assests/categories/icons8-takeout-box-96.png'
import tropical from '../assests/categories/icons8-tropical-drink-96.png'

export default function CategoryMenu() {
  return (
    <div>
      <div className='flex flex-wrap lg:gap-7 gap-3 justify-center mx-auto md:hidden w-[90vw] mt-[2rem]'>
        <img src={cupcake} alt=''
          className='rounded-full category h-[3.8rem] border-[2px] shadow-lg'>
        </img>
        <img src={burger} alt=''
          className='rounded-full category h-[3.8rem] shadow-lg'>
        </img><img src={pizza} alt=''
          className='rounded-full category h-[3.8rem] shadow-lg'>
        </img><img src={spagheti} alt=''
          className='rounded-full category h-[3.8rem] shadow-lg'>
        </img><img src={takeout} alt=''
          className='rounded-full category h-[3.8rem] shadow-lg'>
        </img><img src={tropical} alt=''
          className='rounded-full category h-[3.8rem] shadow-lg'>
        </img>
      </div>
    </div>
  )
}
