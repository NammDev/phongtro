import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: { 'Content-type': 'application/json' },
})

instance.interceptors.request.use(
  function (config) {
    // Gắn token vào header
    let token =
      window.localStorage.getItem('persist:auth') &&
      JSON.parse(window.localStorage.getItem('persist:auth'))?.token?.slice(1, -1)
    config.headers.Authorization = token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // Viết refresh token. Khi token hết hạn, gọi api mới lấy token mới
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
