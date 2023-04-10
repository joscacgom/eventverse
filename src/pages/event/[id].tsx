import { Layout } from '@/components'
import { EventDetails } from '@/containers'
import { MOCK_EVENT } from '@/models/Events/mock'

const Event = () => {
  return (
    <Layout title={`${MOCK_EVENT.title}`}>
      <EventDetails event={MOCK_EVENT} />
    </Layout>
  )
}

export default Event
