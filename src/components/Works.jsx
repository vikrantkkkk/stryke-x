import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import card7 from "../assets/png/card7.png";
import card8 from "../assets/png/card8.png";
import card9 from "../assets/png/card9.png";
import strykexwhite from "../assets/svg/strykexwhite.svg";
import algos from "../assets/svg/algos.svg";
import link from "../assets/svg/link.svg";
import deploy from "../assets/svg/deploy.svg";
import cardarrow from "../assets/svg/cardarrow.svg";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const dummyImages = [card7, card8, card9];

const leftContent = [
  {
    number: 1,
    icon: algos,
    title: "Sign Up For StrykeX Algos",
    description:
      "Select your subscription plan as per your requirements. We have two plan types, StrykeX Gold and StrykeX Legend. You can checkout our pricing here.",
  },
  {
    number: 2,
    icon: link,
    title: "Connect Your Trading Account",
    description:
      "Connect your demat account with StrykeX to activate your account. All your trades will automatically be executed from your own broker account. To open a StrykeX free demat account click here",
  },
  {
    number: 3,
    icon: deploy,
    title: "Deploy Algo Strategies in Live Markets",
    description:
      "Achieve lightning-fast execution with our proprietary trading engine—fully automated and equipped with customizable exit rules like trailing stop-loss, re-entry, partial profit booking, and advanced risk management.",
  },
];

const card = [
  {
    icon: cardarrow,
    title: "Deploy Algo in Live Markets",
    description:
      "Achieve lightning-fast execution with our proprietary trading engine",
  },
  {
    icon: cardarrow,
    title: "Deploy Algo in Live Markets",
    description:
      "Achieve lightning-fast execution with our proprietary trading engine",
  },
  {
    icon: cardarrow,
    title: "Deploy Algo in Live Markets",
    description:
      "Achieve lightning-fast execution with our proprietary trading engine",
  },
  {
    icon: cardarrow,
    title: "Deploy Algo in Live Markets",
    description:
      "Achieve lightning-fast execution with our proprietary trading engine",
  },
];

const Works = () => {
  const triggerRefs = [useRef(null), useRef(null), useRef(null)];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observers = triggerRefs.map((ref, i) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(i);
          }
        },
        {
          rootMargin: "-20% 0px -50% 0px",
          threshold: 0.3,
        }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="bg-[#01041A] text-white flex flex-col justify-center items-center pb-20 w-full px-6 md:px-40">
      <AnimateFromInside>
        <p className="font-semibold text-[32px] md:text-[64px] leading-[100%] mb-4">
          How It Works?
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <p className="text-[18px] md:text-[20px] text-[#FFFFFFBF] max-w-4xl mx-auto mb-12">
          Get started with algo trading in three easy steps.
        </p>
      </AnimateFromInside>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-6 w-full relative min-h-[1150px]">
        {/* Left Side */}
        <div className="relative flex flex-col justify-between items-end pr-24">
          {leftContent.map((item, index) => (
            <div
              key={index}
              ref={triggerRefs[index]}
              className="max-w-[479px] w-full min-h-[300px] flex flex-col justify-start items-start gap-4"
            >
              <img src={item.icon} alt="" className="h-[43px]" />
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="text-sm text-[#FFFFFFBF]">{item.description}</p>
              <button className="flex justify-center items-center gap-4 bg-white mt-2 text-black text-[20px] leading-[100%] font-semibold rounded-full w-full py-3">
                Subscribe To{" "}
                <span>
                  <img src={strykexwhite} alt="strykexwhite" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Center Timeline */}
        <div className="flex flex-col items-center justify-between py-6 relative">
          <div className="border-[2px] border-dashed border-[#FFFFFF4D]/[0.3] absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full  text-white font-bold flex items-center justify-center z-10 transition-all duration-300 my-[120px] ${
                activeStep === i ? "scale-110 shadow-lg" : "opacity-70"
              }`}
              style={{
                background: "linear-gradient(180deg, #01041A 0%, #1F4399 100%)",
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Right Images */}
        <div className="flex flex-col justify-between items-start pl-24">
          {dummyImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={
                activeStep === index
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-[479px] min-h-[300px] flex items-center"
            >
              <img
                src={img}
                alt={`Step ${index + 1}`}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="w-full mt-16 flex flex-wrap justify-center gap-[41px]">
        {card.map((item, index) => (
          <AnimateFromInside>
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-4 w-[282px] p-4"
            >
              <img src={item.icon} alt={item.icon} className="h-[72px]" />
              <p className="font-semibold text-[32px] leading-[48px]">
                {item.title}
              </p>
              <p className="font-extralight text-[20px] leading-[32px] text-[#FFFFFFBF]/[0.75]">
                {item.description}
              </p>
            </div>
          </AnimateFromInside>
        ))}
      </div>
    </div>
  );
};

export default Works;
