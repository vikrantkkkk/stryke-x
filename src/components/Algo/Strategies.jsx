import React, { useRef, useState, useEffect } from "react";
import line from "../../assets/png/line.png";
import line1 from "../../assets/png/line1.png";
import linecard from "../../assets/png/linecard.png";
import lockicon from "../../assets/svg/lockicon.svg";
import lockicon1 from "../../assets/svg/lockicon1.svg";
import bullish from "../../assets/svg/bullish.svg";
import bearish from "../../assets/svg/bearish.svg";
import UnlockDialog from "./UnlockDialog";
import indexfuture from "../../assets/png/indexfuture.png";
import indexfuture1 from "../../assets/png/indexfuture1.png";
import { AnimateFromInside } from "../../common/ScrollFadeIn";

const Strategies = () => {
  const containerRef = useRef(null);
  const btnRefs = {
    Bullish: useRef(null),
    Bearish: useRef(null),
  };

  const [activeButton, setActiveButton] = useState("Bullish");
  const [highlightLeft, setHighlightLeft] = useState(0);
  const [highlightWidth, setHighlightWidth] = useState(0);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem("strategiesUnlocked") === "true";
  });
  const updateHighlight = () => {
    const activeRef = btnRefs[activeButton];
    if (activeRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnRect = activeRef.current.getBoundingClientRect();
      setHighlightLeft(btnRect.left - containerRect.left);
      setHighlightWidth(btnRect.width);
    }
  };

  useEffect(() => {
    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => window.removeEventListener("resize", updateHighlight);
  }, [activeButton]);

  const handleToggle = (type) => {
    setActiveButton(type);
  };

  const handleUnlockClick = () => {
    setIsDialogOpen(true);
  };

  const handleViewImageClick = () => {
    setIsUnlocked(true);
    setIsDialogOpen(false);
    sessionStorage.setItem("strategiesUnlocked", "true");
  };

  return (
    <div className="bg-[#01041A] text-white flex flex-col gap-4 justify-center md:px-40 px-4 pb-16 items-center w-full h-auto">
      <AnimateFromInside>
        <p className="font-semibold md:text-[64px]] text-[38px] leading-[100%] text-white font-degular text-center">
          Featured Strategies
        </p>
      </AnimateFromInside>

      <AnimateFromInside>
        <p className="font-normal md:text-[24px] text-[14px] md:leading-[33px] tracking-normal leading-[22px] text-center text-[#FFFFFFBF]/[0.75] font-roboto">
          Unleash the power of algorithmic systematic trading to supercharge
          your trading journey.
        </p>
      </AnimateFromInside>

      <div
        ref={containerRef}
        className="relative flex rounded-full overflow-hidden gap-2 p-1 cursor-pointer mt-4"
        style={{
          userSelect: "none",
          background:
            "linear-gradient(92.7deg, rgba(63, 173, 255, 0.2) 10.94%, rgba(24, 74, 190, 0.2) 104.87%)",
        }}
      >
        <div
          className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-in-out"
          style={{
            left: `${highlightLeft}px`,
            width: `${highlightWidth}px`,
            background:
              "linear-gradient(115.36deg, #0E6F2A 7.08%, #55EF3D 133.49%)",
          }}
        />

        <button
          ref={btnRefs["Bullish"]}
          className={`relative flex justify-center items-center gap-2 z-10 md:px-12 px-4 md:py-3 py-[10px] md:text-base text-sm font-medium font-degular rounded-full transition-all duration-300 ${
            activeButton === "Bullish" ? "text-white" : "text-white/60"
          }`}
          onClick={() => handleToggle("Bullish")}
        >
          Bullish <img src={bullish} alt="bullish" />
        </button>

        <button
          ref={btnRefs["Bearish"]}
          className={`relative flex justify-center items-center gap-2 z-10 md:px-12 px-4 md:py-3 py-[10px] md:text-base text-sm font-medium font-degular rounded-full transition-all duration-300 ${
            activeButton === "Bearish" ? "text-white" : "text-white/60"
          }`}
          onClick={() => handleToggle("Bearish")}
        >
          Bearish <img src={bearish} alt="bullish" />
        </button>
      </div>
      {/* Desktop view */}

      {/* card 1 */}
      <div className="md:flex hidden flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold text-[48px] leading-[100%]">
          Nifty 50 Index Options
        </p>

        <div className="flex items-center justify-center relative mt-4">
          <img
            src={linecard}
            alt="linecard"
            className="h-[400px] object-cover"
          />

          <div className="relative">
            <img src={line} alt="line" className="object-cover h-[400px]" />
            <img
              src={linecard}
              alt="linecard"
              className={`object-cover absolute h-[390px] left-[95px] top-[6px] p-2 transition-all duration-300 ${
                isUnlocked ? "blur-0" : "blur-md"
              }`}
            />

            {!isUnlocked && (
              <div className="absolute inset-0 left-44 flex flex-col justify-center items-center gap-4 font-poppins w-[60%]">
                <img src={lockicon} alt="lockicon" />
                <p className="font-semibold text-[20px] leading-[100%] text-[#FFFFFFBF]">
                  View Backtest Data
                </p>
                <p className="font-semibold text-[26px] leading-[120%] text-white text-center">
                  <span className="bg-[linear-gradient(92.85deg,_#3FEFFF_-1.87%,_#184ABE_65.54%)] bg-clip-text text-transparent">
                    Unlock
                  </span>{" "}
                  backtest results and <br /> performance metrics.
                </p>
                <button
                  onClick={handleUnlockClick}
                  className="text-white font-semibold py-3 px-6 rounded-[12px] shadow-md flex justify-center items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(141.14deg, #3FADFF 7.75%, #336CDC 49.32%, #47B4B4 91.74%)",
                  }}
                >
                  <span>
                    <img src={lockicon1} alt="lockicon1" />
                  </span>{" "}
                  Unlock
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="md:flex hidden flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold text-[48px] leading-[100%]">
          Bank Nifty Index Options
        </p>

        <div className="flex items-center justify-center relative mt-4">
          <img
            src={linecard}
            alt="linecard"
            className="h-[400px] object-cover"
          />

          <div className="relative">
            <img src={line} alt="line" className="object-cover h-[400px]" />
            <img
              src={indexfuture1}
              alt="indexfuture1"
              className="object-cover absolute h-[390px] left-[95px] top-[6px] p-2 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="md:flex hidden flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold text-[48px] leading-[100%]">
          Nifty 50 Index Futures
        </p>

        <div className="flex items-center justify-center relative mt-4">
          <img
            src={linecard}
            alt="linecard"
            className="h-[400px] object-cover"
          />

          <div className="relative">
            <img src={line} alt="line" className="object-cover h-[400px]" />
            <img
              src={indexfuture}
              alt="indexfuture"
              className="object-cover absolute h-[390px] left-[95px] top-[6px] p-2 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="md:flex hidden flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold text-[48px] leading-[100%]">
          Bank Nifty Index Futures
        </p>

        <div className="flex items-center justify-center relative mt-4">
          <img
            src={linecard}
            alt="linecard"
            className="h-[400px] object-cover"
          />

          <div className="relative">
            <img src={line} alt="line" className="object-cover h-[400px]" />
            <img
              src={indexfuture}
              alt="indexfuture"
              className="object-cover absolute h-[390px] left-[95px] top-[6px] p-2 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* responsive view */}

      {/* card 1 */}
      <div className="md:hidden flex flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold md:text-[48px] text-[24px] leading-[100%] text-center">
          Nifty 50 Index Options
        </p>

        <div className="flex flex-col items-center justify-center relative mt-4">
          <img src={linecard} alt="linecard" className="w-full object-cover" />

          <div className="relative">
            <img src={line1} alt="line" className="object-cover w-full" />
            <img
              src={linecard}
              alt="linecard"
              className={`object-cover absolute w-full left-0 top-[42px] p-2 transition-all duration-300 ${
                isUnlocked ? "blur-0" : "blur-md"
              }`}
            />

            {!isUnlocked && (
              <div className="absolute inset-0 flex flex-col top-6 left-2 justify-center items-center md:gap-4 gap-3 font-poppins p-4">
                <img
                  src={lockicon}
                  alt="lockicon"
                  className="w-[55px] object-cover"
                />
                <p className="font-semibold md:text-[20px] text-[12px] leading-[100%] text-[#FFFFFFBF]">
                  View Backtest Data
                </p>
                <p className="font-semibold md:text-[26px] text-[16px] leading-[130%] text-white text-center">
                  <span className="bg-[linear-gradient(92.85deg,_#3FEFFF_-1.87%,_#184ABE_65.54%)] bg-clip-text text-transparent">
                    Unlock
                  </span>{" "}
                  backtest results and <br className="md:block hidden" />{" "}
                  performance metrics.
                </p>
                <button
                  onClick={handleUnlockClick}
                  className="text-white font-semibold py-3 px-6 rounded-[12px] shadow-md flex justify-center items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(141.14deg, #3FADFF 7.75%, #336CDC 49.32%, #47B4B4 91.74%)",
                  }}
                >
                  <span>
                    <img src={lockicon1} alt="lockicon1" />
                  </span>{" "}
                  Unlock
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="md:hidden flex flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold md:text-[48px] text-[24px] leading-[100%] text-center">
          Bank Nifty Index Options
        </p>

        <div className="flex flex-col items-center justify-center relative mt-4">
          <img src={linecard} alt="linecard" className="w-full object-cover" />

          <div className="relative">
            <img src={line1} alt="line" className="object-cover w-full" />
            <img
              src={indexfuture1}
              alt="linecard1"
              className="object-cover absolute w-full left-0 top-[42px] p-2 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="md:hidden flex flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold md:text-[48px] text-[24px] leading-[100%] text-center">
          Nifty 50 Index Futures
        </p>

        <div className="flex flex-col items-center justify-center relative mt-4">
          <img src={linecard} alt="linecard" className="w-full object-cover" />

          <div className="relative">
            <img src={line1} alt="line" className="object-cover w-full" />
            <img
              src={indexfuture}
              alt="linecard"
              className="object-cover absolute w-full left-0 top-[42px] p-2 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="md:hidden flex flex-col justify-center items-center gap-4 mt-8">
        <p className="font-semibold md:text-[48px] text-[24px] leading-[100%] text-center">
          Nifty 50 Index Futures
        </p>

        <div className="flex flex-col items-center justify-center relative mt-4">
          <img src={linecard} alt="linecard" className="w-full object-cover" />

          <div className="relative">
            <img src={line1} alt="line" className="object-cover w-full" />
            <img
              src={indexfuture}
              alt="linecard"
              className="object-cover absolute w-full left-0 top-[42px] p-2 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      <UnlockDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onContinue={handleViewImageClick}
      />
    </div>
  );
};

export default Strategies;
