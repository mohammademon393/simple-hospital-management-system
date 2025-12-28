import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* 1. Header Section */}
      <section className="bg-white border-b border-slate-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Get In <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Have questions or need medical assistance? Our team is here to help
          you 24/7. Reach out to us anytime.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. Contact Info Cards (Left Side) */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                Call Us
              </p>
              <p className="text-lg font-bold text-slate-800">
                +1 (800) 123-4567
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-md transition">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-xl">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                Email Us
              </p>
              <p className="text-lg font-bold text-slate-800">
                help@medicare.com
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-md transition">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-xl">
              <FaClock />
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                Working Hours
              </p>
              <p className="text-lg font-bold text-slate-800">
                24/7 Emergency Open
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-blue-600 p-8 rounded-[32px] text-white">
            <h4 className="font-bold mb-4">Follow Our Updates</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Contact Form (Center/Right Side) */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Send us a Message
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="w-full h-[400px] bg-slate-200 rounded-[40px] overflow-hidden relative shadow-inner">
          {/* Fake Map Placeholder - You can replace this with a real Google Map iframe */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
            <FaMapMarkerAlt className="text-5xl text-red-500 mb-4 animate-bounce" />
            <p className="font-bold text-lg">MediCare Plaza, Health City, NY</p>
            <p className="text-sm">Interactive Map Integration Here</p>
          </div>
          <img
            src="https://api.maptiler.com/maps/basic-v2/static/-74.006,40.7128,12/1200x400.png?key=get_your_own_key"
            alt="Map"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
