import axios from 'axios'

export async function getProducts() {

    const request = await axios.get(`http://localhost:5000/api/products/`);
    const images = request;
   
    return images;

}

export async function getUserInfo(){
    let token = sessionStorage.getItem("token")
    const request = await axios.get('http://localhost:5000/api/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });  
    const userInfo = request;
    return userInfo.data;
}

export async function getUserLogin(payload){
    const request = await axios.post('http://localhost:5000/api/auth', payload)
    const responseData = request
    const data = responseData
    return data
}


export async function getNewAccount(payload){
  const request = await axios.post('http://localhost:5000/api/register', payload)
  const responseData = request
  const data = responseData
  return data
}

  // const request = await fetch('http://localhost:5000/api/register', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type':'application/json'
  //             },
              
  //             body: JSON.stringify(payload)
  //             })
  
          // const responseData = await request.json()
          // hantera errors
          // if (responseData.payload){
            // console.log("lol");
                  
                  // }
  
              // else {
                  // console.log("I am not authenticated")
                  // console.log(responseData);
                  // sessionStorage.setItem("LoggedIn", "false");
                  // this.loggedin = 'false';
  
              // }
            
// }

