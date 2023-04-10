import React from 'react'
import { MOCK_USER } from '@/models/Users/mock'
import { UserMainContent, UserSideBar } from '@/components/UserInfo'
import { MainContainer } from './styles'
const User = () => {
  return (
    <MainContainer>
        <UserSideBar />
        <UserMainContent userData={MOCK_USER}/>
    </MainContainer>
  )
}

export default User
