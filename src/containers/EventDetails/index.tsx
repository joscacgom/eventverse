import React, { FC } from 'react'
import { EventBuyOption, EventData } from '@/components/Event'
import { MainContainer, MainImage } from './styles'
import { Event as EventType } from '@/models/Events/types'

type Props = {
    event: EventType
}
const Event: FC<Props> = ({ event }) => {
  return (
    <>
    <MainImage />
    <MainContainer>
        <EventData event={event} />
        <EventBuyOption event={event} />
    </MainContainer>
    </>
  )
}

export default Event
