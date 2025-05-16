import React from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import light from "../assets/png/light1.png";
import video from "../assets/png/video.png";
import a from "../assets/svg/a.svg";
import b from "../assets/png/b.png";
import c from "../assets/png/c.png";
import d from "../assets/png/d.png";
import e from "../assets/svg/b.svg";
import f from "../assets/svg/c.svg";
import g from "../assets/svg/d.svg";
import h from "../assets/png/h.png";
import i from "../assets/svg/e.svg";
import j from "../assets/svg/f.svg";
import k from "../assets/png/k.png";
import l from "../assets/svg/g.svg";
import m from "../assets/svg/h.svg";
import n from "../assets/svg/i.svg";
import o from "../assets/svg/j.svg";
import p from "../assets/svg/aa.svg";
import sebiLogo from "../assets/svg/sebi.svg";
import leftcard from "../assets/png/leftcard.png";
import rightcard from "../assets/png/rightcard.png";
import TradingStatsCard from "./TradingStatsCard";

const Hero = () => {
  const logos = [
    { icon: a, name: "a" },
    { icon: b, name: "b" },
    { icon: c, name: "c" },
    { icon: p, name: "p" },
    { icon: d, name: "d" },
    { icon: e, name: "e" },
    { icon: f, name: "f" },
    { icon: g, name: "g" },
    { icon: h, name: "h" },
    { icon: i, name: "i" },
    { icon: j, name: "j" },
    { icon: k, name: "k" },
    { icon: l, name: "l" },
    { icon: m, name: "m" },
    { icon: n, name: "n" },
    { icon: o, name: "o" },
  ];

  const logos1 = [...logos, ...logos, ...logos];

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
          className="w-full h-full object-cover object-center mix-blend-screen z-0"
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
      {/* Trusted Text */}
      <p className="text-[#FFFFFF80]/[0.5] font-normal text-[20px] leading-[30px] w-full mt-10 z-20">
        Trusted by <span className="font-bold">Professionals</span> Working At
        Top Companies Like
      </p>

      {/* Logo Marquee */}
      <div className="w-full overflow-hidden mt-6 group z-20">
        <div className="flex items-center gap-10 justify-center animate-marquee group-hover:[animation-play-state:paused]">
          {logos1.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center shrink-0"
            >
              <img
                src={logo.icon}
                alt={logo.name}
                className="h-[40px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <TradingStatsCard
        sebiLogo={sebiLogo}
        leftcard={leftcard}
        rightcard={rightcard}
      />
    </section>
  );
};

export default Hero;
