import axios from '../config/axiosConfig'

export const apiRegister = async (payload) => {
  try {
    const response = await axios.post('/api/v1/auth/register', payload)
    return response?.data
  } catch (error) {
    console.log(error)
  }
}
