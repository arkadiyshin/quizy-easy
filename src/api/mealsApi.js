
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const getMeals = () => {
    return fetch(url);
}

export default getMeals;