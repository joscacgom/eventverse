import type { FC } from 'react'
import { Event } from '@/models/Events/types'
import { Container, BackButton, Earnings, Info, Sells, Span, Subtitle, Title, Text, Image } from './styles'
import router from 'next/router'

type Props = {
    event: Event
}
const EventDetails: FC<Props> = ({ event }) => {
  return (
        <Container>
            <Image src={'/images/events/medusa-fest-wallpaper.jpg'} />
            <BackButton onClick={() => router.back()}>Volver</BackButton>
            <Title>{event.title}</Title>
            <Info>
                <Subtitle>Ventas</Subtitle>
                <Sells>
                    <Text>Directa <Span>42.100 / 50.000</Span></Text>
                    <Text>Reventas <Span>3.732</Span></Text>
                </Sells>
                <Subtitle>Ingresos</Subtitle>
                <Earnings>
                    <Text>Directos <Span>42.100 / 50.000</Span></Text>
                    <Text>Reventas <Span>3.732</Span></Text>
                </Earnings>
            </Info>
            <Subtitle>Total <Span>4.278.980,80€</Span></Subtitle>
        </Container>
  )
}

export default EventDetails
