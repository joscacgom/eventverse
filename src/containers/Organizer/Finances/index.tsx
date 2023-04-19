import { MOCK_EVENTS } from '@/models/Events/mock'
import EventCard from './EventCard'
import { Title, Subtitle, Balance, TransferButton, SearchBar, TableHeader, TableItem, EventList } from './styles'
import { useState } from 'react'
import { Event } from '@/models/Events/types'

const MOCK_BALANCE = '227.815,75 €'
const Finances = () => {
  const [selectedEvents, setSelectedEvents] = useState<null | Event[]>(null)

  const handleUpdateSelectedEvents = (event: Event) => {
    if (selectedEvents) {
      const eventIndex = selectedEvents.findIndex((e) => e.id === event.id)
      if (eventIndex !== -1) {
        const updatedEvents = selectedEvents.filter((e) => e.id !== event.id)
        setSelectedEvents(updatedEvents)
      } else {
        setSelectedEvents([...selectedEvents, event])
      }
    } else {
      setSelectedEvents([event])
    }
  }

  const eventIsSelected = (event: Event) => {
    if (selectedEvents) {
      const eventIndex = selectedEvents.findIndex((e) => e.id === event.id)
      return eventIndex !== -1
    }
    return false
  }
  const renderEventList = () => {
    return MOCK_EVENTS.map((event) => {
      const selected = eventIsSelected(event)
      return (
        <EventCard
          key={event.id}
          event={event}
          selected={selected}
          handleUpdateSelectedEvents={handleUpdateSelectedEvents}
        />
      )
    })
  }
  return (
    <>
      <Title>Tus finanzas 🪙</Title>
      <Subtitle>Balance disponible <Balance>{MOCK_BALANCE}</Balance></Subtitle>
      <TransferButton>Transferir saldo</TransferButton>
      <Subtitle bold>Ingresos por evento</Subtitle>
      <SearchBar placeholder="🔎 Buscar evento" />
      <TableHeader>
        <TableItem>Evento</TableItem>
        <TableItem>Total</TableItem>
      </TableHeader>
      <EventList>
        {renderEventList()}
      </EventList>
    </>
  )
}

export default Finances
