import React, { useContext } from 'react'
import { UserTickets } from '@/containers'
import { Layout } from '@/components'
import Error from '@/components/Error'
import { getUserCookie } from '@/utils/Login/userCookie'
import Web3AuthContext from '@/context/Web3AuthContext'

const User = () => {
  const userData = getUserCookie('userData') || useContext(Web3AuthContext).userData
  if (userData === null) {
    return (
    <Layout title={'Ups...'}>
      <Error />
    </Layout>
    )
  }

  return (
    <Layout title={'Tus tickets'}>
      <UserTickets />
    </Layout>

  )
}

export default User
