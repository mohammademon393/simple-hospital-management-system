import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FaHospitalSymbol,
  FaHome,
  FaInfoCircle,
  FaStethoscope,
  FaMicroscope,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Active & Normal Link Styles
  const activeLink =
    "text-blue-600 font-bold flex items-center gap-2 border-b-2 border-blue-600 pb-1";
  const normalLink =
    "text-gray-600 hover:text-blue-600 transition duration-300 font-medium flex items-center gap-2";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* 1. Left: Logo Section */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <FaHospitalSymbol className="text-blue-600 text-3xl" />
            <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
              Medi<span className="text-blue-600">Care</span>
            </span>
          </Link>

          {/* 2. Center: Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-8">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FaHome className="text-lg" /> Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FaInfoCircle className="text-lg" /> About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FaStethoscope className="text-lg" /> Services
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FaMicroscope className="text-lg" /> Features
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FaEnvelope className="text-lg" /> Contact
            </NavLink>
          </div>

          {/* 3. Right: Login Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link to="/login">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                <FaUserCircle className="text-xl" /> Login
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
        <div className="px-6 py-8 space-y-6 flex flex-col">
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/"
            className={normalLink}
          >
            <FaHome /> Home
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/about"
            className={normalLink}
          >
            <FaInfoCircle /> About
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/services"
            className={normalLink}
          >
            <FaStethoscope /> Services
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/features"
            className={normalLink}
          >
            <FaMicroscope /> Features
          </NavLink>
          <NavLink
            onClick={() => setNavOpen(false)}
            to="/contact"
            className={normalLink}
          >
            <FaEnvelope /> Contact
          </NavLink>
          <Link to="/login" onClick={() => setNavOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              <FaUserCircle /> Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
