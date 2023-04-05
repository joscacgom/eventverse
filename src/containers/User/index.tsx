import React from 'react'
import { UserInfo } from '@/components'
import { MOCK_USER } from '@/models/Users/mock'
import { MainContainer } from './styles'
const User = () => {
  return (
    <MainContainer>
        <UserInfo userData={MOCK_USER}/>
    </MainContainer>
  )
}

export default User
