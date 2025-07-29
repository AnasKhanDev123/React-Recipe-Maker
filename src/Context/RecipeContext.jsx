import React, { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <recipeContext.Provider value={{ data, setdata }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
