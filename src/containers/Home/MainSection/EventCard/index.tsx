import React, { FC } from 'react'
import { CardContent, CardImage, CardWrapper, Date, Description, Title } from './styles'
import { Event } from '@/models/Events/types'
import Link from 'next/link'

type Props = {
  event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  const shortDescription = event.summary.slice(0, 45)
  return (
      <Link href={`/event/${event.id}`}>
        <CardWrapper>
          <CardImage src={event.image} />
          <CardContent>
            <Title>{event.name}</Title>
            <Date>{event.start_date.split('T')[0] + ' ' + event.start_date.split('T')[1]}</Date>
            <Description>{shortDescription}...</Description>
            <img src={'/images/avatar-events.png'} alt="avatar-events" width={60} height={20} />
          </CardContent>
        </CardWrapper>
      </Link>
  )
}

export default EventCard
