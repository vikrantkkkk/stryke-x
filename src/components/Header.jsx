import React, { useState, useEffect } from "react";
import { AnimateFromInside } from "../common/ScrollFadeIn";
import mainlogo from "../assets/png/mainlogo.png";
import mainlogo1 from "../assets/svg/mainlogo1.svg";
import humberger from "../assets/svg/humberger.svg";

const navItems = ["Home", "Features", "Algos", "Pricing", "Funded Accounts"];

const Header = () => {
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerHeight = 80;

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    const sections = navItems.map((item) =>
      document.getElementById(item.toLowerCase().replace(/\s/g, ""))
    );
    sections.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActiveId(navItems[index].toLowerCase().replace(/\s/g, ""));
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // close mobile menu on click
    }
  };

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full md:w-[1300px] px-4">
      <div className="bg-white/5 backdrop-blur-[30px] rounded-[20px] px-4 py-2">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <AnimateFromInside>
            <div className="flex items-center z-10">
              <a href="/" className="flex items-center gap-2">
                <img
                  src={mainlogo}
                  alt="logo"
                  className="h-6 md:block hidden"
                />
                <img src={mainlogo1} alt="logo" className="h-6 md:hidden" />
              </a>
            </div>
          </AnimateFromInside>

          {/* Desktop Nav */}
          <AnimateFromInside>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex hidden gap-6 items-center">
              {navItems.map((item) => {
                const id = item.toLowerCase().replace(/\s/g, "");
                const isActive = activeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-[18px] leading-[100%] font-normal transition ${
                      isActive
                        ? "text-white font-extrabold"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </AnimateFromInside>

          {/* Desktop Buttons */}
          <AnimateFromInside>
            <div className="md:flex hidden gap-3 items-center z-10">
              <button className="bg-white text-black text-[14px] leading-[100%] font-medium px-4 py-3 rounded-full hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white/60 text-white text-[14px] leading-[100%] font-medium px-4 py-3 rounded-full hover:bg-white hover:text-black transition flex items-center gap-1">
                Watch Tutorial
                <span className="text-xs ml-1">▶</span>
              </button>
            </div>
          </AnimateFromInside>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {mobileMenuOpen ? (
                "X"
              ) : (
                <span>
                  <img src={humberger} alt="" />
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/10 backdrop-blur-[20px] rounded-[20px] p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s/g, "");
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white text-left text-[18px] font-medium"
                >
                  {item}
                </button>
              );
            })}
            <button className="bg-white text-black text-[14px] font-medium px-4 py-3 rounded-full hover:bg-gray-100 transition mt-2">
              Get Started
            </button>
            <button className="border border-white/60 text-white text-[14px] font-medium px-4 py-3 rounded-full hover:bg-white hover:text-black transition flex items-center gap-1">
              Watch Tutorial <span className="text-xs ml-1">▶</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
