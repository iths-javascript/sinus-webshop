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
    console.log(response)
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

