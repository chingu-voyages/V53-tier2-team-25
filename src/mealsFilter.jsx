const BASE_URL = "https://dummyjson.com/recipes";

const filteredRecipes = async (allergies) => {
  try {
    const response = await fetch(BASE_URL);
    const apiResponse = await response.json();
    const flattenedAllergyTags = allergies
      .filter((allergy) => allergy.isSelected)
      .map((allergy) =>
        Array.isArray(allergy.allergyTag)
          ? allergy.allergyTag.map((tag) => tag.toLowerCase())
          : []
      )
      .flat();

    const selectedRecipes = apiResponse.recipes.filter(({ ingredients }) => {
      const hasNoAllergyIngredients = !ingredients.some((ingredient) => {
        const cleanedIngredient = ingredient
          .toLowerCase()
          .replace(/[^a-zA-Z0-9\s]/g, "");
        return flattenedAllergyTags.some((allergyTag) => {
          const regex = new RegExp(`\\b${allergyTag}\\b`, "i");
          return regex.test(cleanedIngredient);
        });
      });

      return hasNoAllergyIngredients;
    });

    return selectedRecipes;
  } catch (error) {
    console.error("Error fetching or filtering meals:", error);
    throw error;
  }
};
export default filteredRecipes;
