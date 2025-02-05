import allergyObjectsData from "/src/allergies.js";
import apiResponse from "/src/apiResponse";

const mealsFilter = (allergies, numberOfDays) => {
  const result = apiResponse.recipes.map((eachItem) => {
    console.log("eachItem", eachItem);
  });
};

export default mealsFilter;
