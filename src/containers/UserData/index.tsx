import React, { useContext } from 'react'
import { UserMainContent, UserSideBar } from '@/components/UserInfo'
import { MainContainer } from './styles'
import Web3AuthContext from '@/context/Web3AuthContext'
import { getUserCookie } from '@/utils/Login/userCookie'

const User = () => {
  const userData = getUserCookie() || useContext(Web3AuthContext).userData
  if (userData === null) {
    return <div>Loading...</div> // Replace this with the alternate component
  }

  return (
    <MainContainer>
      <UserSideBar />
      <UserMainContent userData={JSON.parse(userData)}/>
    </MainContainer>
  )
}

export default User
