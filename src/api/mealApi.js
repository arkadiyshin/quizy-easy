import fetchData, { getRandomInt, checkDuplicateById, NUMBER_OF_VARIANTS } from './dataApi';


const baseURL = `https://www.themealdb.com/api/json/v1/1/`;
const ENDPOINT_ITEMS = 'random.php';

const getRandomItem = async(variants) => {

    let someItem = await fetchData(baseURL, '', ENDPOINT_ITEMS);
    while (checkDuplicateById(variants, someItem.meals[0].strMeal)) {
        someItem = await fetchData(baseURL, '', ENDPOINT_ITEMS);
    }
    return someItem;

}

const getQuestion = async () => {

    const result = {};

    const correcItem = await getRandomItem([]);
    console.log(correcItem);

    result.question = { name: correcItem.meals[0].strMeal, image: correcItem.meals[0].strMealThumb };

    result.variants = [];
    result.variants.push({ id: correcItem.meals[0].idMeal, name: correcItem.meals[0].strMeal, isCorrect: true });

    for (let i = 0; i < NUMBER_OF_VARIANTS - 1; i++) {
        const incorretItem = await getRandomItem(result.variants);
        const randomIndex = getRandomInt(NUMBER_OF_VARIANTS);
        result.variants.splice(randomIndex, 0, { id: incorretItem.meals[0].idMeal, name: incorretItem.meals[0].strMeal, isCorrect: false });
    }

    console.log(result);
    return result;
}

export default getQuestion;