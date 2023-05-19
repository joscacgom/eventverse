import Cookies from 'js-cookie'

export const getUserCookie = () => {
  const userCookie = Cookies.get('web3auth_provider')
  if (!userCookie) return null
  const userObject = userCookie ? JSON.parse(userCookie) : null
  return userObject
}

export const setCookie = (cookie: string, value:any, expires?: number) => {
  Cookies.set(cookie, JSON.stringify(value), { expires })
}

export const removeCookie = (cookie: string) => {
  Cookies.remove(cookie)
}
