import React, { useCallback, useState } from 'react'
import { BsDot, BsPatchCheck } from "react-icons/bs"
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { useStateValues } from '../Utils/Provider'
import { useEffect } from 'react'
import axios from 'axios'


const Description = () => {

  const [{ foodData, abc }, dispatch] = useStateValues();
  const [recommended, setRecommeded] = useState([]);
  
  const query = foodData?.dishType?.[0] || foodData?.category;

  const getData = useCallback((async () => {
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b`)

    setRecommeded(res.data.hits)
  }), [query])

  useEffect((() => {
    getData();
  }), [getData])

  if (abc) {
    console.log(dispatch);
  }

  return (
    <div className='w-full'>
      <Navbar />
      <div className='mt-[5.6rem] h-[11rem] w-full '>
        <img src={foodData?.image} alt='' className='h-full rounded-lg w-10/12 lg:w-[35rem] lg:h-[15rem] mx-auto' />
        <p className='font-semibold text-xl py-7 ml-6 '>{foodData.label}</p>
      </div>
      <div className='w-full px-4 lg:px-20 mt-[5rem] '>
        <div className='flex gap-10 lg:absolute right-2 top-[6rem] items-center justify-center px-4'>

          <div className='flex flex-col justify-between'>
            <span className=' text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>{foodData?.calories?.toFixed(2)} </span>
            <p className=' text-[12px] md:text-md'>CALORIES</p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className=' text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {foodData?.totalTime}
            </span>
            <p className=' text-[12px] md:text-md'>
              TOTAL TIME
            </p>
          </div>

          <div className='flex flex-col justify-center'>
            <span className=' text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {foodData?.yield}
            </span>
            <p className=' text-[12px] md:text-md'>SERVINGS</p>
          </div>


        </div>

        <div className='w-full flex flex-col md:flex-row gap-8 py-10 pxx-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Ingredients</p>

              {
                foodData?.ingredients?.map((ingredient, index) => {
                  return (
                    <p key={index} className=' flex flex-col py-4  gap-5 border-b-[3px]'>
                      <div className='shadow-lg  border-[1px]  mx-auto'>
                        <div className='w-[10rem]'>
                          <img src={ingredient.image} alt='' className='h-[7rem] py-2 mx-auto rounded-full w-[6.4rem]' />
                          <div className='py-4 text-center text-gray-700'>{ingredient.food}</div>
                        </div>
                        <div className='border-[2px]  border-gray-900 text-center rounded-full ml-2 '>{ingredient.foodCategory}</div>
                      </div>
                      <div className='flex gap-1 items-center w-full'>
                        <BsDot className='text-green-800 ' size={50} /> {ingredient.text}
                      </div>
                    </p>
                  )
                })
              }
            </div>

            <div className='flex flex-col gap-3 mt-20'>
              <p className='text-green-700 text-2xl underline'>Health Labels</p>

              <div className='flex flex-wrap gap-4'>
                {
                  foodData?.healthLabels?.map((item, index) => (
                    <p className=' flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full ' key={index}>
                      <BsPatchCheck color='green' /> {item}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className='w-[95vw]  md:w-2/4 2xl:pl-10 mt-10 md:mt-0'>
            {
              recommended?.length > 0 && (
                <>
                  <p className=' text-2xl'>Also Try This</p>

                  <div className='flex flex-wrap pt-10 gap-2 '>
                    {

                      recommended?.map((data, index) => (
                        <Card data={data.recipe} key={index} />
                      ))
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description