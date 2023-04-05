import React from 'react'
import { User as UserDetails } from '@/containers'
import { Layout } from '@/components'

const User = () => {
  return (
    <Layout title={'Perfil de usuario'}>
      <UserDetails />
    </Layout>

  )
}

export default User
