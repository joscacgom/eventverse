import { Event } from '@/models/Events/types'
import type { FC } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
border: 1px solid #E5E5E5;
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 40%;
`
export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
`

export const Image = styled.img``

type Props = {
    event: Event
}
const EventCard: FC<Props> = ({ event }) => {
  return (
        <Container>
            <Card>
                <div>
                    <p>{event.title}</p>
                </div>
            </Card>
            <Info>
                <p>33.481 / 50.000</p>
                <p>332</p>
                <p>Activo</p>
            </Info>
        </Container>
  )
}

export default EventCard
