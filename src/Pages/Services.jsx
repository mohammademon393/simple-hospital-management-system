import React from "react";
import {
  FaHeartbeat,
  FaStethoscope,
  FaMicroscope,
  FaWheelchair,
  FaBaby,
  FaCapsules,
  FaPhoneAlt,
  FaArrowRight,
  FaVideo,
} from "react-icons/fa";
import { Link } from "react-router";

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

          <div className="z-10 text-center md:text-left ">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Emergency Help?
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              Our emergency department is available 24/7. Call us anytime for
              immediate assistance.
            </p>
          </div>

          <Link to="/emergency">
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
          </Link>
        </div>
      </section>
      {/* more section 1 */}
      {/* Ambulance Service Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-red-50 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-red-100">
            {/* Left Side: Visual Representation */}
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[300px] md:h-[400px] bg-white rounded-[32px] shadow-2xl shadow-red-200 flex items-center justify-center overflow-hidden border-4 border-white">
                {/* You can replace this div with an actual Ambulance Image */}
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-pulse">🚑</div>
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full font-black tracking-tighter animate-bounce">
                    EMERGENCY 911
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-3xl shadow-xl hidden md:block">
                <p className="text-sm font-bold text-red-400 mb-1 italic">
                  Average Response Time
                </p>
                <h4 className="text-3xl font-black">10 - 15 Min</h4>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                24/7 Swift <span className="text-red-600">Ambulance</span>{" "}
                <br />
                Deployment System
              </h2>
              <p className="text-slate-600 text-lg font-medium mb-8 leading-relaxed">
                In critical moments, every second counts. Our fleet of high-tech
                ICU ambulances is strategically stationed across the city to
                reach you within minutes.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    title: "ICU On Wheels",
                    desc: "Equipped with ventilators and monitors.",
                  },
                  {
                    title: "Oxygen Support",
                    desc: "Continuous supply for respiratory care.",
                  },
                  {
                    title: "Trained Paramedics",
                    desc: "Expert staff for on-site stabilization.",
                  },
                  {
                    title: "GPS Tracking",
                    desc: "Real-time tracking for patient's family.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-white text-[10px]">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-red-200 flex items-center gap-3">
                  <span className="animate-ping w-3 h-3 bg-white rounded-full"></span>
                  Call Ambulance Now
                </button> */}
                <Link
                  to="/ambulancesDetails"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-red-200 flex items-center gap-3"
                >
                  <span className="animate-ping w-3 h-3 bg-white rounded-full"></span>
                  All Ambulance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* more section 2 */}

      {/* main container close div */}
    </div>
  );
};

export default Services;
