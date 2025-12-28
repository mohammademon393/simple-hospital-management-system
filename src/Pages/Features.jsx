import React from "react";
import {
  FaCloudUploadAlt,
  FaShieldAlt,
  FaUserLock,
  FaChartLine,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

const Features = () => {
  const mainFeatures = [
    {
      title: "Cloud-Based Records",
      desc: "Access patient history and medical reports securely from anywhere, anytime with 99.9% uptime.",
      icon: <FaCloudUploadAlt />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Data Security",
      desc: "Bank-grade encryption to ensure patient confidentiality and compliance with health regulations.",
      icon: <FaShieldAlt />,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Role-Based Access",
      desc: "Specific dashboards for Doctors, Nurses, and Admins to manage tasks efficiently.",
      icon: <FaUserLock />,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Real-time Analytics",
      desc: "Visualize hospital performance, patient inflow, and financial growth with smart charts.",
      icon: <FaChartLine />,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Mobile Friendly",
      desc: "Manage your hospital on the go with our fully responsive and intuitive mobile interface.",
      icon: <FaMobileAlt />,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      title: "AI Diagnosis Support",
      desc: "Advanced AI tools to help doctors analyze reports and suggest preliminary insights.",
      icon: <FaRobot />,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
  ];

  return (
    // full features page container
    <div className="bg-white min-h-screen">
      {/* 1. Feature Header */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Powerful Features for Modern{" "}
            <span className="text-blue-600">Healthcare</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Everything you need to manage your hospital operations digitally,
            efficiently, and securely in one integrated platform.
          </p>
        </div>
      </section>

      {/* 2. Main Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mainFeatures.map((f, index) => (
            <div
              key={index}
              className="p-10 rounded-[35px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group"
            >
              <div
                className={`${f.bg} ${f.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition-transform`}
              >
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {f.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "How it Works" Highlight */}
      <section className="bg-blue-600 py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Seamless Integration <br /> For Your Workflow
            </h2>
            <p className="text-blue-100 text-lg">
              Our system is designed to be user-friendly. You can set up your
              entire hospital department in less than 24 hours.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                <span className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                  1
                </span>
                <p className="font-medium">Registration & Setup</p>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                <span className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                  2
                </span>
                <p className="font-medium">Import Staff & Patient Data</p>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                <span className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                  3
                </span>
                <p className="font-medium">Start Managing Operations</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Mockup or Image */}
            <img
              src="https://img.freepik.com/free-vector/dashboard-user-panel-interface-design_23-2148386184.jpg"
              alt="Dashboard Feature"
              className="rounded-3xl shadow-3xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Ready to upgrade your hospital?
        </h2>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
          Request a Live Demo
        </button>
      </section>
    </div>
  );
};

export default Features;
