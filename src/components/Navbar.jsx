import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-cyan-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Expense Tracker</div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-white">
            Home
          </NavLink>
          <NavLink to="/category" className="text-white">
            Catagory
          </NavLink>
          <NavLink to="/expence" className="text-white">
            Expence
          </NavLink>
          <NavLink to="/summary" className="text-white">
            Summary
          </NavLink>
        </div>
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
