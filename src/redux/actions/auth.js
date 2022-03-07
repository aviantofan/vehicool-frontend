import http from "../../helpers/http"


export const login = (email, password) => {
  const param = new URLSearchParams() //query string-like body
  param.append('email', email)
  param.append('password', password)
  return ({
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', param)
  })
}

export const register = (data) => {
  const param = new URLSearchParams() //query string-like body
  param.append('name', data.name)
  param.append('email', data.email)
  param.append('password', data.password)
  return ({
    type: 'AUTH_REGISTER',
    payload: http().post('/auth/register', param)
  })
}

export const getDataUser = (token) => {
  return ({
    type: 'AUTH_USERDATA',
    payload: http(token).get('/profile ')
  })
}