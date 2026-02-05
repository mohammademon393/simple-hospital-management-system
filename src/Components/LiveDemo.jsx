import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router";
import {
  FaCircle,
  FaUserClock,
  FaBed,
  FaHospitalUser,
  FaMicroscope,
  FaArrowLeft,
} from "react-icons/fa";

const LiveDemo = () => {
  const [liveStats, setLiveStats] = useState({
    waiting: 12,
    availableBeds: 45,
    activeDoctors: 28,
    emergencyQueue: 3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) => ({
        ...prev,
        waiting: prev.waiting + (Math.random() > 0.5 ? 1 : -1),
        availableBeds: prev.availableBeds + (Math.random() > 0.8 ? 1 : -1),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-900 min-h-screen text-white">
      <div className="container mx-auto px-6">
        {/* Simple Back Button */}
                <Link
                  to="/features"
                  className="flex items-center gap-2 text-slate-200 font-bold hover:text-blue-600 transition-all mb-10 group"
                >
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
                  Back to Features
                </Link>
        {/* Header with Live Indicator */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-bold mb-2">
              <FaCircle className="animate-pulse text-xs" /> LIVE SYSTEM MONITOR
            </div>
            <h1 className="text-4xl md:text-5xl font-black italic">
              Hospital <span className="text-blue-500">Real-Time</span> Demo
            </h1>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
            <p className="text-slate-400 text-sm font-medium">System Status:</p>
            <h4 className="text-green-400 font-bold flex items-center gap-2">
              Operational{" "}
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            </h4>
          </div>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: "Patients Waiting",
              value: liveStats.waiting,
              icon: <FaUserClock />,
              color: "blue",
            },
            {
              label: "Available Beds",
              value: liveStats.availableBeds,
              icon: <FaBed />,
              color: "green",
            },
            {
              label: "On-Duty Doctors",
              value: liveStats.activeDoctors,
              icon: <FaHospitalUser />,
              color: "purple",
            },
            {
              label: "Emergency Queue",
              value: liveStats.emergencyQueue,
              icon: <FaMicroscope />,
              color: "red",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all"
            >
              <div className={`text-2xl mb-4 text-${stat.color}-400`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Simulation Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity Log */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              Activity Log{" "}
              <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
                Updates every 5s
              </span>
            </h3>
            <div className="space-y-6">
              {[
                {
                  time: "Just Now",
                  msg: "Ambulance #402 deployed to Sector 12",
                  type: "Emergency",
                },
                {
                  time: "2 mins ago",
                  msg: "New appointment booked for Cardiology",
                  type: "Booking",
                },
                {
                  time: "5 mins ago",
                  msg: "Operation Theater 3 marked as available",
                  type: "Internal",
                },
                {
                  time: "10 mins ago",
                  msg: "Lab report generated for Patient ID: #8821",
                  type: "Lab",
                },
              ].map((log, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 border-b border-white/5 pb-6 last:border-0"
                >
                  <span className="text-slate-500 text-xs font-bold whitespace-nowrap pt-1">
                    {log.time}
                  </span>
                  <div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase mb-2 inline-block ${
                        log.type === "Emergency"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {log.type}
                    </span>
                    <p className="text-slate-200 font-medium">{log.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel: Interactive Components */}
          <div className="space-y-8">
            <div className="bg-blue-600 rounded-[32px] p-8 shadow-2xl shadow-blue-600/20">
              <h4 className="text-xl font-black mb-4">Patient Check-in</h4>
              <p className="text-blue-100 text-sm mb-6">
                Experience our rapid digital entry system for new patients.
              </p>
              <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black hover:bg-slate-100 transition">
                Launch Kiosk Mode
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h4 className="text-xl font-black mb-4">Bed Management</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-400">ICU Capacity</span>
                  <span>85% Full</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-[85%]"></div>
                </div>
                <div className="flex justify-between items-center text-sm font-medium pt-2">
                  <span className="text-slate-400">General Ward</span>
                  <span>40% Full</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium mb-6 italic">
            Note: This is a simulation for demonstration purposes.
          </p>
          <button className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-lg hover:bg-blue-500 hover:text-white transition-all">
            Try Full Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
