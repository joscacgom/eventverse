
import React from 'react'
import UserSideBar from './UserSideBar'
import UserMainContent from './UserMainContent'
import type { FC } from 'react'
import type { User as UserType } from '@/models/Users/types'

type Props ={
    userData:UserType,
};
const UserInfo: FC<Props> = ({ userData }) => {
  return (
    <>
      <UserSideBar />
      <UserMainContent userData={userData} />
    </>
  )
}

export default UserInfo
