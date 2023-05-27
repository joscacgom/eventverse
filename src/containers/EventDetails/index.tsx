import React, { FC } from 'react'
import { EventBuyOption, EventData, EventOrganizer } from '@/components/Event'
import { MainContainer, MainImage, Wrapper } from './styles'
import { Event as EventType } from '@/models/Events/types'

type Props = {
    event: EventType
}
const Event: FC<Props> = ({ event }) => {
  return (
    <>
    <MainImage src={event.image} />
    <MainContainer>
        <EventData event={event} />
        <Wrapper>
          <EventOrganizer id={event.organizer_id} />
          <EventBuyOption event={event} />
        </Wrapper>
    </MainContainer>
    </>
  )
}

export default Event
