import { Event } from '@/models/Events/types'
import type { FC } from 'react'
import { Container, Card, EventTitle, Info, Image } from './styles'
import styled from 'styled-components'

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;

`

type Props = {
    event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  return (
        <Container href={`/event/${event.id}`}>
            <Card>
                <Image src={event.image} width={100} height={100} />
                <CardInfo>
                    <EventTitle>{event.title}</EventTitle>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                </CardInfo>
            </Card>
            <Info>
                <p>33.481 / 50.000</p>
                <p>332</p>
                <p>Activo</p>
            </Info>
        </Container>
  )
}

export default EventCard
