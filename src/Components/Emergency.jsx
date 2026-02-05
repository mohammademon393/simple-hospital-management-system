import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaAmbulance,
  FaTint,
  FaStethoscope,
  FaSkullCrossbones,
} from "react-icons/fa";

const Emergency = () => {
  const navigate = useNavigate();

  const emergencyServices = [
    {
      id: 1,
      title: "24/7 Ambulance",
      desc: "Swift ICU & Life Support ambulances ready to deploy within 10-15 minutes.",
      contact: "+880 1999-000000",
      icon: <FaAmbulance />,
      color: "red",
    },
    {
      id: 2,
      title: "Emergency Surgery",
      desc: "Instant trauma care and life-saving surgeries with expert surgeons on call.",
      contact: "Hotline: 1066",
      icon: <FaStethoscope />,
      color: "blue",
    },
    {
      id: 3,
      title: "Blood Bank",
      desc: "Immediate access to all blood groups and rare units in critical situations.",
      contact: "+880 1888-111222",
      icon: <FaTint />,
      color: "red",
    },
    {
      id: 4,
      title: "Poison Control",
      desc: "Specialized unit for chemical exposure, drug overdose, and toxic ingestion.",
      contact: "Hotline: 0911",
      icon: <FaSkullCrossbones />,
      color: "orange",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Simple Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 font-bold hover:text-blue-600 transition-all mb-10 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Home
        </button>

        {/* Header */}
        <div className="bg-red-600 rounded-[40px] p-10 md:p-16 text-white mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Immediate Help Required?
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
              Emergency <br /> Medical Services
            </h1>
            <p className="max-w-xl text-red-100 font-medium text-lg leading-relaxed">
              If you are facing a life-threatening situation, please call our
              emergency hotline immediately. Our response team is available
              24/7.
            </p>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 text-[250px] opacity-10 rotate-12 -mr-20 -mt-10 font-black">
            !
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {emergencyServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:bg-white hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 
                ${
                  service.color === "red"
                    ? "bg-red-100 text-red-600"
                    : service.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-orange-100 text-orange-600"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                {service.desc}
              </p>
              <a
                href={`tel:${service.contact}`}
                className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl group-hover:border-red-500 transition-all"
              >
                <span className="font-black text-slate-900">
                  {service.contact}
                </span>
                <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center">
                  <FaPhoneAlt size={14} />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center bg-slate-900 rounded-[32px] p-10 text-white">
          <h4 className="text-xl font-bold mb-2">
            Emergency Response Protocol
          </h4>
          <p className="text-slate-400 max-w-2xl mx-auto italic font-medium">
            "We prioritize critical cases based on severity. Our trauma center
            is fully integrated with GPS-enabled ambulance dispatch."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
