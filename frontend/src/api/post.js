import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/";

const POST_URL_AUTH = `${BASE_URL}auth/`;



const logIn = async (url, user) => {

    try {

        const response = await axios.post(url, user);

        const AUTH_TOKEN = response.data.token

        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return response.status;
            
    }
    
    catch (error) {
        console.log(error)
    }
}


    
    


export {
    POST_URL_AUTH, logIn,
}