import { Ticket, UserTicket } from './types'

export const MOCK_TICKET_USER: UserTicket = {
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

export const MOCK_EVENT_TICKET: Ticket = {
  id: '1',
  name: 'Medusa Festival',
  image: '/images/tickets/medusa-festival.png',
  price: '0.01',
  amount: 100,
  description: 'Abonos ya a la venta para el Medusa Festival 2023',
  startDate: '22 de Agosto 2023',
  endDate: '23 de Agosto 2023',
  maxPerUser: 100,
  contractAddress: '0x4c59cbe3af1b885267802c8cef2a6e97ff6a23fa',
  organizerRoyalty: 5,
  platformRoyalty: 2.5,
  eventId: '1'
}
