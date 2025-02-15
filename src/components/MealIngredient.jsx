import React, { useState } from "react";

const MealIngredient = ({ ingredients }) => {
  const [showPopup, setShowPopup] = useState(false);

  const ingredientList = Array.isArray(ingredients)
    ? ingredients
    : ingredients.split(", ");

  const displayedIngredients = ingredientList.slice(0, 2).join(", ");

  return (
    <div className="relative inline-block">
      <p className="text-sm text-gray-600">
        {displayedIngredients}
        <button
          className="text-blue-500 ml-1"
          onClick={() => setShowPopup(true)}
        >
          ...
        </button>
      </p>

      {showPopup && (
        <div className="absolute left-0 top-full mt-1 bg-white shadow-lg border border-gray-300 rounded-md p-2 text-xs text-gray-700 w-48 z-50">
          <p>{ingredientList.join(", ")}</p>
          <button
            className="mt-1 text-blue-500 text-xs"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MealIngredient;
