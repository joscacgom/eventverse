import React, { FC } from 'react'
import { Container, Text, Image, Name } from './styles'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import NotFound from '@/components/NotFound'
import useOrganizerById from '@/hooks/useOrganizerById'

type Props = {
    id : number;
}

const EventOrganizer:FC<Props> = ({ id }) => {
  const { data, error, isLoading } = useOrganizerById({ id })

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  if (!data) {
    return <NotFound />
  }

  return (
    <Container>
     <Text>Organizado por</Text>
      <Image src={data.image === null ? '/images/avatar.jpg' : data.image} alt='Organizer image' />
      <Name>{data.name}</Name>
    </Container>
  )
}

export default EventOrganizer
