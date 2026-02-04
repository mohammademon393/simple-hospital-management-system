import React from "react";
import {
  FaCheckCircle,
  FaUserMd,
  FaAward,
  FaProcedures,
  FaHospital,
} from "react-icons/fa";

const About = () => {
  // ডামি ডাক্তারদের ডেটা
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      img: "https://readymadeui.com/team-1.webp",
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      role: "Neurologist",
      img: "https://readymadeui.com/team-2.webp",
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      role: "Orthopedic",
      img: "https://readymadeui.com/team-3.webp",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            About <span className="text-blue-600">MediCare</span> Connect
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We are dedicated to providing the best healthcare management
            experience with cutting-edge technology and compassionate care.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://img.freepik.com/free-vector/medical-video-call-consultation-concept_23-2148523311.jpg"
            alt="Our Mission"
            className="rounded-3xl shadow-2xl border-8 border-slate-50"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Mission to Provide World-Class Healthcare
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Since our founding, MediCare Connect has been at the forefront of
            medical innovation. We believe that managing a hospital should be as
            seamless as possible so that doctors can focus on what matters
            most—saving lives.
          </p>
          <ul className="space-y-4">
            {[
              "Digitalized health records for every patient",
              "24/7 emergency support and quick response",
              "Highly qualified and experienced medical team",
              "Advanced diagnostic and laboratory facilities",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-slate-700 font-medium"
              >
                <FaCheckCircle className="text-blue-600" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Stats Section (Efficient & Modern) */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <FaHospital className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-extrabold text-white">15+</h3>
            <p className="text-slate-400 uppercase tracking-widest text-xs mt-2 font-bold">
              Years Experience
            </p>
          </div>
          <div>
            <FaUserMd className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-extrabold text-white">120+</h3>
            <p className="text-slate-400 uppercase tracking-widest text-xs mt-2 font-bold">
              Specialist Doctors
            </p>
          </div>
          <div>
            <FaProcedures className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-extrabold text-white">10k+</h3>
            <p className="text-slate-400 uppercase tracking-widest text-xs mt-2 font-bold">
              Happy Patients
            </p>
          </div>
          <div>
            <FaAward className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-extrabold text-white">25+</h3>
            <p className="text-slate-400 uppercase tracking-widest text-xs mt-2 font-bold">
              Medical Awards
            </p>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Meet Our Specialists
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-bold text-slate-900">
                  {doctor.name}
                </h4>
                <p className="text-blue-600 font-medium mb-4">{doctor.role}</p>
                <button className="text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* more section ---1 */}
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Hear directly from those who have experienced our world-class
              healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Cardiology Patient",
                text: "The doctors here are extremely professional. The care I received was top-notch and the staff was very supportive.",
              },
              {
                name: "Sarah Smith",
                role: "Pediatric Care",
                text: "Best hospital for kids! The environment is very friendly and the pediatricians are highly experienced.",
              },
              {
                name: "Robert Wilson",
                role: "Regular Checkup",
                text: "I love the quick appointment system. No long queues, and everything is managed digitally. Highly recommended!",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:shadow-xl transition duration-300"
              >
                <div className="flex gap-1 text-orange-400 mb-4 text-xl">
                  ★★★★★
                </div>
                <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-blue-600 font-bold">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* more section ---2 */}
      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-slate-500 font-medium">
              Everything you need to know about our services and policies.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How do I book an appointment?",
                a: "You can book an appointment easily through our website or by calling our 24/7 helpline number.",
              },
              {
                q: "Do you accept international health insurance?",
                a: "Yes, we accept major international and local health insurance providers.",
              },
              {
                q: "Is emergency service available 24/7?",
                a: "Absolutely. Our emergency department and ambulance services are open 24 hours a day, 7 days a week.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 font-bold text-slate-900 text-lg">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-blue-600">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* parant close div */}
    </div>
  );
};

export default About;
