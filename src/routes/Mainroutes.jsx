
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import Category from '../pages/Category'
import CreateRecipe from '../pages/CreateRecipe'
import SingleRecipe from '../pages/SingleRecipe'
import EditRecipe from "../pages/EditRecipe";


const Mainroutes = () => {
  return (
    <Routes>
        <Route index={true} path='/' element={<Home/>}/>
        <Route index={true} path='/recipes' element={<Recipe/>}/>
        <Route index={true} path='/favourite' element={<Category/>}/>
        <Route index={true} path='/create-recipe' element={<CreateRecipe/>}/>
        <Route index={true} path='/recipe/:id' element={<SingleRecipe/>}/>
        <Route index={true} path='/recipe-edit/:id' element={<EditRecipe/>}/>
    </Routes>
  )
}

export default Mainroutes