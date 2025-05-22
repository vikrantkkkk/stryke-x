import React from "react";
import arrow from "../assets/svg/arrow.svg";
import desktop from "../assets/svg/desktop.svg";
import discovered from "../assets/svg/discovered.svg";
import lightning from "../assets/svg/lightning.svg";
import cursor from "../assets/svg/cursor.svg";
import verified from "../assets/svg/verified.svg";
import nifty from "../assets/png/nifty.png";
import net from "../assets/png/net.png";
import ellipse1 from "../assets/png/ellipse1.png";
import ellipse2 from "../assets/png/ellipse2.png";
import ellipse3 from "../assets/png/ellipse3.png";
import ellipse4 from "../assets/png/ellipse4.png";
import x from "../assets/png/x.png";
import featured from "../assets/png/featured.png";
import featured1 from "../assets/png/featured1.png";
import GradientButton from "../common/GradientButton";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import card14 from "../assets/png/card14.png";
import card15 from "../assets/png/card15.png";

const Feature = () => {
  return (
    <div className="bg-[#01041A] text-white flex flex-col gap-4 justify-center md:px-40 px-4 pb-16 items-center w-full h-auto">
      <AnimateFromInside>
        <p className="font-semibold md:text-[64px] sm:text-[48px] text-[40px] leading-[100%] text-white font-degular">
          Top Features
        </p>
      </AnimateFromInside>
      <AnimateFromInside>
        <p className="font-normal md:text-[24px] sm:text-[18px] text-[14px] md:leading-[30px] leading-[22px] text-center text-[#FFFFFFBF]/[0.75]">
          Unleash the power of algorithmic systematic trading to supercharge
          your trading journey.
        </p>
      </AnimateFromInside>
      <div className="flex md:flex-row flex-col justify-center md:gap-24 items-center w-full md:mt-6  p-2">
        <AnimateFromInside>
          {/* Left Card */}
          <div className="flex flex-col items-start md:justify-between justify-center gap-4 md:w-[370px] w-[345px] rounded-t-[24px] md:rounded-[24px] border-dashed md:border-[2px] border-x-[2px] border-t-[2px] border-[#FFFFFF38]/[0.22] p-6 md:h-[555px] h-auto overflow-hidden">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={desktop} alt={desktop} className="md:w-auto w-[36px]" />
              <p className="font-semibold md:text-[31px] text-[24px] md:leading-[38px] leading-[32px] font-degular">
                Explore High Performance
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(95.84deg, #0058FF -12.34%, #FFFFFF 70.31%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  Algo Strategies
                </span>
              </p>
              <p className="font-medium md:text-[18px] text-[14px] md:leading-[26px] leading-[22px] text-[#FFFFFFBF]/[0.75]">
                Access professionally designed quantitative trading strategies
                crafted by our in-house research team, optimized for momentum,
                mean reversion, breakout, and institutional-style trading.  
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <GradientButton />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          {/* Right Side: Two Cards */}
          <div className="bg-[#0F1330] flex flex-col gap-3 px-6 pb-6 pt-4 text-white font-sans md:h-[555px] h-auto md:w-[738px] w-[345px] relative md:rounded-[24px] rounded-b-[24px]">
            {/* First Row - Left aligned card */}
            <img src={card14} alt={card14} className="md:w-[60%] w-[70%] z-10" />
            <img
              src={card15}
              alt={card15}
              className="md:w-[60%] w-[70%] relative self-end z-10"
            />

            <img
              src={net}
              alt="net"
              className="absolute inset-0 h-[555px] object-contain pointer-events-none w-full"
            />
            <img
              src={ellipse1}
              alt="ellipse1"
              className="absolute object-cover left-0 bottom-0 opacity-60"
            />
            <img
              src={ellipse2}
              alt="ellipse2"
              className="absolute object-cover left-0 bottom-0 opacity-60 rounded-bl-[24px]"
            />
            <img
              src={ellipse3}
              alt="ellipse3"
              className="absolute object-cover right-0 top-0 opacity-50"
            />
            <img
              src={ellipse4}
              alt="ellipse4"
              className="absolute object-cover right-56 top-6 opacity-50"
            />
            <img
              src={x}
              alt="x"
              className="absolute object-cover right-0 top-0 md:rounded-tr-[24px] md:w-auto w-[30%]"
            />
          </div>
        </AnimateFromInside>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-24  w-full md:mt-6 p-2">
        <AnimateFromInside>
          {/* left Side: Two Cards */}
          <div className="bg-[#0F1330] flex p-6 text-white md:h-[555px] h-auto md:w-[738px] w-[345px] relative md:rounded-[24px] rounded-b-[24px]">
            <div className="flex justify-center items-center">
              <img
                src={featured}
                alt={featured}
                className="z-10 object-cover"
              />
            </div>

            <img
              src={net}
              alt="net"
              className="absolute inset-0 h-full object-contain pointer-events-none w-full"
            />
            <img
              src={ellipse1}
              alt="ellipse1"
              className="absolute object-cover left-0 bottom-0 opacity-60"
            />
            <img
              src={ellipse2}
              alt="ellipse2"
              className="absolute object-cover left-0 bottom-0 opacity-60 rounded-bl-[24px]"
            />
            <img
              src={ellipse3}
              alt="ellipse3"
              className="absolute object-cover right-0 top-0 opacity-50"
            />
            <img
              src={ellipse4}
              alt="ellipse4"
              className="absolute object-cover right-56 top-6 opacity-50"
            />
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          {/* right Card */}
          <div className="flex flex-col items-start md:justify-between justify-center gap-4 md:w-[370px] w-[345px] rounded-t-[24px] md:rounded-[24px] border-dashed md:border-[2px] border-x-[2px] border-t-[2px] border-[#FFFFFF38]/[0.22] p-6 md:h-[555px] h-auto overflow-hidden">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={discovered} alt={discovered} className="md:w-auto w-[36px]" />
              <p className="font-semibold md:text-[31px] text-[24px] md:leading-[38px] leading-[32px] tracking-tight font-degular">
                <span
                  style={{
                    background:
                      "linear-gradient(95.84deg, #0058FF -12.34%, #FFFFFF 70.31%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  Discover Directional{" "}
                </span>
                & Non Directional Strategies
              </p>
              <p className="font-medium md:text-[18px] text-[14px] md:leading-[26px] leading-[22px] text-[#FFFFFFBF]/[0.75]">
                Utilize our comprehensive strategy templates to execute
                high-probability, multi-leg option trades - covering a full
                spectrum of directional and non-directional opportunities—with
                just a single click.
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <GradientButton />
            </div>
          </div>
        </AnimateFromInside>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-24  w-full md:mt-6 p-2">
        <AnimateFromInside>
          {/* right Card */}
          <div className="flex flex-col items-start md:justify-between justify-center gap-4 md:w-[370px] w-[345px] rounded-t-[24px] md:rounded-[24px] border-dashed md:border-[2px] border-x-[2px] border-t-[2px] border-[#FFFFFF38]/[0.22] p-6 md:h-[555px] h-auto overflow-hidden">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={lightning} alt={lightning} className="md:w-auto w-[36px]"/>
              <p className="font-semibold md:text-[31px] text-[24px] md:leading-[38px] leading-[32px] tracking-tight font-degular">
                <span
                  style={{
                    background:
                      "linear-gradient(95.84deg, #0058FF -12.34%, #FFFFFF 70.31%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  Lightning Fast
                  <br />
                </span>
                Trading Engine
              </p>
              <p className="font-medium md:text-[18px] text-[14px] md:leading-[26px] leading-[22px] text-[#FFFFFFBF]/[0.75]">
                Achieve lightning-fast execution with our proprietary trading
                engine—fully automated and equipped with customizable exit rules
                like trailing stop-loss, re-entry, partial profit booking, and
                advanced risk management.
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <GradientButton />
            </div>
          </div>
        </AnimateFromInside>
        <AnimateFromInside>
          {/* left Side: Two Cards */}
          <div className="bg-[#0F1330] flex p-6 text-white  md:h-[555px] h-auto md:w-[738px] w-[345px] relative md:rounded-[24px] rounded-b-[24px]">
            <img
              src={featured1}
              alt={featured1}
              className="z-10 object-cover md:absolute bottom-0 right-0 md:w-[95%] w-auto rounded-br-[24px]"
            />

            <img
              src={net}
              alt="net"
              className="absolute inset-0 h-full object-contain pointer-events-none w-full"
            />
            <img
              src={ellipse1}
              alt="ellipse1"
              className="absolute object-cover left-0 bottom-0 opacity-60"
            />
            <img
              src={ellipse2}
              alt="ellipse2"
              className="absolute object-cover left-0 bottom-0 opacity-60 rounded-bl-[24px]"
            />
            <img
              src={ellipse3}
              alt="ellipse3"
              className="absolute object-cover right-0 top-0 opacity-50"
            />
            <img
              src={ellipse4}
              alt="ellipse4"
              className="absolute object-cover right-56 top-6 opacity-50"
            />
          </div>
        </AnimateFromInside>
      </div>
    </div>
  );
};

export default Feature;
