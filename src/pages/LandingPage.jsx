import React from "react";
import Header from "../components/header";
import Footer from "../components/footer.jsx";
import LandingPageBackground from "../../public/LandingPageBackground.png";
import DesktopHeroImage from "../../public/DesktopHeroImage.png";

const LandingPage = () => {
  return (
    <div className="relative">
      <Header />
      <img
        src={LandingPageBackground}
        className="absolute bg-cover bg-center "
      ></img>
      <div className="flex flex-row absolute ml-20 mt-10 justify-items-center ">
        <img className=" w-[673px] h-[348px] mr-2" src={DesktopHeroImage}></img>
        <div className="flex flex-col w-[347px] px-[48px]">
          <p className="text-4xl text-[#f17528]">
            Building a menu just got easier!
          </p>
          <p>
            In 3 quick steps, we’ll make you a delicious, inclusive menu for
            your hungry staff.
          </p>
          <button className="bg-[#f17528] w-[278px] h-[56px] font-bold py-[16px] px-[8px]">
            Create weekly Menu
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
