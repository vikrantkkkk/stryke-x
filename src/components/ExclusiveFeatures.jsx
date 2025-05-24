import React from "react";
import fill from "../assets/png/fill.png";
import fill1 from "../assets/png/fill1.png";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import card1 from "../assets/png/card1.png";
import card2 from "../assets/png/card2.png";
import card3 from "../assets/png/card3.png";
import card4 from "../assets/png/card4.png";
import card6 from "../assets/png/card6.png";
import card14 from "../assets/png/card14.png";
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
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 4,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 12000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 8000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 8000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div className="bg-[#01041A] text-white flex flex-col items-center md:px-40  pb-16 gap-4 w-full">
      <div className="relative w-full">
        {/* Text over the image */}
        <div className="absolute top-10 left-0 w-full h-full flex flex-col gap-4 items-center justify-center text-center">
          <AnimateFromInside>
            <h2 className="font-semibold md:text-[64px] sm:text-[48px] text-[39px] leading-[100%] font-degular md:px-0 px-4">
              Exclusive Features
            </h2>
          </AnimateFromInside>
          <AnimateFromInside>
            <p className="font-normal md:text-[24px] sm:text-[18px] text-[14px] md:leading-[30px] leading-[22px] text-[#FFFFFFBF]/[0.75] md:px-0 px-4">
              Unleash the power of artificial intelligence, data backed trading
              strategies and <br className="md:block hidden" /> lightning fast
              executions to level up your trading game.
            </p>
          </AnimateFromInside>
        </div>

        {/* Image */}
        <img
          src={fill}
          alt="Exclusive Background"
          className="md:block hidden object-cover -z-10"
        />
        <img
          src={fill1}
          alt="Exclusive Background"
          className="object-cover -z-10 md:hidden block w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 md:px-0 px-4">
        <div className="flex md:flex-row flex-col gap-6 items-center justify-center">
          <AnimateFromInside>
            <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] md:w-[405px] w-[345px] md:h-[411px] h-auto  rounded-[14px]">
              <img src={card1} alt="card1" className="object-cover" />
              <div className="flex flex-col gap-4 justify-start items-start z-10">
                <p className="font-semibold md:text-[24px] text-[20px] leading-[36px] text-white">
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
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] md:w-[405px] w-[345px] md:h-[411px] h-auto rounded-[14px]">
              <img src={card2} alt="card2" className="object-cover" />
              <div className="flex flex-col gap-4 justify-start items-start z-10">
                <p className="font-semibold md:text-[24px] text-[20px] leading-[36px] text-white font-poppins">
                  Paper Trading
                </p>

                <p className="font-light text-[16px] md:leading-[28px] leading-[24px] text-white/75">
                  Test strategies in live markets with{" "}
                  <br className="md:block hidden" /> virtual capital. Evaluate
                  performance
                  <br /> before going live.
                </p>
              </div>
              <img
                src={ellipse6}
                alt={ellipse6}
                className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
              />
            </div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] md:w-[405px] w-[345px] md:h-[411px] h-auto rounded-[14px]">
              <img src={card3} alt="card3" className="object-cover" />
              <div className="flex flex-col gap-4 justify-start items-start z-10">
                <p className="font-semibold md:text-[24px] text-[20px] leading-[36px] text-white font-poppins">
                  Forward Testing
                </p>

                <p className="font-light text-[16px] md:leading-[28px] leading-[24px] text-white/75">
                  Deploy fully automated algo strategies in real time. Build
                  your trading edge with emotionless trading.
                </p>
              </div>
              <img
                src={ellipse6}
                alt={ellipse6}
                className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
              />
            </div>
          </AnimateFromInside>
        </div>
        <div className="flex md:flex-row flex-col gap-6 items-center justify-center">
          <AnimateFromInside>
            <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] md:w-[405px] w-[345px] md:h-[411px] h-auto rounded-[14px]">
              <img src={card4} alt="card4" className="object-cover" />
              <div className="flex flex-col gap-4 justify-start items-start z-10">
                <p className="font-semibold md:text-[24px] text-[20px] leading-[36px] text-white font-poppins">
                  Funded Accounts
                </p>

                <p className="font-light text-[16px] md:leading-[28px] leading-[24px] text-white/75">
                  Get up to ₹1 crore to trade. Pass our test, earn 50%
                  profits—we take the <br /> risk.
                </p>
              </div>
              <img
                src={ellipse6}
                alt={ellipse6}
                className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
              />
            </div>
          </AnimateFromInside>
          <AnimateFromInside>
            <div className="relative flex flex-col p-6 justify-between items-start gap-4 bg-[#FFFFFF0D]/[0.05] md:w-[824px] w-[345px] md:h-[411px] h-auto rounded-[14px]">
              <div className="flex justify-center items-center gap-4">
                <img
                  src={card14}
                  alt={card14}
                  className="md:w-[40%] w-[50%] z-10"
                />
                <img
                  src={card6}
                  alt="card6"
                  className="object-cover md:w-[60%] w-[50%]"
                />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start z-10">
                <p className="font-semibold md:text-[24px] text-[20px] leading-[36px] text-white font-poppins">
                  Pre Made Algo Strategies
                </p>

                <p className="font-light text-[16px] md:leading-[28px] leading-[24px] text-white/75">
                  Explore a comprehensive set of pre curated algorithmic trading
                  strategies based <br className="md:block hidden" /> on
                  momentum, mean reversion and trap trading
                  <br className="md:block hidden" />
                  techniques, built for peak trading performance.
                </p>
              </div>
              <img
                src={ellipse6}
                alt={ellipse6}
                className="absolute bottom-0 left-0 rounded-bl-[14px] z-0"
              />
            </div>
          </AnimateFromInside>
        </div>
        <AnimateFromInside>
          <button className="flex justify-center items-center gap-4 bg-white md:mt-[28px] text-black text-[20px] leading-[100%] font-semibold rounded-full md:px-12 px-10 md:py-3 py-2">
            Subscribe To{" "}
            <span>
              <img src={strykexwhite} alt={strykexwhite} />
            </span>
          </button>
        </AnimateFromInside>

        <div className="flex flex-col md:gap-5 gap-4 justify-center items-center w-screen md:mt-[104px] mt-[48px]">
          <AnimateFromInside>
            <div className="font-semibold text-[24px] leading-[100%]">
              Featured in
            </div>
          </AnimateFromInside>
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
