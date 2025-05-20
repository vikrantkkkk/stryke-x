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

const Feature = () => {
  return (
    <div className="bg-[#01041A] text-white flex flex-col gap-4 justify-center md:px-40 px-4 pb-16 items-center w-full">
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
      <div className="flex md:flex-row flex-col justify-center md:gap-24 items-stretch w-full mt-6  p-2">
        <AnimateFromInside>
          {/* Left Card */}
          <div className="flex flex-col items-start justify-between gap-4 md:w-[370px] w-[345px] rounded-[24px] border-dashed border-[2px] border-[#FFFFFF38]/[0.22] p-6 h-[555px] overflow-hidden">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={desktop} alt={desktop} />
              <p className="font-semibold text-[31px] leading-[38px] font-degular">
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
              <p className="font-medium text-[18px] leading-[26px] text-[#FFFFFFBF]/[0.75]">
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
          <div className="bg-[#0F1330] flex flex-col gap-3 px-6 pb-6 pt-8 text-white font-sans h-[555px] md:w-[738px] w-[345px] relative rounded-[24px]">
            {/* First Row - Left aligned card */}
            <div className="bg-[#01041A]/50 flex flex-col gap-4 rounded-2xl p-4 w-full md:w-[394px] relative z-10">
              {/* Tags */}
              <div className="absolute -top-6 left-4 flex space-x-2">
                <span className="font-semibold text-xs bg-[#FFCB15] text-black px-2 py-1 rounded">
                  Index Options
                </span>
                <span className="font-semibold text-xs bg-[#248A28] text-white px-2 py-1 rounded">
                  Bullish Momentum
                </span>
              </div>

              {/* Header Section */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    NS
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Nifty Sniper</h2>
                    <p className="text-xs text-gray-400 flex items-center">
                      By Stockwiz Technologies LLP
                      <img src={verified} alt={verified} className="pl-2" />
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="font-normal text-[10px] text-[#FFFFFFE5]/75">
                    Minimum Investment
                  </p>
                  <p className="font-bold text-xl text-end">₹15,000</p>
                </div>
              </div>

              {/* Strategy Description */}
              <p className="font-medium text-xs text-[#FFFFFFE5]/75">
                This algo strategy captures bullish momentum trades through call
                options using smart money trading strategies.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex text-xs">
                  <span className="text-[#FFFFFFE5]/75 mr-1">Win Rate:</span>
                  <span className="text-[#55EF3D]">+78%</span>
                </div>
                <div className="flex text-xs justify-end">
                  <span className="text-[#FFFFFFE5]/75 mr-1">Avg Profit:</span>
                  <span className="text-[#55EF3D]">₹15,188</span>
                </div>
                <div className="flex text-xs">
                  <span className="text-[#FFFFFFE5]/75 mr-1">
                    Reward / Risk:
                  </span>
                  <span className="text-white">3:1</span>
                </div>
                <div className="flex text-xs justify-end">
                  <span className="text-[#FFFFFFE5]/75 mr-1">Avg Loss:</span>
                  <span className="text-[#FF6B6B]">₹3,705</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="relative rounded-lg w-full font-semibold text-sm text-white py-3 bg-gradient-to-r from-blue-400 to-blue-800">
                Trade Now
              </button>
            </div>

            {/* Second Row - Right aligned card */}
            {/* Backtest Results Card */}
            <div className="bg-[#01041A]/50 flex flex-col gap-4 rounded-2xl p-4 w-full md:w-[394px] shadow-lg relative self-end mt-4 md:mt-6 z-10">
              <h3 className="text-lg font-bold">Backtest Results</h3>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                <div className="flex">
                  <span className="text-[#FFFFFFE5]/75 mr-1">
                    Winning Probability:
                  </span>
                  <span className="text-[#55EF3D]">+78%</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-[#FFFFFFE5]/75 mr-1">
                    Average Profit:
                  </span>
                  <span className="text-[#55EF3D]">₹15,188</span>
                </div>
                <div className="flex">
                  <span className="text-[#FFFFFFE5]/75 mr-1">
                    Win Loss Ratio:
                  </span>
                  <span className="text-white">32.5</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-[#FFFFFFE5]/75 mr-1">
                    Average Loss:
                  </span>
                  <span className="text-[#FF6B6B]">₹3,374</span>
                </div>
                <div className="flex">
                  <span className="text-[#FFFFFFE5]/75 mr-1">Win Streak:</span>
                  <span className="text-[#55EF3D]">4</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-[#FFFFFFE5]/75 mr-1">Max Profit:</span>
                  <span className="text-[#55EF3D]">₹45,787</span>
                </div>
                <div className="flex">
                  <span className="text-[#FFFFFFE5]/75 mr-1">Loss Streak:</span>
                  <span className="text-[#FF6B6B]">4</span>
                </div>
                <div className="flex justify-end">
                  <span className="text-[#FFFFFFE5]/75 mr-1">Max Loss:</span>
                  <span className="text-[#FF6B6B]">₹3,111</span>
                </div>
              </div>

              {/* Risk Info */}
              <div className="p-3 bg-[#FFFFFF1A]/10 rounded-xl text-center font-semibold text-xs">
                Risk Per Trade:{" "}
                <span className="font-semibold text-white">0.75%</span>
              </div>
            </div>
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
              className="absolute object-cover right-0 top-0 rounded-tr-[24px]"
            />
          </div>
        </AnimateFromInside>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-24  w-full mt-6 p-2">
        <AnimateFromInside>
          {/* left Side: Two Cards */}
          <div className="bg-[#0F1330] flex p-6 text-white  h-[555px] md:w-[738px] w-[345px] relative rounded-[24px]">
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
          <div className="flex flex-col items-start justify-between gap-4 w-[370px] rounded-[24px] border-dashed border-[2px] border-[#FFFFFF38]/[0.22] p-6 h-[555px] overflow-hidden">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={discovered} alt={discovered} />
              <p className="font-semibold text-[31px] leading-[38px] tracking-tight font-degular">
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
              <p className="font-medium text-[18px] leading-[26px] text-[#FFFFFFBF]/[0.75]">
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
      <div className="flex justify-center items-center gap-24  w-full mt-6 p-2">
        <AnimateFromInside>
          {/* right Card */}
          <div className="flex flex-col items-start justify-between gap-4 w-[370px] rounded-[24px] border-dashed border-[2px] border-[#FFFFFF38]/[0.22] p-6 h-[555px] overflow-hidden">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={lightning} alt={lightning} />
              <p className="font-semibold text-[31px] leading-[38px] tracking-tight font-degular">
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
              <p className="font-medium text-[18px] leading-[26px] text-[#FFFFFFBF]/[0.75]">
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
          <div className="bg-[#0F1330] flex p-6 text-white  h-[555px] w-[738px] relative rounded-[24px]">
            <img
              src={featured1}
              alt={featured1}
              className="z-10 object-cover absolute bottom-0 right-0 w-[95%] rounded-br-[24px]"
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
