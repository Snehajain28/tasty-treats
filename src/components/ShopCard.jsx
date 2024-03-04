import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useStateValues } from '../Utils/Provider';

function ShopCard({ data }) {

    const [{ abe, cartData }, dispatch] = useStateValues();
    const [click, setClick] = useState(false);

    if (abe) {
        console.log(abe);
    }


    const handleCart = () => {
        setClick(!click)

        if (!click) {

            let arr = cartData;

            arr?.push(data)
            dispatch({
                type: "SET_CART_DATA",
                cartData: arr,
            })

        }
        else {

            let i = cartData.indexOf(data)
            cartData.splice(i, 1)

            dispatch({
                type: "SET_CART_DATA",
                cartData: cartData,
            })
        }

        localStorage.setItem("cart", JSON.stringify(cartData));

    }

    const setData = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
        dispatch({
            type: "SET_FOOD_DATA",
            foodData: data,
        })

    }

    return (
        <div onClick={setData}
            className='h-[18rem] w-[9rem] md:w-[13rem] cursor-pointer rounded-lg p-2 shadow-xl gap-2 flex flex-col  items-center  '>

            <img src={data.img || data?.image}
                alt='' className='h-[7rem] img '>
            </img>
            <div className='font-semibold text-[1rem] text-center h-9'>{((data.name) || (data.label))?.substring(0, 20)}</div>
            <div className='text-[1.2rem]'>₹{data.price || parseInt(data.totalWeight) || parseInt(data.nutrients.ENERC_KCAL)}</div>
            <div className='flex items-center'>
                <FaStar className='text-yellow-300' />
                <p className='text-[0.8rem]'>{(((data?.nutrients?.FAT) || (data.calories)) % 5).toFixed(2)}</p>
            </div>
            <button onClick={handleCart}
                className='bg-orange-500  lg:w-10/12 font-semibold px-4 p-2 rounded-lg text-white'>
                {click ? " Remove" : "Add to Cart"}
            </button>
        </div>
    )
}

export default ShopCard
