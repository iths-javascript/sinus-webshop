import axios from 'axios'

export async function fetchProducts() {
  const products = await axios.get('http://localhost:5000/api/products/')
  return products.data
}

export async function registerUser(payload) {
  const response = await axios.post('http://localhost:5000/api/register/', payload)

  if (response.status === 200) {
    return true
  }

  return false
}

export async function authenticate(payload) {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/', payload)
    return response.data
  } catch (e) {
    return false
  }
}

export async function submitOrder(payload, userToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  }

  try {
    const response = await axios.post('http://localhost:5000/api/orders', payload, config)
    return response.data
  } catch (e) {
    return false
  }
}