import React from "react";
import Header from "../components/header";
import Footer from "../components/footer.jsx";
import LandingPageBackground from "../../public/LandingPageBackground.png";
import DesktopHeroImage from "../../public/DesktopHeroImage.png";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <img src={LandingPageBackground}></img>
      <div className="ml-1/12 w-7/12 -mt-1">
        <img src={DesktopHeroImage}></img>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
