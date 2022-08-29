//import axios from "axios";
//import 'dotenv/config';
import fetchData, {getRandomInt, NUMBER_OF_VARIANTS} from './dataApi';


const baseURL = `https://imdb-api.com/en/API/`;
const ENDPOINT_TOP250 = `Top250Movies/`;
const ENDPOINT_FULLCAST = `FullCast/`;
const MAX_MOVIE_NUMBER = 250;

const apiKey = 'k_8ix9l2rt';//process.env.REACT_APP_MOVIE_API_KEY;

// https://imdb-api.com/en/API/Top250Movies/k_x8rn7s57     baseURL + endPiont + key
// https://imdb-api.com/en/API/FullCast/k_x8rn7s57/tt1375666 baseURL + endPiont + key + movieId


// 1 random  top 250 movie id
// 1 actor from full cast on movie id
// 3 random top 250 movie id - check if this movie consist actor

const getTop250Movie = () => {
    
    return fetchData(baseURL, apiKey, ENDPOINT_TOP250);

}

/* return obj (example):
"id": "nm0000138",
"image": "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
"name": "Leonardo DiCaprio",
"asCharacter": "Cobb"
*/
const getFullCastOfMovie = (movieId) => {

    const params = [movieId];
    return fetchData(baseURL, apiKey, ENDPOINT_FULLCAST, params);
}

/* return obj (example):
"id": "tt0110912",
"rank": "8",
"title": "Pulp Fiction",
"fullTitle": "Pulp Fiction (1994)",
"year": "1994",
"image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
"crew": "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
"imDbRating": "8.8",
"imDbRatingCount": "2015015"
*/
const getRandomMovie = (top250Movie) => {
    const randomMovie = getRandomInt(MAX_MOVIE_NUMBER);
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