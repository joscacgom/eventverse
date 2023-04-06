import React, { useState } from 'react'
import { MainContainer, HeaderSection, InfoHeader, SearchContainer, SearchInput, SearchButton, TicketListContainer, TicketListHeader, TicketList, TicketItem, TicketMainData, TicketImage, TicketInfo, TicketAmount, TicketPrice, TicketStatus, TicketName, TicketPlace, TicketDate, TicketTime } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'
import Image from 'next/image'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props ={
    userData:User,
};
const UserTicketList:FC<Props> = ({ userData }) => {
  return (
    <>
        <HeaderSection>Bienvenido Jorge! 👋 </HeaderSection>
        <MainContainer>
          <InfoHeader>
            Estos son los tickets que has comprado
          </InfoHeader>
          <SearchContainer>
            <FontAwesomeIcon icon={faSearch} size={'2xl'} />
            <SearchInput placeholder='Buscar un ticket...' />
            <SearchButton>
              Buscar
            </SearchButton>
          </SearchContainer>
          <TicketListContainer>
            <TicketListHeader>
              <p>Tickets</p>
              <p>Cantidad</p>
              <p>Precio</p>
              <p>Estado</p>
            </TicketListHeader>
            <TicketList>
              <TicketItem>
                <TicketMainData>
                <TicketImage>

                </TicketImage>
                <TicketInfo>
                  <TicketName>Nombre del evento</TicketName>
                  <TicketDate>Fecha del evento</TicketDate>
                  <TicketPlace>Lugar</TicketPlace>
                  <TicketTime>Hora</TicketTime>
                </TicketInfo>
                </TicketMainData>
                <TicketAmount>
                  <p>1</p>
                </TicketAmount>
                <TicketPrice>
                  <p>115€</p>
                </TicketPrice>
                <TicketStatus>
                  <p>En venta</p>
                </TicketStatus>
              </TicketItem>
            </TicketList>
          </TicketListContainer>
        </MainContainer>
    </>

  )
}

export default UserTicketList
