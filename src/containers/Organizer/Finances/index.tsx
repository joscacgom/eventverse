import EventCard from './EventCard'
import { Container, Title, Subtitle, SearchBar, TableHeader, TableItem, EventList } from './styles'
import useConnect from './useConnect'

const OrganizerFinances = () => {
  const { eventBalances } = useConnect()
  const renderEventList = () => {
    if (eventBalances.length === 0) {
      return <p>No hay eventos creados 😭</p>
    }

    return eventBalances.map((eventBalance) => (
    <EventCard key={eventBalance.eventId} eventBalance={eventBalance} />
    ))
  }

  return (
    <Container>
      <Title>Tus finanzas💸</Title>
      <Subtitle bold >Ingresos por evento</Subtitle>
      <SearchBar placeholder="🔎 Buscar eventos..." />
      <TableHeader>
        <TableItem>Evento</TableItem>
        <TableItem>Ventas</TableItem>
        <TableItem>Ganancias</TableItem>
      </TableHeader>
      <EventList>
        {renderEventList()}
      </EventList>
    </Container>
  )
}

export default OrganizerFinances
