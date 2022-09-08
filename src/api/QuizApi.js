/*

categories = [movie, dogs, flags, meals]

QuizApi (common functionality)

MovieApi (diff QuizApi)
DogApi (diff QuizApi)
...

api = {
    baseUrl:
    endpoints: {
        allItems,
        randomItem
    }

}


result = {
    question: { image: 'https://website/image.png' }
    variants: [
        { name: 'a', isCorrect: false},
        { name: 'b', isCorrect: false},
        { name: 'c', isCorrect: true},
        { name: 'd', isCorrect: false},
    ]
}


id
name
image

var 1
1. user choose category
2. init QuizApi: const Quiz = new QuizApi(apiObj);
3. result = QuizApi.getQuestion();

var 2
1. user choose category
2. fetch data form api
3. init QuizApi: const Quiz = new QuizApi(items); ( meal api doesn`t have items)
4. result = QuizApi.getQuestion();

*/
import axios from "axios";


const NUMBER_OF_VARIANTS = 4;

class QuizApi {

    constructor(api) {
        //this.baseURL = baseURL;
        //this.endpointItems = endpointItems;
        this.api = api;
    }

    fetchData = async (baseURL, endpoint = '', apiKey = '', params = []) => {

        let url = `${baseURL}${endpoint}${apiKey}`;

        if (params.length > 0) url = params.reduce((url, param) => { return url += `/${param}` }, url);

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            throw new Error(err);
        }

    }

    checkDuplicateById = (array, id) => {
        return array.some((e) => e.id === id)
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    getItems = () => {
        return this.fetchData(this.baseURL, this.endpointItems, this.apiKey);
    }

    geRandomItem = (items) => {
        if(this.useRandom) {
            return ;
        } else {
            return items[this.getRandomInt(items.length - 1)]
        }
    }

    getUniqRandomItem = (items, variants) => {
        // if have random endpoint use random else items[random]
        let someItem = this.geRandomItem(items);
        while (this.checkDuplicateById(variants, someItem.ccn3)) {
            someItem = this.geRandomItem(items);
        }
        return someItem;

    }

    getPropByPath = (item, path) => {
        return path.reduce((res, e) => res[e], item);
    }

    getQuestion = async () => {

        const result = {
            question: {},
            variants: [],
        };

        const items = await this.getItems();

        const randomIndex = this.getRandomInt(NUMBER_OF_VARIANTS);

        for (let i = 0; i < NUMBER_OF_VARIANTS; i++) {
            const randomItem = this.getUniqRandomItem(items, result.variants);
            result.variants.push({ id: this.getPropByPath(randomItem, 'id'), name: this.getPropByPath(randomItem, 'name'), isCorrect: false });
            if (i === randomIndex) {
                result.question = { name: this.getPropByPath(randomItem, 'name'), image: this.getPropByPath(randomItem, 'image') };
                result.variants[i].isCorrect = true;
            }
        }

        return result;
    }

}

export default QuizApi;


// baseURL, endpointItems, apiKey, params
// id, name, image
/* api{
    baseUrl: '',
    authorization: 'NoAuth|ApiKey';
    endpoints: {
        allItems:
        randomItem:
    },
    
    propsPaths = {
    id: [],
    name: [],
    image: []
    // arr.reduce( (res, e) => res[e], obj )
}
}




categories = [
    {
        name: 'movie',
        title: 'Movie'
        api: {},
    },
    {
        name: dogs,
        title: 'Dogs'
        api: {},
    },
    {
        name: flags,
        title: 'Flags'
        api: {},
    },
    {
        name: meals,
        title: 'Meals'
        api: {},
    }
]



*/
