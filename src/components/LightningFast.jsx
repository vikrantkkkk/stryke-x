import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import card10 from "../assets/png/card10.png";

const LightningFast = () => {
  return (
    <div className="bg-[#01041A] text-white flex  justify-center items-center pt-16 pb-28 w-full px-40">
      <div className="flex flex-col gap-4 justify-center items-center  z-10 rounded-[32px] w-full relative">
        <AnimateFromInside>
          <p className="font-semibold text-[64px] leading-[82px] font-degular">
            Lightning Fast
          </p>
        </AnimateFromInside>
        <AnimateFromInside>
          <p className="font-semibold text-[64px] leading-[82px] font-degular">
            Trading Engine
          </p>
        </AnimateFromInside>
        <AnimateFromInside>
          <p className="font-normal text-[16px] leading-[20px] text-[#9A9CA3] text-center">
            Perfect for creators and freelancers seeking Perfect for creators
            and <br /> freelancers seeking freelancers seeking
          </p>
        </AnimateFromInside>
        <button className="bg-white text-black text-[16px] font-semibold rounded-full px-6 py-3 mt-4">
          Get Startedx
        </button>
        <div className="absolute -z-10 w-full flex justify-center items-center">
          <img src={card10} alt={card10} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LightningFast;
