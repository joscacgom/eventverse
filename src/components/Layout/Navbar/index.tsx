import React, { useContext, useEffect, useState } from 'react'
import { Button85, LinkItem, MenuLinks, Nav, Avatar } from './styles'
import { useRouter } from 'next/router'
import { handleWeb3AuthInit } from '@/utils/Login/handleWeb3AuthInit'
import Web3AuthContext from '@/context/Web3AuthContext'
import { getUserCookie } from '@/utils/Login/userCookie'
import LogoutIcon from './LogoutIcon'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const { userData } = useContext(Web3AuthContext)
  const router = useRouter()
  const { login, logout } = handleWeb3AuthInit()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMobileMenu(true)
      }
      if (window.innerWidth >= 768) {
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
        {getUserCookie()
          ? (
          <>
            <Button85 onClick={handleClickCreateEvent}>Crear evento</Button85>
              {/* <LogoutIcon /> */}
            <Button85 onClick={logout}>Desconectar</Button85>
          </>
            )
          : (
          <Button85 onClick={login}>Conectar</Button85>
            )}
      </MenuLinks>
    </Nav>
  )
}

export default React.memo(Navbar)
