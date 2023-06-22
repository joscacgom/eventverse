import EventCard from './EventCard'
import { Container, Title, Subtitle, TransferButton, SearchBar, TableHeader, TableItem, EventList } from './styles'
import useConnect from './useConnect'

const OrganizerFinances = () => {
  const { eventBalances } = useConnect()

  const renderEventList = () => eventBalances.map(
    (eventBalance) => (
      <EventCard
        key={eventBalance.eventId}
        eventBalance={eventBalance}
      />
    )
  )
  return (
    <Container>
      <Title>Tus finanzas</Title>
      <TransferButton>Transferir saldo</TransferButton>
      <Subtitle bold>Ingresos por evento</Subtitle>
      <SearchBar placeholder="🔎 Buscar evento" />
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
