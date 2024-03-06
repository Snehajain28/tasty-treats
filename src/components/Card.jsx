import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useStateValues } from '../Utils/Provider';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Card({ data, text }) {

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
        <div
            className='h-[18rem] w-[9rem] md:w-[13rem] cursor-pointer rounded-lg p-2 shadow-xl gap-2 flex flex-col  items-center  '>

            <div className='flex items-center justify-between w-11/12'>

                <img src={data.img || data?.image}
                    alt='' className='h-[4rem] rounded-full img '>
                </img>
                <div className='text-[1rem]'>₹{data.price || parseInt(data.totalWeight) || data.nutrients.ENERC_KCAL}</div>

            </div>
            <div className='font-semibold flex justify-end text-[1rem] text-center h-9'>
                <p>{((data.name) || (data.label))?.substring(0, 20)}</p>
            </div>


            <div className='flex items-center justify-end gap-[1rem] w-11/12'>
                <div className='flex items-center'>
                    <FaStar className='text-yellow-300' />
                    <p className='text-[0.8rem]'>{(((data?.nutrients?.FAT) || (data.calories)) % 5).toFixed(2)}</p>
                </div>

                <div className=' relative' onClick={handleFavourites}>
                    <Button click={click} />
                </div>
            </div>
            <button onClick={setData} className='bg-orange-500  lg:w-10/12 font-semibold px-4 p-2 rounded-lg text-white'>
                {text || "Let's Make it"}
            </button>
        </div>
    )
}

export default Card
