import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

// Products

export async function fetchProducts() {
  const products = await API.get('/products/')
  return products.data
}

export async function submitOrder(payload, userToken) {
  try {
    const response = await API.post('/orders', payload, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    return response.data
  } catch (e) {
    return false
  }
}

export async function getOrders(userToken) {
  try {
    const response = await API.get('/orders', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    return response.data
  } catch (e) {
    return false
  }
}

// User

export async function registerUser(payload) {
  const response = await API.post('/register/', payload)

  if (response.status === 200) {
    return true
  }

  return false
}

export async function getUser(userToken) {
  try {
    const response = await API.get('/me', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    return response.data
  } catch (e) {
    console.log(e.message)
    return false
  }
}

export async function updateUser(payload, userToken) {
  try {
    const response = await API.patch('/me', payload, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    return response
  } catch (e) {
    console.log(e.message)
    return false
  }
}

export async function authenticate(payload) {
  try {
    const response = await API.post('/auth/', payload)
    setStorage(response.data.token)
    return response.data
  } catch (e) {
    return false
  }
}

export function clearStorage() {
  sessionStorage.removeItem('user')
}

function setStorage(payload) {
  sessionStorage.setItem('user', JSON.stringify(payload))
}

// Admin


// Använder getOrders istället
// export async function getAdminOrders(adminToken) {
//   try {
//     const response = await API.get('/orders', {
//       headers: {
//         Authorization: `Bearer ${adminToken}`
//       }
//     })

//     return response.data // Returns array with all orders
//   } catch (e) {
//     return false
//   }
// }

export async function createProduct(payload, adminToken) {
  try {
    const response = await API.post('/products', payload, {
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    })

    return response.data
    // example response.data:
    //   {
    //     "message": "Product created!",
    //     "product": {
    //         "title": "Face mask",
    //         "price": 29,
    //         "shortDesc": "Unisex",
    //         "longDesc": "Covid ipsum dolor sit amet...",
    //         "imgFile": "facemask-sinus.png",
    //         "serial": 1614599344068,
    //         "_id": "ZF01d2RxuyArGXdz"
    //     }
    // }
  } catch (e) {
    return false
  }
}

export async function deleteProduct(id, adminToken) {
  try {
    const response = await API.post(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    })

    return response.message // "Product obliteraded"
  } catch (error) {
    return false
  }
}

export async function updateProduct(payload, adminToken) {
  try {
    const response = await API.patch(`/products/${payload._id}`, {
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    })

    return response.data
    // example response.data:
    //  {
    //     "title": "Gretas Fury",
    //     "price": 999,
    //     "shortDesc": "Unisex",
    //     "longDesc": "Skate ipsum dolor sit amet...",
    //     "imgFile": "skateboard-greta.png",
    //     "_id": "VZ9i0LRFHaVgOcqw"
    // }
  } catch (e) {
    return false
  }
}

