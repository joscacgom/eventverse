import { Event } from '@/models/Events/types'
import type { FC } from 'react'
import { Container, Card, EventTitle, Info, Image } from './styles'

type Props = {
    event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  return (
        <Container>
            <Card>
                <Image src={event.image} width={100} height={100} />
                <EventTitle>{event.title}</EventTitle>
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
