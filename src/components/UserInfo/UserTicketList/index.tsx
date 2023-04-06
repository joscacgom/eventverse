import React, { useState } from 'react'
import { MainContainer, HeaderSection, InfoHeader, SearchContainer, SearchInput, SearchButton, TicketListContainer, TicketListHeader, TicketList, TicketItem, TicketMainData, TicketImage, TicketInfo, TicketAmount, TicketPrice, TicketStatus, TicketName, TicketPlace, TicketDate, TicketTime } from './styles'
import type { FC } from 'react'
import { User } from '@/models/Users/types'
import Image from 'next/image'

type Props ={
    userData:User,
};

interface ColorStatus {
  [key: string]: string;
}

const COLOR_STATUS: ColorStatus = {
  Activo: '#539362',
  Finalizado: '#d65151'
}
const UserTicketList:FC<Props> = ({ userData }) => {
  return (
    <>
        <HeaderSection>Bienvenido Jorge! 👋 </HeaderSection>
        <MainContainer>
          <InfoHeader>
            Estos son los tickets que has comprado
          </InfoHeader>
          <SearchContainer>
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
              {userData.tickets.map((ticket) => (
                 <TicketItem key={ticket.name}>
                <TicketMainData>
                <TicketImage src={ticket.imagEvent}/>
                <TicketInfo>
                  <TicketName>{ticket.name}</TicketName>
                  <TicketDate>{ticket.date}</TicketDate>
                  <TicketPlace>{ticket.place}</TicketPlace>
                  <TicketTime>{ticket.time}</TicketTime>
                </TicketInfo>
                </TicketMainData>
                <TicketAmount>
                  <p>x{ticket.quantity}</p>
                </TicketAmount>
                <TicketPrice>
                  <p>{ticket.price}</p>
                </TicketPrice>
                <TicketStatus>
                <p style={{ color: COLOR_STATUS[ticket.status] }}>{ticket.status}</p>
                </TicketStatus>
              </TicketItem>
              ))}

            </TicketList>
          </TicketListContainer>
        </MainContainer>
    </>

  )
}

export default UserTicketList
