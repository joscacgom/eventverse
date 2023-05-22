import React, { useContext } from 'react'
import { Layout } from '@/components'
import { EventCreation } from '@/containers'
import Error from '@/components/Error'
import { getUserCookie } from '@/utils/Login/userCookie'
import Web3AuthContext from '@/context/Web3AuthContext'

const Event = () => {
  const userData = getUserCookie('userData') || useContext(Web3AuthContext).userData
  if (userData === null) {
    return (
    <Layout title={'Ups...'}>
      <Error />
    </Layout>
    )
  }
  return (
    <Layout title={'Creación de evento'}>
      <EventCreation />
    </Layout>
  )
}

export default Event
