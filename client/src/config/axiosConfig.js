import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
})

axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
