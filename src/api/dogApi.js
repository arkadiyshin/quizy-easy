import fetchData, {getRandomInt, checkDuplicateById, NUMBER_OF_VARIANTS} from './dataApi';


const baseURL = `https://api.thedogapi.com/v1/`;
const ENDPOINT_BREEDS = `breeds/`;
const MAX_ITEMS_NUMBER = 170;


const getItems = () => {
    return fetchData(baseURL,'',ENDPOINT_BREEDS);
}

const getRandomItem = (items, variants) => {
    let someItem =  items[getRandomInt(MAX_ITEMS_NUMBER)];
    while (checkDuplicateById(variants, someItem.id)) {
        someItem =  items[getRandomInt(MAX_ITEMS_NUMBER)];
    }
    return someItem;
}

const getQuestion = async () => {

    const result = {};
    
    const items = await getItems();
    console.log('hi');
    const correcItem = getRandomItem(items, []);

    result.question = {name: correcItem.name, image: correcItem.image.url};

    result.variants = [];
    result.variants.push({id: correcItem.id, name: correcItem.name, isCorrect: true});

    for(let i = 0; i < NUMBER_OF_VARIANTS-1; i++) {
            const incorretItem = getRandomItem(items, result.variants);
            const randomIndex = getRandomInt(NUMBER_OF_VARIANTS);
            result.variants.splice(randomIndex, 0, {id: incorretItem.id, name: incorretItem.name, isCorrect: false});
    }

    return result;
}

export default getQuestion;