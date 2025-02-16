import React, { useEffect, useState, useRef } from "react";
import DayOnCard from "../components/day-on.jsx";
import DayOffCard from "../components/day-off.jsx";
import filteredRecipes from "../mealsFilter";
import MealSelectionPopup from "../components/mealSelectionPopup.jsx";
import { useReactToPrint } from "react-to-print";
import { use } from "react";

const defaultDays = [
  { day: "Monday", type: "on" },
  { day: "Tuesday", type: "on" },
  { day: "Wednesday", type: "on" },
  { day: "Thursday", type: "on" },
  { day: "Friday", type: "on" },
  { day: "Saturday", type: "on" },
  { day: "Sunday", type: "on" },
];

const DishSelect = ({ backStep }) => {
  const [daysData, setDaysData] = useState(defaultDays);
  const [meals, setMeals] = useState([]);
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

  // **************UPDATE MEAL FOR DAY FUNCTION FOR POPUP
  // *******************************************************
  const updateMealForDay = (day, newMeal) => {
    console.log("day, newmeal", day, newMeal);
    setDaysData((prev) =>
      prev.map((item) => {
        console.log("days data EACH", item);
        console.log("day matching?", item.day === day);
        console.log("RETURN VALUE", { ...item, mealForDate: newMeal });
        return item.day === day && item.type === "on"
          ? { ...item, mealForDate: newMeal }
          : item;
      })
    );
  };

  // NEED TO SEE IF I CAN UPDATE THE USED MEALS TO INCLUDE THE NEW MEAL PASSED IN ABOVE

  // ********************************************************

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

  // ************ START CHANGES FROM HERE **********

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const fetchSelectedRecipes = async () => {
    try {
      setLoading(true);
      const selectedRecipes = await filteredRecipes(allergies);
      // shuffle the selected recipes:
      setMeals(shuffleArray(selectedRecipes));
      if (!Array.isArray(selectedRecipes) || selectedRecipes.length === 0) {
        console.log("No recipes available");
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch recipes");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSelectedRecipes();
  }, []);

  const [mealsInUse, setMealsInUse] = useState([]);
  const [idsInUse, setIdsInUse] = useState([]);
  const [remainingMeals, setRemainingMeals] = useState([]);

  function getNeededMeals() {
    let counter = 0;
    let dishLimit = numberOfDishes;
    let mealsToAdd = [];
    let mealIdsToAdd = [];
    while (counter < dishLimit) {
      mealsToAdd.push(meals[counter]);
      mealIdsToAdd.push(meals[counter].id);
      counter++;
    }
    if (counter >= dishLimit) {
      setMealsInUse(mealsToAdd);
      setIdsInUse(mealIdsToAdd);
    }
  }

  function updateRemainingMeals() {
    let counter = numberOfDishes;
    let maxDishLimit = meals.length;
    let leftovers = [];

    while (counter < maxDishLimit) {
      leftovers.push(meals[counter]);
      counter++;
    }
    if (counter >= maxDishLimit) {
      setRemainingMeals(leftovers);
    }
  }

  useEffect(() => {
    if (meals.length !== 0) {
      getNeededMeals();
    } else {
      return;
    }
  }, [meals]);

  useEffect(() => {
    updateRemainingMeals();
  }, [mealsInUse]);

  useEffect(() => {
    console.log("all incoming meals filtered and shuffled: ", meals);
    // console.log("number of dishes needed for days on: ", numberOfDishes);
    console.log("meals in use: ", mealsInUse);
    console.log("remaining available meals: ", remainingMeals);
  }, [remainingMeals]);

  // *********************************************
  // USE MEALS AND REMAINING AND UPDATE DAYS DATA
  // *********************************************

  // function updateDaysData() {
  //   setDaysData((prev) => prev.map(day => {

  //   }))
  // }

  // try to pass one meal
  // change days on to all true bc i dont know how it was updated

  function updateDaysDataWithMeal() {
    let i = 0;

    setDaysData((prev) => {
      console.log("prev DAYS DATA", prev);
      const newDaysData = prev.map((date) => {
        let mealForDate = mealsInUse[i];
        i++;
        return {
          ...date,
          mealForDate: mealForDate,
        };
      });
      console.log("newDaysData", newDaysData);
      return newDaysData;
    });
  }

  useEffect(() => {
    updateDaysDataWithMeal();
  }, [mealsInUse]);

  // useEffect(() => {
  //   console.log("days data: ", daysData);
  // }, [daysData]);

  // ***********************************************
  // ***********************************************
  // ***********************************************
  // ***********************************************

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
                const { day, type, meal, mealForDate } = eachDay;
                console.log("EACH DAY DATA IS IT WRONG ??", eachDay);
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
                    mealForDate={mealForDate}
                    remainingMeals={remainingMeals}
                    mealsInUse={mealsInUse}
                    setMealsInUse={setMealsInUse}
                  />
                ) : (
                  <DayOffCard
                    key={day}
                    day={day}
                    toggleDayType={toggleDayType}
                    allMeals={meals}
                    index={index}
                    meal={meal}
                    remainingMeals={remainingMeals}
                    mealsInUse={mealsInUse}
                  />
                );
              })
            : []}
        </div>
        <div>
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
    </div>
  );
};

export default DishSelect;
