import allergyObjectsData from "/src/allergies.js";
import apiResponse from "/src/apiResponse";

const mealsFilter = (allergies, numberOfDays) => {
  // step 1 : knowing selected allergies with tags
  // steps 2: combine all the tags in one array
  // step 3: iterate over each recipe
  // step 4: filter (any) out the recipes that MATCH any ONE allergy causing tag
  // step 5: return the recipes that don't match any of the allergy tags (combined array)

  //Combined all allergy tags into 2D array
  let allAllergyTags = allergies.map((allergy) => {
    if (allergy.isSelected) {
      return allergy.allergyTag;
    }
  });

  // filters out the undefined entries
  const allergyTagsWithoutUndefined = allAllergyTags.filter((tag) => !!tag);

  //flattens the 2D Array into single array of all tags
  const flattenedAllergyTags = [].concat(...allergyTagsWithoutUndefined);

 console.log("flattenedAllergyTags", flattenedAllergyTags);

 const selectedRecipes = apiResponse.recipes.filter(({ ingredients }) => {
   const areIngredientsAllergyCausing = ingredients.filter((oneIngredient) => {
     const exactIngredient = oneIngredient.toLowerCase().split(",")[0];
     console.log("exactInredient", exactIngredient);
     const ingredientAllergyMatch = flattenedAllergyTags.map(
       (eachAllergyTag) => {
         const regex = new RegExp(`\\b${eachAllergyTag}\\b`, "i");
         console.log("regex", regex);
         return regex.test(exactIngredient);
       }
     );
     // flattenedAllergyTags.includes(exactIngredient);
     //  console.log(
     //    `Does ${exactIngredient} match any of allergies`,
     //    ingredientAllergyMatch.some(
     //      (allergyCausing) => allergyCausing == true
     //    )
     //  );
     return ingredientAllergyMatch.some(
       (allergyCausing) => allergyCausing == true
     );
   });
   console.log(
     "areIngredientsAllergyCausing",
     !!areIngredientsAllergyCausing.length
   );
   return !!areIngredientsAllergyCausing.length;
 });

  console.log("selected Recipes", selectedRecipes);
  return selectedRecipes;
}

export default mealsFilter;
