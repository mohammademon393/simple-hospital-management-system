import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaStethoscope,
} from "react-icons/fa";
import { Link } from "react-router";

const Specialists = () => {
  const [filter, setFilter] = useState("All");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Cardiologist",
      category: "Cardiology",
      img: "https://i.ibb.co/v4K36Rp5/Dr-Sarah-Johnson2-removebg-preview.png",
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      role: "Senior Neurologist",
      category: "Neurology",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      role: "Pediatric Specialist",
      category: "Pediatrics",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      role: "Orthopedic Surgeon",
      category: "Orthopedics",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Dr. Sophia Miller",
      role: "Heart Specialist",
      category: "Cardiology",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "Dr. Robert Fox",
      role: "Brain Surgeon",
      category: "Neurology",
      img: "https://images.unsplash.com/photo-1612349316228-5942a9b489c2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      name: "Dr. Linda Zhao",
      role: "Child Specialist",
      category: "Neurology",
      img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      name: "Dr. David Smith",
      role: "Bone Specialist",
      category: "Orthopedics",
      img: "https://i.ibb.co/zh2Cj4zZ/Dr-David-Smith-removebg-preview-1.png",
    },
    {
      id: 9,
      name: "Dr. Anna White",
      role: "Interventional Cardiologist",
      category: "Cardiology",
      img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 10,
      name: "Dr. Kevin Hart",
      role: "Neuro-Consultant",
      category: "Neurology",
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 11,
      name: "Dr. Lisa Ray",
      role: "Pediatric Resident",
      category: "Pediatrics",
      img: "https://i.ibb.co/DDGfbjRk/Dr-Lisa-Ray-removebg-preview.png",
    },
    {
      id: 12,
      name: "Dr. Steven Strange",
      role: "Orthopedic Expert",
      category: "Orthopedics",
      img: "https://i.ibb.co/BKtJ16B4/Dr-Steven-Strange-removebg-preview.png",
    },
  ];

  const categories = [
    "All",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
  ];

  const filteredDoctors =
    filter === "All"
      ? doctors
      : doctors.filter((doc) => doc.category === filter);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Meet Our <span className="text-blue-600">Specialists</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto mb-10">
            Our team of world-class healthcare professionals is dedicated to
            providing you with the best medical care possible.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto mb-6">
          <Link to="/about" className="px-10 text-blue-600 hover:underline">
          ← Back to About
        </Link>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="h-64 bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-1 rounded-full text-xs font-bold mb-4">
                  <FaStethoscope /> {doc.role}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {doc.name}
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-6">
                  Johns Hopkins University Graduate
                </p>

                {/* Socials */}
                <div className="flex justify-center gap-4">
                  <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center">
                    <FaLinkedin />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center">
                    <FaTwitter />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-red-400 hover:text-white transition-all flex items-center justify-center">
                    <FaEnvelope />
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-8 flex justify-center">
                <Link
                  to="/bookAppointment"
                  className="w-full text-center px-5 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialists;
