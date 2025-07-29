import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../Context/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const EditRecipe = () => {
  const { data, setdata } = useContext(recipeContext);

  console.log(data)
   
    const {id} = useParams()
    const navigate = useNavigate()

    console.log(data.find(r => r.id === id))  
    const recipe = data.find((r) => r.id === id);
    const index = data.findIndex(r => r.id === id);
    console.log(index)

  const {
    register,
    handleSubmit,
  } = useForm(
    {defaultValues: {
      url : recipe?.url,
      title : recipe?.title,
      description : recipe?.description,
      instruction : recipe?.instruction,
      chef : recipe?.chef,
      category : recipe?.category
    }}
  );

  const EditHandler = (newRecipe) => {
   
    const copyData = [...data];
    console.log('index array',copyData[0])
    copyData[index] = {...copyData[index],...newRecipe}
    setdata(copyData)
    localStorage.setItem('recipes' , JSON.stringify(copyData))

    navigate(`/recipe/${recipe.id}`)

  };

  return (
    <div className="container mx-auto h-[35rem] sm:h-[40rem] flex justify-center mt-7 p-2">
      <form
        onSubmit={handleSubmit(EditHandler)}
        className=" w-full sm:w-1/2 bg-[#212631] h-full flex flex-col  p-4 space-y-5 rounded-md"
      >
        <h1 className="text-4xl mb-8 text-white">Edit Recipe</h1>
        <div className="w-full">
          <input
            {...register("url")}
            className={`bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md `}
            type="text"
            placeholder="Enter recipe image url"
          />
        
         
        </div>
        <div className="w-full text-center">
          <input
            {...register("title")}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe title"
          />
           
        </div>
        <div className="w-full text-center">
          <input
            {...register("description")}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe description"
          />
           
        </div>
        <div className="w-full text-center">
          <input
            {...register("instruction")}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe instruction"
          />
          
        </div>
        <div className="w-full text-center">
          <input
            {...register("chef")}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe chef name"
          />
          
        </div>
        <div className="w-full text-center">
          <select
            {...register("category")}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"

          >
            <option value="">-- Select a Category --</option>
            <option value="american">American</option>
            <option value="asian">Asian</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="thai">Thai</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="middle_eastern">Middle Eastern</option>
            <option value="french">French</option>
            <option value="greek">Greek</option>
            <option value="bbq">BBQ</option>
            <option value="seafood">Seafood</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="fast_food">Fast Food</option>
            <option value="cafe">Café</option>
            <option value="desserts">Desserts</option>
            <option value="steakhouse">Steakhouse</option>
            <option value="fusion">Fusion</option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="sushi">Sushi</option>
          </select>
          
        </div>
        <button className="bg-blue-400 py-2 rounded-md text-white hover:bg-blue-600 cursor-pointer">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;
