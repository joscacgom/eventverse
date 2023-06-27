import React, { useEffect, useState } from 'react'
import { UserTickets } from '@/containers'
import { Layout } from '@/components'
import Error from '@/components/Error'
import { getUserCookie } from '@/utils/Login/userCookie'
import Loading from '@/components/Loading'
import { User as UserType } from '@/models/Users/types'

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
    <Layout title={'Tus tickets'}>
      <UserTickets />
    </Layout>

  )
}

export default User
