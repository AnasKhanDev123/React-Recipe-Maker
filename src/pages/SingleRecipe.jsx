import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../Context/RecipeContext";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipeContext);
  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = data.find((r) => r.id === id);
  const descriptionArray = recipe?.description?.split(",");

  const copyData = [...favourite];

  console.log(copyData.push({ name: "anas" }));

  const FavHandler = () => {
    const copyData = [...favourite];
    const alreadyFav = copyData.some((f) => f.id === recipe.id);

    if (!alreadyFav) {
      copyData.push(recipe);
      setfavourite(copyData);
      localStorage.setItem("fav", JSON.stringify(copyData));
    }
  };

  const UnfavHandler = () => {
    console.log("unfavourite working");

    const filterData = favourite.filter((f) => f.id !== recipe.id);

    setfavourite(filterData);
    localStorage.setItem("fav", JSON.stringify(filterData));
  };

  useEffect(() => {
    console.log("fav is working");
  }, [favourite]);

  // console.log(fav?.some((f) => f.id == recipe.id)
  // console.log(favourite)

  const DeleteHandler = () => {
    console.log("recipe data", data);

    const recipeFilterData = data.filter((r) => r.id != recipe.id);

    setdata(recipeFilterData);
    localStorage.setItem("recipes", JSON.stringify(recipeFilterData));

    const alreadyFav = copyData.some((f) => f.id === recipe.id);

    if (alreadyFav) {
      const filterData = favourite.filter((f) => f.id != recipe.id);
      setfavourite(filterData);
      localStorage.setItem("fav", JSON.stringify(filterData));
    }

    navigate("/recipes");

    // console.log('favourite data' , favourite)
  };

  return (
    <div className="container mx-auto mt-7 text-white">
      <div className="left  bg-gray-700 p-3 rounded-md">
        <button
          onClick={() => navigate(-1)}
          className="text-black bg-white/80 mb-2 px-4 py-1 rounded-md cursor-pointer hover:bg-white  transition-all duration-150 ease-linear"
        >
          ⬅️ Back
        </button>
        {recipe ? (
          <div className="relative">
            {favourite?.some((f) => f.id == recipe.id) ? (
              <div
                onClick={UnfavHandler}
                className="absolute w-6 h-6 bg-red-400 top-0 "
              ></div>
            ) : (
              <div
                onClick={FavHandler}
                className="absolute w-6 h-6 border top-0 "
              ></div>
            )}

            <img
              className="w-full h-96 rounded-md"
              src={recipe.url}
              alt={recipe.title}
            />

            <h1>Chef: {recipe.chef}</h1>
            <div>
              <h2>Description</h2>
              <ul className="list-disc p-4 ">
                {descriptionArray?.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 w-28 h-9 rounded-md p-[2.1px] overflow-hidden">
              <button
                onClick={() => navigate(`/recipe-edit/${recipe.id}`)}
                className="w-full h-full bg-gray-700 rounded-md cursor-pointer"
              >
                Edit Recipe
              </button>
            </div>
            <button
              onClick={DeleteHandler}
              className="bg-red-400 shadow-2xl shadow-red-500 hover:bg-red-600 hover:shadow-none transition-all duration-150 ease-linear my-3 px-4 py-1.5 rounded-md cursor-pointer"
            >
              Delete Recipe
            </button>
          </div>
        ) : (
          "no recipe"
        )}
      </div>
    </div>
  );
};

export default SingleRecipe;
