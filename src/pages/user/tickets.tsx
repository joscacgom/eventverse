import React from 'react'
import { UserTickets } from '@/containers'
import { Layout } from '@/components'

const User = () => {
  return (
    <Layout title={'Tus tickets'}>
      <UserTickets />
    </Layout>

  )
}

export default User
