import React, { useContext, useEffect, useState } from 'react'
import { Button85, LinkItem, MenuLinks, Nav, Avatar, IconWrapper, ToggleMobileMenuButton } from './styles'
import { useRouter } from 'next/router'
import { Web3AuthInit } from '@/utils/Login/handleWeb3AuthInit'
import Web3AuthContext from '@/context/Web3AuthContext'
import LogoutIcon from './LogoutIcon'
import { getUserCookie } from '@/utils/Login/userCookie'
import MenuIcon from './MenuIcon'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const { userData, setUserData } = useContext(Web3AuthContext)
  const router = useRouter()
  const { login, logout } = Web3AuthInit()

  useEffect(() => {
    const userCookieData = JSON.parse(getUserCookie('userData'))

    if (userCookieData) {
      setUserData(userCookieData)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMobileMenu(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClickLogo = () => {
    router.push('/')
  }

  const handleClickCreateEvent = () => {
    router.push('/event/create')
  }

  const handleToggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev)
  }

  return (
    <Nav mobile={showMobileMenu}>
      <img
        src={'/images/brand/eventverse-logo-black.png'}
        alt="Logo"
        width={150}
        height={'auto'}
        onClick={handleClickLogo}
      />
      <MenuLinks mobile={showMobileMenu}>
        <LinkItem mobile={showMobileMenu} primary={false} href={'/'}>
          Eventos
        </LinkItem>
        <LinkItem mobile={showMobileMenu} primary={false} href={'/resell'}>
          Reventas
        </LinkItem>
        {userData
          ? (
          <>
            <Button85 onClick={handleClickCreateEvent}>Crear evento</Button85>
            <LinkItem mobile={showMobileMenu} primary={false} href={'/user'}>
              <Avatar
                src={
                  userData.profileImage === '' || !userData.profileImage
                    ? '/images/avatar.jpg'
                    : userData.profileImage
                }
                alt="User avatar"
              />
            </LinkItem>
            <IconWrapper onClick={logout}>
              <LogoutIcon />
            </IconWrapper>
          </>
            )
          : (
          <Button85 onClick={login}>Conectar</Button85>
            )}
      </MenuLinks>
      <ToggleMobileMenuButton onClick={handleToggleMobileMenu}>
        <MenuIcon />
      </ToggleMobileMenuButton>
    </Nav>
  )
}

export default Navbar
