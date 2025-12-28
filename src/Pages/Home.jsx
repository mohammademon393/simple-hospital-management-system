import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUserMd,
  FaFileMedical,
  FaHospitalUser,
  FaClock,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Streamlined <span className="text-blue-600">Hospital</span> <br />{" "}
              Management
            </h1>
            <p className="text-lg text-slate-600">
              Simplify appointments, enhance patient care, and manage records
              with our all-in-one medical solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
                Get Started
              </button>
              <button className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg"
              alt="Hospital illustration"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <FaCalendarAlt className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Appointment Scheduling</h3>
            <p className="text-slate-500 text-sm">
              Efficiently manage and schedule patient visits with ease.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <FaFileMedical className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Patient Records</h3>
            <p className="text-slate-500 text-sm">
              Securely store and access patient medical histories.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <FaUserMd className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Analysis & Reporting</h3>
            <p className="text-slate-500 text-sm">
              Detailed insights and reports for better hospital performance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Modules Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Modules</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Quick Appointment Form UI */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FaClock className="text-blue-600" /> Book Quick Appointment
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Patient Name"
                  className="bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  className="bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-blue-500">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Right: Quick Stats/Management */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600 p-6 rounded-3xl text-white flex flex-col justify-between">
              <FaHospitalUser className="text-3xl opacity-50" />
              <div>
                <p className="text-3xl font-bold">120+</p>
                <p className="text-sm opacity-80">Doctors Online</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col justify-between shadow-sm">
              <FaUserMd className="text-3xl text-blue-600 opacity-50" />
              <div>
                <p className="text-3xl font-bold text-slate-800">45</p>
                <p className="text-sm text-slate-500">Available Cabins</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
