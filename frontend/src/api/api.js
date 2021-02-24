<<<<<<< HEAD
import axios from 'axios'

export async function getProducts() {

    const id = "OSCVjAXi5zJkyvMT";
    const request = await axios.get(`http://localhost:5000/api/products/${id}`);
    const images = request;
    return images.data.imgFile;

}


=======
import axios from 'axios'

export async function getProducts() {

    const request = await axios.get('http://localhost:5000/api/products/LrQc2FtvxWFsW474');
    const images = await request;
    return images;

}


>>>>>>> b0b4457981e91232cc81b02e71f6063203b9f8cb
