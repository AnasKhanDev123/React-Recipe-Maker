import React, { useContext } from 'react'
import { recipeContext } from '../Context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipe = () => {

  const {data} = useContext(recipeContext)

  const renderRecipes = data.map((recipe) => { 
    return <RecipeCard key={recipe.id} recipe={recipe}/>
   })

  return (
    <div className='container mx-auto p-4 flex flex-wrap gap-4'>{renderRecipes}</div>
  )
}

export default Recipe