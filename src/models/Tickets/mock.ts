import { UserTicket } from './types'

export const MOCK_TICKET: UserTicket = {
  name: 'Medusa Festival',
  date: '2021-01-01',
  place: 'Playa de Cullera, Valencia',
  time: '16:00',
  quantity: 1,
  price: 90,
  status: 'Activo',
  imagEvent: '/images/tickets/medusa-festival.png'

}

export const MOCK_TICKETS: UserTicket[] = [
  {
    name: 'Medusa Festival',
    date: '2021-01-01',
    place: 'Playa de Cullera, Valencia',
    time: '16:00',
    quantity: 1,
    price: 90,
    status: 'Activo',
    imagEvent: '/images/tickets/medusa-festival.png'
  },

  {
    name: 'Rock in Rio',
    date: '2023-06-01',
    place: 'Playa de Cullera, Valencia',
    time: '16:00',
    quantity: 1,
    price: 115,
    status: 'Finalizado',
    imagEvent: '/images/tickets/medusa-festival.png'

  }
]
