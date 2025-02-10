import allergyObjectsData from "/src/allergies.js";
import apiResponse from "/src/apiResponse";

const mealsFilter = (allergies) => {
  // step 1 : knowing selected allergies with tags
  // steps 2: combine all the tags in one array
  // step 3: iterate over each recipe
  // step 4: filter (any) out the recipes that MATCH any ONE allergy causing tag
  // step 5: return the recipes that don't match any of the allergy tags (combined array)

  // calculating flattened allergy tags right here instead of outside (steps 1-2)

  const flattenedAllergyTags = allergies
    .filter((allergy) => allergy.isSelected)
    .map((allergy) => allergy.allergyTag.map((tag) => tag.toLowerCase()))
    .flat();

  const selectedRecipes = apiResponse.recipes.filter(
    ({ id, name, ingredients }) => {
      const hasNoAllergyIngredients = !ingredients.some((ingredient) => {
        const cleanedIngredient = ingredient
          .toLowerCase()
          .replace(/[^a-zA-Z0-9\s]/g, "");
        return flattenedAllergyTags.some((allergyTag) => {
          const regex = new RegExp(`\\b${allergyTag}\\b`, "i");
          return regex.test(cleanedIngredient);
        });
      });

      // if (hasNoAllergyIngredients) {
      //   console.log(`Meal without allergies: ${name}`, ingredients);
      // }

      return hasNoAllergyIngredients;
    }
  );
  // console.log("selected Recipes", selectedRecipes);
  return selectedRecipes;
};

export default mealsFilter;
