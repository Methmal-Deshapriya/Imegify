import React from "react";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";
import Description from "../components/Description";
import Steps from "../components/Steps";
import Header from "../components/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </div>
  );
};

export default Home;
