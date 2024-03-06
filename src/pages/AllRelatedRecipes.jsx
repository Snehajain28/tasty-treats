import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValues } from '../Utils/Provider';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';

function AllRelatedRecipes() {
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [{ abc, foodData }, dispatch] = useStateValues();

  if (abc) {
    console.log(abc);
  }

  const fecthData = useCallback((async () => {
    setLoading(true);
   
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b`)
    dispatch({
      type: "SET_FOOD_DATA",
      foodData: res.data.hits,
    })
    setLoading(false);
  }), [query,dispatch])

  useEffect((() => {
    fecthData();
  }), [fecthData])

  return (
    <>
      < Navbar />
<div className='md:flex'>

<div>
<SearchBar />
{
  loading ? (
    <Loader />
  ) :
    (
      <div className='w-[50vw]'>
        <h1 className='text-lg font-semibold pl-7 italic text-gray-500 pb-4 underline '>results for '{query}'</h1>
        <div className='w-[95vw] mx-auto gap-3 justify-center flex flex-wrap'>
          { foodData?.length > 0 &&
            foodData?.map((data, index) => {
              return (<Card key={index} data={data.recipe} />)
            })
          }
        </div>
      </div >
    )
}
</div>
</div>
    </>
  )


}

export default AllRelatedRecipes
