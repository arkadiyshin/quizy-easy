import fetchData, {getRandomInt, NUMBER_OF_VARIANTS} from './dataApi';


const baseURL = `https://api.thedogapi.com/v1/`;
const ENDPOINT_BREEDS = `breeds/`;
const MAX_BREEDS_NUMBER = 170;


const getBreeds = () => {
    return fetchData(baseURL,'',ENDPOINT_BREEDS);
}

const getRandomBreed = (breeds) => {
    return breeds[getRandomInt(MAX_BREEDS_NUMBER)];
}

const getQuestion = async () => {

    const result = {};
    
    const breeds = await getBreeds();
    console.log(breeds);
    const correctBreed = getRandomBreed(breeds);

    result.question = {name: correctBreed.name, image: correctBreed.image.url};

    result.variants = [];

    const indexOfCorrectAnswer = getRandomInt(NUMBER_OF_VARIANTS);

    for(let i = 0; i < NUMBER_OF_VARIANTS; i++) {
        if(i === indexOfCorrectAnswer) {
            result.variants.push({name: correctBreed.name, isCorrect: true});
        } else {
            const incorretBreed = getRandomBreed(breeds)
            result.variants.push({name: incorretBreed.name, isCorrect: false});
        }
        
    }

    return result;
}

export default getQuestion;