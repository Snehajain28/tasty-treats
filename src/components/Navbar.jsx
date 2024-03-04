import { useState } from 'react'
import { FaSignOutAlt, FaShopify, FaList, FaShoppingCart, FaUserAlt } from "react-icons/fa";
//import toast from "react-hot-toast";
import { Link, useNavigate, } from "react-router-dom";
import { MdClose, MdContactSupport } from "react-icons/md";
import { HiHome, HiMenuAlt2 } from "react-icons/hi";
import { TbMenuOrder } from "react-icons/tb";
import { BiHeart, BiUserCircle } from 'react-icons/bi';
import { useStateValues } from '../Utils/Provider';
import logo from '../assests/logo.jpeg'
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../Utils/auth'

export default function Navbar() {

  const [{ token, cartData, hamburger }, dispatch] = useStateValues();
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response._tokenResponse)
        dispatch({
          type: "SET_TOKEN",
          token: response._tokenResponse.idToken,
        });
        dispatch({
          type: "SET_USER",
          user: response._tokenResponse,
        });
        localStorage.setItem("token", JSON.stringify(response._tokenResponse.idToken));
        localStorage.setItem("user", JSON.stringify(response._tokenResponse));
      })
  }


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

    <div
      className="w-full h-[60px] fixed bg-white  top-0 z-50 shadow-lg">
      <div className="flex w-[90vw] mx-auto items-center justify-between h-full">

        <div className='flex items-center gap-3'>
          {
            !hamburger ?
              (<HiMenuAlt2
                onClick={() => dispatch({
                  type: "SET_HAMBURGER",
                  hamburger: true,
                })}
                className="md:hidden cursor-pointer w-8 h-6 "
              />) :
              (
                <MdClose
                  onClick={() => dispatch({
                    type: "SET_HAMBURGER",
                    hamburger: false,
                  })}
                  className=" md:hidden cursor-pointer w-8 h-6 "
                />
              )
          }
          <Link to={'/'} className="flex  items-center  gap-1">
            <img alt="" src={logo}
              className="h-[2rem] w-[2rem] rounded-[35%] " />
            <span className="text-md font-semibold ">Tasty Treats</span>
          </Link>
        </div>
        <div className='flex h-full items-center'>
          {!hamburger && (
            <ul
              className=" items-center w-auto z-50 p-0 hidden sm:flex gap-2" >
              <Link
                className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                to={'/'} >
                <li>{"Home"}</li>
              </Link>
              <Link
                className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                to={'/product'} >
                <li>{"Shop"}</li>
              </Link>
              <Link
                className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                to={'/contact'} >
                <li>{"Contact"}</li>
              </Link>
              <Link
                className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                to={'/about'} >
                <li>{"About"}</li>
              </Link>
            </ul>
          )}

          {
            (token ?
              (<Link to={'/cart'} className='' >
                <div className=' flex items-center justify-center bg-red-500 text-white   w-[5rem] px-2 py-2  font-semibold  gap-2 rounded-full '>
                  <FaShoppingCart /> Cart
                </div>
                <div className='absolute md:top-1 top-0 animate-bounce md:right-3 right-5 bg-green-500 px-[0.5rem] py-0 rounded-full text-white'
                >{cartData?.length || 0}</div>
              </Link>) :
              (<button onClick={handleClick} className=' flex justify-center bg-red-500 text-white items-center w-[5rem] px-2 py-2  rounded-full font-semibold  gap-2 rounded-full '>
                <FaUserAlt />Login
              </button>)
            )
          }

          {hamburger && (

            <div className="fixed md:hidden bg-white shadow-lg border-[2px] rounded-xl  top-[3.9rem] left-1 px-2  z-50">
              <div
                className=" relative" >
                <div className="p-7">

                  <ul className=" flex flex-col gap-5 ">
                    <Link className='flex border-b-[1px] items-center gap-2'
                      to={'/'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    > <HiHome size={20} /><span>Home</span>
                    </Link>
                    <Link className='flex border-b-[1px] items-center gap-2'
                      to={'/shop'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    >
                      <FaShopify />{"Shop"}
                    </Link>
                    <Link className='flex border-b-[1px] items-center gap-2'
                      to={'/favourites'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    >
                      <BiHeart/>{"Favourites"}
                    </Link>
                    {token &&
                      <Link className='flex border-b-[1px] items-center gap-2'
                        to={'/orders'}
                        onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger: false,
                        })}
                      >
                        <TbMenuOrder />{"My Orders"}
                      </Link>
                    }
                    {token &&
                      <Link className='flex border-b-[1px] items-center gap-2'
                        to={'/profile'}
                        onClick={() => dispatch({
                          type: "SET_HAMBURGER",
                          hamburger: false,
                        })}
                      >
                        <BiUserCircle />{"My Account"}
                      </Link>

                    }
                    <Link className='flex  items-center gap-2'
                      to={'/contact'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    >
                      <MdContactSupport /> {"Contact"}
                    </Link>
                    <Link className='flex items-center gap-2'
                      to={'/about'}
                      onClick={() => dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })}
                    >
                      <FaList /> {"About"}
                    </Link>
                    {token && <div className='flex items-center gap-2'
                      onClick={logoutHandler}
                    >
                      <FaSignOutAlt /> {"Log Out"}
                    </div>
                    }
                  </ul>
                  <div className="mt-3 ">
                    <h1
                      onClick={() => setCategory(!category)}
                      className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                    >
                      Shop by Category{" "}
                      <span className="text-lg">{category ? "-" : "+"}</span>
                    </h1>
                    {category && (
                      <ul
                        className="text-sm flex flex-col gap-4"
                      >
                        <li className="">New Arrivals</li>
                        <li className="">Gudgets</li>
                        <li className="">Accessories</li>
                        <li className="">Electronics</li>
                        <li className="">Others</li>
                      </ul>
                    )}
                  </div>
                  <div className="mt-4">
                    <h1
                      onClick={() => setBrand(!brand)}
                      className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                    >
                      Shop by Brand
                      <span className="text-lg">{brand ? "-" : "+"}</span>
                    </h1>
                    {brand && (
                      <ul
                        className="text-sm flex flex-col gap-4"
                      >
                        <li className="">New Arrivals</li>
                        <li className="">Gudgets</li>
                        <li className="">Accessories</li>
                        <li className="">Electronics</li>
                        <li className="">Others</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div >
  )
}
