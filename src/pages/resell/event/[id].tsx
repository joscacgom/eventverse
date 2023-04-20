import { Layout } from '@/components'
import { ResellEventListing } from '@/containers/Resell'
import { MOCK_EVENT_RESELL_LISTING } from '@/models/Resell/mock'

const ResellEvent = () => {
//   const router = useRouter()
//   const { id } = router.query // TODO: use id to fetch event listing
  const listing = MOCK_EVENT_RESELL_LISTING
  return (
    <Layout title={'Sala Cosmos'}>
        <ResellEventListing listing={listing} />
    </Layout>
  )
}

export default ResellEvent
