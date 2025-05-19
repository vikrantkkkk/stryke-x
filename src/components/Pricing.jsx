import React, { useState } from "react";
import light3 from "../assets/png/light3.png";
import hoverx from "../assets/svg/hoverx.svg";

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
    <div className="bg-[#01041A] text-white flex flex-col justify-center items-center pb-20 w-full px-6 md:px-40 relative overflow-hidden z-10">
      {/* Background Image */}
      <img
        src={light3}
        alt="Background Light"
        className="absolute bottom-0 left-0 w-full h-auto opacity-50 z-[-1]"
      />

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-3xl md:text-6xl leading-tight mb-4">
          Pricing
        </h1>
        {/* Toggle Buttons */}
        <div className="flex rounded-full overflow-hidden bg-[#FFFFFF1A]/[0.1] gap-2 p-1">
          <button
            className={`px-12 py-3 transition text-sm font-medium
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
            className={`px-12 py-3 transition text-sm font-medium
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
      <div className="flex justify-center items-center gap-8 w-full">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative group border border-white/20 rounded-[16px] p-6 w-[394px] flex flex-col justify-between gap-4 items-start text-left hover:border-gray-700/50 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm transition-all hover:shadow-[0_0_0_2px_rgba(59,130,246,0.5),0_10px_15px_-3px_rgba(59,130,246,0.2),0_4px_6px_-4px_rgba(59,130,246,0.2)]"
          >
            {/* Hover Stick */}
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[188px] h-[10px] bg-blue-500/50 rounded-b-[16px] hidden group-hover:block"></div>

            {/* Hover Image (Top Right) */}
            <img
              src={hoverx}
              alt="Hover Effect"
              className="absolute top-4 right-2 hidden group-hover:block"
            />

            {/* Plan Title */}
            <h2 className="font-bold text-[20px] leading-[28px]">
              {plan.title}
            </h2>

            {/* Pricing */}
            <div className="flex gap-2 items-baseline">
              <div>
                <span className="font-bold text-[36px] leading-[40px]">
                  {plan.price}
                </span>
                <span className="font-bold text-[24px] leading-[40px]">
                  {plan.duration}
                </span>
              </div>
              <p className="text-sm text-gray-400 line-through">
                {plan.oldPrice}
              </p>
            </div>

            {/* Features List */}
            <ul className="text-sm text-gray-300 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#00AEEF]">✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* Subscribe Button */}
            <button className="bg-[#3370FF] text-white px-6 py-3 rounded-[8px] w-full font-semibold transition mt-2">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;