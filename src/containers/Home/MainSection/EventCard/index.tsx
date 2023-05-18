import React, { FC } from 'react'
import { CardContent, CardImage, CardWrapper, Date, Description, Title } from './styles'
import { Event } from '@/models/Events/types'
import { useRouter } from 'next/router'

type Props = {
  event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  const router = useRouter()
  const handleClickEvent = (id: number) => () => {
    router.push(`/event/${id}`)
  }

  const shortDescription = event.summary.slice(0, 45)
  return (
    <CardWrapper onClick={handleClickEvent(event.id)}>
      <CardImage src={event.image} />
      <CardContent>
        <Title>{event.name}</Title>
        <Date>{event.start_date}</Date>
        <Description>{shortDescription}...</Description>
        <img src={'/images/avatar-events.png'} width={60} height={20} />
      </CardContent>
    </CardWrapper>
  )
}

export default EventCard
