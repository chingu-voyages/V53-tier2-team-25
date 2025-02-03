import React, { useEffect } from "react";
import getRandomMeal from "../util/randomMealAPI";

const DishSelectPage = () => {
  useEffect(() => {
    getRandomMeal("cucumber");
  }, []);
  return <button>Get a random meal</button>;
};

export default DishSelectPage;
