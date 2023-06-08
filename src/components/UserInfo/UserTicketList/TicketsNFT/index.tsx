import React, { useState } from 'react'
import { useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import { Ticket } from '@/models/Tickets/types'
import { TicketAction, TicketAmount, TicketDate, TicketImage, TicketInfo, TicketItem, TicketMainData, TicketName, TicketPlace, TicketPrice, TicketStatus, TicketTime } from './styles'
import ResellTicketForm from '@/components/ResellTicket/ResellTicketForm'
import handleStatus from '@/utils/Ticket/handleStatus'
import Loading from '@/components/Loading'
import { parseDate } from '@/utils/Event/parseDate'
import useEventById from '@/hooks/useEventById'
import { useRouter } from 'next/router'

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
  const id = ticket.event_id
  const { data: event, isLoading: eventLoading } = useEventById({ id })
  const router = useRouter()
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const userTicket = { ...ticket, quantity: data?.length || 0 }
  console.log(data)

  const handleEventClick = () => {
    router.push(`/event/${ticket.event_id}`)
  }

  const handleResellClick = () => {
    setShowPopup(true)
  }

  if (data && data.length > 0) {
    return (
      <>
        <TicketItem key={ticket.price}>
          <TicketMainData onClick={handleEventClick}>
            <TicketImage src={ticket.image} />
            <TicketInfo>
              <TicketName>{ticket.name}</TicketName>
              <TicketDate>{parseDate(event?.start_date || '')}</TicketDate>
              <TicketPlace>{event?.location}</TicketPlace>
              <TicketTime></TicketTime>
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
            {handleStatus({ ticket }) === 'Activo' && (
              <TicketAction onClick={handleResellClick}>$</TicketAction>
            )
            }
          </TicketStatus>
        </TicketItem>
        {
          showPopup && (
            <ResellTicketForm ticket={userTicket} setShowPopup={setShowPopup} ownedNFT={data} />
          )
        }
      </>
    )
  } else if (isLoading || eventLoading) {
    return <Loading type='main' />
  } else {
    return null
  }
}

export default React.memo(TicketWithNFTs)
