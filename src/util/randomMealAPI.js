import API_KEY From '/.env'

export default async function getRandomMeal(allergies, numberOfDays) {
  
  let completeURL;
  let listOfIds = [];
  let resultsAll;
  try {
    // get recipes for numberOfDays accomodating allergies
    const urlToFetch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${numberOfDays}&intolerances=${allergies}`;
    const response = await fetch(urlToFetch);

    const jsonResponse = await response.json();
    console.log("jsonResponse", jsonResponse);

    const resultFull = jsonResponse.results.map((result) => {
      console.log("result", result);
      const { id, title, image } = result;
      //preparing a list of Ids so we can make a bulk call to get ingredients
      console.log("id", id, "listOfIds", listOfIds.push(id));
      return result;
    });
  } catch (error) {
    console.error(error.message);
  }
}
