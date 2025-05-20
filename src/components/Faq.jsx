import React, { useState } from "react";
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
      ✉️ Email: <a href="mailto:help@stockwiz.in" class="text-blue-600 underline">help@stockwiz.in</a><br/>
      📞 Phone: +91 7206533303`,
  },
  {
    id: 5,
    question: "Is the webinar free to attend?",
    answer:
      "No, this is a paid webinar. The fee helps ensure the quality of content, personalized support, and valuable insights shared during the session.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#01041A] text-white flex  justify-center items-center pt-24 pb-16 w-full px-40">
      <div className="flex flex-col w-full justify-center items-center gap-9">
        <AnimateFromInside>
          <p className="font-semibold text-[32px] md:text-[64px] leading-[100%] mb-4 font-degular">
            Frequently Asked Questions
          </p>
        </AnimateFromInside>
        <div className="flex-1 mt-6 md:mt-0">
          <div className="flex flex-col w-full space-y-4">
            {faqData.map((item, index) => (
              <AnimateFromInside key={item.id}>
                <div
                  onClick={() => toggleFAQ(index)}
                  className={`w-full bg-[#FFFFFF1A]/[0.1] cursor-pointer md:max-w-[992px] rounded-[16px] p-6  transition-all duration-300 ease-in-out h-auto flex ${
                    activeIndex === index ? "items-start" : "items-center"
                  }`}
                >
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-medium text-[20px] leading-[32px] mr-4">
                      {item.question}
                    </h3>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        activeIndex === index
                          ? "opacity-100 mt-4 h-auto"
                          : "opacity-0 h-0"
                      }`}
                    >
                      <p
                        className="font-extralight text-[16px] leading-[32px] text-[#FFFFFF1A]/[0.75]"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></p>
                    </div>
                  </div>

                  <button
                    aria-expanded={activeIndex === index}
                    className={`flex-shrink-0 ${
                      activeIndex === index ? "self-start" : "self-center"
                    }`}
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{
                        transform:
                          activeIndex === index
                            ? "rotate(-0deg)"
                            : "rotate(180deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </button>
                </div>
              </AnimateFromInside>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
