import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaArrowLeft, FaHospitalSymbol } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9] px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-md w-full z-10">
        {/* Back to Home Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition font-medium"
        >
          <FaArrowLeft /> Back to Website
        </Link>

        {/* Login Card */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-100 p-10 border border-white">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl text-white text-3xl mb-4 shadow-lg shadow-blue-200">
              <FaHospitalSymbol />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Welcome Back
            </h2>
            <p className="text-slate-500 mt-2 font-medium">
              Please login to your account
            </p>
          </div>

          <form className="space-y-6">
            {/* Username Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-slate-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 font-bold hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-slate-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 ml-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="text-sm text-slate-500 font-medium cursor-pointer"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-100 hover:-translate-y-1 transform duration-300">
              Sign In
            </button>
          </form>

          {/* Create Account Link */}
          <p className="text-center mt-10 text-slate-500 font-medium">
            Don't have an account?{" "}
            <Link
              to="/contact"
              className="text-blue-600 font-bold hover:underline"
            >
              Contact Admin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
