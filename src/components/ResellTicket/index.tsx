import React, { FC } from 'react'
import { Ticket } from '@/models/Tickets/types'
import ResellTicketNetworkInfo from './ResellTicketNetworkInfo'
import ResellTicketInfo from './ResellTicketInfo'
import { MainContainer } from './styles'

type Props = {
    ticket: Ticket;
}

const ResellTicket:FC<Props> = ({ ticket }) => {
  return (
        <MainContainer>
           <ResellTicketInfo ticket={ticket} />
           <ResellTicketNetworkInfo ticket={ticket} />
        </MainContainer>

  )
}

export default ResellTicket
