import React from 'react'
import { MainContainer, InfoContainer, PrivateKeyButton, HeaderSection } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'
import Image from 'next/image'

type Props ={
    userData:User,
};
const UserMainContent:FC<Props> = ({ userData }) => {
  return (
    <>
        <HeaderSection>Bienvenido Jorge! 👋 </HeaderSection>
        <MainContainer>
            <Image src='/images/user.png' alt='user' width={50} height={50} />
            <InfoContainer>
                <h2>Información de tu cuenta</h2>
                    <p>{userData.name}</p>
                    <p>{userData.email}</p>
                <h2>Información de la cartera</h2>
                    <p>{userData.address}</p>
                    <p>{userData.balance} MATIC</p>
                <PrivateKeyButton>
                    Obtener clave privada
                </PrivateKeyButton>
            </InfoContainer>
        </MainContainer>

    </>

  )
}

export default UserMainContent
