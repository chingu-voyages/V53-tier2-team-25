import allergyObjectsData from "/src/allergies.js";
import apiResponse from "/src/apiResponse";

const mealsFilter = (allergies, numberOfDays) => {
    // step 1 : knowing selected allergies with tags
    // steps 2: combine all the tags in one array
    // step 3: iterate over each recipe
    // step 4: filter (some) out the recipes that MATCH any ONE allergy causing tag
    // step 5: return the recipes that don't match any of the allergy tags (combined array)
    let allAllergyTags = [];
    const allergiesIsSelected = allergies.map((allergy) => {
      if (allergy.isSelected) {
        return allAllergyTags.push(...allergy.allergyTag);
      }
    });
    console.log("allAllergyTags", allAllergyTags);
    console.log("allergiesIsSelected", allergiesIsSelected);
    
    console.log("allergiesIsSelected", allergiesIsSelected);
    const result = apiResponse.recipes.map((eachItem) => {
      console.log("eachItem.ingredients", eachItem.ingredients);
      const recipeToReturn = eachItem.ingredients.map(
        (singleIngredient) =>
        console.log("singleIngredient", singleIngredient)
          !allAllergyTags.some((tag) => {
            tag == singleIngredient;
          })
      );
      console.log("recipeToReturn", recipeToReturn);
    });

};

export default mealsFilter;
