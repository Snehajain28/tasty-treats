import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


const Details = () => {
    const { id } = useParams();
    const [recipeDetailsData, setRecipesDetailData] = useState(null)
   

    useEffect(() => {
        async function getRecipeDetails() {
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );

                console.log(response.data.meals[0]);
                if (response) {
                    setRecipesDetailData(response.data.meals[0]);
                }
            } catch (error) {
                console.error("Error fetching recipe details:", error);
            }
           
        }
        getRecipeDetails();
    }, [id]);

    return (
        <div>
            <Navbar />
            <div className="container mt-[1rem] mx-auto py-10 grid-cols-1 lg:grid-cols-2 gap-10">

                <div className="row-start-2 lg:rwo-start-auto">
                    <div className="h-[15rem] overflow-hidden rounded-xl group">
                        <img
                            src={recipeDetailsData?.strMealThumb}
                            alt=""
                            className="w-full h-full object-cover
             block group-hover:scale-105 
             duration-300
             "
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-cyan-700 font-medium text-sm ">
                        {recipeDetailsData?.strCategory}
                    </span>

                    <h3 className="font-bold truncate text-2xl text-black">
                        {recipeDetailsData?.strMeal}
                    </h3>
                    <div>
                        <button
                            onClick={() => { }}
                            className="px-8 p-3 rounded-lg text-sm font-medium 
            tracking-wider bg-black text-white uppercase"
                        >
                            {'Add favorites'}

                        </button>
                    </div>
                    <div className="text-2xl font-semibold text-black">
                        <span>ingredients:</span>

                        <ul className="flex flex-col gap-3">
                            {
                           
                        }
                                  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;