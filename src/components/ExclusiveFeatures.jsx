import React from "react";
import fill from "../assets/png/fill.png";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import card1 from "../assets/png/card1.png";
import card2 from "../assets/png/card2.png";
import card3 from "../assets/png/card3.png";
import card4 from "../assets/png/card4.png";
import card6 from "../assets/png/card6.png";
import cursor from "../assets/svg/cursor.svg";
import strykexwhite from "../assets/svg/strykexwhite.svg";
import verified from "../assets/svg/verified.svg";
import nifty from "../assets/svg/1.svg";
import cnbcdark from "../assets/svg/2.svg";
import hindustandark from "../assets/svg/3.svg";
import moneycontrol from "../assets/svg/4.svg";
import tedx from "../assets/svg/5.svg";
import theprint from "../assets/svg/6.svg";
import seven from "../assets/svg/7.svg";
import eight from "../assets/svg/8.svg";
import ellipse6 from "../assets/png/ellipse6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExclusiveFeatures = () => {
  const logos = [
    { icon: cnbcdark, name: "cnbc" },
    { icon: tedx, name: "tedx" },
    { icon: hindustandark, name: "hindustan" },
    { icon: moneycontrol, name: "moneycontrol" },
    { icon: tedx, name: "tedx" },
    { icon: theprint, name: "theprint" },
    { icon: seven, name: "seven" },
    { icon: eight, name: "eight" },
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 4,
          infinite: true,
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 5000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 5000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 5000,
        },
      },
    ],
  };

  return (
    <div className="bg-[#01041A] text-white flex flex-col items-center px-40 pb-16 gap-4 w-full">
      <div className="relative w-full">
        {/* Text over the image */}
        <div className="absolute top-10 left-0 w-full h-full flex flex-col gap-4 items-center justify-center text-center">
          <AnimateFromInside>
            <h2 className="font-semibold text-[64px] leading-[140%] font-degular">
              Exclusive Features
            </h2>
          </AnimateFromInside>
          <AnimateFromInside>
            <p className="font-normal text-[20px] leading-[32px] text-[#FFFFFFBF]/[0.75]">
              Unleash the power of artificial intelligence, data backed trading
              strategies and <br /> lightning fast executions to level up your
              trading game.
            </p>
          </AnimateFromInside>
        </div>

        {/* Image */}
        <img
          src={fill}
          alt="Exclusive Background"
          className="object-cover -z-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex gap-6 items-center justify-center">
          <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] w-[405px] h-[411px]  rounded-[14px]">
            <img src={card1} alt="card1" className="object-cover" />
            <div className="flex flex-col gap-4 justify-start items-start z-10">
              <p className="font-semibold text-[24px] leading-[36px] text-white">
                Backtesting
              </p>

              <p className="font-light text-[16px] leading-[28px] text-white/75">
                Backtest your strategies across all market segments with 7+
                years of data. Test your strategy before live trading.
              </p>
            </div>
            <img
              src={ellipse6}
              alt={ellipse6}
              className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
            />
          </div>
          <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] w-[405px] h-[411px]  rounded-[14px]">
            <img src={card2} alt="card2" className="object-cover" />
            <div className="flex flex-col gap-4 justify-start items-start z-10">
              <p className="font-semibold text-[24px] leading-[36px] text-white font-poppins">
                Paper Trading
              </p>

              <p className="font-light text-[16px] leading-[28px] text-white/75">
                Test strategies in live markets with <br /> virtual capital.
                Evaluate performance
                <br /> before going live.
              </p>
            </div>
            <img
              src={ellipse6}
              alt={ellipse6}
              className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
            />
          </div>
          <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] w-[405px] h-[411px] rounded-[14px]">
            <img src={card3} alt="card3" className="object-cover" />
            <div className="flex flex-col gap-4 justify-start items-start z-10">
              <p className="font-semibold text-[24px] leading-[36px] text-white font-poppins">
                Forward Testing
              </p>

              <p className="font-light text-[16px] leading-[28px] text-white/75">
                Deploy fully automated algo strategies in real time. Build your
                trading edge with emotionless trading.
              </p>
            </div>
            <img
              src={ellipse6}
              alt={ellipse6}
              className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
            />
          </div>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] w-[405px] h-[411px] rounded-[14px]">
            <img src={card4} alt="card4" className="object-cover" />
            <div className="flex flex-col gap-4 justify-start items-start z-10">
              <p className="font-semibold text-[24px] leading-[36px] text-white font-poppins">
                Funded Accounts
              </p>

              <p className="font-light text-[16px] leading-[28px] text-white/75">
                Get up to ₹1 crore to trade. Pass our test, earn 50% profits—we
                take the <br /> risk.
              </p>
            </div>
            <img
              src={ellipse6}
              alt={ellipse6}
              className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
            />
          </div>
          <div className="relative flex flex-col px-6 pb-6 pt-10 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] w-[824px] h-[411px] rounded-[14px]">
            <div className="flex justify-center items-center gap-4">
              <div className="bg-[#01041A]/[0.5] flex flex-col gap-3 rounded-2xl p-3 w-[317px] h-[196px] relative z-10">
                {/* Top Tags */}
                <span className="font-semibold text-[8.5px] leading-[11px] bg-[#FFCB15] text-black px-2 py-1 rounded absolute -top-5 left-4">
                  Index Options
                </span>
                <span className="font-semibold text-[8.5px] leading-[11px] bg-[#248A28] text-white px-2 py-1 rounded absolute -top-5 right-4">
                  Bullish Momentum
                </span>

                {/* Header Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src={nifty}
                      alt="nifty"
                      className="rounded-full w-7 h-7"
                    />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[10px] font-semibold leading-[100%] font-poppins">
                        Nifty Sniper
                      </h2>
                      <p className="text-[7.5px] font-medium leading-[100%] text-[#FFFFFFE5]/[0.9] text-gray-400 flex items-center">
                        By Stockwiz Technologies LLP
                        <img
                          src={verified}
                          alt="verified"
                          className="ml-1 h-[12px]"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <p className="text-[7.5px] font-normal leading-[100%] text-[#FFFFFFE5]/[0.9]">
                      Minimum Investment
                    </p>
                    <p className="font-bold text-[15px] leading-[100%] text-end">
                      ₹15,000
                    </p>
                  </div>
                </div>

                {/* Strategy Description */}
                <p className="font-medium text-[9px] leading-[160%] text-[#FFFFFFE5]/[0.9]">
                  This algo strategy captures bullish momentum trades through
                  call options using smart money trading strategies.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 text-sm">
                  <div className="flex text-[10px]">
                    <span className="text-[#FFFFFFE5]/[0.75]">Win Rate:</span>
                    <span className="text-[#55EF3D]">+78%</span>
                  </div>
                  <div className="flex text-[10px] justify-end">
                    <span className="text-[#FFFFFFE5]/[0.75]">Avg Profit:</span>
                    <span className="text-[#55EF3D]">₹15,188</span>
                  </div>
                  <div className="flex text-[10px]">
                    <span className="text-[#FFFFFFE5]/[0.75]">
                      Reward / Risk:
                    </span>
                    <span className="text-white">3:1</span>
                  </div>
                  <div className="flex text-[10px] justify-end">
                    <span className="text-[#FFFFFFE5]/[0.75]">Avg Loss:</span>
                    <span className="text-[#FF6B6B]">₹3,705</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="relative rounded-[10px] w-full font-semibold text-[10px] text-white py-3 transition duration-200 hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(138.17deg, #3FADFF -2.93%, #184ABE 118.47%)",
                  }}
                >
                  Trade Now
                  <span className="absolute top-2 right-16">
                    <img src={cursor} alt="cursor" />
                  </span>
                </button>
              </div>
              <img src={card6} alt="card6" className="object-cover w-[457px]" />
            </div>
            <div className="flex flex-col gap-4 justify-start items-start z-10">
              <p className="font-semibold text-[24px] leading-[36px] text-white font-poppins">
                Pre Made Algo Strategies
              </p>

              <p className="font-light text-[16px] leading-[28px] text-white/75">
                Explore a comprehensive set of pre curated algorithmic trading
                strategies based <br /> on momentum, mean reversion and trap
                trading
                <br />
                techniques, built for peak trading performance.
              </p>
            </div>
            <img
              src={ellipse6}
              alt={ellipse6}
              className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
            />
          </div>
        </div>
        <button className="flex justify-center items-center gap-4 bg-white mt-[28px] text-black text-[20px] leading-[100%] font-semibold rounded-full px-12 py-3">
          Subscribe To{" "}
          <span>
            <img src={strykexwhite} alt={strykexwhite} />
          </span>
        </button>

        <div className="flex flex-col gap-5 justify-center items-center w-screen mt-[104px]">
          <div className="font-semibold text-[24px] leading-[100%]">
            Featured in
          </div>
          <div className="w-full">
            <Slider {...sliderSettings} className="w-full">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center px-4"
                >
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="h-[70px] object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveFeatures;
