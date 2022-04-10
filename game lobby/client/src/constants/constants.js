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

export const baseURL = 'http://localhost:3001'

export const signup = async (email, password) => {
  let payload = {
    email: email,
    password: password,
  }
  try {
    const response = axios.post(baseURL + '/signup', payload)
    return response.data
  } catch (e) {
    console.error(e)
  }
}
