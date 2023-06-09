import { Layout } from '@/components'
import { ResellEventListing } from '@/containers/Resell'
import { MOCK_RESELL_TICKETS } from '@/models/Resell/mock'

const ResellEvent = () => {
  return (
    <Layout title={'Sala Cosmos'}>
        <ResellEventListing listing={MOCK_RESELL_TICKETS} />
    </Layout>
  )
}

export default ResellEvent
