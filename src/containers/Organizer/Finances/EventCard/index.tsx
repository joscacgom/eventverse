import { Event } from '@/models/Events/types'
import type { FC } from 'react'
import { Container, Left, Checkbox, Right, Title } from './styles'

const MOCK_AMOUNT = '1.239.003,12€'

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
        <Title>{MOCK_AMOUNT}</Title>
      </Right>
    </Container>
  )
}

export default EventCard
