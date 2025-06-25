import React from "react";
import halfimage from "../assets/png/video.png";
import newlogo from "../assets/svg/newlogo.svg";
import light from "../assets/png/light.png";
import engine from "../assets/svg/engine.svg";
import newstrategy from "../assets/svg/newstrategy.svg";
import newstrategy1 from "../assets/svg/newstrategy1.svg";
import football from "../assets/svg/football.svg";

import LockIcon from "@mui/icons-material/Lock";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Dhan = () => {
  return (
    <div className="relative bg-[#01041A] text-white w-full min-h-screen font-sans overflow-hidden z-10">
      {/* Background Light Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img
          src={light}
          alt="background light"
          className="w-full h-full object-cover mix-blend-screen hidden md:block"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 md:px-20 py-4 bg-white">
        <div className="flex flex-col">
          <img src={newlogo} alt="Logo" className="w-[120px] object-contain" />
          <p className="text-[14px] font-medium text-[#000000BF] mt-1">
            A Stockwiz Product
          </p>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-black">
          {["Home", "Dashboard", "My Strategies", "Backtest"].map(
            (label, idx) => (
              <a
                key={idx}
                href="#"
                className="text-[18px] text-[#000000BF] font-medium"
              >
                {label}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center pt-10 md:pt-16 gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-10  md:pl-20">
          <p className="font-semibold text-[28px] sm:text-[40px] md:text-[60px] lg:text-[85px] leading-[120%] text-left font-degular text-white z-10">
            Unleash the Power of <br />
            <span className="inline-block bg-[linear-gradient(280.72deg,_#87A1FF_40.8%,_#81F0FF_87.18%)] bg-clip-text text-transparent">
              Automated Trading
            </span>
          </p>

          <p className="font-medium text-[14px] sm:text-lg md:text-[22px] md:leading-[33px] leading-[22px] text-[#FFFFFFBF]/[0.75] tracking-normal">
            Unleash the power of fully automatic systematic trading, to{" "}
            <br className="hidden sm:block" /> change your trading game forever.
          </p>

          <div className="flex flex-wrap gap-4 w-[832px]">
            {/* 1st */}
            <div className="bg-[#FFFFFF0F] flex items-center justify-start gap-4 backdrop-blur-md w-[196px] p-4 rounded-[11px] text-sm font-medium text-white">
              <img src={engine} alt="engine" className="object-cover" />
              <div className="flex flex-col gap-1">
                <span className="bg-[linear-gradient(97.91deg,_#0058FF_-36.09%,_#FFFFFF_39.46%)] bg-clip-text text-transparent">
                  Lightning Fast
                </span>
                <span className="text-white">Trading Engine</span>
              </div>
            </div>

            {/* 2nd */}
            <div className="bg-[#FFFFFF0F] flex items-center justify-start gap-4 backdrop-blur-md w-[196px] p-4 rounded-[11px] text-sm font-medium text-white">
              <img
                src={newstrategy}
                alt="newstrategy"
                className="object-cover "
              />
              <div className="flex flex-col gap-1">
                <span className="bg-[linear-gradient(97.91deg,_#0058FF_-36.09%,_#FFFFFF_39.46%)] bg-clip-text text-transparent">
                  Premium Algo
                </span>
                <span className="text-white">Strategies</span>
              </div>
            </div>

            {/* 3rd */}
            <div className="bg-[#FFFFFF0F] flex items-center justify-start gap-4 backdrop-blur-md w-[196px] p-4 rounded-[11px] text-sm font-medium text-white">
              <img
                src={newstrategy1}
                alt="newstrategy1"
                className="object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="bg-[linear-gradient(97.91deg,_#0058FF_-36.09%,_#FFFFFF_39.46%)] bg-clip-text text-transparent">
                  Build Your
                </span>
                <span className="text-white">Strategies</span>
              </div>
            </div>

            {/* 4th */}
            <div className="bg-[#FFFFFF0F] flex items-center justify-start gap-4 backdrop-blur-md w-[196px] p-4 rounded-[11px] text-sm font-medium text-white">
              <img src={football} alt="football" className="object-cover" />
              <div className="flex flex-col gap-1">
                <span className="bg-[linear-gradient(97.91deg,_#0058FF_-36.09%,_#FFFFFF_39.46%)] bg-clip-text text-transparent">
                  Live Trading
                </span>
                <span className="text-white">Support</span>
              </div>
            </div>
          </div>
          <div
            className="bg-[#FFFFFF0F] text-white rounded-2xl p-4 space-y-6 shadow-lg w-[832px]"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, #FFFFFF 100%)",
              borderImageSlice: 1,
              borderRadius: "16px", // manually enforced
            }}
          >
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="flex justify-center items-center gap-2">
                  <LockIcon style={{ fontSize: 18 }} />
                  <h2 className="text-base md:text-lg font-medium">
                    Activate{" "}
                    <span className="inline-block bg-[linear-gradient(280.72deg,_#87A1FF_40.8%,_#81F0FF_87.18%)] bg-clip-text text-transparent">
                      StrykeX
                    </span>{" "}
                    Algos
                  </h2>
                </div>
                {/* Sub Text */}
                <p className="text-sm text-white/70">
                  Click on the below mentioned buttons to activate your plan
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 text-sm text-white/80">
                <div className="flex justify-center items-center gap-2">
                  <HelpOutlineIcon style={{ fontSize: 16 }} />
                  <span className="font-medium text-white">Need Help?</span>
                </div>
                <span className="text-white/60">
                  Click here to connect with our support team
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 text-white border border-[#FFFFFF85] text-sm font-semibold py-3 px-4 rounded-md transition bg-[linear-gradient(91.74deg,_#050505_-31%,_#46B48D_111.93%)] hover:opacity-90">
                Create a Free Dhan Demat Account
              </button>

              <button className="flex-1 flex items-center justify-center gap-2 border border-[#FFFFFF] text-sm text-white font-semibold py-3 px-4 rounded-md">
                {/* <img src={existingDhan} alt="Connect Dhan" className="h-5 w-5" /> */}
                Connect Existing Dhan Account
              </button>
            </div>

            {/* Footer Contact Info */}
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10  text-sm text-white/60 w-full">
            <div className="flex items-center justify-center gap-2">
              <PhoneIphoneIcon style={{ fontSize: 16 }} /> +91-7850934748
            </div>
            <div className="flex items-center justify-center gap-2">
              <WhatsAppIcon style={{ fontSize: 16 }} /> +91-80000030231
            </div>
            <div className="flex items-center justify-center gap-2">
              <EmailIcon style={{ fontSize: 16 }} /> help@stockwiz.in
            </div>
          </div>
        </div>

        {/* Right Image (Mockup) */}
        <div className="flex-1 flex items-center justify-end">
          <img
            src={halfimage}
            alt="App Preview"
            className="object-cover  relative left-32"
          />
        </div>
      </main>
    </div>
  );
};

export default Dhan;
