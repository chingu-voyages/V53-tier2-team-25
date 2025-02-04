import React, { useEffect } from "react";
import getRandomMeal from "../util/randomMealAPI";

const DishSelectPage = () => {
  useEffect(() => {
    getRandomMeal("nut", 2);
  }, []);
  return <button>Get a random meal</button>;
};

export default DishSelectPage;
