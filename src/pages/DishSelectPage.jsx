import React, { useEffect, useState } from "react";
import DayOnCard from "../components/day-on.jsx";
import DayOffCard from "../components/day-off.jsx";
import mealsFilter from "../mealsFilter";

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

  let filteredMeals;
  let storedDaysOn;
  
  const toggleDayType = (day, meal = null) => {
    setDaysData((prev) => {
      const updatedDays = prev.map((item) =>
        item.day === day
          ? { ...item, type: item.type === "on" ? "off" : "on", meal: item.type === "on" ? null : meal }
          : item
      );
  
      localStorage.setItem("daysOn", JSON.stringify(updatedDays.filter((d) => d.type === "on")));
      localStorage.setItem("daysOff", JSON.stringify(updatedDays.filter((d) => d.type === "off")));
  
      return updatedDays;
    });
  };
  

  useEffect(() => {
    const storedDaysOn = JSON.parse(localStorage.getItem("daysOn")) || [];
    const storedDaysOff = JSON.parse(localStorage.getItem("daysOff")) || [];
  
    const updatedDays = defaultDays.map(({ day, type }) => {
      const isOn = storedDaysOn.some((d) => d.day === day);
      const isOff = storedDaysOff.some((d) => d.day === day);
      return { day, type: isOn ? "on" : isOff ? "off" : type };
    });
  
    setDaysData(updatedDays);
  }, []);
  

  const allergies = JSON.parse(sessionStorage.getItem("allergies"));
  // const numberOfDishes = JSON.parse(localStorage.getItem("daysOn")).length;

  filteredMeals = mealsFilter(allergies);

  return (
    <div>
      <div className=" p-6 mb-5 flex justify-center w-full font-bold">
        <h1 className="font-[600] text-[24px] snap-center text-center leading-[30px] mt-10">
          Change or remove dishes based on your preferences
        </h1>
      </div>

      <div className="flex flex-wrap gap-7 justify-center items-stretch">
        {daysData.map(({ day, type, meal }, index) =>
          type === "on" ? (
            <DayOnCard
              key={day}
              day={day}
              meal={meal}
              index={index}
              meals={filteredMeals[index]}
              onClick={() => toggleDayType(day)}
              onClose={() => toggleDayType(day)} 
            />
          ) : (
            <DayOffCard key={day} day={day} toggleDayType={toggleDayType} />
          )
        )}
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
  );
};

export default DishSelect;
