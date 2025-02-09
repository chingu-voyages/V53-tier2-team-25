import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PlaceHolderImage1 from "../assets/images/Placeholderimage1.png";
import PlaceHolderImage2 from "../assets/images/Placeholderimage2.png";
import PlaceHolderImage3 from "../assets/images/Placeholderimage3.png";
import PlaceHolderImage4 from "../assets/images/Placeholderimage4.png";

const placeholderMeals = [
  {
    image: PlaceHolderImage1,
    name: "Grilled Chicken Salad",
    ingredients: "Chicken, Lettuce, Dressing",
    calories: "345cal",
  },
  {
    image: PlaceHolderImage2,
    name: "Pasta Primavera",
    ingredients: "Pasta, Vegetables, Parmesan",
    calories: "410cal",
  },
  {
    image: PlaceHolderImage3,
    name: "Steak & Veggies",
    ingredients: "Steak, Broccoli, Carrots",
    calories: "500cal",
  },
  {
    image: PlaceHolderImage4,
    name: "Vegan Bowl",
    ingredients: "Quinoa, Avocado, Beans",
    calories: "320cal",
  },
];

const handleDayOff = () => {
  setIsDayOff(true); 
  onClick(day); 
};

const handleDayOn = () => {
  setIsDayOff(false); 
  onClose(day);
};


const MealSelectionPopup = ({ currentDay, onClose, onSelectMeal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg p-6 w-[90%] sm:w-[70%] lg:w-[50%] max-h-[80%] overflow-y-auto shadow-lg">
        
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>

        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Select Your Meal for {currentDay}
        </h2>

        <div className="flex flex-col gap-4">
          {placeholderMeals.map((meal, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 rounded-lg p-3 shadow-md"
            >
              <img src={meal.image} alt={meal.name} className="w-24 h-24 rounded-lg" />
              
              <div className="ml-4 flex-grow">
                <h3 className="text-md sm:text-lg font-semibold">{meal.name}</h3>
                <p className="text-sm text-gray-600">{meal.ingredients}</p>
                <p className="text-sm font-bold text-green-700">{meal.calories}</p>
              </div>
              <button
                className="ml-auto bg-[#528540] text-white px-3 py-1 rounded-md hover:bg-orange-700"
                onClick={() => onSelectMeal(meal)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MealSelectionPopup;
