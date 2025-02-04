import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";

const DayOnCard = ({ day }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col max-w-xs w-[265px] h-[360px] border-2 border-[#528540]">
      <button className="absolute top-2 right-3 w-8 h-8 flex items-center justify-center rounded-full   bg-gray-300 border hover:text-red-500 hover:border-red-500">
        <FontAwesomeIcon icon={faTimes} className="w-4 h-4 text-[#fffbf1] " />
      </button>

      <div className="bg-[#fffbf1] p-3 text-center text-xl font-semibold">
        {day}
      </div>
      <div className="px-7 bg-[#fffbf1]   ">
        <div className="w-full bg-gray-400 h-[150px] rounded-lg"></div>
      </div>

      <div className="bg-[#fffbf1] p-4 flex flex-col">
        <div className="flex justify-between">
          <h4 className="text-lg font-bold mb-2">Meal Name</h4>
          <h4 className="text-lg font-bold mb-2"> 345cal</h4>
        </div>

        <p className="text-sm text-gray-700  h-[30px] overflow-hidden">
          Chicken, Lettuce, Dressing
        </p>
        <p className="text-sm text-[#528540]  ">Read More</p>

        <button className="text-sm px-3 py-1 mt-2 bg-[#528540]  text-white rounded-md hover:bg-orange-700 self-center">
          Change Dish
        </button>
      </div>
    </div>
  );
};

export default DayOnCard;
