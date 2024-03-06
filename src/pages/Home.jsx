import React from "react";
import FoodItems from "../components/FoodItems";
import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { useStateValues } from "../Utils/Provider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

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
      }} className="mt-[4.5rem] ">
        <div className="  w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-[18rem] h-[12rem] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQrSDvsrjlnYzLtZQ17on2162NRp9N_8o6XtFHqsNBs3BRVhgb' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[18rem] h-[12rem] mx-auto">
              <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2GATeYuaB-Ow_sB0Iiq24pOyhk7AyZp4FDu7tH4UEU-a2rgNi' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[18rem] h-[12rem] mx-auto">
              <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKWJUf5Eat5ngcgaHmNeyH0qR7zZZCs7dxOsm0Al2KnBFjMXX' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[18rem] h-[12rem] mx-auto">
              <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSA12pCDzsNiLT3tpZ8ci0W1W6x5FCR1uwHxFI3YozFGky1F_ue' />
              </div>
            </SwiperSlide>

     
          </Swiper>
        </div>
        <SearchBar />
        <CategoryMenu />
        <FoodItems />

      </div >
    </div >
  )
}

export default Home

