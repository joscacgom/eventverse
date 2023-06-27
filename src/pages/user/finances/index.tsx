import { Layout } from '@/components'
import Loading from '@/components/Loading'
import { UserSideBar } from '@/components/UserInfo'
import OrganizerFinances from '@/containers/Organizer/Finances'
import { getUserCookie } from '@/utils/Login/userCookie'
import { useEffect, useState } from 'react'
import { User as UserType } from '@/models/Users/types'
import Error from '@/components/Error'

const index = () => {
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
    <Layout title={'Tus finanzas'}>
        <UserSideBar />
        <OrganizerFinances />
    </Layout>
  )
}

export default index
