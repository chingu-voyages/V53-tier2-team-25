import React from "react";
import { Link } from "react-router-dom";
import CalendarPage from "./Calendar-Page.jsx";
import background from "../assets/images/MobileLandingPageBackground.png";
import heroImage from "../assets/images/MobileHeroImage.png";
import tabletHeroImage from "../assets/images/TabletHeroImage.png";
import Step1 from "../assets/images/Step_1_Calendar.svg";
import Step2 from "../assets/images/Step_2_WorryFree.svg";
import Step3 from "../assets/images/Step_3_Dish.svg";
import DesktopHeroImage from "../assets/images/DesktopHeroImage.png";

const LandingPage = () => {
  return (
    <div>
      <div className="hidden  lg:block  ">
        <div
          //add hidden
          className="sm:hidden bg-cover  lg:bg-center lg:bg-no-repeat lg:flex lg:items-center lg:justify-center   "
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/Kj1zbMQN/Landing-Page-Background.png')",
            minHeight: "88vh",
            minWidth: "80vw",
          }}
        >
          <div className="lg:flex lg:flex-col lg:px-20 ">
            <div className="hidden lg:flex lg:flex-row lg:justify-content-center ">
              <img
                //remove sm:hidden
                className=" lg:block lg:w-[673px]lg: h-[348px] "
                src={DesktopHeroImage}
              ></img>
              <div className=" lg:block xl:block flex flex-col items-center justify-center px-10 mt-10">
                <p className="hidden lg:block lg:text-[#f17528] lg:text-4xl lg:font-poppins lg:text-left lg:font-semibold lg:text-accent lg:text-center">
                  Building a menu just got easier!
                </p>
                <p className="hidden lg:block text-left ml-5 font-raleway mt-5 lg:px-7 lg:text-center">
                  In 3 quick steps, we’ll make you a delicious, inclusive menu
                  for your hungry staff.
                </p>
                <div className="flex justify-center aligh-center">
                  <Link to="/menu-creation">
                    <button className="hidden lg:block lg:bg-[#f17528] lg:w-[278px] lg:h-[56px] lg:font-bold lg:text-center lg:my-5 lg:text-xl lg:font-inter lg:text-text lg:rounded-lg">
                      Create Weekly Menu
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:flex lg:justify-evenly lg:my-[30px]">
              <div className="hidden lg:block lg:flex lg:flex-col lg:items-center">
                <img
                  src={Step1}
                  className="hidden lg:block lg:mb-2 lg:w-20 lg:border-primary lg:max-w-xs lg:font-raleway lg:text-center lg:font-bold lg:text-primary"
                ></img>
                <div className=" lg:flex flex-col font-raleway font-bold text-base items-center">
                  <p>Step 1</p>
                  <p>Pick a Week</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={Step2}
                  className="mb-2 w-20 border-primary max-w-xs font-raleway text-center font-bold text-primary"
                ></img>
                <div className=" flex flex-col font-raleway font-bold text-base items-center">
                  <p>Step 2</p>
                  <p>List Allergies</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={Step3}
                  className="mb-2 w-20 border-primary max-w-xs font-raleway text-center font-bold text-primary"
                ></img>
                <div className=" flex flex-col font-raleway font-bold text-base items-center">
                  <p>Step 3</p>
                  <p>Select Dishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile and tablet screens */}
      <div className="block  lg:hidden">
        <img
          src={heroImage}
          className="  sm:size-15  md:w-full md:h-45 sm:bg-cover  md:bg-cover md:hidden lg:hidden"
        ></img>
        <img
          src={tabletHeroImage}
          className=" hidden md:block sm:size-15  md:w-full md:h-45 sm:bg-cover  md:bg-cover "
        ></img>
        <div className=" relative">
          <img
            src={background}
            className="  sm:bg-cover md: lg:hidden"
          ></img>
          <div className="absolute  inset-0 md:gap-y-6 flex flex-col  sm:bottom-20  items-center justify-center  lg:hidden">
            <p className="md:block sm:block  sm:text-4xl  text-[#f17528] text-4xl  sm:text-m md:text-6xl px-5  sm:px-8   md:px-10 sm:mt-[60px]  text-center   sm:font-poppins sm:text-center   font-bold sm:font-semibold sm:mx-3 lg:hidden text-shadow-white ">
              Building a menu just got easier!
            </p>
            <p className="block lg:hidden  text-center md:text-2xl  px-10   md:px-40 sm:text-center sm:font-raleway mt-3 sm:mt-[5px]   md:mt-9">
              In 3 quick steps, we’ll make you a delicious, inclusive menu for
              your hungry staff.
            </p>
            <div className="flex justify-center aligh-center">

              <Link component={CalendarPage} to="/menu-creation">
                <button className="block lg-hidden bg-[#f17528] font-bold  py-[10px] px-[8px] sm:py-[16px] sm:px-[8px]  md:text-2xl md:mt-7  md:py-[15px] md:px-[18px] my-3 text-l lg:font-inter lg:text-text rounded-lg">
                  Create Weekly Menu
                </button>
              </Link>
            </div>
            <div className="flex justify-evenly mt-3 md:mt-8  ">
              <div className="flex flex-col items-center ">
                <img
                  src={Step1}
                  className=" w-14 h-14 mb-0 md:mb-2 md:w-20  md:h-20  border-primary max-w-xs font-raleway text-center font-bold text-primary"
                ></img>
                <div className="flex flex-col font-raleway font-bold text-base items-center">
                  <p className="text-sm md:text-lg ">Step 1</p>
                  <p className="text-sm md:text-lg ">Pick a Week</p>
                </div>
              </div>
              <div className="flex flex-col items-center ml-7 mr-7  md:ml-20 md:mr-20">
                <img
                  src={Step2}
                  className=" w-14 h-14  mb-0 md:mb-2 md:w-20  md:h-20 border-primary max-w-xs font-raleway text-center font-bold text-primary"
                ></img>
                <div className=" flex flex-col font-raleway font-bold text-base items-center">
                  <p className="text-sm md:text-lg ">Step 2</p>
                  <p className="text-sm md:text-lg">List Allergies</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={Step3}
                  className=" w-14 h-14  mb-0 md:mb-2  md:w-20  md:h-20 border-primary max-w-xs font-raleway text-center font-bold text-primary"
                ></img>
                <div className=" flex flex-col font-raleway font-bold text-base items-center">
                  <p className="text-sm md:text-lg ">Step 3</p>
                  <p className="text-sm  md:text-lg">Select Dishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
