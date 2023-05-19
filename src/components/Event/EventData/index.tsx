import React, { FC } from 'react'
import { DataContainer, DescriptionContainer, DateContainer, LocationContainer, Name, Description, DateHeader, Date, LocationHeader, Location, GoogleMapPic } from './styles'
import { Event } from '@/models/Events/types'

type Props = {
    event: Event;
};

const EventData: FC<Props> = ({ event }) => {
  return (
        <DataContainer>
            <DescriptionContainer>
                <Name>{event.name}</Name>
                <Description>{event.description}</Description>
            </DescriptionContainer>
            <DateContainer>
                <DateHeader>Hora y Fecha</DateHeader>
                <Date>{event.start_date}</Date>
            </DateContainer>
            <LocationContainer>
                <LocationHeader>Ubicación</LocationHeader>
                <Location>{event.location}</Location>
                <GoogleMapPic src={'/images/google-maps.png'} />
            </LocationContainer>
        </DataContainer>
  )
}

export default EventData
