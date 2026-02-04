import React from "react";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";

const AmbulanceDetails = () => {
  const ambulances = [
    {
      id: 1,
      type: "ICU Ventilator Ambulance",
      image: "🚑", // এখানে ইমেজ লিঙ্ক বসাতে পারো
      price: "$150 / Trip",
      features: [
        "Advanced Ventilator",
        "Cardiac Monitor",
        "Expert Paramedics",
        "Emergency Meds",
      ],
      status: "Available",
      color: "red",
    },
    {
      id: 2,
      type: "Standard Oxygen Ambulance",
      image: "🚐",
      price: "$80 / Trip",
      features: [
        "Oxygen Cylinder",
        "Stretcher",
        "First Aid Kit",
        "Basic Life Support",
      ],
      status: "Available",
      color: "blue",
    },
    {
      id: 3,
      type: "Neonatal (NICU) Ambulance",
      image: "👶",
      price: "$200 / Trip",
      features: [
        "Infant Incubator",
        "Pediatric Specialist",
        "Temperature Control",
        "Specialized Care",
      ],
      status: "On Call",
      color: "purple",
    },
    {
      id: 4,
      type: "Air Ambulance (Helicopter)",
      image: "🚁",
      price: "$1500 / Trip",
      features: [
        "Long Distance",
        "Critical Care Team",
        "Fastest Transport",
        "Global Reach",
      ],
      status: "Available",
      color: "teal",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
            Emergency Fleet
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4">
            Our <span className="text-red-600">Ambulance</span> Services
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            We provide a wide range of emergency transport services equipped
            with modern medical technology and expert staff.
          </p>
        </div>

        {/* Ambulance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ambulances.map((bus) => (
            <div
              key={bus.id}
              className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-8 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Visual Side */}
              <div
                className={`w-full md:w-48 h-48 bg-${bus.color}-50 rounded-[32px] flex items-center justify-center text-7xl`}
              >
                {bus.image}
              </div>

              {/* Info Side */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {bus.type}
                    </h3>
                    <p className="text-red-600 font-bold text-lg">
                      {bus.price}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold ${bus.status === "Available" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}
                  >
                    {bus.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {bus.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-slate-600 font-medium"
                    >
                      <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2">
                    <FaPhoneAlt size={14} /> Call Now
                  </button>
                  <button className="flex-1 border-2 border-slate-100 text-slate-900 py-4 rounded-2xl font-bold hover:bg-slate-50 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info Bar */}
        <div className="mt-16 bg-blue-600 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-around text-white gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <FaClock className="text-4xl text-blue-200" />
            <div>
              <h4 className="font-bold text-xl">24/7 Availability</h4>
              <p className="text-blue-100 text-sm">
                Call us anytime, even on holidays.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaLocationArrow className="text-4xl text-blue-200" />
            <div>
              <h4 className="font-bold text-xl">GPS Tracking</h4>
              <p className="text-blue-100 text-sm">
                Real-time tracking of your ambulance.
              </p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg hover:shadow-2xl transition-all">
            Emergency Hotline: 1066
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceDetails;
