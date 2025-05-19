import React from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../components/Hero.jsx";
import Feature from "../components/Feature.jsx";
import ExclusiveFeatures from "../components/ExclusiveFeatures.jsx";
import StrykeXAdvantage from "../components/StrykeXAdvantage.jsx";
import Works from "../components/Works.jsx";
import Pricing from "../components/Pricing.jsx";

const LandingPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Feature />
      <ExclusiveFeatures />
      <StrykeXAdvantage />
      <Works />
      <Pricing />
    </MainLayout>
  );
};

export default LandingPage;
