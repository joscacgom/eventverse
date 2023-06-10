import React, { FC } from 'react'
import { CardContent, CardImage, CardWrapper, Description, Title } from './styles'
import { useRouter } from 'next/router'
import { TicketListingItem } from '@/models/Resell/types'

type Props = {
  ticketEvent: TicketListingItem
}
const EventCard: FC<Props> = ({ ticketEvent }) => {
  const router = useRouter()

  const handleClickEvent = (id: number) => () => {
    const collectionAddr = ticketEvent.assetContractAddress
    router.push(`/resell/event/${collectionAddr}`)
  }

  const shortDescription = ticketEvent.asset.description.substring(0, 40) + '...'
  const ticketId = Number(ticketEvent.asset.id)

  return (
    <CardWrapper onClick={handleClickEvent(ticketId)}>
      <CardImage src={ticketEvent.asset.image} />
      <CardContent>
        <Title>{ticketEvent.asset.name}</Title>
        <Description>{shortDescription}</Description>
        <img src={'/images/avatar-events.png'} width={60} height={20} />
      </CardContent>
    </CardWrapper>
  )
}

export default EventCard
