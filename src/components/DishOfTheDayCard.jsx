import { faSortNumericUpAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const DishOfTheDayCard = ({ day, name, ingridients, thumbnailPic }) => {
  return (
    <div>
      <div className=" border-lightGreen border-4 rounded-lg w-[40%]vw height justify-center">
        <div className=" flex">
          <h4 className="capitalize">{day}</h4>
          <p>x</p>
        </div>

        <p className="capitalize">{name}</p>
        <p>{ingridients}</p>
      </div>
    </div>
  );
};

export default DishOfTheDayCard;
