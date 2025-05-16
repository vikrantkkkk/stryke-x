import React from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../components/Hero.jsx";
import Feature from "../components/Feature.jsx";

const LandingPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Feature />
    </MainLayout>
  );
};

export default LandingPage;
