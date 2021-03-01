import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";

const PRODUCTS_URL = `${BASE_URL}products`;

const PRODUCTID_URL = `${PRODUCTS_URL}`

const POST_URL_USER = `${BASE_URL}me/`;


const get = async (url) => {

    try {
        
        const response = await axios.get(url);

        return response;
    } 
    
    catch (error) {
        console.log(error)
    }
}
const getProductById = async (url, id) => {

    try {
        const urlOfProduct = url + "/" + id;
        const response = await axios.get(urlOfProduct);
        return response;
    } 
    
    catch (error) {
        console.log(error)
    }
}

const getUser = async () => {
    try {
console.log(axios.defaults.headers)
        const response = await axios.get(POST_URL_USER);

        return response;
    }
    
    catch (error) {
        console.log(error)
    }
}
export {
    PRODUCTS_URL, get, getProductById, PRODUCTID_URL, getUser, POST_URL_USER
}