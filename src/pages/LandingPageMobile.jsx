import React from "react";
import background from "/MobileLandingPageBackground.png";
import heroImage from "/MobileHeroImage.png";

const LandingPageMobile = () => {
  return (
    <div className="sm:visible">
      <img src={heroImage} className="sm:size-15"></img>
      <img src={background} className="sm:size-15 sm:bg-cover"></img>
      <div className="sm:flex sm:flex-col sm:h-[108px]">
        <p className="sm:text-4xl sm:font-poppins sm:text-center sm:font-semibold sm:text-textOrange sm:-mt-80 mx-3 ">
          Building a menu just got easier!
        </p>
        <p className="sm:text-center sm:font-raleway sm:mt-[8px] sm:h-[150px]">
          In 3 quick steps, we’ll make you a delicious, inclusive menu for your
          hungry staff.
        </p>
      </div>
    </div>
  );
};

export default LandingPageMobile;
