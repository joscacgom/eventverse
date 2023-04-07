import React, { FC } from 'react'
import { Event } from '@/models/Events/types'
import { EventDataContainer, EventNameDescriptionContainer, EventDateContainer, EventLocationContainer, EventName, EventDescription, EventDateHeader, EventDate, EventLocationHeader, EventLocation, EventGoogleMapPic } from './styles'
type Props = {
    event: Event;
};

const EventData: FC<Props> = ({ event }) => {
  return (
        <EventDataContainer>
            <EventNameDescriptionContainer>
                <EventName>{event.title}</EventName>
                <EventDescription>{event.description}</EventDescription>
            </EventNameDescriptionContainer>
            <EventDateContainer>
                <EventDateHeader>Hora y Fecha</EventDateHeader>
                <EventDate>{event.date}</EventDate>
            </EventDateContainer>
            <EventLocationContainer>
                <EventLocationHeader>Ubicación</EventLocationHeader>
                <EventLocation>{event.location}</EventLocation>
                <EventGoogleMapPic />
            </EventLocationContainer>
        </EventDataContainer>
  )
}

export default EventData
