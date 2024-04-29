import React, { useCallback, useState } from 'react'
import { BsDot, BsPatchCheck } from "react-icons/bs"
import Card from '../components/Card'
import { useStateValues } from '../Utils/Provider'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FavouritesButton from '../components/FavouritesButton'
import Loader from '../components/Loader'


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
  if (foodData.length === 0) {
    return <Loader />
  }
  return (
    <div className='w-[100vw]'>
      <div className=' mt-4 h-full w-11/12 mx-auto '>
        <div className='md:flex flex-row-reverse gap-10 lg:w-[80vw] mx-auto items-center'>
          <div className='w-[95vw]'>
            <p className='font-semibold text-[1.6rem]   ml-3 '>{foodData.label}</p>
            <div className='flex flex-wrap'>
              <div className='mt-[1rem] px-2 ml-[1rem] border rounded-full  text-center border-gray-400' >
                <p className='italic text-gray-500'>{foodData.cuisineType[0]}</p>
              </div>
              <div className='mt-[1rem] px-2 ml-[1rem] border rounded-full  text-center border-gray-400' >
                <p className='italic text-gray-500'>{foodData.dishType[0]}</p>
              </div>
              <div className='mt-[1rem] px-2 ml-[1rem] border rounded-full  text-center border-gray-400' >
                <p className='italic text-gray-500'>{foodData.mealType[0]}</p>
              </div>
            </div>
            <FavouritesButton sty={"left-[12rem] -top-[5rem]"}/>
          </div>
          <div className='h-[15rem] mt-[0.8rem] sm:w-[50vw] lg:w-[30rem] w-full'>
            <img src={foodData?.image} alt='' className='h-full w-full rounded-lg object-cover ' />
          </div>
          
        </div>

        <div className='flex w-full flex-wrap'>
          {foodData.tags ? <p>Tags</p> : ""}
          {foodData?.tags?.map((tag, index) => (
            <Link to={`/${tag}`} key={index}
              className='mt-[1rem] px-2 ml-[2rem] border rounded-full  text-center border-gray-400' >
              <p className='italic text-gray-500'>{tag}</p>
            </Link>
          ))
          }

        </div>
     
      </div>
      <div className='w-full  px-4 lg:px-20 mt-[3rem] '>

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

        <div className='w-full  flex flex-col md:flex-row gap-8 py-10 px-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-[60vw] lg:w-[70vw]  md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Ingredients</p>

              {
                foodData?.ingredients?.map((ingredient, index) => {
                  return (
                    <div key={index} className='   py-4 border-b-[1px] pb-4   border-b-[3px]'>
                      <div className=' flex gap-2 items-center'>
                        <BsDot size={25} className='-mt-[1rem]' />
                        <div className='w-[3rem] h-[3rem] '>
                          <img src={ingredient.image} alt='' className=' mx-auto rounded-full ' />
                        </div>
                        <div className='w-full ml-[0.5rem]  flex flex-wap -mt-[1rem]'>
                          {ingredient.text}
                        </div>
                      </div>
                    </div>
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
          <div className='w-[100vw]  md:w-[40vw] lg:w-[30vw] 2xl:pl-10 mt-10 md:mt-0'>
            {
              recommended?.length > 0 && (
                <>
                  <p className=' text-2xl'>Also Try This</p>

                  <div className='flex flex-wrap justify-center gap-5 w-full pt-10  '>
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