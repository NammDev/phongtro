import actionTypes from './actionTypes'
import { apiRegister } from '../../services/authService'

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
