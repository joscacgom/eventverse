import React from 'react'
import { Container, EventList, Title, Header } from './styles'
import EventCard from './EventCard'

const MainSection = () => {
  return (
    <Container>
      <Header>
        <Title>Novedades</Title>
      </Header>
      <EventList>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </EventList>
    </Container>
  )
}

export default MainSection
