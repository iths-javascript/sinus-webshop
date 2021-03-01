import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";

const POST_URL = `${BASE_URL}auth/`;

const post = async (url, user) => {

    try {
        
        const response = await axios.post(url, user);

        return response;
    } 
    
    catch (error) {
        console.log(error)
    }
}

export {
    POST_URL, post
}