import React, { FC } from 'react'
import { CardContent, CardImage, CardWrapper, Description, Title } from './styles'
import { useRouter } from 'next/router'
import { ResellEvent } from '@/hooks/useEventsWithListedTickets'

type Props = {
  resellEvent: ResellEvent
}
const EventCard: FC<Props> = ({ resellEvent }) => {
  const router = useRouter()

  const handleClickEvent = (id: number) => () => {
    const collectionAddr = resellEvent.contractAddress
    router.push(`/resell/event/${collectionAddr}`)
  }

  const shortDescription = resellEvent.event.description.substring(0, 40) + '...'
  const ticketId = Number(resellEvent.event.id)

  return (
    <CardWrapper data-testid="event-card" onClick={handleClickEvent(ticketId)}>
      <CardImage src={resellEvent.event.image} alt="ticket image" />
      <CardContent>
        <Title>{resellEvent.event.name}</Title>
        <Description>{shortDescription}</Description>
        <img src={'/images/avatar-events.png'} width={60} height={20} />
      </CardContent>
    </CardWrapper>
  )
}

export default EventCard
