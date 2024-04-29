

import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';
import Loader from './Loader';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function FoodItems() {
  const [loading, setLoading] = useState(false);
  const [pzdata, setpzData] = useState([])
  const [ptdata, setptData] = useState([])
  const [vgdata, setvgData] = useState([])
  const [drdata, setdrData] = useState([])


  const responsive = {
    0: {
      items: 1.5,
    },
    375: {
      items: 2.1,
    },
    768: {
      items: 4,
    },
    1024: {
      items: 5,
      itemsFit: 'contain',
    }
  }

  useEffect((() => {
    setLoading(true)
    async function fecthData(query) {
      await axios.get(`https://api.edamam.com/search?q=${query}&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b`)
        .then((res) => {
          if (query === "pizza") { setpzData(res.data.hits) }
          if (query === "pasta") { setptData(res.data.hits) }
          if (query === "vegetarian") { setvgData(res.data.hits) }
          if (query === "drinks") { setdrData(res.data.hits) }
        }
        )
        .catch((e) => { console.log("err") })
    }

    fecthData("pizza")
    fecthData("pasta")
    fecthData("vegetarian")
    fecthData("drinks")
    setLoading(false);
  }
  ), [])

  const pizzaitems = pzdata.map((d, i) => (
    <Card data={d.recipe} key={i} />
  ))

  const pastaitems = ptdata.map((d, i) => (
    <Card data={d.recipe} key={i} />
  ))

  const vegitems = vgdata.map((d, i) => (
    <Card data={d.recipe} key={i} />
  ))

  const drinksitems = drdata.map((d, i) => (
    <Card data={d.recipe} key={i} />
  ))

  if (loading) {
    return <Loader />
  }

  return (
    <div className=' mt-[3rem] lg:gap-9 gap-4  mx-auto   w-[90vw] flex flex-col'>
      <p className='text-[1.5rem] font-bold'>Curated Collections</p>

      <div className='text-[1.3rem] font-semibold'>
        <p>Pizza's</p>
        <AliceCarousel
          disableButtonsControls
          touchTracking
          responsive={responsive}
          items={pizzaitems} />
      </div>
      <div className='text-[1.3rem] font-semibold'>
        <p>Pasta</p>
        <AliceCarousel
          disableButtonsControls
          touchTracking
          responsive={responsive}
          items={pastaitems} />
      </div>
      <div className='text-[1.3rem] font-semibold'>
        <p>Vegetarian</p>
        <AliceCarousel
          disableButtonsControls
          touchTracking
          responsive={responsive}
          items={vegitems} />
      </div>

      <div className='text-[1.3rem] font-semibold'>
      <p>Drinks</p>
        <AliceCarousel
          disableButtonsControls
          touchTracking
          responsive={responsive}
          items={drinksitems}
        />
      </div>
    </div>

  )
}
