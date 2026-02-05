import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUserMd,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const BookAppointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // এখানে তুমি চাইলে API কল করতে পারো
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-lg border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            <FaCheckCircle />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Success!</h2>
          <p className="text-slate-500 font-medium mb-8">
            Your appointment request has been sent. We will confirm your time
            slot via email shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <Link
            to="/specialists"
            className="px-20 mx-14 text-blue-600 hover:underline"
          >
            ← Back to Specialists
          </Link>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-[48px] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row border border-slate-100">
          {/* Left Side: Info & Image */}
          <div className="md:w-2/5 bg-blue-600 p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-6">Book Your Visit</h2>
              <p className="text-blue-100 font-medium mb-10 leading-relaxed">
                Skip the waiting room. Schedule your consultation with our
                world-class specialists in just a few clicks.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <FaUserMd className="text-2xl text-blue-200" />
                  <div>
                    <h4 className="font-bold">Expert Doctors</h4>
                    <p className="text-xs text-blue-200">150+ Specialists</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <FaClock className="text-2xl text-blue-200" />
                  <div>
                    <h4 className="font-bold">Fast Response</h4>
                    <p className="text-xs text-blue-200">
                      Instant Confirmation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Side: Booking Form */}
          <div className="md:w-3/5 p-8 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Select Department
                </label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition appearance-none">
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Pediatrics</option>
                  <option>Orthopedics</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 flex items-center gap-2">
                    <FaClock className="text-blue-500" /> Preferred Time
                  </label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition">
                    <option>Morning (09:00 AM - 12:00 PM)</option>
                    <option>Afternoon (02:00 PM - 05:00 PM)</option>
                    <option>Evening (06:00 PM - 09:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Message for Doctor (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe your symptoms briefly..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                // onClick={() =>
                //   Swal.fire({
                //     position: "top-center",
                //     icon: "success",
                //     title: "Your booking has been success!",
                //     showConfirmButton: false,
                //     timer: 1500,
                //   })
                // }
                type="submit"
                className="w-full py-5 bg-slate-900 text-white rounded-[20px] font-black text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200"
              >
                Confirm Booking Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
