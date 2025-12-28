import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close Icons
import { FaHospitalSymbol } from "react-icons/fa"; // Logo Icon

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Active Link Style
  const activeLink = "text-blue-600 font-bold border-b-2 border-blue-600 pb-1";
  const normalLink =
    "text-gray-600 hover:text-blue-600 transition duration-300 font-medium";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <FaHospitalSymbol className="text-blue-600 text-3xl" />
            <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
              Medi<span className="text-blue-600">Care</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Services
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Features
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contact
            </NavLink>

            <Link to="/login">
              <button className="bg-blue-600 text-white px-7 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {navOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden bg-white border-t absolute w-full transition-all duration-300 ease-in-out ${
          navOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/"
            className={normalLink}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/about"
            className={normalLink}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/services"
            className={normalLink}
          >
            Services
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/features"
            className={normalLink}
          >
            Features
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/contact"
            className={normalLink}
          >
            Contact
          </NavLink>
          <Link to="/login" onClick={() => setNavOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
