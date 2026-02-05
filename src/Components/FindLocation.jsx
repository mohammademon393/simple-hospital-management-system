import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaDirections,
} from "react-icons/fa";
import { Link } from "react-router";

const FindLocation = () => {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <Link
            to="/"
            className="px-20 mx-14 text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
            Visit Us
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
            Find Our <span className="text-blue-600">Location</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            We are located in the heart of the city with 24/7 accessibility.
            Find the easiest route to reach us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side: Contact Info & Hours */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl mb-6">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Main Branch
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                123 Healthcare Plaza, Medical Center Drive,
                <br />
                Dhaka, Bangladesh - 1212
              </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h4 className="text-lg font-black text-slate-900 mb-4">
                Contact Details
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-600 font-medium">
                  <FaPhoneAlt className="text-blue-500" />
                  <span>+880 1234-567890</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 font-medium">
                  <FaEnvelope className="text-blue-500" />
                  <span>info@medicare-connect.com</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-slate-900 text-white p-8 rounded-[32px] shadow-xl shadow-slate-900/20">
              <div className="flex items-center gap-3 mb-6">
                <FaClock className="text-blue-400 text-xl" />
                <h4 className="text-lg font-black">Opening Hours</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-slate-400">Emergency</span>
                  <span className="font-bold text-green-400">
                    24/7 Available
                  </span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-slate-400">OPD Hours</span>
                  <span>09:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Pharmacy</span>
                  <span>Open 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Map Integration */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 h-[500px] md:h-full min-h-[500px] relative overflow-hidden group">
              {/* Google Map Iframe (Placeholder) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6cb9589713a7c42!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                className="w-full h-full rounded-[32px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Get Directions Overlay Button */}
              <div className="absolute bottom-10 right-10">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-2xl hover:bg-slate-900 transition-all">
                  <FaDirections className="text-xl" /> Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transport Tips */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "By Bus",
              text: "Take any bus heading to City Center. Exit at Health Plaza Stop.",
            },
            {
              title: "By Car",
              text: "Free basement parking available for patients and visitors.",
            },
            {
              title: "By Train",
              text: "15 minutes walk from Central Railway Station.",
            },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl"
            >
              <h5 className="font-bold text-slate-900 mb-1 italic">
                {tip.title}
              </h5>
              <p className="text-sm text-slate-500 font-medium">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindLocation;
