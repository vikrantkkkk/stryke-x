import React, { useState, useEffect, useRef } from "react";
import light3 from "../assets/png/light3.png";
import hoverx from "../assets/svg/hoverx.svg";
import star from "../assets/svg/star.svg";
import verified1 from "../assets/svg/verified1.svg";
import verified3 from "../assets/svg/verified3.svg";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const Pricing = () => {
  const pricingPlans = [
    // {
    //   title: "YEARLY",
    //   price: "₹12,999",
    //   duration: "/Year",
    //   oldPrice: "₹20,749/Year",
    //   features: [
    //     "4 x LIVE Algo Deployments",
    //     "3,000 Backtest Credits",
    //     "10 x Premium Algo Strategies",
    //     "12 x Non Directional Templates",
    //     "Algo Trading Course",
    //     "24/7 customer support",
    //   ],
    // },
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

  const [activeButton, setActiveButton] = useState("StrykeX Pro");
  const [highlightLeft, setHighlightLeft] = useState(0);
  const [highlightWidth, setHighlightWidth] = useState(0);
  const containerRef = useRef(null);
  const btnRefs = {
    "StrykeX Pro": useRef(null),
    "StrykeX Legend": useRef(null),
  };

  const handleToggle = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    const btn = btnRefs[activeButton].current;
    const container = containerRef.current;
    if (btn && container) {
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setHighlightLeft(btnRect.left - containerRect.left);
      setHighlightWidth(btnRect.width);
    }
  }, [activeButton]);

  return (
    <div className="bg-[#01041A] text-white flex flex-col justify-center items-center md:gap-4 md:py-16  pb-8 pt-4 w-full px-6 md:px-40 relative overflow-hidden z-10">
      <img
        src={light3}
        alt="Background Light"
        className="absolute bottom-0 left-0 md:h-auto h-full -z-10 object-cover"
      />

      <div className="flex flex-col justify-center items-center gap-4">
        <AnimateFromInside>
          <p className="font-semibold text-[40px] md:text-[60px] md:leading-[100%] leading-[140%] font-degular md:mb-0 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-white via-[#AAB8FF] to-[#8FA4FF] bg-clip-text text-transparent font-degular">
              Pricing
            </span>
          </p>
        </AnimateFromInside>

        {/* <div
          ref={containerRef}
          className="relative flex rounded-full overflow-hidden bg-[#FFFFFF1A]/[0.1] gap-2 p-1 cursor-pointer"
          style={{ userSelect: "none" }}
        >
          <div
            className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[#3FADFF] to-[#184ABE] transition-all duration-300 ease-in-out"
            style={{ left: highlightLeft, width: highlightWidth }}
          />
          <button
            ref={btnRefs["StrykeX Pro"]}
            className={`relative z-10 md:px-12 px-4 md:py-3 py-[10px] md:text-base text-sm font-medium font-degular ${
              activeButton === "StrykeX Pro" ? "text-white" : "text-white/60"
            }`}
            onClick={() => handleToggle("StrykeX Pro")}
          >
            StrykeX Pro
          </button>
          <button
            ref={btnRefs["StrykeX Legend"]}
            className={`relative z-10 md:px-12 px-4 md:py-3 py-[10px] md:text-base text-sm font-medium font-degular ${
              activeButton === "StrykeX Legend" ? "text-white" : "text-white/60"
            }`}
            onClick={() => handleToggle("StrykeX Legend")}
          >
            StrykeX Legend
          </button>
        </div> */}
      </div>

      <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-10 gap-8 w-full mt-[30px] z-10">
        {pricingPlans.map((plan, index) => (
          <AnimateFromInside key={index}>
            <div className="relative group hover:scale-[1.05] hover:backdrop-blur-[7.429px] hover:shadow-[9px_-9px_48.35px_0px_#FFFFFF47] bg-[#00000099] hover:bg-[linear-gradient(140.82deg,rgba(0,0,0,0.6)_26.39%,rgba(10,59,172,0.6)_102.62%)] cursor-pointer rounded-[16px] p-6 md:w-[468px] w-[345px] flex flex-col justify-between gap-[18px] items-start text-left  transition-all duration-500">
              {/* Border Layer */}
              <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  padding: "3px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(221.4deg, #D0DCFF 3.98%, rgba(24, 34, 70, 0) 125.99%)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  boxSizing: "border-box",
                }}
              ></div>

              {/* Top-right Image */}
              <img
                src={hoverx}
                alt="Hover Effect"
                className="absolute top-0 right-0 object-cover transition-all duration-500 group-hover:block hidden"
              />

              {/* Title */}
              <h2 className="font-bold md:text-[20px] text-[17px] md:leading-[29.7px] leading-[24px] font-inter transition-all duration-500">
                {plan.title}
              </h2>

              {/* Price Section */}
              <div className="flex gap-2 items-baseline transition-all duration-500">
                <div>
                  <span className="bg-white group-hover:bg-gradient-to-r from-white via-[#AAB8FF] to-[#8FA4FF] bg-clip-text text-transparent font-bold md:text-[36px] text-[31px] md:leading-[42.5px] leading-[35px] font-inter transition-all duration-500">
                    {plan.price}
                  </span>
                  <span className="font-bold md:text-[28px] text-[20px] md:leading-[42.5px] leading-[34px] font-inter transition-all duration-500">
                    {plan.duration}
                  </span>
                </div>
                <p className="font-normal md:text-[24px] text-[12px] md:leading-[23.5px] leading-[21px] text-[#FFFFFFBF]/[0.75] line-through font-inter transition-all duration-500">
                  {plan.oldPrice}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-[18px] mt-[18px]">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 font-medium tracking-normal md:text-[20px] text-[12px] md:leading-[28px] leading-[20px] text-[#FFFFFFBF] transition-all duration-500"
                  >
                    <div className="relative w-[24px] h-[24px]">
                      <img
                        src={verified1}
                        alt="verified-hover"
                        className="w-full h-full hidden group-hover:block transition-opacity duration-500"
                      />
                      <img
                        src={verified3}
                        alt="verified"
                        className="w-full h-full block group-hover:hidden transition-opacity duration-500"
                      />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-[10px] font-medium text-[16px] leading-[24px] bg-[#3370FF] group-hover:bg-[linear-gradient(91.44deg,#3F72FF_-4.99%,#0036B2_52.99%,#47B4B4_112.17%)] w-full rounded-[8px] py-3 transition-all duration-500">
                Subscribe Now
              </button>
              {plan.title === "QUARTERLY" && (
                <div
                  className="flex justify-center items-center gap-1 absolute md:-top-[30px] -top-[28px] right-4 text-white text-[12px] md:text-[14px] font-medium py-1 px-2 rounded-t-[12px] shadow-md z-20"
                  style={{
                    background:
                      "linear-gradient(91.49deg, #3F85FF -8.97%, #002783 108.7%)",
                  }}
                >
                  <span>
                    <img src={star} alt="star" />
                  </span>{" "}
                  Recommended
                </div>
              )}
            </div>
          </AnimateFromInside>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
