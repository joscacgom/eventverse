import { Layout } from '@/components'
import { UserSideBar } from '@/components/UserInfo'
import OrganizerEvents from '@/containers/Organizer/Events'
import React from 'react'

const index = () => {
  return (
    <Layout title={'Tus tickets'}>
        <UserSideBar />
        <OrganizerEvents />
    </Layout>
  )
}

export default index
