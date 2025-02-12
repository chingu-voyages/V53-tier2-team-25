import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MealSelectionPopup from "./mealSelectionPopup.jsx";

const DayOffCard = ({ day, toggleDayType,meal }) => {
  const [showPopup, setShowPopup] = useState(false);


  const handleSelectMeal = (meal) => {
    toggleDayType( day,meal); 
    setShowPopup(false);
  };

  return (
    <div className="bg-[#ACD084] shadow-lg rounded-lg overflow-hidden w-[160px] h-[250px] sm:w-[265px] sm:h-[360px] flex flex-col">
      <div className="p-2 sm:p-3 text-center text-sm sm:text-xl font-semibold border-b-2 border-[#528540] bg-[#ACD084]">
        {day}
      </div>
      <div className="w-full bg-[#ACD084] flex justify-center items-center text-2xl mt-6 h-[100px] sm:h-[150px] font-bold text-base sm:text-3xl">
        Day Off
      </div>
      <div className="flex flex-col items-center w-full bg-[#ACD084] p-2 sm:p-4 mt-auto">
        <button
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 mt-1 sm:mt-2 bg-[#528540] text-white rounded-md hover:bg-[#39582C]"
          onClick={() => setShowPopup(true)}
        >
          Select Dish
          <FontAwesomeIcon
            icon={faPlus}
            className="w-3 h-3 sm:w-4 sm:h-4 text-[#fffbf1] ml-1"
          />
        </button>
      </div>
      {showPopup && (
        <MealSelectionPopup
          onClose={() => setShowPopup(false)}
          onSelectMeal={handleSelectMeal}
          meals={meals}
        />
      )}
    </div>
  );
};


export default DayOffCard;
