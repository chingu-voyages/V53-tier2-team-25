import React, { useEffect, useState, useRef } from "react";
import DayOnCard from "../components/day-on.jsx";
import DayOffCard from "../components/day-off.jsx";
import filteredRecipes from "../mealsFilter";
import MealSelectionPopup from "../components/mealSelectionPopup.jsx";
import { useReactToPrint } from "react-to-print";

const daysOfWeek = [
  { day: "Monday", type: "on" },
  { day: "Tuesday", type: "on" },
  { day: "Wednesday", type: "on" },
  { day: "Thursday", type: "on" },
  { day: "Friday", type: "on" },
  { day: "Saturday", type: "on" },
  { day: "Sunday", type: "on" },
];

const DishSelect = ({ backStep }) => {
  const [activeDays, setActiveDays] = useState([]);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [usedIndices, setUsedIndices] = useState([]);

  useEffect(() => {
    const storedDaysOn = JSON.parse(localStorage.getItem("daysOn")) || [];
    const storedDaysOff = JSON.parse(localStorage.getItem("daysOff")) || [];

    if (storedDaysOn.length === 0 && storedDaysOff.length === 0) {
      setActiveDays(daysOfWeek);

      localStorage.removeItem("daysOn");
      localStorage.removeItem("daysOff");

      localStorage.setItem("daysOn", JSON.stringify(daysOfWeek));
      localStorage.setItem("daysOff", JSON.stringify([]));
    } else {
      const updatedDays = daysOfWeek.map(({ day }) => {
        const storedDayOn = storedDaysOn.find((d) => d.day === day);
        const storedDayOff = storedDaysOff.find((d) => d.day === day);

        if (storedDayOn) {
          return { ...storedDayOn, type: "on" };
        } else if (storedDayOff) {
          return { ...storedDayOff, type: "off" };
        } else {
          return { day, type: "on" };
        }
      });
      setActiveDays(updatedDays);
    }
  }, []);

  const toggleDayType = (day, meal = null) => {
    setActiveDays((prev) => {
      const updatedDays = prev.map((item) =>
        item.day === day
          ? {
              ...item,
              type: item.type === "on" ? "off" : "on",
              meal: item.type === "on" ? null : meal,
            }
          : item
      );

      return updatedDays;
    });
  };

  const updateMealForDay = (day, newMeal) => {
    setActiveDays((prev) =>
      prev.map((item) =>
        item.day === day && item.type === "on"
          ? { ...item, meal: newMeal }
          : item
      )
    );
  };

  useEffect(() => {
    const fetchSelectedRecipes = async () => {
      try {
        const allergies = JSON.parse(sessionStorage.getItem("allergies")) || [];
        const selectedRecipes = await filteredRecipes(allergies);

        if (!Array.isArray(selectedRecipes) || selectedRecipes.length === 0) {
          setError("No recipes available");
          return;
        }

        setMeals(selectedRecipes);

        setActiveDays((prev) => {
          const newUsedIndices = [];
          const updatedDays = prev.map((dayData) => {
            if (dayData.type === "on" && !dayData.meal) {
              let randomIndex;
              do {
                randomIndex = Math.floor(
                  Math.random() * selectedRecipes.length
                );
              } while (newUsedIndices.includes(randomIndex));

              newUsedIndices.push(randomIndex);
              return {
                ...dayData,
                meal: selectedRecipes[randomIndex],
              };
            }
            return dayData;
          });

          setUsedIndices(newUsedIndices);
          return updatedDays;
        });
      } catch (error) {
        setError("Failed to fetch recipes");
      }
    };

    fetchSelectedRecipes();
  }, []);

  const contentRef = useRef(null);
  const reactToPrintFunction = useReactToPrint({ contentRef });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-lg font-semibold">Oops! Something went wrong</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="2xl:max-w-[1400px]  2xl:mx-auto">
      <div className=" p-6 mb-5 flex justify-center w-full font-bold">
        <h1 className="font-[600] text-[24px] snap-center text-center leading-[30px] mt-10">
          Change or remove dishes based on your preferences
        </h1>
      </div>

      <style type="text/css" media="print">
        {"@page { size: landscape; }"}
      </style>

      <div
        ref={contentRef}
        className="flex flex-wrap gap-7 justify-center items-stretch"
      >
        {activeDays.map((eachDay, index) => {
          const { day, type, meal } = eachDay;
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
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          className="bg-textOrange border text-black font-semibold p-2 raleway-font rounded-custom px-20"
          onClick={reactToPrintFunction}
        >
          Download Menu
        </button>

        <a
          className="underline raleway-font text-sm cursor-pointer"
          onClick={backStep}
        >
          Back to Allergies
        </a>
      </div>
    </div>
  );
};

export default DishSelect;