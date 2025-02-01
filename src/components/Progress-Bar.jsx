import React, { useState } from "react";
import CalendarPage from "../pages/Calendar-Page.jsx";
import AllergyPage from "../pages/AllergyPage.jsx";

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const backStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-4 mt-4 font-raleway">
      <div className="flex items-center justify-center mb-6">
        {/* Step 1 */}
        <div className="flex items-center">
          <div className="relative flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full border-8 ${
                currentStep === 1
                  ? "bg-[#fffbf1]  border-[#528540]" // Step 1 (current step)
                  : currentStep > 1
                  ? "bg-[#528540] border-[#528540]" // Step 1 (completed step)
                  : "bg-white border-[#528540]" // Step 1 (not started)
              }`}
            ></div>

            <div className="absolute mt-12 text-center">
              <p
                className={`text-sm  ${
                  currentStep === 1 ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                Choose a week
              </p>
            </div>
          </div>
          {/* Line to Step 2 */}
          <div
            className={`h-1 ${
              currentStep >= 2 ? "bg-[#528540]" : "border-2 border-dashed border-gray-400"
            }  w-24 sm:w-48 md:w-56 lg:w-56 xl:w-64`}
          ></div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div className="relative flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full border-8 ${
                currentStep === 2
                  ? "bg-[#fffbf1] border-[#528540]" // Step 2 (current step)
                  : currentStep > 2
                  ? "bg-[#528540] border-[#528540]" // Step 2 (completed step)
                  : "bg-[#fffbf1] border-gray-300" // Step 2 (not started)
              }`}
            ></div>
            <div className="absolute mt-12 text-center">
              <p
                className={`text-sm text-center  ${
                  currentStep === 2 ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                List Allergies
              </p>
            </div>
          </div>
          {/* Line to Step 3 */}
          <div
            className={`h-1 ${
              currentStep >= 3 ? "bg-[#528540]" : "border-2 border-dashed border-gray-400"
            }  w-24 sm:w-48 md:w-56 lg:w-56 xl:w-64`}
            
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
                className={`text-sm  ${
                  currentStep === 3 ? "text-black" : "text-gray-400"
                }`}
              >
                Choose dishes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Display Calendar or other step content */}
      <div>
        {currentStep === 1 && <CalendarPage nextStep={nextStep} />}
        {currentStep === 2 && (
          <AllergyPage nextStep={nextStep} backStep={backStep} />
        )}

        {currentStep === 3 && <div>Step 3 Content</div>}
      </div>
    </div>
  );
};

export default ProgressBar;
