import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const CalendarPage = ({ nextStep }) => {
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [isTouchDisabled, setIsTouchDisabled] = useState(true); 
  const [daysOff, setDaysOff] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const isMobile = window.innerWidth < 768;


  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setIsTouchDisabled(false);
      }, 600); 

      return () => clearTimeout(timer); 
    }
  }, [isMobile]);


  useEffect(() => {
    const today = new Date();
    const nextMonday = getNextMonday(today);
    const nextWeek = getWeekRangeFromMonday(nextMonday);
    setSelectedWeek(nextWeek);
    setDaysOff([]);
  }, []);
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  
  

  const isCurrentDay = (date) => {
    const today = new Date();
    const isToday =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();
    return isToday;
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

  const getNextMonday = (date) => {
    const day = date.getDay();
    const daysUntilNextMonday = day === 0 ? 1 : 8 - day; 
    const nextMonday = new Date(date);
    nextMonday.setDate(date.getDate() + daysUntilNextMonday);
    return nextMonday;
  };
  
  const getWeekRangeFromMonday = (monday) => {
    const range = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      range.push(new Date(day));
    }
    return range;
  };

  const isBetweenTodayAndNextMonday = (day) => {
    const today = new Date(); 
    const nextMonday = getNextMonday(today);
    
    nextMonday.setHours(0, 0, 0, 0);  // Start of next Monday

  
    if (day > today && day < nextMonday) {
      setRefreshKey((prevKey) => prevKey + 1);
      setMessage("Selected week must be a future week ");
      setIsModalOpen(true);
      return true;
    }
  
    return false;
  };
  
   


  const handleDayClick = (date) => {
    const weekRange = getWeekRange(date);
    const today = new Date();
    const startOfCurrentWeek = getStartOfWeek(today);

    if (isBetweenTodayAndNextMonday(date)) {
      return;
    }
  
    if ( date < today) {
      setRefreshKey((prevKey) => prevKey + 1);
      setMessage("Days from the past week are not available for selection.");
      setIsModalOpen(true);
      return;
    }

    if (date > today && date < startOfCurrentWeek) {
      setMessage(" Dates between today and the start of the current week.");
      setIsModalOpen(true);
      return;
    }
  
    if (selectedWeek.length === 0) {
      setSelectedWeek(weekRange);
    } else {
      if (selectedWeek.some((selectedDate) => isSameDay(selectedDate, date))) {
        toggleDayOff(date);
      } else {
        setSelectedWeek(weekRange);
        setDaysOff([]);
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

  const isValidDate = (dateString) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(dateString)) return false;

    const [month, day, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const handleCustomWeekChange = () => {
    if (!isValidDate(startDate) || !isValidDate(endDate)) {
      setMessage("Please enter valid dates in the format MM/DD/YYYY");
      setIsModalOpen(true);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const currentDate = new Date();

    if (start > end) {
      setMessage(
        "It looks like the start date is after the end date. Please adjust it."
      );
      setIsModalOpen(true);
      return;
    }

    if (start < currentDate || end < currentDate) {
      setMessage("Please choose a week that's not in the past.");
      setIsModalOpen(true);
      return;
    }

    const weekRange = getWeekRange(start);
    setSelectedWeek(weekRange);
    setDaysOff([]);
    setMessage("Custom week selected successfully.");
    setIsSuccessModalOpen(true);
  };

  const handleRefresh = () => {
    const today = new Date();
    const nextMonday = getNextMonday(today); 
    const nextWeek = getWeekRangeFromMonday(nextMonday); 
  
    setSelectedWeek(nextWeek);
    setDaysOff([]);
    setRefreshKey((prevKey) => prevKey + 1);
  };
  


  const handleContinue = () => {
    if (selectedWeek.length > 0) {
      saveToLocalStorage();
      nextStep();
    } else {
      setMessage("Please select a week.");
      setIsModalOpen(true);
    }
  };

  const saveToLocalStorage = () => {
    const daysOn = selectedWeek
      .filter((date) => !daysOff.some((dayOff) => isSameDay(dayOff, date)))
      .map((date) => ({
        day: formatDateWithDay(date).split(",")[0],
        date: date.toLocaleDateString(),
      }));

    const daysOffFormatted = daysOff.map((date) => ({
      day: formatDateWithDay(date).split(",")[0],
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
    setIsModalOpen(false);
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="bg-[#fffbf1]">
      <div className="align-center justify-center">
        <h2 className="text-2xl lg:text-2xl   raleway-font font-semibold mb-2 mt-20 text-center sm:px-4 md:px-6 lg:px-8">
          Choose the menu week and deselect the days off
        </h2>
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center">
          <h3 className="text-xl sm:text-lg raleway-font font-semibold text-center mr-1">
            Selected Week:
          </h3>
          {selectedWeek.length > 0 ? (
            <p className="text-center text-xl inter-font font-[200]">
              {getWeekRangeString()}
            </p>
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-center text-l inter-font font-[200]">
                No week selected
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-3 raleway-font ">
          <button
            onClick={() => setShowCustomInput(!showCustomInput)}
            className="bg-lightGreen text-customBlack py-2 raleway-font px-2 outline-2 text-shadow-outline rounded text-sm font-semibold "
          >
            {showCustomInput ? "Hide Manual Input" : "Add Manually"}
            <FontAwesomeIcon className="ml-1 text-customBlack" icon={faPen} />
          </button>
        </div>

        {showCustomInput && (
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center">
            <div
              style={{
                border: "2px solid black ",
                padding: "4px",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <h3 className="text-sm raleway-font font-semibold mr-1">
                Monday
              </h3>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-1 border rounded  placeholder-sm"
                style={{ width: "100px" }}
              />
            </div>
            ➔
            <h3 className="text-sm mt-1 sm:mt-0 raleway-font font-semibold mx-2">
              Sunday
            </h3>
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-1 border rounded  placeholder-sm"
              style={{ width: "100px" }}
            />
            <button
              onClick={handleCustomWeekChange}
              className="mt-3 sm:mt-0  bg-lightGreen text-customBlack py-2 px-2 text-sm rounded ml-2 font-semibold"
            >
              Set Custom Week
            </button>
          </div>
        )}

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
            <p className="text-center text-sm mt-1 sm:mt-0 inter-font font-[200]">
              None
            </p>
          )}
        </div>
      </div>

      <div className="relative flex justify-center items-center mt-6">
      <div className={`calendar-container ${isTouchDisabled ? 'disabled' : ''}`}>
        <Calendar
          key={refreshKey}
          onClickDay={handleDayClick}
          tileClassName={({ date }) => {
            const isSelected = selectedWeek.some((selectedDate) =>
              isSameDay(selectedDate, date)
            );
            const isDayOff = daysOff.some((dayOff) => isSameDay(dayOff, date));
            const isToday = isCurrentDay(date);

            let className = "";

            if (isDayOff) {
              return "day-off";
            }
            if (isSelected) {
              return "selected";
            }
            if (isToday) {
              className += " current-day";
            }
            return className.trim();
          }}
        />
        </div>

        <div className="absolute bottom-2">
          <FontAwesomeIcon
            onClick={handleRefresh}
            className="bg-[#528540] p-1 mt-1 p-1 rounded-full text-white cursor-pointer"
            icon={faRefresh}
            size="2"
          />
        </div>
      </div>

      <div className="mt-6 flex align-center justify-center">
        <button
          onClick={handleContinue}
          className={`${
            selectedWeek.length > 0 ? "bg-orange-500" : "bg-[#adadad]"
          } text-black font-semibold p-2 raleway-font rounded-custom px-20`}
        >
          Continue
        </button>
      </div>
      <div className="text-center mt-3">
        <Link to="/">
          <a className="underline raleway-font text-sm" href="">
            Back to Home
          </a>
        </Link>
      </div>

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

      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-center text-lg font-semibold mb-4">
              {" "}
              Success ✅{" "}
            </p>
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
