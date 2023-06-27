import React, { useEffect, useState } from 'react'
import { Layout } from '@/components'
import { EventCreation } from '@/containers'
import Error from '@/components/Error'
import { getUserCookie } from '@/utils/Login/userCookie'
import Loading from '@/components/Loading'
import { User as UserType } from '@/models/Users/types'

const Event = () => {
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
    <Layout title={'Creación de evento'}>
      <EventCreation />
    </Layout>
  )
}

export default Event
