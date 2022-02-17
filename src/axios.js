import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-ego-coffee-ecommerce.cloudfunctions.net/api',
  // 'http://localhost:5001/ego-coffee-ecommerce/us-central1/api',
})

export default instance
