import axios from 'axios'

export async function getProducts() {

    const request = await axios.get(`http://localhost:5000/api/products/`);
    const images = request;
   
    return images;

}


// fileName: images.data[i].imgFile,
//                    title: images.data[i].title,
//                    price: images.data[i].price,
//                    description: images.data[i].shortDesc