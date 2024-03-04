import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import ShopCard from '../components/ShopCard';
import Loader from '../components/Loader';


export default function Shop() {

    const [FoodData, setFoodData] = useState([]);
    const [next, setNext] = useState('');
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('')
    const [health, sethealth] = useState('')
console.log(health)
    const getData = useCallback((async (url) => {
        setLoading(true);
        const res = await axios.get(url)
        setFoodData(res.data.hints)
        setNext(res.data._links.next.href)
        setLoading(false);
    }), [])

    useEffect((() => {

        if (category !== '') {
            getData(`https://api.edamam.com/api/food-database/v2/parser?app_id=6ae5a3d8&app_key=bc165443edb3f302f6d43c640e8a5179&category=${category}`);
        }
        else {
            getData(`https://api.edamam.com/api/food-database/v2/parser?app_id=6ae5a3d8&app_key=bc165443edb3f302f6d43c640e8a5179`);
        }
    }), [getData, category])


    return (
        <div>
            <Navbar />
            <div className='mt-[5rem]'>
                <h1 className='ml-4 font-semibold text-[1.2rem] my-4'>Categories</h1>
                <div className='w-[95vw] flex flex-wrap gap-2 justify-center'>
                    <p onClick={() => { setCategory("generic-foods") }}
                        className='border-[2px] rounded-full p-2 '>generic-foods</p>
                    <p onClick={() => { setCategory("generic-meals") }}
                        className='border-[2px] rounded-full p-2 ' >generic-meals</p>
                    <p onClick={() => { setCategory("packaged-foods") }}
                        className='border-[2px] rounded-full p-2 '>packaged-foods</p>
                    <p onClick={() => { setCategory("fast-foods") }}
                        className='border-[2px] rounded-full p-2 '>fast-foods</p>
                </div>
            </div>
            <div className='mt-[1rem]'>
                <h1 className='ml-4 font-semibold text-[1.2rem] my-4'>Health</h1>
                <div className='w-[95vw] flex flex-wrap gap-2 justify-center'>
                    <p onClick={() => { sethealth("alcohol-free") }}
                        className='border-[2px] rounded-full p-2 '>alcohol-free</p>
                    <p onClick={() => { sethealth("celery-free") }}
                        className='border-[2px] rounded-full p-2 ' >celery-free</p>
                    <p onClick={() => { sethealth("vegetarian") }}
                        className='border-[2px] rounded-full p-2 '>vegetarian</p>
                    <p onClick={() => { sethealth("vegan") }}
                        className='border-[2px] rounded-full p-2 '>vegan</p>
                </div>
            </div>


            <div className='h-[57vh] overflow-y-scroll mt-[1rem] lg:gap-9 gap-4 mx-auto lg:w-[80vw] w-[95vw] justify-center flex flex-wrap'>

                {
                    loading ? (<Loader />) :
                        (FoodData.map((data, index) => {
                            return <ShopCard key={index} data={data.food} ></ShopCard>
                        })
                        )
                }
            </div>
            <div onClick={() => {
                getData(next)
            }}
                className='font-semibold  text-center'
            >
                <button className='rounded-full mt-[2rem] py-[0.9rem] text-[1.2rem] bg-green-400 w-[7rem]'>Next</button>
            </div>
        </div>
    )
}
