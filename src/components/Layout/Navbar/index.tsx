import React, { useEffect, useState } from 'react'
import { Button85, LinkItem, MenuLinks, Nav } from './styles'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const router = useRouter()

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
        <LinkItem mobile={showMobileMenu} primary={false} href={'/'}>Eventos</LinkItem>
        <LinkItem mobile={showMobileMenu} primary={false} href={'/'}>Reventas</LinkItem>
        <Button85>Crear evento</Button85>
      </MenuLinks>
    </Nav>
  )
}

export default Navbar
