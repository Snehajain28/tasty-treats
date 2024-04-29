import React from "react";
import FoodItems from "../components/FoodItems";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";
import { useStateValues } from "../Utils/Provider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Special from "../components/Special";

function Home() {
  const [{ abc }, dispatch] = useStateValues();


  if (abc) {
    console.log(abc);
  }

  return (
    <div >
    
      <div onClick={() => {
        dispatch({
          type: "SET_HAMBURGER",
          hamburger: false,
        })
      }} className="mt-[1rem] ">
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
            <SwiperSlide >
              <div className="w-[90vw] lg:w-[70vw] lg:h-[30vw] h-[50vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' 
                src='https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1710679045~exp=1710682645~hmac=508b20ea164e44b1037fbe43f26565acebc3dcbd7e329d4f9883c2f2cce16d17&w=360' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[50vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt=''
                 src='https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?t=st=1710679085~exp=1710682685~hmac=212e79870b35c05dcaa3b618f20315f45c19c8a48f78dc05f011a897d048b294&w=360' />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[50vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt=''
                 src='https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1710679111~exp=1710682711~hmac=18bf38a83042765a211d3db409c2c9767f6bafddb57df1c02d7578f12acf05c0&w=740' />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[50vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' 
                src='https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1710679146~exp=1710682746~hmac=de924c1387fad51da36e83d4aa55ccc6749c6b85217b4cf4ae5d8e2603320008&w=740' />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[50vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' 
                src='https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?t=st=1710679226~exp=1710682826~hmac=3f796c1f2dd8603866347de43c6dbf1eaf12708d5c919c6d7ff193af67b8f31d&w=740' />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <SearchBar />
        <Special />
        <CategoryMenu />
        <FoodItems />

      </div >
    </div >
  )
}

export default Home

