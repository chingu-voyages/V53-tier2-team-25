import React, { useEffect, useState } from "react";
import DayOnCard from "../components/day-on.jsx";
import DayOffCard from "../components/day-off.jsx";

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

  useEffect(() => {
    const storedDaysOn = JSON.parse(localStorage.getItem("daysOn")) || [];
    const storedDaysOff = JSON.parse(localStorage.getItem("daysOff")) || [];

    const updatedDays = defaultDays.map(({ day, type }) => {
      const isOn = storedDaysOn.some((d) => d.dayOfWeek === day);
      const isOff = storedDaysOff.some((d) => d.dayOfWeek === day);
      return { day, type: isOn ? "on" : isOff ? "off" : type };
    });

    setDaysData(updatedDays);
  }, []);

  return (
    <div>
      <div className="dish_select--header p-6 mb-10 flex justify-center w-full font-bold">
        <h1 className="font-[600] text-[24px] snap-center text-center leading-[30px] mt-10">
          Change or remove dishes based on your preferences
        </h1>
      </div>

      <div className="flex flex-wrap gap-7 justify-center items-stretch">
        {daysData.map(({ day, type }, index) =>
          type === "on" ? (
            <DayOnCard key={day} day={day} index={index} />
          ) : (
            <DayOffCard key={day} day={day} />
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
