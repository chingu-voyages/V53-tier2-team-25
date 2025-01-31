import React from "react";

const DishOfTheDayCard = ({ day }) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap bg-pink-600">{day}</div>
    </div>
  );
};

export default DishOfTheDayCard;
