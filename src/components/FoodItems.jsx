import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function FoodItems() {

  const [fastFood, setFastFood] = useState([]);
  //const [pasta, setPasta] = useState([]);

  const [SpecialFoodData, setSpcialFoodData] = useState([]);


  const fecthData = useCallback((async () => {

    await axios.get(`https://api.edamam.com/search?q=pizza&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b`)
      .then((res) => { setFastFood(res.data.hits); })
      .catch((e) => { console.log("") })

  }), [])

  useEffect((() => {
    fecthData();
  }), [fecthData])

  const getData = useCallback((async () => {
    await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_FOOD_ID}&app_key=${process.env.REACT_APP_FOOD_KEY}`)
      .then((res) => { console.log("") })
      .catch((e) => { console.log("") })
    let arr = [];
    for (let i = 0; i < 5; i++) {
      await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => { arr.push(res.data.meals[0]) })
        .catch((e) => { console.log("") })
    }
    setSpcialFoodData(arr);

  }), [])

  useEffect((() => {
    getData();

  }), [getData])


  const responsive = {
    0: {
      items: 3,
    },
    760: {
      items: 5,
    },
    1024: {
      items: 10,
      itemsFit: 'contain',
    }
  }

  let items = [
    fastFood.map((data, index) => {
      return <Card data={data.recipe} key={index}></Card>
    })
  ]
  items = items[0];

  return (
    <div className=' mt-[3rem] lg:gap-9 gap-4  mx-auto   w-[90vw] flex flex-col'>
      <p className='pb-3 font-semibold  text-center text-[1.3rem]'>Today's Special</p>
      <div className=' w-full flex justify-center md:gap-10  flex-wrap gap-3'>
        {
          SpecialFoodData.map((data, index) => (
            <div key={index} className='relative w-[9.1rem] h-[10rem] mt-2'>
              <img className=' w-full h-full object-cover  '
                src={data.strMealThumb} alt='' />
              <div className=''>
                <p className='absolute bottom-0 z-10 text-white fomt-semibold'>{data.strMeal}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='md:mt-[2rem] flex gap-5  w-full'>
        <p>Pizza ' s</p>
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          touchMoveDefaultEvents
          responsive={responsive}
        />
      </div>

    </div>
  )
}

export default FoodItems
