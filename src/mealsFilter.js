import allergyObjectsData from "/src/allergies.js";
import apiResponse from "/src/apiResponse";

const mealsFilter = (allergies, numberOfDays) => {
  // step 1 : knowing selected allergies with tags
  // steps 2: combine all the tags in one array
  // step 3: iterate over each recipe
  // step 4: filter (some) out the recipes that MATCH any ONE allergy causing tag
  // step 5: return the recipes that don't match any of the allergy tags (combined array)
  let allAllergyTags = allergies.map((allergy) => {
    if (allergy.isSelected) {
      console.log("allergyTag", allergy.allergyTag);
      return allergy.allergyTag;
    }
  });
  const allergyTagsWithoutUndefined = allAllergyTags.filter((tag) => !!tag);
  const finalFlattenedAllergyTags = [].concat(...allergyTagsWithoutUndefined);
  console.log("allergyTagsWithoutUndefined", allergyTagsWithoutUndefined);
  console.log("finalFlattenedAllergyTags", finalFlattenedAllergyTags);

  // const result = apiResponse.recipes.map((eachItem) => {
  //   console.log("eachItem.ingredients", eachItem.ingredients);
  //   const recipeToReturn = eachItem.ingredients.map(
  //     (singleIngredient) => {
  //         console.log("singleIngredient", singleIngredient)
  //         return !allAllergyTags.some((tag) => {
  //           tag == singleIngredient;
  //         }
  //     }
  // })
}

export default mealsFilter;
