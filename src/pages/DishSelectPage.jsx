import React, { useEffect, useState, useRef } from "react";
import DayOnCard from "../components/day-on.jsx";
import DayOffCard from "../components/day-off.jsx";
import filteredRecipes from "../mealsFilter";
import MealSelectionPopup from "../components/mealSelectionPopup.jsx";
import { useReactToPrint } from "react-to-print";

const defaultDays = [
  { day: "Monday", type: "on" },
  { day: "Tuesday", type: "on" },
  { day: "Wednesday", type: "on" },
  { day: "Thursday", type: "on" },
  { day: "Friday", type: "on" },
  { day: "Saturday", type: "off" },
  { day: "Sunday", type: "off" },
];

const DishSelect = ({ backStep }) => {
  const [daysData, setDaysData] = useState(defaultDays);
  const [meals, setMeals] = useState([]);
  const [usedIndices, setUsedIndices] = useState([]); // Ensure persistence
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const storedDaysOn = JSON.parse(localStorage.getItem("daysOn")) || [];
  const storedDaysOff = JSON.parse(localStorage.getItem("daysOff")) || [];

  const toggleDayType = (day, meal = null) => {
    setDaysData((prev) => {
      const updatedDays = prev.map((item) =>
        item.day === day
          ? {
              ...item,
              type: item.type === "on" ? "off" : "on",
              meal: item.type === "on" ? null : meal,
            }
          : item
      );

      localStorage.setItem(
        "daysOn",
        JSON.stringify(updatedDays.filter((d) => d.type === "on"))
      );
      localStorage.setItem(
        "daysOff",
        JSON.stringify(updatedDays.filter((d) => d.type === "off"))
      );
      return updatedDays;
    });
  };

  const updateMealForDay = (day, newMeal) => {
    setDaysData((prev) =>
      prev.map((item) =>
        item.day === day && item.type === "on"
          ? { ...item, meal: newMeal }
          : item
      )
    );
    setMeals((prev) => {
      const mealToUpdate = prev.find((eachMeal) => eachMeal.id == newMeal.id);
      console.log("mealToUpdate", mealToUpdate);

      return {
        ...mealToUpdate,
        inUse: !mealToUpdate.inUse,
      };
    });
  };

  useEffect(() => {
    const updatedDays = defaultDays.map(({ day, type }) => {
      const isOn = storedDaysOn.some((d) => d.day === day);
      const isOff = storedDaysOff.some((d) => d.day === day);
      return { day, type: isOn ? "on" : isOff ? "off" : type };
    });

    setDaysData(updatedDays);
  }, []);

  const allergies = JSON.parse(sessionStorage.getItem("allergies"));
  const numberOfDishes = JSON.parse(localStorage.getItem("daysOn")).length;

  useEffect(() => {
    const fetchSelectedRecipes = async () => {
      try {
        setLoading(true);
        const selectedRecipes = await filteredRecipes(allergies);
        console.log("Fetched Recipes:", selectedRecipes); // Debugging
        setMeals(selectedRecipes); // Set fetched meals to state

        if (!Array.isArray(selectedRecipes) || selectedRecipes.length === 0) {
          console.log("No recipes available");
          setLoading(false);
          return;
        }

        setMeals(selectedRecipes);

        let used = []; // local array to keep track
        setDaysData((prev) => {
          console.log("in setDays data");

          const updatedDays = prev.map((eachDayData) => {
            if (eachDayData.type === "on") {
              console.log(`${eachDayData.day} is ON`);
              let randomIndex;
              do {
                randomIndex = Math.floor(
                  Math.random() * selectedRecipes.length
                );
              } while (usedIndices.includes(randomIndex));

              used.push(randomIndex);

              return {
                ...eachDayData,
                meal: selectedRecipes[randomIndex],
              };
            }
            return eachDayData;
          });
          return updatedDays;
        });

        console.log("Before setting usedIndices:", usedIndices);
        setUsedIndices(used); // Persist the used indices

        console.log("After setting usedIndices:", usedIndices);

        setMeals((prevMealsArray) => {
          console.log("usedIndices**", usedIndices);
          const assignedMealsArray = prevMealsArray.map((eachMeal) => {
            return {
              ...eachMeal,
              inUse: used.includes(eachMeal.id),
            };
          });
          console.log("assignedMeals", assignedMealsArray);
          return [...assignedMealsArray];
        });

        setLoading(false);
      } catch (error) {
        setError("Failed to fetch recipes");
        setLoading(false);
      }
    };

    fetchSelectedRecipes();
  }, []);

  const contentRef = useRef(null);
  const reactToPrintFunction = useReactToPrint({ contentRef });

  return (
    <div>
      <div className=" p-6 mb-5 flex justify-center w-full font-bold">
        <h1 className="font-[600] text-[24px] snap-center text-center leading-[30px] mt-10">
          Change or remove dishes based on your preferences
        </h1>
      </div>
      <style type="text/css" media="print">
        {
          "\
  @page { size: landscape; }\
"
        }
      </style>

      <div
        ref={contentRef}
        className="flex flex-wrap gap-7 justify-center items-stretch"
      >
        <div className="flex flex-wrap gap-7 justify-center items-stretch">
          {Array.isArray(daysData)
            ? daysData.map((eachDay, index) => {
                const { day, type, meal } = eachDay;
                console.log("meal selected", meal);
                console.log("all meals data in dish select", meals);
                return type === "on" ? (
                  <DayOnCard
                    key={day}
                    day={day}
                    meal={meal}
                    allMeals={meals}
                    index={index}
                    onClick={() => setSelectedDay(day)}
                    updateMealForDay={updateMealForDay}
                    onClose={() => toggleDayType(day)}
                    toggleDayType={toggleDayType}
                    usedIndices={usedIndices}
                  />
                ) : (
                  <DayOffCard
                    key={day}
                    day={day}
                    toggleDayType={toggleDayType}
                    allMeals={meals}
                    index={index}
                    usedIndices={usedIndices}
                    meal={meal}
                  />
                );
              })
            : []}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-textOrange border text-black font-semibold p-2   raleway-font rounded-custom px-20"
            onClick={() => reactToPrintFunction()}
          >
            Download Menu
          </button>
        </div>

        <div className="text-center m-7">
          <a
            className="underline raleway-font text-sm cursor-pointer"
            onClick={backStep}
          >
            Back to Allergies
          </a>
        </div>
      </div>
    </div>
  );
};

export default DishSelect;
