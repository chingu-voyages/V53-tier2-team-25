import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CalendarPage from "../pages/Calendar-Page.jsx";
import AllergyPage from "../pages/AllergyPage.jsx";
import DishSelect from "../pages/DishSelectPage.jsx";

const ProgressBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getStepFromPath = (path) => {
    switch (path) {
      case "/calendar":
        return 1;
      case "/allergies":
        return 2;
      case "/dish-select":
        return 3;
      default:
        return 1;
    }
  };

  const currentStep = getStepFromPath(location.pathname);

  const nextStep = () => {
    if (currentStep === 1) navigate("/allergies");
    if (currentStep === 2) navigate("/dish-select");
  };

  const backStep = () => {
    if (currentStep === 2) navigate("/calendar");
    if (currentStep === 3) navigate("/allergies");
  };

  return (
    <div className="p-4 mt-4 font-raleway">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center">
          <div className="relative flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full border-8 ${
                currentStep === 1
                  ? "bg-[#fffbf1]  border-[#528540]"
                  : "bg-[#528540] border-[#528540]"
              }`}
            ></div>
            <div className="absolute mt-12 text-center">
              <p
                className={`text-sm ${
                  currentStep === 1 ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                Choose a week
              </p>
            </div>
          </div>
          <div
            className={`h-1 ${
              currentStep >= 2 ? "bg-[#528540]" : "border-2 border-dashed border-gray-400"
            } w-24 sm:w-48 md:w-56 lg:w-56 xl:w-64`}
          ></div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div className="relative flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full border-8 ${
                currentStep === 2
                ? "bg-[#fffbf1] border-[#528540]" 
                : currentStep > 2
                ? "bg-[#528540] border-[#528540]" 
                : "bg-[#fffbf1] border-gray-300" 
              }`}
            ></div>
            <div className="absolute mt-12 text-center">
              <p
                className={`text-sm ${
                  currentStep === 2 ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                List Allergies
              </p>
            </div>
          </div>
          <div
            className={`h-1 ${
              currentStep >= 3 ? "bg-[#528540]" : "border-2 border-dashed border-gray-400"
            } w-24 sm:w-48 md:w-56 lg:w-56 xl:w-64`}
          ></div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <div className="relative flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full border-8 ${
                currentStep === 3
                  ? "bg-[#fffbf1] border-[#528540]"
                  : "bg-[#fffbf1] border-gray-300"
              }`}
            ></div>
            <div className="absolute mt-10 text-center">
              <p
                className={`text-sm ${
                  currentStep === 3 ? "text-black" : "text-gray-400"
                }`}
              >
                Choose dishes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {currentStep === 1 && <CalendarPage nextStep={nextStep} />}
        {currentStep === 2 && <AllergyPage nextStep={nextStep} backStep={backStep} />}
        {currentStep === 3 && <DishSelect backStep={backStep} />}
      </div>
    </div>
  );
};

export default ProgressBar;
