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

      {/* section -- no-4. */}
      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Happy Patients", value: "25k+" },
              { label: "Expert Doctors", value: "150+" },
              { label: "Modern Rooms", value: "500+" },
              { label: "Awards Won", value: "20+" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-2">
                  {stat.value}
                </h3>
                <p className="text-blue-100 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section  no-5 */}
      {/* Working Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-500 font-medium">
              Simple steps to get your health back on track.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-blue-100 -translate-y-12"></div>

            {[
              {
                step: "01",
                title: "Book Appointment",
                desc: "Choose your preferred specialist and time slot from our easy online system.",
              },
              {
                step: "02",
                title: "Get Consultation",
                desc: "Meet our expert doctors for a detailed check-up and professional advice.",
              },
              {
                step: "03",
                title: "Start Recovery",
                desc: "Follow the prescribed treatment and get 24/7 support from our nursing staff.",
              },
            ].map((item, index) => (
              <div key={index} className="relative z-10 text-center group">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-3xl font-black mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-50">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section --- no-6 */}
      {/* Emergency CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>

            <div className="relative z-10 max-w-xl">
              <span className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">
                24/7 Emergency Service
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                In Case of Emergency, <br />
                <span className="text-blue-500">Call Us Immediately!</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium mb-8">
                Our dedicated emergency medical team is always ready to provide
                rapid response and critical care services anytime you need.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition shadow-xl shadow-blue-900/20">
                  Call +1-800-MEDICARE
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-black text-lg transition backdrop-blur-md">
                  Find Our Location
                </button>
              </div>
            </div>

            <div className="relative z-10 hidden lg:block">
              {/* You can put a doctor image or a medical shield icon here */}
              <div className="w-64 h-64 bg-blue-600 rounded-[40px] rotate-12 flex items-center justify-center shadow-2xl shadow-blue-600/50 overflow-hidden">
                <span className="text-white text-9xl font-black -rotate-12 opacity-30">
                  H
                </span>
                <div className="absolute inset-0 flex items-center justify-center -rotate-12">
                  <span className="text-white font-bold text-center leading-none">
                    HIGH QUALITY
                    <br />
                    CARE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* parant close div */}
    </div>
  );
};

export default Home;
