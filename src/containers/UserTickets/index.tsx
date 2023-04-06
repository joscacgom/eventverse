import React from 'react'
import { MOCK_USER } from '@/models/Users/mock'
import { UserTicketList, UserSideBar } from '@/components/UserInfo'
import { MainContainer } from './styles'
const UserTickets = () => {
  return (
    <MainContainer>
        <UserSideBar />
        <UserTicketList userData={MOCK_USER}/>
    </MainContainer>
  )
}

export default UserTickets
