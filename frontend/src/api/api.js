import axios from 'axios'

export async function getProducts() {

    const request = await axios.get(`http://localhost:5000/api/products/`);
    const images = request;
   
    return images;

}

export async function getUserInfo(){
    let token = window.sessionStorage.getItem("token")
    const request = await axios.get('http://localhost:5000/api/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });  
    const userInfo = request;
    return userInfo.data;
}
