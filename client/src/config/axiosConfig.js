import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
})

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('persist:auth')
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance