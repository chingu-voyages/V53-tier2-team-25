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

  // console.log("flattenedAllergyTags", flattenedAllergyTags);

  const selectedRecipes = apiResponse.recipes.filter(
    ({ ingredients }) => {
      const areIngredientsAllergyCausing = ingredients.filter(
        (oneIngredient) => {
          const ingredientAllergyMatch = flattenedAllergyTags.includes(
            oneIngredient.toLowerCase()
          );
          console.log(
            `Does ${oneIngredient} match any of allergies`,
            ingredientAllergyMatch
          );
          return ingredientAllergyMatch;
        }
      );
      console.log(
        "areIngredientsAllergyCausing",
        areIngredientsAllergyCausing.length
      );
      return areIngredientsAllergyCausing.length == 0 ? true : false;
    }
    //now that we have list of ingredients we map over them
  );

  console.log("selected Recipes", selectedRecipes);
}

export default mealsFilter;
