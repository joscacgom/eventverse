import React from 'react'
import { UserMainContent, UserSideBar } from '@/components/UserInfo'
import { MainContainer } from './styles'
import { getUserCookie } from '@/utils/Login/userCookie'
const User = () => {
  const userData = getUserCookie('userData')
  return (
    <MainContainer>
      <UserSideBar />
      <UserMainContent userData={JSON.parse(userData)}/>
    </MainContainer>
  )
}

export default User
