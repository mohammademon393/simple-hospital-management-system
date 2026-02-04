import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

// Project Live Link: 
// https://majestic-figolla-5df234.netlify.app/

const Root = () => {
  return (
    <div className="font-sans">
        <ScrollToTop></ScrollToTop>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> 
      </main>
      {/* <Footer /> */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
