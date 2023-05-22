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
  id: 15,
  created_at: '2023-05-18T15:00:45.633958+00:00',
  event_id: 36,
  name: 'Ticket - Apolo Techno Festival',
  quantity: 1652,
  price: 0.02,
  description: 'This ticket gives you access to the Apolo Techno Festival in Seville, Spain.',
  start_date: '22-08-2023 16:00',
  end_date: '23-08-2023 03:00',
  max_per_user: 2,
  contract_address: '0x1dd488Aa32731bED13A54581d78061AAeBdA4d91',
  platform_address: '0x8dC9a644B511AbF608af7f4Cf28E567AB9154897',
  organizer_royalty: 5,
  platform_royalty: 5,
  image: 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg'
}
