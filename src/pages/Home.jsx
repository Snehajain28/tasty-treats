import React from "react";
import FoodItems from "../components/FoodItems";
import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { useStateValues } from "../Utils/Provider";
import Sidebar from "../components/Sidebar";

function Home() {
  const [{ abc }, dispatch] = useStateValues();

  if (abc) {
    console.log(abc);
  }

  return (
    <div >
      <Navbar />
      <div onClick={() => {
        dispatch({
          type: "SET_HAMBURGER",
          hamburger: false,
        })
      }} className="mt-[6rem] md:mt-[4rem]">
        <div className="md:flex  gap-2 ">
          <Sidebar />
          <div className="">
            <SearchBar />
            <CategoryMenu />
            <FoodItems />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

