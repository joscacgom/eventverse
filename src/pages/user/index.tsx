import React, { useEffect, useState } from 'react'
import { User as UserDetails } from '@/containers'
import { Layout } from '@/components'
import Error from '@/components/Error'
import { getUserCookie } from '@/utils/Login/userCookie'
import { User as UserType } from '@/models/Users/types'
import Loading from '@/components/Loading'

const User = () => {
  const [userData, setUserData] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = () => {
      const parsedUserData = JSON.parse(getUserCookie('userData'))
      setUserData(parsedUserData)
      setIsLoading(false)
    }

    fetchUserData()
  }, [])

  if (isLoading) {
    return (
      <Layout title={'Cargando...'}>
        <Loading type="main" />
      </Layout>
    )
  }

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
