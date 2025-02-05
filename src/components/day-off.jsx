import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DayOffCard = ({ day }) => {
  return (
    <div className="bg-[#ACD084] shadow-lg rounded-lg overflow-hidden flex flex-col w-[150px] sm:w-[265px] h-auto sm:h-[360px] h-[360px]">
      <div className="p-2 sm:p-3 text-center text-sm sm:text-xl font-semibold border-b-2 border-[#528540] bg-[#ACD084]">
        {day}
      </div>

      <div className="w-full bg-[#ACD084] flex justify-center items-center h-[100px] sm:h-[150px] font-bold text-base sm:text-[20px]">
        Day Off
      </div>

      <div className="flex-grow flex flex-col justify-end items-center w-full bg-[#ACD084] p-2 sm:p-4">
        <button className="bg-[#528540] text-xs sm:text-sm text-white rounded-lg w-32 sm:w-40 flex items-center justify-center py-1 sm:py-2">
          Select Dish
          <FontAwesomeIcon icon={faPlus} className="w-3 h-3 sm:w-4 sm:h-4 text-[#fffbf1] ml-1" />
        </button>
      </div>
    </div>
  );
};

export default DayOffCard;