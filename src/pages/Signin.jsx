import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import mainlogo from "../assets/svg/mainlogo.svg";
import whatsappnew from "../assets/svg/whatsappnew.svg";
import mailnew from "../assets/svg/mailnew.svg";
import phonenew from "../assets/svg/phonenew.svg";
import vector from "../assets/png/vector.png";
import video from "../assets/png/video.png";

const Signin = () => {
  const [step, setStep] = useState("mobile");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (step === "otp" && timer > 0) {
      handleOtpChange;
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);

    // Focus next input
    if (value && index < otp.length - 1) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) next.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        const prev = document.getElementById(`otp-${index - 1}`);
        if (prev) prev.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <>
      {/* desktop */}
      <div className="md:flex hidden w-full min-h-screen max-h-screen overflow-hidden p-6 font-inter">
        {/* Left Section */}
        <div
          className="flex flex-col justify-start items-start gap-[40px] flex-1 rounded-[33px] max-h-full w-full p-6 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(333.37deg, #3370FF -19.48%, #000000 96.37%)",
          }}
        >
          <img
            src={vector}
            alt=""
            className="absolute object-cover w-full h-full top-0 left-0 z-0"
          />
          <img src={mainlogo} alt="Logo" className="h-[35px] z-10" />
          <p className="font-semibold text-[28px] sm:text-[40px] md:text-[60px] lg:text-[85px] leading-[120%] text-left font-degular text-white z-10">
            Welcome <br /> To The Future <br />
            Of{" "}
            <span className="inline-block bg-[linear-gradient(280.72deg,_#87A1FF_40.8%,_#81F0FF_87.18%)] bg-clip-text text-transparent">
              Trading
            </span>
          </p>
          <img
            src={video}
            alt="Video preview"
            className="w-full object-cover rounded-xl z-10"
          />
        </div>

        {/* Right Section */}
        <div className="relative flex flex-1 flex-col justify-center items-center bg-white px-4 sm:px-10 py-8 overflow-y-auto">
          <div className="w-full max-w-[400px]">
            {step === "mobile" ? (
              <>
                <h2 className="text-[40px] font-bold text-[#111827]">
                  Login / Sign Up
                </h2>
                <p className="text-[18px] text-[#969696] mb-6">
                  Please enter your mobile number to continue.
                </p>

                <TextField
                  id="mobile"
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  placeholder="+91"
                  type="tel"
                  InputLabelProps={{
                    style: { color: "#4B5563" },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "8px",
                    },
                  }}
                  sx={{
                    marginBottom: "16px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#3370FF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3370FF",
                      },
                    },
                  }}
                />

                <button
                  onClick={() => setStep("otp")}
                  className="w-full bg-[#367AFF] hover:bg-[#1F50CC] text-white font-semibold py-3 rounded-lg text-[18px]"
                >
                  Get Started
                </button>
              </>
            ) : (
              <>
                <h2 className="text-[40px] font-bold text-[#111827]">
                  Enter OTP
                </h2>
                <p className="text-[18px] text-[#969696] mb-6">
                  We’ve sent it to +91 9416055569
                </p>

                <p className="text-[14px] text-[#000000] font-semibold leading-[20px] mb-2">
                  6-DIGIT
                </p>

                <div className="flex justify-between gap-2 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[#367AFF]"
                    />
                  ))}
                </div>

                <div className="flex justify-between text-sm mb-6">
                  <span className="text-[14px] text-[#000000] font-normal leading-[20px]">
                    Didn’t get it?
                  </span>
                  <span className="text-[14px] text-[#000000] font-medium leading-[20px]">
                    Resend OTP in {timer}s
                  </span>
                </div>

                <button className="w-full bg-[#367AFF] hover:bg-[#1F50CC] text-white font-semibold py-3 rounded-lg text-[18px]">
                  Continue
                </button>
              </>
            )}

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-sm text-gray-400">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <p className="text-[18px] text-[#969696] text-center">
              Need assistance?{" "}
              <a href="#" className="text-[#367AFF] font-medium">
                Contact Us
              </a>
            </p>
          </div>

          {/* Footer Info */}
          <div className="absolute bottom-0 flex flex-wrap justify-center gap-4 items-center text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <span>
                {" "}
                <img src={phonenew} alt={phonenew} />
              </span>
              <span className="text-[14px] text-[#000000] font-normal leading-[150%]">
                +91-6377959992
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                {" "}
                <img src={mailnew} alt={mailnew} />
              </span>
              <span className="text-[14px] text-[#000000] font-normal leading-[150%]">
                Tushar@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <img src={whatsappnew} alt={whatsappnew} />
              </span>
              <span className="text-[14px] text-[#000000] font-normal leading-[150%]">
                +91-6377959992
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex justify-center items-center w-full h-full">
        <div className="md:hidden flex justify-center items-center  relative w-full h-full">
          <div
            className="relative rounded-bl-xl rounded-br-xl h-[375px] overflow-hidden"
            style={{
              background:
                "linear-gradient(333.37deg, #3370FF -19.48%, #000000 96.37%)",
            }}
          >
            <img src={vector} alt="vector" className="object-cover" />
          </div>

          {/* Content overlay */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start gap-6 p-4">
            <img src={mainlogo} alt="mainlogo" className="h-[21px]" />
            <p className="font-semibold text-[38px] leading-[120%] text-left font-degular text-white mt-5">
              Welcome To The Future Of{" "}
              <span className="inline-block bg-[linear-gradient(280.72deg,_#87A1FF_40.8%,_#81F0FF_87.18%)] bg-clip-text text-transparent">
                Trading
              </span>
            </p>

            <div className="bg-white p-4 w-full rounded-t-[16px] z-50">
              {step === "mobile" ? (
                <div className="flex flex-col justify-start items-start gap-2">
                  <h2 className="text-[20px] font-bold text-[#111827]">
                    Login / Sign Up
                  </h2>
                  <p className="text-[13px] text-[#969696] mb-4">
                    Please enter your mobile number to continue.
                  </p>

                  <TextField
                    id="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    placeholder="+91"
                    type="tel"
                    InputLabelProps={{ style: { color: "#4B5563" } }}
                    InputProps={{ style: { borderRadius: "8px" } }}
                    sx={{
                      marginBottom: "16px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#D1D5DB" },
                        "&:hover fieldset": { borderColor: "#3370FF" },
                        "&.Mui-focused fieldset": { borderColor: "#3370FF" },
                      },
                    }}
                  />

                  <button
                    onClick={() => {
                      setStep("otp");
                      setTimer(60);
                    }}
                    className="w-full bg-[#367AFF] hover:bg-[#1F50CC] text-white font-semibold py-3 rounded-lg text-[14px]"
                  >
                    Get Started
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-[20px] font-bold text-[#111827]">
                    Enter OTP
                  </h2>
                  <p className="text-[13px] text-[#969696] mb-4">
                    We’ve sent it to +91 9416055569
                  </p>

                  <p className="text-[12px] text-[#000000] font-semibold leading-[20px] mb-2">
                    6-DIGIT
                  </p>

                  <div className="flex justify-between gap-2 mb-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-10 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-[#367AFF]"
                      />
                    ))}
                  </div>

                  <div className="flex justify-between text-[12px] mb-4">
                    <span className="text-black">Didn’t get it?</span>
                    <span className="font-medium text-black">
                      Resend OTP in {timer}s
                    </span>
                  </div>

                  <button
                    className="w-full bg-[#367AFF] hover:bg-[#1F50CC] text-white font-semibold py-3 rounded-lg text-[18px]"
                    onClick={() => alert("OTP Submitted")}
                  >
                    Continue
                  </button>

                  <button
                    className="w-full text-[#367AFF] font-medium text-[14px] mt-2"
                    onClick={() => setStep("mobile")}
                  >
                    Change Mobile Number
                  </button>
                </>
              )}

              <div className="flex items-center my-4">
                <hr className="flex-1 border-gray-300" />
                <span className="px-2 text-sm text-gray-400">or</span>
                <hr className="flex-1 border-gray-300" />
              </div>

              <p className="text-[14px] text-[#969696] text-center">
                Need assistance?{" "}
                <a href="#" className="text-[#367AFF] font-medium">
                  Contact Us
                </a>
              </p>

              <div className="flex flex-col justify-center items-center  gap-2 mt-6 text-sm text-[#000000]">
                <div className="flex flex-col justify-start items-start gap-4">
                  <div className="flex items-center gap-2">
                    <img src={phonenew} alt="phone" />
                    <span>+91-6377959992</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={mailnew} alt="mail" />
                    <span>Tushar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={whatsappnew} alt="whatsapp" />
                    <span>+91-6377959992</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
