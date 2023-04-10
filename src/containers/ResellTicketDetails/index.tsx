import { ResellTicket } from '@/components'
import { Ticket } from '@/models/Tickets/types'
import React, { FC } from 'react'
import { MainImage, MainImageText } from './styles'

type Props = {
    ticket: Ticket;
}

const Home:FC<Props> = ({ ticket }) => {
  return (
    <>
      <MainImage src={'/images/events/medusa-fest-wallpaper.jpg'} />
      <MainImageText> Detalles </MainImageText>
      <ResellTicket ticket={ticket} />
    </>
  )
}

export default Home
