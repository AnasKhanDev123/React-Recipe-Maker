import React from 'react'

const Category = () => {

  const fav = JSON.parse(localStorage.getItem('fav'));
  console.log(fav)

  return (
    <div className="container mx-auto p-4 text-white ">

      {
        fav.length > 0 ?  <table className="table-auto md:table-fixed md:w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Chef</th>
            <th className="px-4 py-2">Category</th>
          </tr> 
        </thead>
        <tbody>
          {fav.map((recipe) => (
            <tr key={recipe.id}>
              <td className="border px-4 py-2">
                <img src={recipe.url} alt={recipe.title} className="w-20 h-20" />
              </td>
              <td className="border px-4 py-2 text-sm">{recipe.title}</td>
              <td className="border px-4 py-2">{recipe.chef}</td>
              <td className="border px-4 py-2">{recipe.category}</td>
            </tr>
          ))}
        </tbody>
      </table> : <h3>
        there is no recipe in favourite
      </h3>
      }

     

    </div>
  )
}

export default Category
