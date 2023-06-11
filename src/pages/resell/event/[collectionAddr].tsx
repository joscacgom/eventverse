import { Layout } from '@/components'
import Loading from '@/components/Loading'
import { ResellEventListing } from '@/containers/Resell'
import useListedTicketsByCollection from '@/hooks/useListedTicketsByCollection'
import { useRouter } from 'next/router'

const ResellEvent = () => {
  const router = useRouter()
  const { collectionAddr: collection } = router.query
  const { resellTickets, isLoading } = useListedTicketsByCollection({ collectionAddr: collection as string })

  return (
    <Layout title={'Tickets en reventa'}>
      {
        isLoading ? <Loading type='button' /> : <ResellEventListing listing={resellTickets} />
      }
    </Layout>
  )
}

export default ResellEvent
