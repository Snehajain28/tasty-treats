import React from 'react'
import { Link } from "react-router-dom";
import { useStateValues } from "../Utils/Provider";
import Navbar from "../components/Navbar";
import Recipe from "../components/Recipe";
import FryingPan from "../components/Fryingpan";

const Favorites = () => {
  const [{ favourites, abs }, dispatch] = useStateValues();
 if (abs) {
    console.log(dispatch)
  }
 return (
    <>
    <Navbar/>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {  favourites &&   favourites.length > 0 ? (
             favourites.map((item) => <Recipe recipe={item} />)
        ) : (
          <div>
             <div className="flex flex-col  mt-[6rem] items-center">
          <p className="lg:text-4xl text-xl text-center text-red-400 font-semibold">
            Favourites list is empty
          </p>
          <Link
            to={'/'}
            className="bg-cyan-500 mt-4 text-cyan-50 p-3 px-8 rounded-full uppercase inline-block mt-2 shadow-lg shadow-cyand-200 hover:bg-cyan-400 hover:text-gray-50 hover:shadow-gray-300 duration-300"
          >
            Go To Home
          </Link>
          <div className="">
            <FryingPan/>
          </div>
        </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites