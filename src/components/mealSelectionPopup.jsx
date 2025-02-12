import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MealSelectionPopup = ({ day, onClose, onSelectMeal, meals = [] }) => {
  console.log("Meals in Popup:", meals);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[#FFFBF1] rounded-lg p-6 w-[90%] sm:w-[70%] lg:w-[50%] max-h-[80%] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>

        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Select Your Meal for {day}
        </h2>

        <div className="flex flex-col gap-4">
          {meals.length > 0 ? (
            meals.map((meal, index) => (
              <div
                key={index}
                className="flex items-center bg-[#FFFBF1] rounded-lg p-3 shadow-md shadow-[#528540]"
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-24 h-24 rounded-lg"
                />
                <div className="ml-4 flex-grow">
                  <div className="flex gap-4">
                    <h3 className="text-md sm:text-lg font-semibold">
                      {meal.name}
                    </h3>
                    <p className="text-sm font-bold text-green-700">
                      {meal.calories}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{meal.ingredients}</p>
                </div>

                <button
                  className="ml-auto bg-[#528540] text-white px-3 py-1 rounded-md hover:bg-[#39582C]"
                  onClick={() => onSelectMeal(meal)}
                >
                  Select
                </button>
              </div>
            ))
          ) : (
            <p>No meals available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealSelectionPopup;