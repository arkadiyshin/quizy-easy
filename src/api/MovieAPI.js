//import axios from "axios";
//import 'dotenv/config';
import fetchData, {getRandomInt, NUMBER_OF_VARIANTS} from './dataApi';


const baseURL = `https://imdb-api.com/en/API/`;
const ENDPOINT_TOP250 = `Top250Movies/`;
const ENDPOINT_FULLCAST = `FullCast/`;
const MAX_ITEMS_NUMBER = 250;

const apiKey = 'k_8ix9l2rt';//process.env.REACT_APP_MOVIE_API_KEY;

// https://imdb-api.com/en/API/Top250Movies/k_x8rn7s57     baseURL + endPiont + key
// https://imdb-api.com/en/API/FullCast/k_x8rn7s57/tt1375666 baseURL + endPiont + key + movieId


// 1 random  top 250 movie id
// 1 actor from full cast on movie id
// 3 random top 250 movie id - check if this movie consist actor

const getTop250Movie = () => {
    
    return fetchData(baseURL, apiKey, ENDPOINT_TOP250);

}

const getFullCastOfMovie = (movieId) => {

    const params = [movieId];
    return fetchData(baseURL, apiKey, ENDPOINT_FULLCAST, params);
}

const getRandomMovie = (top250Movie) => {
    const randomMovie = getRandomInt(MAX_ITEMS_NUMBER);
    return top250Movie.items[randomMovie];
}


const getQuestion = async () => {

    const result = {};
    const top250Movie = await getTop250Movie();
    const movie = await getRandomMovie(top250Movie);
    const fullCast = await getFullCastOfMovie(movie.id);
    console.log(fullCast);
    const actor = fullCast.actors[0];

    result.question = {name: actor.name, image: actor.image};

    result.variants = [];

    const indexOfCorrectAnswer = getRandomInt(NUMBER_OF_VARIANTS);

    for(let i = 0; i < NUMBER_OF_VARIANTS; i++) {
        if(i === indexOfCorrectAnswer) {
            result.variants.push({name: fullCast.fullTitle, isCorrect: true});
        } else {
            const incorretMovie = await getRandomMovie(top250Movie);
            //const incorretfullCast = await getFullCastOfMovie(incorretMovie.id);
            result.variants.push({name: incorretMovie.fullTitle, isCorrect: false});
        }
        
    }

    return result;

}

export default getQuestion;