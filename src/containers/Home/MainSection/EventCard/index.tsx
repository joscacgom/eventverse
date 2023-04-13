import React, { FC } from 'react'
import { CardContent, CardImage, CardWrapper, Date, Description, Title } from './styles'
import { Event } from '@/models/Events/types'
import { useRouter } from 'next/router'

type Props = {
  event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  const router = useRouter()
  const handleClickEvent = (id: string) => () => {
    router.push(`/event/${id}`)
  }
  return (
    <CardWrapper onClick={handleClickEvent(event.id)}>
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
