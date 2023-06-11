import Loading from '@/components/Loading'
import EventCard from './EventCard'
import { Container, EventsList, SearchBar, Subtitle, TableHeader, TableItem, Title } from './styles'
import useEventsByUser from '@/hooks/useEventsByUser'
import { getUserCookie } from '@/utils/Login/userCookie'
import Error from '@/components/Error'

const OrganizerEvents = () => {
  const userCookie = getUserCookie('userData')
  const { events, error, isLoading } = useEventsByUser({ userEmail: userCookie?.email })

  const renderOrganizerEvents = () => {
    if (events === undefined || error) return <Error />
    if (isLoading) return <Loading type='main' />
    if (events.length === 0) return <div>Aún no tienes eventos creados</div>

    return events.map(event => <EventCard key={event.id} event={event} />)
  }

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
