import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PlaceHolderImage1 from "../assets/images/Placeholderimage1.png";
import PlaceHolderImage2 from "../assets/images/Placeholderimage2.png";
import PlaceHolderImage3 from "../assets/images/Placeholderimage3.png";
import PlaceHolderImage4 from "../assets/images/Placeholderimage4.png";
import ChangeDishPopup from "./ChangeDishPopup.jsx";
import MoreInfoModal from "./MoreInfoModal.jsx";

const placeholderImages = [
  PlaceHolderImage1,
  PlaceHolderImage2,
  PlaceHolderImage3,
  PlaceHolderImage4,
];

const DayOnCard = ({ day, index, onClick, onClose }) => {
  const [isDayOff, setIsDayOff] = useState(false);
  const [mealData, setMealData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const placeholderImage = placeholderImages[index % placeholderImages.length];

  const extractIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };
  

  const containsAllergens = (ingredients, allergens) => {
    const flattenedAllergyTags = allergens
      .filter((allergy) => allergy.isSelected)
      .flatMap((allergy) => allergy.allergyTag.map((tag) => tag.toLowerCase()));
  
    if (flattenedAllergyTags.length === 0) {
        return false;
    }

    return ingredients.some((ingredient) => {
      const cleanedIngredient = ingredient
        .toLowerCase()
        .replace(/[^a-zA-Z\s]/g, "") 
        .split(/\s+/); 

      return flattenedAllergyTags.some((allergyTag) => {
        if (cleanedIngredient.includes(allergyTag)) {
          console.log(`❌ Allergen Found: ${allergyTag} in ${ingredient}`);
          return true; 
        }
        return false; 
      });
    });
};
  
  

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        setLoading(true);
        let meal;
        let safeMealFound = false;

        const storedAllergens = sessionStorage.getItem("allergens");
        const allergenList = storedAllergens ? JSON.parse(storedAllergens) : [];

        while (!safeMealFound) {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const data = await response.json();

          if (data.meals && data.meals.length > 0) {
            meal = data.meals[0];
            const ingredients = extractIngredients(meal);

            if (!containsAllergens(ingredients, allergenList)) {
              safeMealFound = true;
              setMealData(meal);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching meal:", err);
        setError("Failed to fetch meal data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeal();
  }, []);

  const ingredients = mealData ? extractIngredients(mealData) : [];
  const { strMeal: name, strMealThumb: image } = mealData || {};

  const handleSelectMeal = (meal) => {
    setMealData(meal);
    setShowPopup(false);
  };

  const handleDayOff = () => {
    onClose(day);
  };

  return (
    <div
      className={`relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-[160px] sm:w-[265px] h-[250px] sm:h-[360px] border-2 ${
        isDayOff ? "bg-[#f4f4f4] border-[#d3d3d3]" : "border-[#528540]"
      }`}
    >
      <button
        onClick={handleDayOff}
        className="absolute top-2 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 border hover:text-red-500 hover:border-red-500"
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="w-3 h-3 sm:w-4 sm:h-4 text-[#fffbf1]"
        />
      </button>

      <div className="bg-[#fffbf1] p-2 sm:p-3 text-center text-sm sm:text-xl font-semibold">
        {day}
      </div>

      <div className="px-4 sm:px-7 bg-[#fffbf1]">
        <div
          className="w-full bg-cover h-[100px] sm:h-[150px] rounded-lg"
          style={{
            backgroundImage: `url(${image || placeholderImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="bg-[#fffbf1] p-2 sm:p-4 flex flex-col">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="flex justify-between">
              <h4 className="text-xs sm:text-lg font-bold mb-1 sm:mb-1">
                {name || "No Meal Name"}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 h-[18px] sm:h-[25px] overflow-hidden">
              {ingredients.slice(0, 3).join(", ") || "No Ingredients"}
            </p>

            <button
              className="text-xs sm:text-sm text-[#528540] mb-1 flex justify-start"
              onClick={() => setIsMoreInfoOpen(true)}
            >
              Read More
            </button>
            {mealData && (
              <MoreInfoModal
                isOpen={isMoreInfoOpen}
                setIsMoreInfoOpen={setIsMoreInfoOpen}
                name={mealData.strMeal}
                id={mealData.idMeal}
                ingredients={ingredients}
                image={mealData.strMealThumb}
                caloriesPerServing={mealData.caloriesPerServing}
                day={day}
              />
            )}

            <button
              className="text-xs sm:text-sm px-2 sm:px-3 py-1 mt-1 sm:mt-2 bg-[#528540] text-white rounded-md hover:bg-[#39582C] self-center"
              onClick={() => setShowPopup(true)}
            >
              Change Dish
            </button>
            {showPopup && (
              <ChangeDishPopup
                onClose={() => setShowPopup(false)}
                onSelectMeal={handleSelectMeal}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DayOnCard;
