export default async function getRandomMeal() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    console.log("** response", response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const jsonResponse = await response.json();
    // jsonResponse is an object containing an array with just one element being that random meal
    const randomMeal = jsonResponse.meals[0];
    console.log("typeof", typeof randomMeal);
    console.log("A random Meal", randomMeal);
    //destructiring it here
    const { idMeal, strIngridient1, strIngridient2, strIngridient3 } =
      randomMeal;
    console.log("idMeal", idMeal);
  } catch (error) {
    console.error(error.message);
  }
}
