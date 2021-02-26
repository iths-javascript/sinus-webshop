const PRODUCTS_URL = `${BASE_URL}products`;

const post = async (url, user) => {

    try {
        
        const response = await axios.post(url, user);

        return response;
    } 
    
    catch (error) {
        console.log(error)
    }
}