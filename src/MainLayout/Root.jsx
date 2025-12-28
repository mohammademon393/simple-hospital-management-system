import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
// import Footer from "../components/Footer"; // যদি ফুটার থাকে

const Root = () => {
  return (
    <div className="font-sans">
        <ScrollToTop></ScrollToTop>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* এখানে সব পেজ রেন্ডার হবে */}
      </main>
      {/* <Footer /> */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
