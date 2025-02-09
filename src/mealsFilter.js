import allergyObjectsData from "/src/allergies.js";
import apiResponse from "/src/apiResponse";

const mealsFilter = (allergies) => {
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
  const allergyTagsWithoutUndefined =
    allAllergyTags.length > 0 ? allAllergyTags.filter((tag) => !!tag) : [];

  //flattens the 2D Array into single array of all tags
  const flattenedAllergyTags = [].concat(...allergyTagsWithoutUndefined);

  const selectedRecipes = apiResponse.recipes.filter(
    ({ id, name, ingredients }) => {
      const areIngredientsAllergyCausing = ingredients.filter(
        (oneIngredient) => {
          const exactIngredient = oneIngredient.toLowerCase().split(",")[0];
          console.log("exactInredient", exactIngredient);
          const ingredientAllergyMatch =
            flattenedAllergyTags.length > 0
              ? flattenedAllergyTags.map((eachAllergyTag) => {
                  const regex = new RegExp(`\\b${eachAllergyTag}\\b`, "i");
                  return regex.test(exactIngredient);
                })
              : [];
          return ingredientAllergyMatch.length > 0
            ? ingredientAllergyMatch.some(
                (allergyCausing) => allergyCausing == true
              )
            : false;
        }
      );
      console.log(`Is ${name} selected`, !areIngredientsAllergyCausing.length);
      return !areIngredientsAllergyCausing.length;
    }
  );

  console.log("selected Recipes", selectedRecipes);
  return selectedRecipes;
};

export default mealsFilter;
