import { Event } from '@/models/Events/types'
import type { FC } from 'react'
import { Container, Card, EventTitle, Info, Image, CardInfo } from './styles'

type Props = {
    event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  return (
        <Container href={`/organizer/event/${event.id}`}>
            <Card>
                <Image src={event.image} width={100} height={100} />
                <CardInfo>
                    <EventTitle>{event.name}</EventTitle>
                    <p>{event.start_date}</p>
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
