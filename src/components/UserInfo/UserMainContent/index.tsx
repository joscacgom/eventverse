import React, { useEffect, useState } from 'react'
import { MainContainer, InfoContainer, PrivateKeyButton, HeaderSection, PrivateKeyContainer, WarningContainer, InfoMainContainer } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'
import Image from 'next/image'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props ={
    userData:User,
};
const UserMainContent:FC<Props> = ({ userData }) => {
  const [privateKey, setPrivateKey] = useState<boolean>(false)
  const [eurBalance, setEurBalance] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/crypto')
        if (!response.ok) {
          throw new Error('Failed to fetch data from the Crypto conversor API')
        }
        const data = await response.json()
        const eurBalance = (Number(userData.balance) * data).toFixed(2)
        setEurBalance(Number(eurBalance))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handlePrivateKey = () => {
    setPrivateKey(!privateKey)
  }
  return (
    <>
        <HeaderSection>Bienvenido {userData.name.split(' ')[0]}! 👋 </HeaderSection>
        <MainContainer>
            <InfoMainContainer>
                <Image src={userData.profileImage} alt='user' width={150} height={150} />
                <InfoContainer>
                    <h2>Información de tu cuenta</h2>
                        <p>{userData.name}</p>
                        <p>{userData.email}</p>
                    <h2>Información de la cartera</h2>
                        <p>{userData.address}</p>
                        <p>{eurBalance}€<small> {userData.balance} ~ MATIC </small></p>
                    <PrivateKeyButton onClick={handlePrivateKey}>
                        Obtener clave privada
                    </PrivateKeyButton>
                </InfoContainer>
            </InfoMainContainer>

             {privateKey &&
                <PrivateKeyContainer>
                    <WarningContainer>
                         <FontAwesomeIcon icon={faExclamationTriangle} size={'2xl'} />
                          <p>¡No compartas tu clave privada con nadie!</p>
                    </WarningContainer>
                    <br />
                    <small>{userData.privateKey}</small>
                    <button onClick={handlePrivateKey}>Cerrar</button>
                </PrivateKeyContainer>
                }

        </MainContainer>

    </>

  )
}

export default UserMainContent
