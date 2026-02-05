import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaDirections,
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
      <div className="lg:col-span-2 max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-white p-4 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 h-[500px] md:h-full min-h-[500px] relative overflow-hidden group">
          {/* Google Map Iframe (Placeholder) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6cb9589713a7c42!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            className="w-full mx-auto h-[450px] rounded-[32px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
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
  );
};

export default Contact;
