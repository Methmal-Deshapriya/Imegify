import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./src/pages/Home";
import Result from "./src/pages/Result";
import BuyCredit from "./src/pages/BuyCredit";
import Navbar from "./src/components/Navbar";
import Login from "./src/components/Login";
import Footer from "./src/components/Footer";
import { AppContext } from "./src/context/AppContext";
import { useContext } from "react";

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <>
      <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
        <div>
          <ToastContainer position="bottom-right" />
          {showLogin && <Login />}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/buy" element={<BuyCredit />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
