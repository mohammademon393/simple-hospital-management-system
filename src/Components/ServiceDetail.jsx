import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  // সার্ভিস অনুযায়ী ডেটা অবজেক্ট
  const serviceData = {
    cardiology: {
      title: "Cardiology Department",
      desc: "Our cardiology department offers comprehensive heart care, including advanced diagnostics and surgical procedures.",
      img: "https://i.ibb.co/jk7Ts5Kp/Diagnostic-Lab.jpg",
      points: [
        "Heart Surgery",
        "ECG & Stress Testing",
        "Pacemaker Installation",
        "Chest Pain Clinic",
      ],
    },
    "general-checkup": {
      title: "General Checkup",
      desc: "Routine health screenings to ensure your body is functioning at its best and to catch potential issues early.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
      points: [
        "Full Body Screening",
        "Blood Pressure Monitoring",
        "Blood Sugar Test",
        "Physician Consultation",
      ],
    },
    "diagnostic-lab": {
      title: "Diagnostic Lab",
      desc: "State-of-the-art laboratory services providing accurate results for all clinical tests.",
      img: "https://i.ibb.co/hJdJHm0G/Diagnostic-Lab.png",
      points: [
        "Blood Analysis",
        "X-Ray & Imaging",
        "Hormonal Tests",
        "Rapid Result Delivery",
      ],
    },
    orthopedics: {
      title: "Orthopedics",
      desc: "Specialized care for bones, joints, and ligaments with modern surgical and therapy options.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
      points: [
        "Fracture Treatment",
        "Joint Replacement",
        "Sports Injuries",
        "Physical Therapy",
      ],
    },
    pediatrics: {
      title: "Pediatrics",
      desc: "Compassionate healthcare for infants, children, and adolescents in a friendly environment.",
      img: "https://i.ibb.co/nsMZwD8f/Pediatrics.png",
      points: [
        "Vaccination",
        "Growth Monitoring",
        "Newborn Care",
        "Pediatric Surgery",
      ],
    },
    pharmacy: {
      title: "24/7 Pharmacy",
      desc: "In-hospital pharmacy providing genuine medicines and healthcare supplies anytime.",
      img: "https://i.ibb.co/tMCVVpLk/Pharmacy.jpg",
      points: [
        "Prescription Medicines",
        "Home Delivery",
        "Health Supplements",
        "Surgical Supplies",
      ],
    },
  };

  // বর্তমান সার্ভিসের ডেটা খুঁজে বের করা (অথবা ডিফল্ট কার্ডিওলজি)
  const data =
    serviceData[serviceName.toLowerCase().replace(/\s+/g, "-")] ||
    serviceData["cardiology"];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 font-bold hover:text-blue-600 transition-all mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Services
        </button>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Image Side */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="lg:w-1/2 w-full">
            <span className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              Specialized Care
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-8">
              {data.title}
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              {data.desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {data.points.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100"
                >
                  <FaCheckCircle className="text-blue-500" />
                  <span className="font-bold text-slate-700">{p}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to={"/bookAppointment"}
                onClick={() => navigate("/bookAppointment")}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-blue-200"
              >
                Book Appointment
              </Link>
              <Link to={'/contact'}
                className="flex items-center gap-3 border-2 border-slate-100 px-8 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all"
              >
                <FaPhoneAlt className="text-blue-600" /> Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
