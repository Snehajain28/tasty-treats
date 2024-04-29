import React, { useEffect, useState } from 'react'
import { BiBook, BiDish, BiHeart, BiPlus } from 'react-icons/bi'
import { useStateValues } from '../Utils/Provider'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const [user, setUser] = useState({})
    const [{ token }, dispatch] = useStateValues();
    const navigate = useNavigate();

   
    useEffect((() => {
        setUser(JSON.parse(localStorage.user))
        dispatch({
            type: "SET_HAMBURGER",
            hamburger: false,
        })
    }), [dispatch])

    const logoutHandler = async () => {
        try {
          if (token) {
            dispatch({
              type: "SET_TOKEN",
              token: "",
            })
            dispatch({
              type: "SET_USER",
              user: null,
            });
            dispatch({
              type: "SET_HAMBURGER",
              hamburger: false,
            })
            localStorage.removeItem("token");
            localStorage.removeItem("cart");
            localStorage.removeItem("user");
            navigate('/');
          }
          //  toast.success("Sign Out Successfully");
        } catch (error) {
          //  toast.error("Sign Out Fail");
        }
      };

    return (
        <div>
            <div onClick={() => {
                dispatch({
                    type: "SET_HAMBURGER",
                    hamburger: false,
                })
            }}
                className='w-[90vw] mx-auto  flex flex-col  mt-[1rem]'>
                <div className='flex w-full justify-between mx-auto border-b-[2px] pb-2'>
                    <p className='font-bold text-[1.5rem]'>Profile</p>
                    <button className='text-white text-[0.9rem] font-semibold bg-orange-500 p-2 px-3 rounded-md'>Save</button>
                </div>
                <div className='flex items-center w-full mt-[2rem] justify-evenly'>

                    <div className='relative'>
                        <button className='h-[3rem] w-[3rem] rounded-full text-white bg-yellow-300'>{(user.fullName)?.substring(0, 1)}</button>
                        <BiPlus className='absolute right-0 bottom-0' />
                    </div>
                    <div>
                        <p className='font-semibold'>{user.fullName}</p>
                        <p className='italic text-[0.78rem] text-gray-400'>{user.email}</p>
                    </div>
                </div>
                <div className='font-semibold  mt-[2rem]'>
                    <div className='flex items-center gap-2'>
                        <BiHeart />
                        Your Favriotes
                    </div>
                    <div className='flex items-center gap-2 mt-[1rem] '>
                        <BiBook />
                        Your Orders
                    </div>
                    <div className='flex items-center gap-2 mt-[1rem] '>
                        <BiDish />
                        Your Recipes
                    </div>
                </div>
                <div onClick={logoutHandler} className='flex  font-semibold  mt-[3rem] justify-center w-full '>
                    <button className='border-[1px] border-gray-900 ounded-lg px-3 p-1' >
                        LogOut
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
