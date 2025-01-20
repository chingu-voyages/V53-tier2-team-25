import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer.jsx";
import CalendarPage from "./Calendar-Page.jsx";
import LandingPageBackground from "/LandingPageBackground.png";
import Step1 from "/Step_1_Calendar.svg";
import Step2 from "/Step_2_WorryFree.svg";
import Step3 from "/Step_3_Dish.svg";
import DesktopHeroImage from "/DesktopHeroImage.png";

const LandingPage = () => {
  return (
    <div
      className="h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/Kj1zbMQN/Landing-Page-Background.png')",
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row ml-20 mt-10 justify-content-center ">
          <img
            className=" w-[673px] h-[348px] mr-2"
            src={DesktopHeroImage}
          ></img>
          <div className="flex flex-col w-[347px] px-[48px]">
            <p className="text-[#f17528] text-5xl font-poppins text-center font-semibold text-accent">
              Building a menu just got easier!
            </p>
            <p className="text-center font-raleway">
              In 3 quick steps, we’ll make you a delicious, inclusive menu for
              your hungry staff.
            </p>
            <Link component={CalendarPage} to="/calendar-page">
              <button className="bg-[#f17528] w-[278px] h-[56px] font-bold py-[16px] px-[8px] my-3 text-xl font-inter text-text rounded-lg">
                Create weekly Menu
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly my-[30px]">
          <div className="flex flex-col items-center">
            <img
              src={Step1}
              className="mb-2 w-20 border-primary max-w-xs font-raleway text-center font-bold text-primary"
            ></img>
            <div className=" flex flex-col font-raleway font-bold text-base items-center">
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
  );
};

export default LandingPage;
