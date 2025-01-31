import { useEffect } from "react";
import DishOfTheDayCard from "./DishOfTheDayCard";

const DishSelect = () => {
  const daysInAWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  async function getRandomMeal() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      console.log("** response", response);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const jsonResponse = await response.json();
      const randomMeal = jsonResponse.meal;
      console.log("random Meal", jsonResponse);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => getRandomMeal, []);
  return (
    <div className="dish_select">
      <div className="dish_select--header mt-7 mb-10 flex justify-center w-full font-bold">
        <h1 className="font-[600] text-[24px] snap-center leading-[30px]">
          Change or remove dishes based on your preferences
        </h1>
      </div>
      {daysInAWeek.map((day, index) => {
        <DishOfTheDayCard day={day} />;
      })}
    </div>
  );
};

export default DishSelect;
