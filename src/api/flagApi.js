import fetchData, {getRandomInt, NUMBER_OF_VARIANTS} from './dataApi';


const baseCountryURL = `https://restcountries.com/v3.1/`;
const ENDPOINT_COUNTRY_ALL = 'all';
const MAX_COUNTRY_NUMBER = 250;

const getAllCountries = () => {
    
    return fetchData(baseCountryURL, '', ENDPOINT_COUNTRY_ALL);

}

const getRandomCountry = (allCountries) => {
    
    const randomCountry = getRandomInt(MAX_COUNTRY_NUMBER);
    return allCountries[randomCountry];

}

const getQuestion = async () => {

    const result = {};
    const allCountries = await getAllCountries();
    const country = await getRandomCountry(allCountries);

    result.question = {name: country.name.common, image: country.flags.png};

    result.variants = [];

    const indexOfCorrectAnswer = getRandomInt(NUMBER_OF_VARIANTS);

    for(let i = 0; i < NUMBER_OF_VARIANTS; i++) {
        if(i === indexOfCorrectAnswer) {
            result.variants.push({name: country.name.common, isCorrect: true});
        } else {
            const incorretCountry = await getRandomCountry(allCountries);
            result.variants.push({name: incorretCountry.name.common, isCorrect: false});
        }
        
    }

    return result;

}

export default getQuestion;