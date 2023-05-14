import { Layout } from '@/components'
import { ResellTicketDetails } from '@/containers'
import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'

const Ticket = () => {
  return (
    <Layout title={`${MOCK_EVENT_TICKET.name}`}>
      <ResellTicketDetails ticket={MOCK_EVENT_TICKET} />
    </Layout>
  )
}

export default Ticket
