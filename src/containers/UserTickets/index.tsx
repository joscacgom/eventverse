import React from 'react'
import { UserTicketList, UserSideBar } from '@/components/UserInfo'
import { MainContainer } from './styles'
import { getUserCookie } from '@/utils/Login/userCookie'

const UserTickets = () => {
  const userData = getUserCookie('userData')

  return (
    <MainContainer>
        <UserSideBar />
        <UserTicketList userData={JSON.parse(userData)}/>
    </MainContainer>
  )
}

export default UserTickets
