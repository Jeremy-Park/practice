import axios from 'axios'

export const AVAILABLE_COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'white',
  'black',
  'pink',
  'lightblue',
]

export const baseURL = 'http://localhost:3100'

export const signup = async (email, password) => {
  let payload = {
    email: email,
    password: password,
  }
  try {
    const response = await axios.post(baseURL + '/user/signup', payload)

    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const signin = async (email, password) => {
  let payload = {
    email: email,
    password: password,
  }
  try {
    const response = await axios.post(baseURL + '/user/signin', payload)

    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const update = async (userData) => {
  let payload = userData
  try {
    const response = await axios.post(baseURL + '/user/update', payload)

    return response.data
  } catch (e) {
    console.error(e)
  }
}
