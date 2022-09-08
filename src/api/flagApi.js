import fetchData, { getRandomInt, checkDuplicateById, NUMBER_OF_VARIANTS } from './dataApi';


const baseCountryURL = `https://restcountries.com/v3.1/`;
const ENDPOINT_COUNTRY_ALL = 'all';
const MAX_ITEMS_NUMBER = 250;

const getItems = () => {

    return fetchData(baseCountryURL, '', ENDPOINT_COUNTRY_ALL);

}

const getRandomItem = (items, variants) => {

    let someItem = items[getRandomInt(MAX_ITEMS_NUMBER)];
    while (checkDuplicateById(variants, someItem.ccn3)) {
        someItem = items[getRandomInt(MAX_ITEMS_NUMBER)];
    }
    return someItem;

}

const getQuestion = async () => {

    const result = {};

    const items = await getItems();
    const correcItem = getRandomItem(items, []);

    result.question = { name: correcItem.name.common, image: correcItem.flags.png };

    result.variants = [];
    result.variants.push({ id: correcItem.ccn3, name: correcItem.name.common, isCorrect: true });

    for (let i = 0; i < NUMBER_OF_VARIANTS - 1; i++) {
        const incorretItem = getRandomItem(items, result.variants);
        const randomIndex = getRandomInt(NUMBER_OF_VARIANTS);
        result.variants.splice(randomIndex, 0, { id: incorretItem.ccn3, name: incorretItem.name.common, isCorrect: false });
    }

    return result;
}

export default getQuestion;