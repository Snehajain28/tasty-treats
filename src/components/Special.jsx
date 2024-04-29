import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Special() {
    const [SpecialFoodData, setSpcialFoodData] = useState([]);


    const fecthData = useCallback((async () => {

        let arr = [];
        for (let i = 0; i < 5; i++) {
            await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
                .then((res) => { arr.push(res.data.meals[0]) })
                .catch((e) => { console.log("") })
        }
        setSpcialFoodData(arr);
    }), [])

    useEffect((() => {
        fecthData();
    }), [fecthData])


    if (SpecialFoodData.length === 0) {
        return (
            <div className=' w-[95vw] gap-10 flex justify-center md:gap-10  flex-wrap '>
                {
                    [1, 1, 1, 1, 1].map(( d,index) => (

                        <div key={index} className='relative  w-[16rem] bg-gray-100 animate-fade h-[14rem] mt-2'>

                            <div className=' w-full animate-pulse h-full object-cover  '></div>
                            <div className='flex mt-2'>
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                            </div>
                            <div className=''>
                                <p className='font-semibold mb-3'></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
    return (
        <div className='mt-[1rem] h-content w-[90vw] mx-auto'>
            <p className='pb-3 font-bold  text-[1.3rem]'>Delicious Food</p>
            <div className=' w-[90vw] h-content gap-10 flex justify-center md:gap-15 flex-wrap '>
                {
                    SpecialFoodData.map((data, index) => (

                        <Link to={`/food/${data.idMeal}`} key={index} className=' w-[16rem] m-5 h-[12rem] '>

                            <img className=' w-[14rem] h-[10rem] object-cover  '
                                src={data.strMealThumb} alt='' />
                            <div className='flex mt-2'>
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                                <BsStarFill className='text-yellow-400' />
                            </div>
                            <div className=''>
                                <p className='font-semibold  mt-2 mb-5'>{data.strMeal}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}
