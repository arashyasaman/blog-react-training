import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.ir',
})

export default instance
