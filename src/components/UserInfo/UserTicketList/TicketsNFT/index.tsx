import React from 'react'
import { useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import { Ticket } from '@/models/Tickets/types'
import { TicketAmount, TicketDate, TicketImage, TicketInfo, TicketItem, TicketMainData, TicketName, TicketPlace, TicketPrice, TicketStatus, TicketTime } from './styles'
import ResellTicketForm from '@/components/ResellTicket/ResellTicketForm'
import handleStatus from '@/utils/Ticket/handleStatus'
import Loading from '@/components/Loading'
import { parseDate } from '@/utils/Event/parseDate'

type TicketWithNFTsProps = {
  ticket: Ticket;
  address: string;
};

interface ColorStatus {
  [key: string]: string;
}

const COLOR_STATUS: ColorStatus = {
  Activo: '#539362',
  Finalizado: '#d65151'
}

const TicketWithNFTs: React.FC<TicketWithNFTsProps> = ({ ticket, address }) => {
  const { contract } = useContract(ticket.contract_address)
  const { data, isLoading } = useOwnedNFTs(contract, address)

  if (data && data.length > 0) {
    return (
      <TicketItem key={ticket.price}>
        <TicketMainData>
          <TicketImage src={ticket.image} />
          <TicketInfo>
            <TicketName>{ticket.name}</TicketName>
            <TicketDate>{parseDate(ticket.start_date)}</TicketDate>
            <TicketPlace>{ticket.description.slice(0, 15) + '...'}</TicketPlace>
            <TicketTime>{}</TicketTime>
          </TicketInfo>
        </TicketMainData>
        <TicketAmount>
          <p>x{data.length}</p>
        </TicketAmount>
        <TicketPrice>
          <p>{ticket.price}€</p>
        </TicketPrice>
        <TicketStatus>
          <p style={{ color: COLOR_STATUS[handleStatus({ ticket })] }}>{handleStatus({ ticket })}</p>
          <ResellTicketForm ticket={ticket} />
        </TicketStatus>
      </TicketItem>
    )
  } else if (isLoading) {
    return <Loading type='main' />
  } else {
    return null
  }
}

export default React.memo(TicketWithNFTs)
