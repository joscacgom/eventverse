import React, { FC } from 'react'
import { EventBuyOption, EventData, EventOrganizer } from '@/components/Event'
import { MainContainer, MainImage, Wrapper } from './styles'
import { Event as EventType } from '@/models/Events/types'
import { Ticket } from '@/models/Tickets/types'

type Props = {
    event: EventType
    ticket: Ticket
}
const Event: FC<Props> = ({ event, ticket }) => {
  return (
    <>
    <MainImage src={event.image} />
    <MainContainer>
        <EventData event={event} />
        <Wrapper>
          <EventOrganizer id={event.organizer_id} />
          <EventBuyOption event={event} ticket={ticket} />
        </Wrapper>
    </MainContainer>
    </>
  )
}

export default Event
