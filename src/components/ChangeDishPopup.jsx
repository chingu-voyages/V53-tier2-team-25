import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PlaceHolderImage1 from "../assets/images/Placeholderimage1.png";
import PlaceHolderImage2 from "../assets/images/Placeholderimage2.png";
import PlaceHolderImage3 from "../assets/images/Placeholderimage3.png";
import PlaceHolderImage4 from "../assets/images/Placeholderimage4.png";

const placeholderMeals = [
  {
    id: 1,
    image: PlaceHolderImage1,
    name: "Grilled Chicken Salad",
    ingredients: "Chicken, Lettuce, Dressing",
    caloriesPerServing: "345cal",
  },
  {
    id: 2,
    image: PlaceHolderImage2,
    name: "Pasta Primavera",
    ingredients: "Pasta, Vegetables, Parmesan",
    caloriesPerServing: "410cal",
  },
  {
    id: 3,
    image: PlaceHolderImage3,
    name: "Steak & Veggies",
    ingredients: "Steak, Broccoli, Carrots",
    caloriesPerServing: "500cal",
  },
  {
    id: 4,
    image: PlaceHolderImage4,
    name: "Vegan Bowl",
    ingredients: "Quinoa, Avocado, Beans",
    caloriesPerServing: "320cal",
  },
];

const ChangeDishPopup = ({
  day,
  onClose,
  onSelectMeal,
  mealInUse,
  allMeals,
  usedIndices,
}) => {
  console.log("mealInUse", mealInUse);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <style>
        {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
      </style>
      <div className="relative bg-[#FFFBF1] rounded-lg p-6 w-[90%] sm:w-[70%] lg:w-[60%] max-h-[80%] overflow-y-auto shadow-lg hide-scrollbar">
        <button
          className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-400 border hover:bg-gray-900  flex items-center justify-center"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-[#fffbf1]" />
        </button>
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Change your meal for {day}
        </h2>

        <div className="flex flex-col gap-4">
          {allMeals.map((meal) => {
            return (
              <div
                key={meal.id}
                className="flex items-center bg-[#FFFBF1] rounded-lg p-3 shadow-md shadow-[#528540]"
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-24 h-24 rounded-lg"
                />

                <div className="ml-4 flex flex-col w-full sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-9">
                      <h3 className="text-md sm:text-lg font-semibold ">
                        {meal.name}
                      </h3>
                      <p className="text-sm text-[#528540] font-semibold">
                        {meal.caloriesPerServing}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {meal.ingredients
                        .slice(0, window.innerWidth >= 768 ? 10 : 4)
                        .join(", ")}{" "}
                      <button>...</button>
                    </p>
                  </div>

                  <div>
                    <button
                      className="mt-2 w-22 sm:mt-0 bg-[#528540] text-xs sm:text-sm text-white px-2 py-1 pr-3 rounded-md hover:bg-[#f17528] whitespace-nowrap"
                      onClick={() => onSelectMeal(meal)}
                    >
                      Change Dish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChangeDishPopup;
