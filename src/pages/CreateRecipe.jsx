import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../Context/RecipeContext";
import { nanoid } from "nanoid";

const CreateRecipe = () => {
  const { data, setdata } = useContext(recipeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (newRecipe) => {
    newRecipe.id = nanoid()
    const copyData = [...data];
    copyData.push(newRecipe);
    setdata(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));

    reset()
  };

  return (
    <div className="container mx-auto h-[40rem] flex justify-center mt-7">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-[90%] md:w-1/2 bg-[#212631] h-full flex flex-col  p-4 space-y-5"
      >
        <h1 className="text-4xl mb-8 text-white">Create Recipe</h1>
        <div className="w-full">
          <input
            {...register("url", { required: "url is required." })}
            className={`bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md ${errors?.url?.message ? `border border-red-500 outline-none` : ''}`}
            type="text"
            placeholder="Enter recipe image url"
          />
          {
            errors.url &&  <span className="text-sm text-red-500">{errors?.url?.message}</span>
          }
         
        </div>
        <div className="w-full">
          <input
            {...register("title", { required: "title is required." })}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe title"
          />
           {
            errors.title &&  <span className="text-sm text-red-500">{errors?.title?.message}</span>
          }
        </div>
        <div className="w-full">
          <input
            {...register("description", { required: "title is description" })}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe description"
          />
           {
            errors.description &&  <span className="text-sm text-red-500">{errors?.description?.message}</span>
          }
        </div>
        <div className="w-full">
          <input
            {...register("instruction", {
              required: "instruction is required",
            })}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe instruction"
          />
          {
            errors.instruction &&  <span className="text-sm text-red-500">{errors?.instruction?.message}</span>
          }
        </div>
        <div className="w-full">
          <input
            {...register("chef", { required: "chef is required" })}
            className="bg-[#0A0E15] text-white placeholder:text-white/50 w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Enter recipe chef name"
          />
           {
            errors.chef &&  <span className="text-sm text-red-500">{errors?.chef?.message}</span>
          }
        </div>
        <div className="w-full">
          <select
            {...register("category", { required: "category is required" })}
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
          {
            errors.category &&  <span className="text-sm text-red-500">{errors?.category?.message}</span>
          }
        </div>
        <button className="bg-blue-400 py-2 rounded-md text-white hover:bg-blue-600 cursor-pointer">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
