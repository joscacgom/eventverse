import React, { FC } from 'react'
import { CardContent, CardImage, CardWrapper, Date, Description, Title } from './styles'
import { Event } from '@/models/Events/types'

type Props = {
  event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  return (
    <CardWrapper>
      <CardImage src={event.image} />
      <CardContent>
        <Title>{event.title}</Title>
        <Date>{event.date}</Date>
        <Description>{event.description}</Description>
        <img src={'/images/avatar-events.png'} width={60} height={20} />
      </CardContent>
    </CardWrapper>
  )
}

export default EventCard
