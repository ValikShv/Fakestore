import axios from 'axios'

 export const fakeStoreUrl = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
