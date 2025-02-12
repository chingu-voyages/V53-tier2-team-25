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
      <div className="relative bg-[#FFFBF1] rounded-lg p-6 w-[90%] sm:w-[70%] lg:w-[50%] max-h-[80%] overflow-y-auto shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
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
                <div className="ml-4 flex-grow">
                  <div className="flex gap-4">
                    <h3 className="text-md sm:text-lg font-semibold">
                      {meal.name}
                    </h3>
                    <p className="text-sm font-bold text-green-700">
                      {meal.caloriesPerServing}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {meal.ingredients}
                  </p>
                  <button
                    className="text-xs sm:text-sm text-[#528540] mb-1 flex justify-start"
                    onClick={() => setIsMoreInfoOpen(true)}
                  >
                    Read More
                  </button>
                </div>
                {
                  <button
                    className="ml-auto bg-[#528540] text-xs sm:text-sm  text-white px-3 py-1 rounded-md hover:bg-[#39582C]"
                    onClick={() => onSelectMeal(meal)}
                  >
                    Change Dish
                  </button>
                }
                {meal.id == mealInUse.id && (
                  <button className="bg-gray-400"> In use </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChangeDishPopup;
