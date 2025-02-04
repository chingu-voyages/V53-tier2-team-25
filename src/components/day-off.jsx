
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DayOffCard = ({ day }) => {
  return (
    <div className="bg-[#ACD084] shadow-lg rounded-lg overflow-hidden flex flex-col w-[265px] h-[360px]">
      
      {/* Day Title */}
      <div className="p-3 text-center text-xl font-semibold border-b-2 border-[#528540] bg-[#ACD084]">
        {day}
      </div>

      {/* Day Off Text */}
      <div className="w-full bg-[#ACD084] flex justify-center items-center h-[150px] font-bold text-[20px]">
        Day Off
      </div>

      {/* Push button to the bottom */}
      <div className="flex-grow flex flex-col justify-end  items-center bg-[#ACD084] p-4">
        <button className="bg-[#528540] text-white rounded-lg w-40 flex items-center justify-center py-2">
          Select Dish
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-[#fffbf1] ml-1" />
        </button>
      </div>
    </div>
  );
};

export default DayOffCard;
