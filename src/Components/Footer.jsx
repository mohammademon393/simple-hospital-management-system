import React from "react";
import { Link } from "react-router-dom";
import {
  FaHospitalSymbol,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <FaHospitalSymbol className="text-blue-500 text-3xl" />
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Medi<span className="text-blue-500">Care</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Providing world-class healthcare management solutions to simplify
              medical operations and enhance patient care globally.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-blue-400 transition">
                  Key Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="hover:text-blue-400 cursor-pointer transition">
                General Consultation
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Cardiology Unit
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Emergency Care
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Diagnostic Center
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition">
                Online Pharmacy
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span>
                  123 Medical Plaza, <br /> Health City, NY 10012
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>contact@medicare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Center Aligned */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm mb-4">
            © {new Date().getFullYear()} MediCare Connect. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
