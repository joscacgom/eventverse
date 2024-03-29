import React, { useEffect, useState } from 'react'
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
  const [eurPrice, setEurPrice] = useState(0)

  const handleEventClick = () => {
    router.push(`/event/${ticket.event_id}`)
  }

  const handleResellClick = () => {
    setShowPopup(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/crypto')
        if (!response.ok) {
          throw new Error('Failed to fetch data from the Crypto conversor API')
        }
        const data = await response.json()
        const eurBalance = (Number(ticket.price) * data).toFixed(2)
        setEurPrice(Number(eurBalance))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

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
            <p>{eurPrice}€</p>
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
            <ResellTicketForm ticket={userTicket} eurPrice={eurPrice} setShowPopup={setShowPopup} ownedNFT={data} />
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
