import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center  w-full p-2">
        <h1
          className=" text-4xl md:text-7xl  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600

     text-transparent bg-clip-text p-1 my-4
    "
        >
          Where Great Recipes Begin
        </h1>
        <p
          className="text-xl md:text-4xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600

     text-transparent bg-clip-text my-4"
        >
          From Kitchen to Table – Let’s Cook!
        </p>
        <p
          className="text-xl md:text-4xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600

     text-transparent bg-clip-text"
        >
          Stir Up Something Special
        </p>
      </div>
    </div>
  );
};

export default Home;
