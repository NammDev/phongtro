import * as authService from '../service/auth'

const register = async (req, res) => {
  const { name, phone, password } = req.body
  try {
    if (!name || !phone || !password)
      return res.status(400).json({
        err: 1,
        msg: `Missing inputs!`,
      })
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: `Failed at auth controller ${error}`,
    })
  }
}

export default register
