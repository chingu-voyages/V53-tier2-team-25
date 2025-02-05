import { allergies } from "/src/allergies.js";
import { apiResponse } from "/src/apiResponse.json";

const mealsFilter = (allergies, numberOfDays) => {
  console.log("apiResponse", apiResponse);
  const result = apiResponse.map((eachItem) => {
    console.log("eachItem", eachItem);
  });
};
