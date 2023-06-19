import React from 'react'
import { User as UserDetails } from '@/containers'
import { Layout } from '@/components'
import Error from '@/components/Error'
import { getUserCookie } from '@/utils/Login/userCookie'

const User = () => {
  const userData = getUserCookie('userData')

  if (userData === null) {
    return (
    <Layout title={'Ups...'}>
      <Error />
    </Layout>
    )
  }
  return (
    <Layout title={'Perfil de usuario'}>
      <UserDetails />
    </Layout>

  )
}

export default User
