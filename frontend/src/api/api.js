import axios from 'axios'

export async function getProducts() {

    const request = await axios.get('http://localhost:5000/api/products/LrQc2FtvxWFsW474');
    const images = await request;
    return images;

}


