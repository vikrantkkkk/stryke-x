import React, { useState, useRef, useEffect } from "react";
import arrow from "../assets/svg/arrow1.svg";
import { AnimateFromInside } from "../common/ScrollFadeIn";

const faqData = [
  {
    id: 1,
    question: "Is this webinar suitable for beginners?",
    answer:
      "Absolutely! This webinar is beginner-friendly. Whether you're completely new to trading or have some experience, all concepts will be explained in a simple, clear, and structured manner.",
  },
  {
    id: 2,
    question: "What language will the webinar be conducted in?",
    answer:
      "The webinar will be conducted in both Hindi and English to ensure maximum accessibility.",
  },
  {
    id: 3,
    question: "Will I get access to the webinar recording?",
    answer:
      "Yes, all participants will receive access to the session recording after the webinar.",
  },
  {
    id: 4,
    question: "How can I contact the Stockwiz support team?",
    answer: `You can reach out to us through the following channels:<br/>
      ✉️ Email: <a href="mailto:help@stockwiz.in" class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">help@stockwiz.in</a><br/>
      📞 Phone: +91 7206533303`,
  },
  {
    id: 5,
    question: "Is the webinar free to attend?",
    answer:
      "No, this is a paid webinar. The fee helps ensure the quality of content, personalized support, and valuable insights shared during the session.",
  },
];

const FAQItem = ({ item, index, isActive, onToggle }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  return (
    <AnimateFromInside>
      <div
        onClick={() => onToggle(index)}
        className={`w-full bg-white/5 backdrop-blur-sm cursor-pointer md:max-w-4xl rounded-2xl transition-all duration-500 ease-out hover:bg-white/8 hover:shadow-lg hover:shadow-white/5 ${
          isActive ? "bg-white/8 shadow-lg shadow-white/5" : ""
        }`}
      >
        <div className="md:p-6 p-4">
          <div className="flex items-start justify-between">
            <h3 className="md:font-medium font-semibold md:text-[24px] text-base md:leading-8 leading-7 text-white pr-4 flex-grow">
              {item.question}
            </h3>
            
            <button
              aria-expanded={isActive}
              aria-label={isActive ? "Collapse answer" : "Expand answer"}
              className="flex-shrink-0 p-1 rounded-full transition-all duration-300 ease-out"
            >
              <img
                src={arrow}
                alt=""
                className={`w-5 h-5 transition-transform duration-200 ease-out ${
                  isActive ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
          </div>

          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{ height: `${contentHeight}px` }}
          >
            <div
              ref={contentRef}
              className={`pt-4 transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className="font-light md:text-[20px] text-sm md:leading-8 leading-6 text-[#FFFFFFBF]"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimateFromInside>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#01041A] text-white flex justify-center items-center md:pt-24 pt-16 pb-16 w-full md:px-10 px-4">
      <div className="flex flex-col w-full max-w-6xl justify-center items-center gap-12">
        <AnimateFromInside>
          <div className="text-center">
            <p className="font-semibold text-[40px] md:text-[60px] leading-[140%] font-degular bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Frequently Asked Questions
            </p>
          </div>
        </AnimateFromInside>
        
        <div className="w-full flex justify-center">
          <div className="flex flex-col w-full max-w-4xl space-y-4">
            {faqData.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                index={index}
                isActive={activeIndex === index}
                onToggle={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;