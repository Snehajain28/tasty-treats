import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useStateValues } from '../Utils/Provider';
import { useNavigate } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/bs';


function Card({ data }) {

    const [{ favourites }, dispatch] = useStateValues();
    const [click, setClick] = useState(false);

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

    const handleFavourites = () => {
        setClick(!click)

        if (!click) {

            let arr = favourites;

            arr?.push(data)
            dispatch({
                type: "SET_CART_DATA",
                favourites: arr,
            })

        }
        else {

            let i = favourites.indexOf(data)
            favourites.splice(i, 1)
            dispatch({
                type: "SET_CART_DATA",
                favourites: favourites,
            })
        }

        localStorage.setItem("favorites", JSON.stringify(favourites));

    }

    return (
        <div onClick={setData}
            className='h-[12rem] w-[9rem] md:w-[13rem] cursor-pointer rounded-lg p-2 shadow-xl gap-2 flex flex-col relative items-center  '>

            <div className='flex flex-col items-center justify-between w-11/12'>

                <img src={data.img || data?.image}
                    alt='' className='h-[8rem] filter  img '>
                </img>

            </div>
            <div className='flex items-center'>
                <FaStar className='text-yellow-300' />
                <p className='text-[0.8rem]'>{(((data?.nutrients?.FAT) || (data.calories)) % 5).toFixed(2)}</p>
            </div>
            < div className='font-semibold mt-4 relative h-full w-full relative text-[1rem] '>
                <p className=' left-0 bottom-0 z-10  absolute'>
                    {((data.name) || (data.label))?.substring(0, 12)}... </p>
            
            
               <div onClick={handleFavourites} className='absolute z-10 -right-3 top-3 border-[2px]  rounded-full p-2' >
                        {click ? (<BsHeartFill className='text-red-500' />) : (<BsHeart className='' />)}
                    </div>
            
            </div>

        </div>
    )
}

export default Card
