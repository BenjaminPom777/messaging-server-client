

export const SET_NAME = "SET_NAME"
export const setNameStart = (payload) => {
  return {
    type: SET_NAME,
    payload: payload
  }
}


export const REGISTER_START = "REGISTER_START"
export const REGISTER_FAIL = "REGISTER_FAIL"
export const REGISTER = "REGISTER"
export const userRegister = (payload) => {
  return {
    type: REGISTER_START,
    payload: payload
  }
}


export const LOGIN_START = "LOGIN_START"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGIN = "LOGIN"
export const userLogin = (payload) => {
  return {
    type: LOGIN_START,
    payload: payload
  }
}
