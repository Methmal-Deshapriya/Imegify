import React from "react";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";
import Description from "../components/Description";
import Steps from "../components/Steps";
import Header from "../components/Header";
const Home = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-orange-50">
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </div>
  );
};

export default Home;
