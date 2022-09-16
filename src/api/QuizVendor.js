const axios = require("axios");

class QuizVendor {
  constructor({ id, images, name, correct, wrong, question, url }) {
    this.id = id;
    this.images = images;
    this.name = name;
    this.correct = correct;
    this.wrong = wrong;
    this.url = url;
    this.question = question;
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  fetchData = async (baseURL, apiKey = "", endpoint = "", params = []) => {
    let url = `${baseURL}${endpoint}${apiKey}`;
    //console.log(url);
    if (params.length > 0)
      url = params.reduce((url, param) => {
        return (url += `/${param}`);
      }, url);
    //console.log(url);
    try {
      const response = await axios.get(url);
      //console.log(response.data);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  };
}


class MovieApi extends QuizVendor {
    
}