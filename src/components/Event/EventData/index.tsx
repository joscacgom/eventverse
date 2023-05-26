import React, { FC } from 'react'
import { DataContainer, DescriptionContainer, DateContainer, LocationContainer, Name, Description, DateHeader, Date, LocationHeader, Location, GoogleMapPic } from './styles'
import { Event } from '@/models/Events/types'
import { parseDate } from '@/utils/Event/parseDate'

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
                <Date>Desde el {parseDate(event.start_date)}</Date>
                <Date>Hasta el {parseDate(event.end_date)}</Date>
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
