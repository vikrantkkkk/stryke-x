import React, { useState, useEffect, useRef } from "react";
import light3 from "../assets/png/light3.png";
import hoverx from "../assets/svg/hoverx.svg";
import star from "../assets/svg/star.svg";
import verified1 from "../assets/svg/verified1.svg";
import verified3 from "../assets/svg/verified3.svg";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const Pricing = () => {
  const pricingPlans = [
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
    <div className="bg-[#01041A] text-white flex flex-col justify-center items-center md:gap-4 md:pb-16 pb-10 w-full relative overflow-hidden z-10 md:px-40">
      <img
        src={light3}
        alt="Background Light"
        className="absolute bottom-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="flex flex-col justify-center items-center gap-4  md:pt-16 pt-8">
        <AnimateFromInside>
          <p className="font-semibold text-[32px] md:text-[60px] leading-tight md:leading-[100%] font-degular">
            Our{" "}
            <span className="bg-gradient-to-r from-white via-[#AAB8FF] to-[#8FA4FF] bg-clip-text text-transparent">
              Pricing
            </span>
          </p>
        </AnimateFromInside>
      </div>

      <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-10 gap-4 w-full mt-12 z-10">
        {pricingPlans.map((plan, index) => (
          <AnimateFromInside key={index}>
            <div
              className={`relative ${
                plan.title === "QUARTERLY"
                  ? "md:h-[580px] h-auto md:w-[520px] w-full backdrop-blur-[7.429px] shadow-[9px_-9px_48.35px_0px_#FFFFFF47] bg-[linear-gradient(140.82deg,rgba(0,0,0,0.6)_26.39%,rgba(10,59,172,0.6)_102.62%)]"
                  : "md:h-[522px] h-auto md:w-[468px] w-full bg-[#00000099] hover:backdrop-blur-[7.429px] hover:shadow-[9px_-9px_48.35px_0px_#FFFFFF47] hover:bg-[linear-gradient(140.82deg,rgba(0,0,0,0.6)_26.39%,rgba(10,59,172,0.6)_102.62%)]"
              } cursor-pointer rounded-[16px] md:p-6 p-4 flex flex-col w-full justify-between md:gap-6 gap-4 items-start text-left transition-all duration-500 group`}
            >
              <div
                className={`absolute inset-0 z-0 ${
                  plan.title === "QUARTERLY"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                } transition-opacity duration-500 pointer-events-none`}
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

              <img
                src={hoverx}
                alt="Hover Effect"
                className={`absolute top-0 right-0 object-cover transition-all md:h-auto h-[144px] duration-500 ${
                  plan.title === "QUARTERLY"
                    ? "block"
                    : "hidden group-hover:block"
                }`}
              />

              <h2 className="font-bold md:text-[20px] text-[16px] md:leading-[29.7px] leading-[22px] font-inter">
                {plan.title}
              </h2>

              <div className="flex gap-2 items-baseline">
                <div>
                  <span
                    className={`bg-white ${
                      plan.title === "QUARTERLY"
                        ? "bg-gradient-to-r from-white via-[#AAB8FF] to-[#8FA4FF] md:text-[36px] text-[28px] md:leading-[42.5px] leading-[31px]"
                        : "md:group-hover:bg-gradient-to-r from-white via-[#AAB8FF] to-[#8FA4FF]"
                    } bg-clip-text text-transparent font-bold md:text-[36px] text-[24px] md:leading-[42.5px] leading-[29px] font-inter`}
                  >
                    {plan.price}
                  </span>
                  <span className="font-bold md:text-[28px] text-[24px] md:leading-[42.5px] leading-[31px] font-inter">
                    {plan.duration}
                  </span>
                </div>
                <p className="font-normal md:text-[24px] text-[16px] md:leading-[23.5px] leading-[15.5px] text-[#FFFFFFBF]/[0.75] line-through font-inter">
                  {plan.oldPrice}
                </p>
              </div>

              <ul
                className={`${
                  plan.title === "QUARTERLY"
                    ? "md:space-y-6 space-y-2"
                    : "md:space-y-4 space-y-2"
                }`}
              >
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 font-medium md:text-[20px] text-[12px] md:leading-[28px] leading-[20px] text-[#FFFFFFBF]"
                  >
                    <div className="relative">
                      <img
                        src={verified1}
                        alt="verified-hover"
                        className={`md:w-6 w-4 md:h-6 h-4 transition-opacity duration-500 ${
                          plan.title === "QUARTERLY"
                            ? "block"
                            : "hidden group-hover:block"
                        }`}
                      />
                      <img
                        src={verified3}
                        alt="verified"
                        className={`md:w-6 w-4 md:h-6 h-4 transition-opacity duration-500 ${
                          plan.title === "QUARTERLY"
                            ? "hidden"
                            : "block group-hover:hidden"
                        }`}
                      />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`font-medium text-[16px] leading-[24px] w-full rounded-[8px] py-3 transition-all duration-500 ${
                  plan.title === "QUARTERLY"
                    ? "bg-[linear-gradient(91.44deg,#3F72FF_-4.99%,#0036B2_52.99%,#47B4B4_112.17%)]"
                    : "bg-[#3370FF] group-hover:bg-[linear-gradient(91.44deg,#3F72FF_-4.99%,#0036B2_52.99%,#47B4B4_112.17%)]"
                }`}
              >
                Subscribe Now
              </button>

              {plan.title === "QUARTERLY" && (
                <div
                  className="flex justify-center items-center gap-1 absolute md:-top-[30px] -top-[28px] left-1/2 transform -translate-x-1/2 text-white text-[12px] md:text-[14px] font-medium py-1 px-2 rounded-t-[12px] shadow-md z-20"
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
