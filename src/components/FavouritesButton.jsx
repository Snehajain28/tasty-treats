import React, { useState } from 'react'
import { useStateValues } from '../Utils/Provider';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export default function FavouritesButton({data,sty}) {

    const [click, setClick] = useState(false);
    const [{ favourites }, dispatch] = useStateValues();

    const handleFavourites = () => {

        setClick(!click)
        if (!click) {

            let arr = favourites;

            arr?.push(data)
            dispatch({
                type: "SET_FAVOURITES",
                favourites: arr,
            })

        }
        else {

            let i = favourites.indexOf(data)
            favourites.splice(i, 1)
            dispatch({
                type: "SET_FAVOURITES",
                favourites: favourites,
            })
        }

        localStorage.setItem("favorites", JSON.stringify(favourites));

    }
    return (
        <div className='relative w-full h-full'>
            <div onClick={handleFavourites} className={` ${sty} top-0 absolute z-10   border-[2px]  rounded-full p-2`} >
                {click ? (<BsHeartFill className='text-red-500' />) : (<BsHeart className='' />)}
            </div>
        </div>
    )
}
