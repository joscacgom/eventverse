
import React from 'react'
import { SideBarContainer, OptionContainer } from './styles'
import { faHome, faUser, faDollar, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
const UserSideBar = () => {
  const router = useRouter()

  const handleMyTickets = () => {
    router.push('/user/tickets')
  }

  const handleMyData = () => {
    router.push('/user')
  }

  const handleMyEvents = () => {
    router.push('/user/events')
  }

  const handleMyFinances = () => {
    router.push('/user/finances')
  }

  return (
    <SideBarContainer>
        <OptionContainer onClick={handleMyTickets}>
          <FontAwesomeIcon icon={faHome} size='2xl'/>
            <p>Mis tickets</p>
        </OptionContainer>
        <OptionContainer onClick={handleMyData}>
          <FontAwesomeIcon icon={faUser} size='2xl' />
            <p>Mis datos</p>
        </OptionContainer>
        <OptionContainer onClick={handleMyEvents}>
          <FontAwesomeIcon icon={faTicket} size='2xl'/>
            <p>Eventos creados</p>
        </OptionContainer>
        <OptionContainer onClick={handleMyFinances}>
          <FontAwesomeIcon icon={faDollar} size='2xl'/>
            <p>Finanzas</p>
        </OptionContainer>
    </SideBarContainer>
  )
}

export default UserSideBar
