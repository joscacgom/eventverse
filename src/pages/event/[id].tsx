import { Layout } from '@/components'
import Loading from '@/components/Loading'
import { EventDetails } from '@/containers'
import useEventById from '@/hooks/useEventById'
import { useRouter } from 'next/router'
import Error from '@/components/Error'
import NotFound from '@/components/NotFound'
import useTicketsByEvent from '@/hooks/useTicketsByEvent'

const Event = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: event, error, isLoading } = useEventById({ id: parseInt(id as string) })
  const { ticket, error: ticketError, isLoading: loadingTicket } = useTicketsByEvent({ event_id: parseInt(id as string) })

  if (isLoading || loadingTicket) {
    return <Loading type='main' />
  }

  if (error || ticketError) {
    return <Error />
  }

  if (!event || !ticket) {
    return <NotFound />
  }
  return (
    <Layout title={event.name}>
      <EventDetails event={event} ticket={ticket} />
    </Layout>
  )
}

export default Event
