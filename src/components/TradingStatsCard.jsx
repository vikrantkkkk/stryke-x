import { AnimateFromInside } from "../common/ScrollFadeIn";

export default function TradingStatsCard({ sebiLogo, leftcard, rightcard }) {
  return (
    <AnimateFromInside>
      <div className="md:w-[797px] w-[350px]  rounded-[24px] flex justify-center md:mt-16 mt-8 bg-[#0F1330] z-10 relative overflow-hidden">
        <div
          className="flex flex-col md:flex-row items-center justify-between text-white rounded-2xl px-6 py-6 gap-6 md:gap-8 shadow-md max-w-4xl w-full"
          style={{
            border: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, #000000 0%, #FFFFFF 50%, #000000 100%)",
            borderImageSlice: 1,
          }}
        >
          {/* Strategy Count */}
          <div className="flex flex-col items-center justify-center text-center flex-1">
            <p className="text-4xl font-semibold">10+</p>
            <p className="text-[16px] font-medium leading-[24px] text-[#FFFFFFBF]/[0.75] mt-1">
              Pre Built Algo Strategies
            </p>
          </div>

          {/* Divider (horizontal on mobile, vertical on desktop) */}
          <div className="w-full h-px bg-gray-700 md:hidden" />
          <div className="hidden md:block h-12 w-px bg-gray-700" />

          {/* Turnover */}
          <div className="flex flex-col items-center justify-center text-center flex-1">
            <p className="text-4xl font-semibold">₹100 Cr+</p>
            <p className="text-[16px] font-medium leading-[24px] text-[#FFFFFFBF]/[0.75] mt-1">
              Daily Trading Turnover
            </p>
          </div>

          {/* Divider (horizontal on mobile, vertical on desktop) */}
          <div className="w-full h-px bg-gray-700 md:hidden" />
          <div className="hidden md:block h-12 w-px bg-gray-700" />

          {/* SEBI Registered */}
          <div className="flex flex-col items-center justify-center text-center flex-1">
            <img src={sebiLogo} alt="SEBI Registered" className="h-10 mb-1" />
            <p className="text-[16px] font-medium leading-[24px] text-[#FFFFFFBF]/[0.75]">
              Registered
            </p>
          </div>
        </div>

        {/* Decorative images */}
        <img
          src={leftcard}
          alt="Decorative element"
          className="absolute h-32 left-0 top-0"
        />
        <img
          src={rightcard}
          alt="Decorative element"
          className="absolute h-32 right-0 bottom-0"
        />
      </div>
    </AnimateFromInside>
  );
}
