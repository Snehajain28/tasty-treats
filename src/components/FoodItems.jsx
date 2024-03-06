import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'




function FoodItems() {

  const [FoodData, setFoodData] = useState([]);
  const [SpecialFoodData, setSpcialFoodData] = useState([]);

  const getData = useCallback((async () => {
    await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_FOOD_ID}&app_key=${process.env.REACT_APP_FOOD_KEY}`)
      .then((res) => { setFoodData(res.data.hints) })
      .catch((e) => { console.log(e) })
    let arr = [];
    for (let i = 0; i < 5; i++) {
      await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => { arr.push(res.data.meals[0]) })
        .catch((e) => { console.log(e) })
    }
    setSpcialFoodData(arr);

  }), [])

  useEffect((() => {
    getData();

  }), [getData])


  return (
    <div className=' mt-[3rem] lg:gap-9 gap-4 mx-auto md:w-[60rem] md:h-[24rem] overflow-y-scroll w-[95vw] justify-center flex flex-wrap'>
     <p className='flex pb-3 font-semibold text-[1.3rem]'>Today's Special</p>
      <div className='flex  gap-10 pb-3 overflow-x-scroll'>
        {
          SpecialFoodData.map((data) => (
        <div className=''>
            <img  className=' object-cover w-[15rem] rounded-md h-[10rem] '
          src={data.strMealThumb}/>
          <p class>{data.strMeal}</p>
          </div>
          ))
        }
      </div>

      {
        FoodData.map((data, index) => {
          return <Card data={data.food} key={index}></Card>
        })
      }
    </div>
  )
}

export default FoodItems
