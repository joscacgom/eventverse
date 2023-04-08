import { Ticket } from './types'
import { MOCK_EVENT } from '@/models/Events/mock'

export const MOCK_TICKET: Ticket = {
  id: '1',
  name: 'Medusa Festival',
  price: 100,
  amount: 100,
  description: 'Abonos ya a la venta para el Medusa Festival 2023',
  startDate: '22 de Agosto 2023',
  endDate: '23 de Agosto 2023',
  maxPerUser: 100,
  contractAddress: '0x4c59cbe3af1b885267802c8cef2a6e97ff6a23fa',
  organizerRoyalty: 5,
  platformRoyalty: 2.5,
  event: MOCK_EVENT
}
