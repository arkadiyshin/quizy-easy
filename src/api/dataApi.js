import axios from "axios";

const NUMBER_OF_VARIANTS = 4;

const getRandomInt = (max) => {
    
    return Math.floor(Math.random() * max);

}

const fetchData = async (baseURL, apiKey='', endpoint='', params = []) => {

    let url = `${baseURL}${endpoint}${apiKey}`;

    //console.log(url);
    if (params.length > 0) url = params.reduce((url, param) => { return url += `/${param}` }, url);

    //console.log(url);
    try {
        const response = await axios.get(url);
        //console.log(response.data);
        return response.data;
    } catch (err) {
        throw new Error(err);
    }

}

export {fetchData as default, getRandomInt, NUMBER_OF_VARIANTS};