import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const CalendarPage = ({ nextStep }) => {
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [daysOff, setDaysOff] = useState([]);

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const formatDateWithDay = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = daysOfWeek[date.getDay()];
    return `${day}, ${date.toLocaleDateString()}`;
  };

  const getStartOfWeek = (date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = day === 0 ? 6 : day - 1;
    startOfWeek.setDate(startOfWeek.getDate() - diff);
    return startOfWeek;
  };

  const getWeekRange = (startDate) => {
    const range = [];
    const startOfWeek = getStartOfWeek(startDate);
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(startOfWeek);
      currentDay.setDate(startOfWeek.getDate() + i);
      range.push(new Date(currentDay));
    }
    return range;
  };

  const handleDayClick = (date) => {
    const weekRange = getWeekRange(date);
    setSelectedWeek(weekRange);
    toggleDayOff(date);
  };

  const toggleDayOff = (date) => {
    if (selectedWeek.some((selectedDate) => isSameDay(selectedDate, date))) {
      setDaysOff((prevDaysOff) => {
        if (prevDaysOff.some((dayOff) => isSameDay(dayOff, date))) {
          return prevDaysOff.filter((dayOff) => !isSameDay(dayOff, date));
        } else {
          return [...prevDaysOff, date];
        }
      });
    }
  };

  const getWeekRangeString = () => {
    if (selectedWeek.length > 0) {
      const start = selectedWeek[0];
      const end = selectedWeek[selectedWeek.length - 1];
      return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
    }
    return "";
  };

  const handleRefresh = () => {
    setSelectedWeek([]);
    setDaysOff([]);
  };

  const handleContinue = () => {
    if (selectedWeek.length > 0 && daysOff.length > 0) {
      saveToLocalStorage();
      nextStep();
    } else {
      alert("Please select a week and at least one day off.");
    }
  };

  const saveToLocalStorage = () => {
    const daysOn = selectedWeek
      .filter((date) => !daysOff.some((dayOff) => isSameDay(dayOff, date)))
      .map((date) => ({
        dayOfWeek: formatDateWithDay(date).split(",")[0],
        date: date.toLocaleDateString(),
      }));

    const daysOffFormatted = daysOff.map((date) => ({
      dayOfWeek: formatDateWithDay(date).split(",")[0],
      date: date.toLocaleDateString(),
    }));

    const selectedWeekFormatted = selectedWeek.map((date) => ({
      dayOfWeek: formatDateWithDay(date).split(",")[0],
      date: date.toLocaleDateString(),
    }));

    localStorage.setItem("daysOn", JSON.stringify(daysOn));
    localStorage.setItem("daysOff", JSON.stringify(daysOffFormatted));
    localStorage.setItem("selectedWeek", JSON.stringify(selectedWeekFormatted));

    console.log("Data saved to local storage!");
  };

  return (
    <div>
      <div className="display-flex align-center justify-center">
        <h2 className="text-2xl raleway-font font-semibold mb-4 mt-20 text-center">
          Choose the menu week and deselect the days off
        </h2>
        <div className="mt-4 flex items-center justify-center">
          <h3 className="text-xl  raleway-font  font-semibold text-center mr-1">
            Selected Week:
          </h3>
          {selectedWeek.length > 0 && (
            <div>
              <p className="text-center text-xl inter-font font-[200]">{getWeekRangeString()}</p>
            </div>
          )}
        </div>

        <div className="text-center flex align-center justify-center">
          <h3 className="text-s mt-2 raleway-font font-semibold mr-1">Days Off:</h3>
          <ul className=" flex">
            {daysOff.map((date, index) => (
              <li className="text-center mt-2 inter-font font-[200]" key={index}>
                {index > 0 && ", "}
                {date.toLocaleDateString("en-US", { weekday: "long" })}
              </li>
            ))}
          </ul>
        </div>

        
      </div>
        <div className="relative flex justify-center items-center mt-6">
          <Calendar
            onClickDay={handleDayClick}
            tileClassName={({ date }) => {
              const isSelected = selectedWeek.some((selectedDate) =>
                isSameDay(selectedDate, date)
              );
              const isDayOff = daysOff.some((dayOff) => isSameDay(dayOff, date));

              if (isDayOff) {
                return "day-off"; 
              }
              if (isSelected) {
                return "selected";
              }
              return "";
            }}
          />

          <div className="absolute bottom-3">
            {" "}
            <FontAwesomeIcon
              onClick={handleRefresh}
              className="bg-[#528540]   p-1 mt-1 p-1 rounded-full text-white cursor-pointer"
              icon={faRotateRight}
              size="2"
            />
          </div>
        </div>
{/* 
      <div className="flex justify-center items-center mt-2">
        <FontAwesomeIcon
          onClick={handleRefresh}
          className="bg-gray-500  p-1 rounded-full text-white cursor-pointer"
          icon={faRotateRight}
          size="x"
        />
      </div> */}

      <div className="mt-6 flex align-center justify-center">
        <button
          onClick={handleContinue}
          className={`${
            selectedWeek.length > 0 && daysOff.length > 0
              ? "bg-orange-500"
              : "bg-gray-500"
          } text-black font-semibold p-2 rounded-custom px-20`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;
