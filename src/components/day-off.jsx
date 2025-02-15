import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PlaceHolderImage1 from "../assets/images/Placeholderimage1.png";
import PlaceHolderImage2 from "../assets/images/Placeholderimage2.png";
import PlaceHolderImage3 from "../assets/images/Placeholderimage3.png";
import PlaceHolderImage4 from "../assets/images/Placeholderimage4.png";
import MealSelectionPopup from "./mealSelectionPopup";

const placeholderImages = [
  PlaceHolderImage1,
  PlaceHolderImage2,
  PlaceHolderImage3,
  PlaceHolderImage4,
];

const DayOffCard = ({
  day,
  toggleDayType,
  meal,
  allMeals,
  usedIndices,
  index,
  remainingMeals,
  mealsInUse,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const placeholderImage = placeholderImages[index % placeholderImages.length];

  // console.log("All meals", allMeals);

  const handleSelectMeal = (selectedMeal) => {
    console.log("Selected Meal:", selectedMeal);
    toggleDayType(day, selectedMeal);
    setShowPopup(false);
  };

  const clickHandler = (e) => {
    setChangeDish(true);
  };

  const handleClosePopup = () => {
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
          day={day}
          onClose={handleClosePopup}
          allMeals={allMeals}
          onSelectMeal={handleSelectMeal}
          meal={meal}
          remainingMeals={remainingMeals}
          mealsInUse={mealsInUse}
        />
      )}
    </div>
  );
};

export default DayOffCard;
