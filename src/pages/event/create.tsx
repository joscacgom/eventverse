import React from 'react'
import { Layout } from '@/components'
import { EventCreation } from '@/containers'
import Error from '@/components/Error'
import { getUserCookie } from '@/utils/Login/userCookie'

const Event = () => {
  const userData = getUserCookie('userData')
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
