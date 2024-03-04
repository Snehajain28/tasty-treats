import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'




function FoodItems() {

  const [FoodData, setFoodData] = useState([]);
  const getData = useCallback((async () => {
    await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=6ae5a3d8&app_key=bc165443edb3f302f6d43c640e8a5179&nutrition-type=cooking`)
      .then((res) => { setFoodData(res.data.hints) })
      .catch((e) => { console.log(e) })
  }), [])

  useEffect((() => {
    getData();
  }), [getData])


  return (
    <div className=' mt-[3rem] lg:gap-9 gap-4 mx-auto md:w-[60rem] md:h-[24rem] overflow-y-scroll w-[95vw] justify-center flex flex-wrap'>
      {
        FoodData.map((data, index) => {
          return <Card data={data.food} key={index}></Card>
        })
      }
    </div>
  )
}

export default FoodItems
