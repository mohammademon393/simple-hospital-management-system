import React from "react";
import {
  FaHeartbeat,
  FaStethoscope,
  FaMicroscope,
  FaWheelchair,
  FaBaby,
  FaCapsules,
  FaPhoneAlt,
} from "react-icons/fa";

const Services = () => {
  const allServices = [
    {
      title: "Cardiology",
      desc: "Comprehensive heart care including diagnostics, surgery, and rehabilitation.",
      icon: <FaHeartbeat />,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "General Checkup",
      desc: "Routine health screenings and specialist consultations for all age groups.",
      icon: <FaStethoscope />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Diagnostic Lab",
      desc: "Advanced laboratory testing with high-precision equipment and fast results.",
      icon: <FaMicroscope />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Orthopedics",
      desc: "Expert treatment for bone, joint, and spinal disorders with modern tech.",
      icon: <FaWheelchair />,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Pediatrics",
      desc: "Specialized medical care for infants, children, and adolescents.",
      icon: <FaBaby />,
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Pharmacy",
      desc: "24/7 available pharmacy with genuine medicines and home delivery.",
      icon: <FaCapsules />,
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Medical Services
        </h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          We provide a wide range of medical services to ensure your health and
          well-being are always prioritized.
        </p>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div
                className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Read More <span className="text-xl">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Emergency Banner (Realistic Touch) */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

          <div className="z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Emergency Help?
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              Our emergency department is available 24/7. Call us anytime for
              immediate assistance.
            </p>
          </div>

          <div className="z-10 flex items-center gap-6 bg-white/10 border border-white/20 p-6 rounded-3xl backdrop-blur-md">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-blue-400 font-bold uppercase tracking-wider text-sm">
                Emergency Call
              </p>
              <p className="text-white text-2xl font-extrabold">
                +1 (800) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
