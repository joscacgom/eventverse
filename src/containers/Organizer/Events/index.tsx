import EventCard from './EventCard'
import { MOCK_EVENTS } from '@/models/Events/mock'
import { Container, EventsList, SearchBar, Subtitle, TableHeader, TableItem, Title } from './styles'

const OrganizerEvents = () => {
  const renderOrganizerEvents = () => MOCK_EVENTS.map(
    (event) => <EventCard key={event.id} event={event} />
  )

  return (
    <Container>
      <Title>Bienvenido! 🙌</Title>
      <Subtitle>Estos son los eventos que has creado</Subtitle>
      <SearchBar placeholder="🔎 Buscar evento" />
      <TableHeader>
        <TableItem>Evento</TableItem>
        <TableItem>Venta Directa</TableItem>
        <TableItem>Reventas</TableItem>
        <TableItem>Estado</TableItem>
      </TableHeader>
      <EventsList>
        {renderOrganizerEvents()}
      </EventsList>
    </Container>
  )
}

export default OrganizerEvents
