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
          className="hidden  lg:block  bg-cover  lg:bg-centerlg:bg-no-repeat lg:flex lg:items-center lg:justify-center   "
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/Kj1zbMQN/Landing-Page-Background.png')",
            minHeight: "84vh",
          }}
        >
          <div className=" lg:flex-col  px-20">
            <div className="sm:hidden lg:flex lg:flex-row  lg:mt-10        lg:justify-content-center ">
              <img
                //remove sm:hidden
                className="hidden lg:block lg:w-[673px]lg: h-[348px] "
                src={DesktopHeroImage}
              ></img>
              <div className="hidden lg:block xl:block flex flex-col items-center justify-center px-10 mt-10">
                <p className="hidden lg:block lg:text-[#f17528] lg:text-5xl lg:font-poppins lg:text-center lg:font-semibold lg:text-accent">
                  Building a menu just got easier!
                </p>
                <p className="hidden lg:block text-center font-raleway mt-5 lg:px-7">
                  In 3 quick steps, we’ll make you a delicious, inclusive menu
                  for your hungry staff.
                </p>
                <div className="flex justify-center aligh-center">
                <Link to="/calendar-page">
                  <button className="hidden lg:block lg:bg-[#f17528] lg:w-[278px] lg:h-[56px] lg:font-bold lg:py-[16px] lg:px-[8px] lg:my-3 lg:text-xl lg:font-inter lg:text-text lg:rounded-lg">
                    Create weekly Menu
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
          src={tabletHeroImage }
          className="md:block sm:size-15  md:w-full md:h-45 sm:bg-cover  md:bg-cover lg:hidden sm:hidden"
        ></img>
        <div className=" relative">
          <img
            src={background}
            className="relative sm:size-15 sm:bg-cover md: lg:hidden"
          ></img>
          <div className="absolute  inset-0  flex flex-col  sm:bottom-40 md:bottom-20 items-center justify-center  lg:hidden">
            <p className="block lg:hidden  text-[#f17528] text-4xl  sm:text-m md:text-6xl px-5  sm:px-8   md:px-10  sm:mt-[60px]  text-center   sm:font-poppins sm:text-center   font-bold sm:font-bold  sm:mx-3 lg:hidden text-shadow-white ">
              Building a menu just got easier!
            </p>
            <p className="block lg:hidden  text-center md:text-2xl  px-10   md:px-40 sm:text-center sm:font-raleway mt-6 sm:mt-[8px]   md:mt-9">
              In 3 quick steps, we’ll make you a delicious, inclusive menu for
              your hungry staff.
            </p>
            <div className="flex justify-center aligh-center">
              <Link component={CalendarPage} to="/calendar-page">
                <button className="block lg-hidden bg-[#f17528] font-bold  py-[10px] px-[8px] sm:py-[16px] sm:px-[8px]  md:text-2xl md:mt-7  md:py-[15px] md:px-[18px] my-3 text-l lg:font-inter lg:text-text rounded-lg">
                  Create weekly Menu
                </button>
              </Link>
            </div>
            <div className="hidden md:block  md:flex md:justify-evenly md:my-[30px] md:[mx-5px]">
              <div className="flex md:flex-col md:items-center ">
                <img
                  src={Step1}
                  className="md:mb-2 md:w-20 md:border-primary md:max-w-xs md:font-raleway md:text-center md:font-bold md:text-primary"
                ></img>
                <div className=" md:flex flex-col font-raleway font-bold text-base items-center">
                  <p>Step 1</p>
                  <p>Pick a Week</p>
                </div>
              </div>
              <div className="flex flex-col items-center ml-7 mr-7">
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
    </div>
  );
};

export default LandingPage;
