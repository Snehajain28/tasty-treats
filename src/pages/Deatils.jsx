import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsDot, BsYoutube } from "react-icons/bs";
import Loader from "../components/Loader";
import FavouritesButton from "../components/FavouritesButton";


const Details = () => {
    const { id } = useParams();
    const [recipeDetailsData, setRecipesDetailData] = useState(null)
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function getRecipeDetails() {
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );

                if (response) {
                    setRecipesDetailData(response.data.meals[0]);
                }
            } catch (error) {
                console.error("Error fetching recipe details:", error);
            }

            let arr = (recipeDetailsData?.strTags?.split(','))
            setTags(arr);

        }
        getRecipeDetails();
    }, [id, recipeDetailsData?.strTags]);

    if (recipeDetailsData === null) {
        return <Loader />
    }

    return (
        <div>

            <div className=" w-full pt-5 grid-cols-1 lg:grid-cols-2 gap-10">

                <div className=" w-[90vw] md:w-[50vw] md:h-[30vw] mx-auto h-[15rem] overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetailsData?.strMealThumb}
                        alt=""
                        className="w-full h-full object-cover
             block group-hover:scale-105 
             duration-300
             "
                    />
                </div>

                <div className="flex w-[90vw] mx-auto flex-col gap-3">
                    <span className="text-cyan-700 font-medium text-sm ">
                        {recipeDetailsData?.strCategory}
                    </span>

                    <div className="w-[90vw] mx-auto justify-between flex ">
                        <h3 className="font-bold truncate text-2xl text-black">
                            {recipeDetailsData?.strMeal}
                        </h3>
                        <div className='mr-7' >
                            <FavouritesButton />
                        </div>
                    </div>
                    <a href={recipeDetailsData.strYoutube} className="flex items-center  gap-2">
                        <BsYoutube className="text-red-500 text-[1.5rem]" />
                        <p className="text-blue-500 underline">{"have a look "}</p>
                    </a>
                    <div className="flex gap-2 flex-col">
                        <h1 className="text-[1.4rem] font-semibold">tags :</h1>
                        <ul className="flex flex-wrap w-full gap-2">
                            {
                                tags?.map((tag, index) => (
                                    <Link to={`/${tag}`} key={index} className="text-[1rem] rounded-full border-gray-300 p-1 px-2 border  ">{tag}</Link>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6 md:w-[80vw] mx-auto md:flex-row justify-between w-[90vw]">
                        <div className="text-[1.5rem]  font-semibold text-black">
                            <span className="ml-[1.5rem]">ingredients:</span>

                            <ol className="flex text-[1rem] mt-[0.5rem] flex-col font-normal gap-2">
                                {
                                    recipeDetailsData?.strIngredient1 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient1 + '  (' + recipeDetailsData.strMeasure1 + ')'}
                                    </li>
                                }
                                {
                                    recipeDetailsData?.strIngredient2 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient2 + '  (' + recipeDetailsData.strMeasure2 + ')'}
                                    </li>
                                }
                                {
                                    recipeDetailsData?.strIngredient3 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient3 + '  (' + recipeDetailsData.strMeasure3 + ')'}
                                    </li>
                                }
                                {
                                    recipeDetailsData?.strIngredient4 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient4 + '  (' + recipeDetailsData.strMeasure4 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient5 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient5 + '  (' + recipeDetailsData.strMeasure5 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient6 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient6 + '  (' + recipeDetailsData.strMeasure6 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient7 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient7 + '  (' + recipeDetailsData.strMeasure7 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient8 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient8 + '  (' + recipeDetailsData.strMeasure8 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient9 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient9 + '  (' + recipeDetailsData.strMeasure9 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient10 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient10 + '  (' + recipeDetailsData.strMeasure10 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient11 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient11 + '  (' + recipeDetailsData.strMeasure11 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient12 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient12 + '  (' + recipeDetailsData.strMeasure12 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient13 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient13 + '  (' + recipeDetailsData.strMeasure13 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient14 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient14 + '  (' + recipeDetailsData.strMeasure14 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient15 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient15 + '  (' + recipeDetailsData.strMeasure15 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient16 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient16 + '  (' + recipeDetailsData.strMeasure16 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient17 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient17 + '  (' + recipeDetailsData.strMeasure17 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient18 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient18 + '  (' + recipeDetailsData.strMeasure18 + ')'}
                                    </li>
                                } {
                                    recipeDetailsData?.strIngredient19 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient19 + '  (' + recipeDetailsData.strMeasure19 + ')'}
                                    </li>
                                }
                                {
                                    recipeDetailsData?.strIngredient20 &&
                                    <li className="flex gap-2 items-center">
                                        <BsDot />
                                        {recipeDetailsData.strIngredient20 + '  (' + recipeDetailsData.strMeasure20 + ')'}
                                    </li>
                                }
                            </ol>

                        </div>

                        <div className="w-[90vw] md:w-[50vw] mx-auto ">
                            <h1 className="font-bold text-[1.2rem] md:text-[1.5rem]">Instruction</h1>
                            <div className=" text-[0.8rem] md:text-[1.05rem] md:line-height-6 line-height-2">
                                <p>{recipeDetailsData.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;