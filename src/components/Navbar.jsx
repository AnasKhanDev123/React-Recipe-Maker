import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-orange-400 font-bold"
      : "hover:text-orange-300 transition";

  return (
    <nav className="relative container mx-auto h-20 text-white flex items-center px-6 justify-between font-['Helvetica']">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Recipe Maker
      </h2>

      {/* Desktop Navigation */}
      <div className="links md:flex items-center space-x-20 hidden">
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/recipes" className={navLinkStyles}>
          Recipes
        </NavLink>
        <NavLink to="/favourite" className={navLinkStyles}>
          Favourite
        </NavLink>
        <NavLink to="/create-recipe" className={navLinkStyles}>
          Create Recipe
        </NavLink>
      </div>

      {/* Menu Icon for Mobile */}
      <svg
        className="sm:block md:hidden cursor-pointer z-50"
        onClick={() => setShowNav(!showNav)}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {showNav ? (
          <>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </>
        ) : (
          <>
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </>
        )}
      </svg>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-gray-800 z-40 transition-transform duration-300 ease-in-out md:hidden ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-20 text-lg">
          <NavLink to="/" className={navLinkStyles} onClick={() => setShowNav(false)}>
            Home
          </NavLink>
          <NavLink to="/recipes" className={navLinkStyles} onClick={() => setShowNav(false)}>
            Recipes
          </NavLink>
          <NavLink to="/favourite" className={navLinkStyles} onClick={() => setShowNav(false)}>
            Favourite
          </NavLink>
          <NavLink to="/create-recipe" className={navLinkStyles} onClick={() => setShowNav(false)}>
            Create Recipe
          </NavLink>
        </div>
      </div>

      {/* Dimmed background when menu is open */}
      {showNav && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setShowNav(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
