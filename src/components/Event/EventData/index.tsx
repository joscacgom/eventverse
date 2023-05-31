import React, { FC } from 'react'
import { DataContainer, DescriptionContainer, DateContainer, TypeContainer, TypeHeader, Type, LocationContainer, Name, Description, DateHeader, Date, Wrapper, LocationHeader, Location, GoogleMapPic } from './styles'
import { Event } from '@/models/Events/types'
import { parseDate } from '@/utils/Event/parseDate'
import DateIcon from './DateIcon'
import LocationIcon from './LocationIcon'
import TypeIcon from './TypeIcon'

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
                <Wrapper>
                   <DateIcon />
                   <DateHeader>Hora y Fecha</DateHeader>
                </Wrapper>
                <Date>Desde el { event.start_date && parseDate(event.start_date)} {event.time_zone}</Date>
                <Date>Hasta el { event.end_date && parseDate(event.end_date)} {event.time_zone}</Date>
            </DateContainer>
            <TypeContainer>
                <Wrapper>
                   <TypeIcon />
                   <TypeHeader>Modalidad</TypeHeader>
                </Wrapper>
                <Type>{event.event_type}</Type>

            </TypeContainer>
            <LocationContainer>
                <Wrapper>
                    <LocationIcon />
                    <LocationHeader>Ubicación</LocationHeader>
                </Wrapper>
                <Location>{event.location}</Location>
                <GoogleMapPic src={event.locationImage} />
            </LocationContainer>
        </DataContainer>
  )
}

export default EventData
