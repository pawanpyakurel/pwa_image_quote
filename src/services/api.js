import axios from 'axios';
// image url = "source.unsplash.com/random/1000x600"
// https://picsum.photos/seed/picsum/1000/600
//quote url = "http://quotes.stormconsultancy.co.uk/random.json"

//Image base url
const API_URL = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = API_URL;

// console.log(API_URL, 'image url of api');

//getting the Random Image
const getRandomImage = () => axios.get(`random.json`);

export { getRandomImage };
export { axios };
