import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import GradientButton from "../common/GradientButton";
import card7 from "../assets/png/card7.png";
import card8 from "../assets/png/card8.png";
import card9 from "../assets/png/card9.png";

const StrykeXAdvantage = () => {
  return (
    <div className="bg-[#01041A] text-white flex flex-col gap-4 justify-center px-40 pb-14 items-center w-full">
      <AnimateFromInside>
        <p className="font-semibold text-[40px] md:text-[64px] leading-[100%] text-center text-white font-degular">
          The StrykeX Advantage
        </p>
      </AnimateFromInside>

      <AnimateFromInside>
        <p className="font-normal text-[20px] leading-[32px] text-[#FFFFFFBF]/[0.75] text-center max-w-6xl">
          Our team of SEBI registered professionals will help you get started
          from the absolute scratch, help you create strategies and providing
          live market assistance. No coding skills or prior algo trading
          experience needed. Completely beginner friendly, designed to scale
          your trading to greater heights.
        </p>
      </AnimateFromInside>
      <div className="flex flex-col justify-center items-center gap-6 mt-6">
        <AnimateFromInside>
          <div className="bg-[#FFFFFF0D]/[0.05] w-full h-[400px] p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[28px] md:text-[36px] leading-[42px] md:leading-[52px] font-degular">
                  Trading Capital Funding
                </p>
                <p className="font-light text-[18px] md:text-[21px] leading-[28px] mt-2 text-[#ffffffcc] max-w-xl">
                  Get trading capital starting from ₹1 lakh scalable up to ₹1
                  crore with a 50-50 profit split, for lifetime. Subscribe to
                  StrykeX Legend, finish your evaluation process, apply with
                  your trading strategies and get instant funding to start
                  trading.
                </p>
              </div>
              <div>
                <GradientButton className="" />
              </div>
            </div>
            <img
              src={card7}
              alt="StrykeX Capital Funding"
              className="w-[550px] object-cover"
            />
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="bg-[#FFFFFF0D]/[0.05] w-full h-[400px] p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[28px] md:text-[36px] leading-[42px] md:leading-[52px] font-degular">
                  Algo Trading Course
                </p>
                <p className="font-light text-[18px] md:text-[21px] leading-[28px] mt-2 text-[#ffffffcc] max-w-xl">
                  Learn how to build, test and deploy trading strategies in our
                  no code algo trading course designed for beginners,
                  intermediate and expert traders. We teach you everything from
                  creating your strategies, to developing your own trading
                  robots which can keep working for you 24x7.
                </p>
              </div>
              <div>
                <GradientButton className="" />
              </div>
            </div>
            <img
              src={card8}
              alt="StrykeX Capital"
              className="w-[550px] object-cover"
            />
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          <div className="bg-[#FFFFFF0D]/[0.05] w-full h-[400px] p-6 md:p-10 rounded-[20px] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[28px] md:text-[36px] leading-[42px] md:leading-[52px] font-degular">
                  Live Trading Support
                </p>
                <p className="font-light text-[18px] md:text-[21px] leading-[28px] mt-2 text-[#ffffffcc] max-w-xl">
                  Our team of NISM Certified and SEBI Registered Research
                  Analysts are streaming live with you everyday, from 9:15am
                  till 3:30pm for live market assistance. Explore the work of
                  professional trading by interacting with the <br /> country’s
                  best.
                </p>
              </div>
              <div>
                <GradientButton className="" />
              </div>
            </div>
            <img
              src={card9}
              alt="StrykeX Funding"
              className="w-[550px] object-cover"
            />
          </div>
        </AnimateFromInside>
      </div>
    </div>
  );
};

export default StrykeXAdvantage;
