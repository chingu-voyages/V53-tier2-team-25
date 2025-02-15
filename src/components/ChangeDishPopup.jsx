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
      className="fixed inset-0 flex items-center justify-center xl:justify-end bg-black bg-opacity-50 z-50 "
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <div className="relative bg-[#FFFBF1] rounded-lg p-6 xl:w-[50%] sm:w-[70%] w-[90%] h-2/3 sm:h-[50%] lg:w-[50%]  md:h-[50%] lg:h-[99%] xl:h-[99%] overflow-y-auto shadow-lg">
        <button
          className="fixed top-5 right-7 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>

        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Change your meal for {day}
        </h2>

        <div className="lg:flex lg:flex-col xl:flex xl:flex-col flex flex-row md:flex md:flex-row gap-4 h-52">
          {allMeals.map((meal) => {
            const { id, name, image, ingredients, caloriesPerServing } = meal;
            console.log("ingredients in change dish", ingredients.join(", "));
            return (
              <div
                key={id}
                className="lg:flex lg:flex-row xl:flex xl:flex-row sm:flex sm:flex-col md:flex md:flex-col  items-center bg-[#FFFBF1] rounded-lg p-3 shadow-md shadow-[#528540] lg:min-h-35 md:min-h-25 md:justify-end sm:min-h-20 sm:justify-end"
              >
                <img
                  src={image}
                  alt={name}
                  className="xl:w-24 xl:h-24 lg:w-24 lg:h-15 md:size-25 md:justify-center sm:size-20 sm:justify-center rounded-lg py-4"
                />
                <div className="ml-4 flex-grow md:m-2  ">
                  <div className="flex gap-4 justify-between md:justify-stretch sm:justify-stretch">
                    <h3 className="xl:text-lg lg:text-lg md:text-sm sm:text-sm font-semibold md:tracking-tighter sm:tracking-tighter sm:line-clamp-1 md:line-clamp-2 text-wrap">
                      {name}
                    </h3>
                    <span className="text-sm sm:text-xs font-bold text-green-700 mr-4 ">
                      {caloriesPerServing}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 sm:text-xs lg:pr-6 xl:pr:6 md:pr-1 text-wrap line-clamp-2 xl:tracking-wide lg:tracking-normal md:tracking-tight sm:tracking-tighter sm:line-clamp-1 lg:line-clamp-4 md:line-clamp-1">
                    {ingredients.join(",")}
                  </p>
                  {/* <button
                    className="text-xs sm:invisible sm:text-sm text-[#528540] mb-1 flex xl:justify-start justify-right "
                    onClick={() => setIsMoreInfoOpen(true)}
                  >
                    Read More
                  </button> */}
                </div>
                <button
                  className=" bg-[#528540] text-xs  text-white px-3 py-1 rounded-md hover:bg-[#F17528] flex-shrink-0 "
                  onClick={() => onSelectMeal(meal)}
                >
                  Select Dish
                </button>

                {/* {meal.id == mealInUse.id && (
                  <button className="bg-gray-400"> In use </button>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChangeDishPopup;
