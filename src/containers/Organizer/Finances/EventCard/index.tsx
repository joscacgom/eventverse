import { Event } from '@/models/Events/types'
import type { FC } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`

export const Title = styled.h3``

export const Right = styled.div`
`

type Props = {
  event: Event
  selected: boolean
  handleUpdateSelectedEvents: (event: Event) => void
}
const EventCard: FC<Props> = ({ event, selected, handleUpdateSelectedEvents }) => {
  return (
    <Container>
      <Left>
        <Checkbox
          type="checkbox"
          checked={selected}
          onChange={() => handleUpdateSelectedEvents(event)}
        />
        <Title>{event.title}</Title>
      </Left>
      <Right>
        <Title>789.003,12€</Title>
      </Right>
    </Container>
  )
}

export default EventCard
