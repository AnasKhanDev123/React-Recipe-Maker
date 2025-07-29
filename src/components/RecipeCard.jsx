import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

  const navigate = useNavigate();
  
  return (
    <div className=" w-64 md:w-80  bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={recipe.url}
        alt="Recipe Image"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
        <p className="text-gray-600 text-sm mt-1">
          {recipe.description.slice(0,45)}...
          
        </p>
{/* 
        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
          <span>⏱️ 30 mins</span>
          <span>🍽️ 2 servings</span>
        </div> */}

        <button
        onClick={() => navigate(`/recipe/${recipe.id}`) }
        className="mt-4 w-full bg-yellow-500 text-white text-sm py-2 rounded hover:bg-yellow-600 transition-colors">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
