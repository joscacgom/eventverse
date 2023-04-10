import { Layout } from '@/components'
import { ResellTicketDetails } from '@/containers'
import { MOCK_TICKET } from '@/models/Tickets/mock'

const Ticket = () => {
  return (
    <Layout title={`${MOCK_TICKET.name}`}>
      <ResellTicketDetails ticket={MOCK_TICKET} />
    </Layout>
  )
}

export default Ticket
