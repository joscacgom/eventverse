import { Layout } from '@/components'
import { EventDetails } from '@/containers'
import useEventById from '@/hooks/useEventById'
import { useRouter } from 'next/router'

const Event = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: event, error, isLoading } = useEventById({ id: parseInt(id as string) })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  if (!event) {
    return <div>Not found</div>
  }

  return (
    <Layout title={event.name}>
      <EventDetails event={event} />
    </Layout>
  )
}

export default Event
