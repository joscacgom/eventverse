
import React from 'react'
import { SideBarContainer, OptionContainer } from './styles'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const UserSideBar = () => {
  return (
    <SideBarContainer>
        <OptionContainer>
          <FontAwesomeIcon icon={faHome} size='2xl'/>
            <p>Mis tickets</p>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon icon={faUser} size='2xl' />
            <p>Mis datos</p>
        </OptionContainer>
    </SideBarContainer>

  )
}

export default UserSideBar
