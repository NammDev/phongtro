import actionTypes from '../actions/actionTypes'
const initState = {
  isLoggedIn: false,
  token: null,
  msg: '',
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        ...action.data,
      }
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        ...action.data,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        msg: '',
        token: null,
      }
    default:
      return state
  }
}

export default authReducer
