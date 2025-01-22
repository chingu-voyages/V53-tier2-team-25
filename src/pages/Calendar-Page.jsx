import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CalendarPage = ({ nextStep }) => {
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [daysOff, setDaysOff] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSelectedWeek([]);
    setDaysOff([]);
  }, []);

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

    if (selectedWeek.length === 0) {
      setSelectedWeek(weekRange);
    } else {
      if (selectedWeek.some((selectedDate) => isSameDay(selectedDate, date))) {
        toggleDayOff(date);
      } else {
        setSelectedWeek([]);
        setDaysOff([]);
        setRefreshKey((prevKey) => prevKey + 1);
        setMessage(
          "You can only select days off within the currently selected week."
        );
        setIsModalOpen(true);
      }
    }
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
    } else {
      alert("You can only select days off within the selected week.");
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
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const handleContinue = () => {
    if (selectedWeek.length > 0) {
      saveToLocalStorage();
      nextStep();
    } else {
      setMessage("Please select a week ");
      setIsModalOpen(true);
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
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-[#fffbf1]">
      <div className=" align-center justify-center">
        <h2 className="lg:text-2xl   text-2xl raleway-font font-semibold mb-4 mt-20 text-center sm:px-4 md:px-6 lg:px-8">
          Choose the menu week and deselect the days off
        </h2>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center">
          <h3 className="text-xl sm:text-lg raleway-font font-semibold text-center mr-1">
            Selected Week:
          </h3>
          {selectedWeek.length > 0 ? (
            <div>
              <p className="text-center text-xl inter-font font-[200]">
                {getWeekRangeString()}
              </p>
            </div>
          ) : (
            <p className="text-center text-l  inter-font font-[200]">
              No week selected
            </p>
          )}
        </div>
        <div className="mt-0 sm:mt-4 flex flex-col sm:flex-row items-center justify-center">
          <h3 className="text-sm mt-1 sm:mt-0 raleway-font font-semibold mr-1">
            Days Off:
          </h3>
          {daysOff.length > 0 ? (
            <ul className="flex flex-wrap">
              {daysOff.map((date, index) => (
                <li
                  className="text-center mt-1 sm:mt-0 inter-font font-[200]"
                  key={index}
                >
                  {index > 0 && ", "}
                  {date.toLocaleDateString("en-US", { weekday: "long" })}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center   text-sm mt-1 sm:mt-0 inter-font font-[200]">
              None
            </p>
          )}
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-6">
        <Calendar
          key={refreshKey}
          onClickDay={handleDayClick}
          tileClassName={({ date }) => {
            const isSelected = selectedWeek.some((selectedDate) =>
              isSameDay(selectedDate, date)
            );
            const isDayOff = daysOff.some((dayOff) => isSameDay(dayOff, date));

            let className = ""; // Initialize an empty string for the className

            if (isDayOff) {
              return "day-off";
            }
            if (isSelected) {
              return "selected";
            }
            return className;
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

      <div className="mt-6 flex align-center justify-center">
        <button
          onClick={handleContinue}
          className={`${
            selectedWeek.length > 0 ? "bg-orange-500" : "bg-[#adadad]"
          } text-black font-semibold p-2   raleway-font rounded-custom px-20`}
        >
          Continue
        </button>
      </div>
      <div className="text-center mt-3">
        <Link to="/">
          <a className="underline  raleway-font text-sm" href="">
            Back to Home
          </a>
        </Link>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-center text-lg font-semibold mb-4">Alert 🚨</p>
            <p className="text-center">{message}</p>
            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
