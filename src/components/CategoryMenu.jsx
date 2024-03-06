import React, { useCallback, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import cupcake from '../assests/categories/icons8-cupcake-emoji-96.png'
import burger from '../assests/categories/icons8-hamburger-96.png'
import pizza from '../assests/categories/icons8-pizza-96.png'
import spagheti from '../assests/categories/icons8-spaghetti-96.png'
import takeout from '../assests/categories/icons8-takeout-box-96.png'
import tropical from '../assests/categories/icons8-tropical-drink-96.png'
import axios from 'axios';

export default function CategoryMenu() {
  const [categoryData, setCategoryData] = useState([]);
  async function getData() {

    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    setCategoryData(res.data.categories)
  }

  useEffect((() => {
    getData()
  }), [])

const responsive =    {
  0: {
      items: 3,
  },
  1024: {
      items: 10,
      itemsFit: 'contain',
  }
}

  const items = [
    <img src={cupcake} alt=''
    className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'>
  </img>,
  <img src={burger} alt=''
    className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover shadow-lg'>
  </img>,
  <img src={pizza} alt=''
    className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover shadow-lg'>
  </img>,
  <img src={spagheti} alt=''
    className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover shadow-lg'>
  </img>,
  <img src={takeout} alt=''
    className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover shadow-lg'>
  </img>,
  <img src={tropical} alt=''
    className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover shadow-lg'>
  </img>,
    <img  className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'
    src={categoryData[2]?.strCategoryThumb
      }/>,
      <img   className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'
      src={categoryData[4]?.strCategoryThumb
      }/>,
      <img  className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'
      src={categoryData[5]?.strCategoryThumb
      }/>,
      <img  className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'
      src={categoryData[8]?.strCategoryThumb
      }/>,
      <img  className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'
      src={categoryData[9]?.strCategoryThumb
      }/>,
      <img  className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'
      src={categoryData[10]?.strCategoryThumb
      }/>,
      <img  className='rounded-full category h-[3.8rem] w-[4rem] mx-3 object-cover border-[2px] shadow-lg'
      src={categoryData[11]?.strCategoryThumb
      }/>,
      <img  className='rounded-full category w-[4rem] mx-3 object-cover h-[3.8rem] border-[2px] shadow-lg'
      src={categoryData[12]?.strCategoryThumb
      }/>,
  ]

  return (
    <div className='mt-[2rem] w-11/12 mx-auto'>
      <p className='text-[1.4rem] ml-[1rem] underline pb-3 font-semibold'
      >Category</p>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        touchMoveDefaultEvents
        responsive={responsive}
        />
      
    </div>
  )
}
