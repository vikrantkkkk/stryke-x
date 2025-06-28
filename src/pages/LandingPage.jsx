import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../components/Hero.jsx";
import Feature from "../components/Feature.jsx";
import ExclusiveFeatures from "../components/ExclusiveFeatures.jsx";
import StrykeXAdvantage from "../components/StrykeXAdvantage.jsx";
import Works from "../components/Works.jsx";
import Pricing from "../components/Pricing.jsx";
import Faq from "../components/Faq.jsx";
import LightningFast from "../components/LightningFast.jsx";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const yOffset = -50;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);
  return (
    <MainLayout>
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Feature />
      </div>
      <div>
        <ExclusiveFeatures />
      </div>
      <div>
        <StrykeXAdvantage />
      </div>
      <div id="algos">
        <Works />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div>
        <Faq />
      </div>
      <LightningFast />
    </MainLayout>
  );
};

export default LandingPage;
