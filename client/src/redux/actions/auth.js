import actionTypes from './actionTypes'
import { apiLogin, apiRegister } from '../../services/authService'

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload)
    if (response.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: {
          token: response.token,
          msg: response.msg,
        },
      })
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: {
          token: null,
          msg: response.msg,
        },
      })
    }
  } catch (error) {
    dispatch({ type: actionTypes.REGISTER_FAIL, data: null })
  }
}

export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin(payload)
    if (response.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: {
          token: response.token,
          msg: response.msg,
        },
      })
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: {
          token: null,
          msg: response.msg,
        },
      })
    }
  } catch (error) {
    dispatch({ type: actionTypes.LOGIN_FAIL, data: null })
    console.log(error)
  }
}
