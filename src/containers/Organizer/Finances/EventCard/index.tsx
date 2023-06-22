import type { FC } from 'react'
import { Container, Left, Right, Title } from './styles'
import { EventBalance } from '../types'

type Props = {
  eventBalance: EventBalance
}
const EventCard: FC<Props> = ({ eventBalance }) => {
  return (
    <Container>
      <Left>
        <Title>{eventBalance.eventName}</Title>
      </Left>
      <Right>
        <Title>{eventBalance.totalSales}</Title>
      </Right>
      <Right>
        <Title>{eventBalance.earnings}</Title>
      </Right>
    </Container>
  )
}

export default EventCard
