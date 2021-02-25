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
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  }

  try {
    const response = await API.post('/orders', payload, config)
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

export async function authenticate(payload) {
  try {
    const response = await API.post('/auth/', payload)
    return response.data
  } catch (e) {
    return false
  }
}
