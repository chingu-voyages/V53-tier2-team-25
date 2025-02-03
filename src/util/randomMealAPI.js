export default async function getRandomMeal(filterBy) {
  let completeURL;
  console.log("filter by", filterBy);
  try {
    const urlGenerator = () => {
      const baseURL = "https://www.themealdb.com/api/json/v1/1/random.php";
      const filterByFull = filterBy ? `?i=${filterBy}` : "";
      completeURL = baseURL + filterByFull;
      return completeURL;
    };
    const urlToFetch = urlGenerator();
    const response = await fetch(urlToFetch);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const jsonResponse = await response.json();
    // jsonResponse is an object containing an array with just one element being that random meal
    const randomMeal = jsonResponse.meals[0];
    //destructiring it here
    const { idMeal, strIngridient1, strIngridient2, strIngridient3 } =
      randomMeal;
  } catch (error) {
    console.error(error.message);
  }
}
