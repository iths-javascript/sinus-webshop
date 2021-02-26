import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";

const PRODUCTS_URL = `${BASE_URL}products`;

const PRODUCTID_URL = `${PRODUCTS_URL}`

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

export {
    PRODUCTS_URL, get, getProductById, PRODUCTID_URL
}