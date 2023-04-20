import { Layout } from '@/components'
import React, { useEffect, useState } from 'react'
import { MOCK_EVENTS } from '@/models/Events/mock'
import OrganizerEventDetails from '@/containers/Organizer/Events/EventDetails'
import { useRouter } from 'next/router'
import { Event } from '@/models/Events/types'

const EventDetails = () => {
  const [event, setEvent] = useState<null | Event>(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      const event = MOCK_EVENTS.find((event) => event.id === id)
      if (!event) {
        router.push('/organizer/events')
      } else {
        setEvent(event)
      }
    }
  }, [id])

  if (!event) return null

  return (
    <Layout title={`${event.title}`}>
        <OrganizerEventDetails event={event} />
    </Layout>
  )
}

export default EventDetails
