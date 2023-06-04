import Cookies from 'js-cookie'

export const getUserCookie = (cookie:string) => {
  const userCookie = Cookies.get(cookie)
  if (!userCookie) return null
  const userObject = userCookie ? JSON.parse(userCookie) : null
  return userObject
}

export const setCookie = (cookie: string, value:any, expires?: number) => {
  Cookies.set(cookie, JSON.stringify(value), { expires })
}

export const removeCookie = (cookie: string) => {
  const domain = window.location.hostname

  Cookies.remove(cookie, {
    path: '/',
    domain: domain.startsWith('www.') ? domain.substring(4) : domain
  })
}
