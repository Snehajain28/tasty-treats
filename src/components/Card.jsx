import React from 'react'
import { FaStar } from "react-icons/fa";
import { useStateValues } from '../Utils/Provider';
import { useNavigate } from 'react-router-dom';
import FavouritesButton from './FavouritesButton';



function Card({ data }) {

    const [{abc}, dispatch] = useStateValues();
    if(abc)
    {
        
    }

    const navigate = useNavigate();

    const setData = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
        dispatch({
            type: "SET_FOOD_DATA",
            foodData: data,
        })

        navigate('/description')
    }

   

    return (
        <div
            className='h-[12rem] w-[8.7rem] md:w-[13rem] cursor-pointer rounded-lg p-2 shadow-xl gap-2 flex flex-col relative items-center  '>
            <div onClick={setData}
                className='flex flex-col items-center justify-between w-11/12'>
                <img src={data.img || data?.image}
                    alt='' className='h-[8rem] filter  img '>
                </img>

            </div>
            <div onClick={setData}
                className='flex items-center'>
                <FaStar className='text-yellow-300' />
                <p className='text-[0.8rem]'>{(((data?.nutrients?.FAT) || (data.calories)) % 5).toFixed(2)}</p>
            </div>
            < div onClick={setData}
                className='font-semibold mt-4 relative h-full w-full relative text-[1rem] '>
                <p className=' left-0 bottom-0 z-10  absolute'>
                    {((data.name) || (data.label))?.substring(0, 12)}... </p>


            </div>
           <div>
            <FavouritesButton sty={"left-10"}/>
           </div>
        </div>
    )
}

export default Card
