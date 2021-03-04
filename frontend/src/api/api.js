import axios from 'axios'

export async function getProducts() {

    const request = await axios.get(`http://localhost:5000/api/products/`);
    const images = request;
   
    return images;

}
