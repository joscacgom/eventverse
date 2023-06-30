import React, { useEffect, useRef, useState } from 'react'
import HeaderSection from './HeaderSection'
import MainSection from './MainSection'
import { EventCategory } from '@/models/Events/types'
import useEventsWithListedTickets, { ResellEvent } from '@/hooks/useEventsWithListedTickets'

const Home = () => {
  const { resellEvents, isLoading } = useEventsWithListedTickets()
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>(EventCategory.Todos)
  const [filteredEvents, setFilteredEvents] = useState<ResellEvent[]>([])
  const eventsRef = useRef<ResellEvent[]>([])

  useEffect(() => {
    if (resellEvents.length > 0) {
      eventsRef.current = resellEvents
    }
  }, [resellEvents])

  useEffect(() => {
    if (selectedCategory === EventCategory.Todos) {
      setFilteredEvents(eventsRef.current)
    } else {
      const filtered = eventsRef.current.filter(resellEvent => resellEvent.event.category === selectedCategory)
      setFilteredEvents(filtered)
    }
  }, [selectedCategory])

  const handleSelectCategory = (category: EventCategory) => {
    setSelectedCategory(prevCategory => prevCategory === category ? EventCategory.Todos : category)
  }

  return (
    <>
      <HeaderSection onSelectCategory={handleSelectCategory} />
      <MainSection resellEvents={selectedCategory === EventCategory.Todos ? resellEvents : filteredEvents} isLoading={isLoading} />
    </>
  )
}

export default Home
