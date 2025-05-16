import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import light from "../assets/png/light1.png";
import video from "../assets/png/video.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center justify-center text-white bg-[#01041A] text-center px-40 pt-40 overflow-hidden"
    >
      {/* Full Width Background Light Image */}
      <div className="absolute top-0 w-full h-full z-0">
        <img
          src={light}
          alt=""
          className="w-full h-full object-cover object-center mix-blend-screen"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <AnimateFromInside>
            <div className="inline-flex items-center justify-center gap-2 bg-[#00000033]/[0.2]  py-2 pl-2 pr-4 rounded-full">
              <span className="bg-[#3370FF80]/[0.5] bg-opacity-20 text-white text-xs px-2 py-1 rounded-full border-[1px] border-[#FFFFFF]">
                New Launch
              </span>
              <p className="font-bold text-[13px] leading-6">
                AI{" "}
                <span className="font-normal">Based Algo Trading Platform</span>
              </p>
            </div>
          </AnimateFromInside>

          <AnimateFromInside>
            <p className="font-semibold text-[64px] leading-[120%]">
              Welcome To The Future Of Trading
            </p>
          </AnimateFromInside>
          <AnimateFromInside>
            <p className="font-semibold text-[64px] leading-[120%]">
              Build Strategies On Autopilot
            </p>
          </AnimateFromInside>
          <AnimateFromInside>
            <p className="font-medium text-[20px] leading-[33px] text-[#FFFFFFBF]/[0.75] tracking-normal">
              Unleash the power of fully automatic systematic trading, to change
              your trading <br /> game forever.
            </p>
          </AnimateFromInside>
        </div>

        {/* Dashboard Preview */}
        <AnimateFromInside>
          <div className="relative max-w-5xl mx-auto mt-4">
            <div className="aspect-[16/10] overflow-hidden rounded-xl relative">
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 50.07%, #01041A 95.16%)",
                }}
              />
              {/* Content */}
              <img
                src={video}
                alt="Video preview"
                className="w-full  object-cover"
              />
            </div>
          </div>
        </AnimateFromInside>
      </div>
    </section>
  );
};

export default Hero;
