import React, { useState } from "react";
import light3 from "../assets/png/light3.png";
import hoverx from "../assets/svg/hoverx.svg";
import verified1 from "../assets/svg/verified1.svg";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const Pricing = () => {
  // Sample pricing data
  const pricingPlans = [
    {
      title: "YEARLY",
      price: "₹12,999",
      duration: "/Year",
      oldPrice: "₹20,749/Year",
      features: [
        "4 x LIVE Algo Deployments",
        "3,000 Backtest Credits",
        "10 x Premium Algo Strategies",
        "12 x Non Directional Templates",
        "Algo Trading Course",
        "24/7 customer support",
      ],
    },
    {
      title: "MONTHLY",
      price: "₹1,499",
      duration: "/Month",
      oldPrice: "₹2,499/Month",
      features: [
        "4 x LIVE Algo Deployments",
        "250 Backtest Credits",
        "3 x Premium Algo Strategies",
        "12 x Non Directional Templates",
        "Algo Trading Course",
        "24/7 customer support",
      ],
    },
    {
      title: "QUARTERLY",
      price: "₹3,749",
      duration: "/Quarter",
      oldPrice: "₹8,749/Quarter",
      features: [
        "4 x LIVE Algo Deployments",
        "750 Backtest Credits",
        "6 x Premium Algo Strategies",
        "12 x Non Directional Templates",
        "Algo Trading Course",
        "24/7 customer support",
      ],
    },
  ];

  const [activeButton, setActiveButton] = useState("StrykeX Pro"); // Default active button

  const handleToggle = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-[#01041A] text-white flex flex-col justify-center items-center gap-4 md:py-16 pb-16 w-full px-6 md:px-40 relative overflow-hidden z-10">
      {/* Background Image */}
      <img
        src={light3}
        alt="Background Light"
        className="absolute bottom-0 left-0 w-full md:h-auto h-full opacity-50 z-[-1]"
      />

      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <AnimateFromInside>
          <p className="font-semibold text-[40px] md:text-[60px] leading-[100%]  font-degular">
            Pricing
          </p>
        </AnimateFromInside>
        {/* Toggle Buttons */}
        <div className="flex rounded-full overflow-hidden bg-[#FFFFFF1A]/[0.1] gap-2 p-1">
          <button
            className={`md:px-12 px-4 md:py-3 py-[10px] transition md:text-base text-sm font-medium font-degular
              ${
                activeButton === "StrykeX Pro"
                  ? "bg-gradient-to-r from-[#3FADFF] to-[#184ABE] text-white rounded-full"
                  : ""
              }`}
            onClick={() => handleToggle("StrykeX Pro")}
          >
            StrykeX Pro
          </button>
          <button
            className={`md:px-12 px-4 md:py-3 py-[10px] transition md:text-base text-sm font-medium font-degular
              ${
                activeButton === "StrykeX Legend"
                  ? "bg-gradient-to-r from-[#3FADFF] to-[#184ABE] text-white rounded-full"
                  : ""
              }`}
            onClick={() => handleToggle("StrykeX Legend")}
          >
            StrykeX Legend
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-6 w-full mt-[30px]">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative group border hover:scale-105 border-white/20 rounded-[16px] p-6 md:w-[394px] w-[345px] flex flex-col justify-between gap-4 items-start text-left hover:border-gray-700/50 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm transition-all hover:shadow-[0_0_0_2px_rgba(59,130,246,0.5),0_10px_15px_-3px_rgba(59,130,246,0.2),0_4px_6px_-4px_rgba(59,130,246,0.2)]"
          >
            {/* Hover Stick */}
            <div
              className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[188px] h-[10px] rounded-b-[16px] hidden group-hover:block"
              style={{
                background: "linear-gradient(90deg, #3370FF 0%, #60A5FA 100%)",
              }}
            />

            {/* Hover Image (Top Right) */}
            <img
              src={hoverx}
              alt="Hover Effect"
              className="absolute top-4 right-2 hidden group-hover:block"
            />

            {/* Plan Title */}
            <h2 className="font-bold md:text-[20px] text-[17px] md:leading-[28px] leading-[24px] font-inter">
              {plan.title}
            </h2>

            {/* Pricing */}
            <div className="flex gap-2 items-baseline">
              <div>
                <span className="font-bold md:text-[36px] text-[31px] md:leading-[40px] leading-[35px] font-inter">
                  {plan.price}
                </span>
                <span className="font-bold md:text-[24px] text-[20px] md:leading-[40px] leading-[34px] font-inter">
                  {plan.duration}
                </span>
              </div>
              <p className="md:text-sm text-[12px] md:leading-[20px] leading-[17px] text-[#FFFFFFBF]/[0.75] line-through font-inter">
                {plan.oldPrice}
              </p>
            </div>

            {/* Features List */}
            <ul className="md:text-sm text-[12px] md:leading-[20px] leading-[20px] text-[#FFFFFFBF]/[0.75] space-y-3 font-degular">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <img src={verified1} alt={verified1} className="md:h-[16px] h-[14px]" /> {feature}
                </li>
              ))}
            </ul>

            {/* Subscribe Button */}
            <button className="font-medium text-[16px] leading-[24px] bg-[#3370FF] w-full rounded-[8px] py-3">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
