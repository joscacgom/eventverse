import Loading from '@/components/Loading'
import EventCard from './EventCard'
import { Container, EventsList, SearchBar, Subtitle, TableHeader, TableItem, Title } from './styles'
import { getEventsByUser } from '@/hooks/useEventsByUser'
import { getUserCookie } from '@/utils/Login/userCookie'
import Error from '@/components/Error'
import { useCallback, useEffect, useState } from 'react'
import { Event } from '@/models/Events/types'
import { User } from '@/models/Users/types'

const OrganizerEvents = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const renderOrganizerEvents = useCallback(() => {
    if (isLoading) return <Loading type='main' />
    if (error || events === undefined) return <Error />
    if (events.length === 0) return <p>No hay eventos creados 😭</p>

    return events.map(event => <EventCard key={event.id} event={event} />)
  }, [events, error, isLoading])

  useEffect(() => {
    const user = JSON.parse(getUserCookie('userData')) as User
    const fetchUserEvents = async () => {
      setIsLoading(true)
      try {
        const userEvents = await getEventsByUser({ userEmail: user.email })
        setEvents(userEvents)
        setIsLoading(false)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUserEvents()
  }, [])
  return (
    <Container>
      <Title>Bienvenido 🙌</Title>
      <Subtitle>Estos son los eventos que has creado</Subtitle>
      <SearchBar placeholder="🔎 Buscar eventos..." />
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
