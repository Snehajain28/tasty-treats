import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => { setCategoryData(res.data.categories) })
      .catch(e => { console.log("") })
  }

  useEffect((() => {
    getData()
  }), [])

  responsive = {
    0:""
  }


  const data = [
    {
      src: cupcake,
      link: "cupcake",
    },
    {
      src: burger,
      link: "burger",
    },
    {
      src: pizza,
      link: "pizza",
    },
    {
      src: spagheti,
      link: "spagheti",
    },
    {
      src: takeout,
      link: "takeout",
    },
    {
      src: tropical,
      link: "tropical",
    },
    {
      src: categoryData[2]?.strCategoryThumb,
      link: categoryData[2]?.strCategory,
    },
    {
      src: categoryData[4]?.strCategoryThumb,
      link: categoryData[4]?.strCategory,
    },
    {
      src: categoryData[5]?.strCategoryThumb,
      link: categoryData[5]?.strCategory,
    },
    {
      src: categoryData[8]?.strCategoryThumb,
      link: categoryData[8]?.strCategory,
    },
    {
      src: categoryData[9]?.strCategoryThumb,
      link: categoryData[9]?.strCategory,
    },
    {
      src: categoryData[11]?.strCategoryThumb,
      link: categoryData[11]?.strCategory,
    },

    {
      src: categoryData[12]?.strCategoryThumb,
      link: categoryData[12]?.strCategory,
    },
    {
      src: categoryData[10]?.strCategoryThumb,
      link: categoryData[10]?.strCategory,
    },
  ]

  const items = [   data.map((d) => (
           <Link className='w-[4rem] inline-block rounded-full  h-[3.8rem] border-[2px] shadow-lg' to={`/${d.link}`}>
              <img alt=''
                className='h-full category w-full object-cover '
                src={d.src} />
            </Link>
          ))
        
        ]

  return (
    <div className='mt-[3.5rem] w-11/12 md:w-9/12  mx-auto'>
      <p className='text-[1.4rem] ml-[1rem] underline pb-3 font-semibold'
      >Category</p>

      <div className='md:mt-[5rem] '>
        <AliceCarousel
        items={items} />
      </div>
    </div>
  )
}
