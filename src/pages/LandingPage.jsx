import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer.jsx";
import CalendarPage from "./Calendar-Page.jsx";
import LandingPageBackground from "/LandingPageBackground.png";
import background from "/MobileLandingPageBackground.png";
import heroImage from "/MobileHeroImage.png";
import Step1 from "/Step_1_Calendar.svg";
import Step2 from "/Step_2_WorryFree.svg";
import Step3 from "/Step_3_Dish.svg";
import DesktopHeroImage from "/DesktopHeroImage.png";

const LandingPage = () => {
  return (
    <>
      <div
        className="sm:hidden xs:hidden lg:h-full lg:bg-cover lg:bg-center lg:bg-no-repeat lg:flex lg:items-center lg:justify-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/Kj1zbMQN/Landing-Page-Background.png')",
        }}
      >
        <div className="sm:hidden xs:hidden md:hidden lg:flex lg:flex-col">
          <div className="sm:hidden lg:flex lg:flex-row lg:ml-20 lg:mt-10 lg:justify-content-center ">
            <img
              className="sm:hidden lg:w-[673px]lg: h-[348px] lg:mr-2"
              src={DesktopHeroImage}
            ></img>
            <div className="sm:hidden lg:flex lg:flex-col lg:w-[347px] lg:px-[48px]">
              <p className="sm:hidden lg:text-[#f17528] lg:text-5xl lg:font-poppins lg:text-center lg:font-semibold lg:text-accent">
                Building a menu just got easier!
              </p>
              <p className="sm:hidden lg:text-center lg:font-raleway">
                In 3 quick steps, we’ll make you a delicious, inclusive menu for
                your hungry staff.
              </p>
              <Link component={CalendarPage} to="/calendar-page">
                <button className="sm:hidden lg:bg-[#f17528] lg:w-[278px] lg:h-[56px] lg:font-bold lg:py-[16px] lg:px-[8px] lg:my-3 lg:text-xl lg:font-inter lg:text-text lg:rounded-lg">
                  Create weekly Menu
                </button>
              </Link>
            </div>
          </div>
          <div className="sm:hidden lg:flex lg:justify-evenly lg:my-[30px]">
            <div className="sm:hidden lg:flex lg:flex-col lg:items-center">
              <img
                src={Step1}
                className="sm:hidden xs:hidden lg:mb-2 lg:w-20 lg:border-primary lg:max-w-xs lg:font-raleway lg:text-center lg:font-bold lg:text-primary"
              ></img>
              <div className="sm:hidden lg:flex flex-col font-raleway font-bold text-base items-center">
                <p className="sm:hidden">Step 1</p>
                <p className="sm:hidden">Pick a Week</p>
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
      <div className="sm:visible md:hidden lg:hidden">
        <img src={heroImage} className="sm:size-15 md:hidden lg:hidden"></img>
        <img
          src={background}
          className="sm:size-15 sm:bg-cover md:hidden lg:hidden"
        ></img>
        <div className="sm:flex sm:flex-col sm:h-[108px] md:hidden lg:hidden">
          <p className="sm:text-4xl md:hidden lg:hidden sm:font-poppins sm:text-center sm:font-semibold sm:text-textOrange sm:-mt-80 sm:mx-3 ">
            Building a menu just got easier!
          </p>
          <p className="md:hidden lg:hidden sm:text-center sm:font-raleway sm:mt-[8px] sm:h-[150px]">
            In 3 quick steps, we’ll make you a delicious, inclusive menu for
            your hungry staff.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
