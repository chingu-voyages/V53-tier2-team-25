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
    <div className="relative">
      <Header className="absolute" />
      <img
        src={LandingPageBackground}
        className="absolute bg-cover bg-center "
      ></img>
      <div className="flex flex-col absolute">
        <div className="flex flex-row ml-20 mt-10 justify-content-center ">
          <img
            className=" w-[673px] h-[348px] mr-2"
            src={DesktopHeroImage}
          ></img>
          <div className="flex flex-col w-[347px] px-[48px]">
            <p className="text-[#f17528] text-5xl font-poppins text-center font-semibold text-accent">
              Building a menu just got easier!
            </p>
            <p className="text-center">
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
        <div className="flex justify-center mt-[60px]">
          <img
            src={Step1}
            className="m-3 border-primary max-w-xs font-raleway text-center font-bold text-primary"
          ></img>
          <img
            src={Step2}
            className="m-5 border-primary max-w-xs font-raleway text-center font-bold text-primary"
          ></img>
          <img
            src={Step3}
            className="m-3 border-primary max-w-xs font-raleway text-center font-bold text-primary"
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
