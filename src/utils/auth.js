// import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  console.log('get')
  return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
  console.log('set')
  console.log(token)
  return window.localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  console.log('remove')
  return window.localStorage.removeItem(TokenKey)
}
