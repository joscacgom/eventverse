import { Layout } from '@/components'
import Loading from '@/components/Loading'
import { EventDetails } from '@/containers'
import useEventById from '@/hooks/useEventById'
import { useRouter } from 'next/router'
import Error from '@/components/Error'
import NotFound from '@/components/NotFound'

const Event = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: event, error, isLoading } = useEventById({ id: parseInt(id as string) })

  if (isLoading) {
    return <Loading type='main' />
  }

  if (error) {
    return <Error />
  }

  if (!event) {
    return <NotFound />
  }
  return (
    <Layout title={event.name}>
      <EventDetails event={event} />
    </Layout>
  )
}

export default Event
