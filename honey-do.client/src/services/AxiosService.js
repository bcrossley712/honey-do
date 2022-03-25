import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const tastyApi = Axios.create({
  baseURL: 'https://tasty.p.rapidapi.com/recipes/list',
  timeout: 8000,
  headers: {
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    'X-RapidAPI-Key': '9d0dc9db3fmsh9c8ab121e8123a7p1ddabajsnf4e1461ad73a',
  }
})