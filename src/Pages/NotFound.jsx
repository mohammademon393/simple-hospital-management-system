import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="relative inline-block">
          <h1 className="text-[150px] font-black text-slate-100 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaExclamationTriangle className="text-blue-600 text-6xl animate-bounce" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-slate-500 mt-4 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link to="/">
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            <FaHome /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
