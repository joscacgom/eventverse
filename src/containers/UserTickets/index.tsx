import React, { useContext } from 'react'
import { UserTicketList, UserSideBar } from '@/components/UserInfo'
import { MainContainer } from './styles'
import Web3AuthContext from '@/context/Web3AuthContext'
import { getUserCookie } from '@/utils/Login/userCookie'

const UserTickets = () => {
  const userData = getUserCookie('userData') || useContext(Web3AuthContext).userData

  return (
    <MainContainer>
        <UserSideBar />
        <UserTicketList userData={userData}/>
    </MainContainer>
  )
}

export default UserTickets
