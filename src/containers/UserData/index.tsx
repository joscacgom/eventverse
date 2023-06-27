import React, { useEffect, useState } from 'react'
import { UserMainContent, UserSideBar } from '@/components/UserInfo'
import { MainContainer } from './styles'
import { getUserCookie } from '@/utils/Login/userCookie'
import { User as UserType } from '@/models/Users/types'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { Layout } from '@/components'

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

  if (!userData) {
    return <Error/>
  }

  return (
    <MainContainer>
      <UserSideBar />
      <UserMainContent userData={userData} />
    </MainContainer>
  )
}

export default User
