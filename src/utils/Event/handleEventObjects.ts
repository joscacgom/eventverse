import { EventTableSupabase, EventTicketPreview } from '@/models/Events/types'
import { TicketTableSupabase } from '@/models/Tickets/types'

type FormData = {
  [part: string]: any;
};

export const handleEventObjects = (event:FormData, ticket: FormData) => {
  const eventPreview: EventTicketPreview = {
    id: 'pending',
    title: event.eventName,
    date: event.startDate,
    endDate: event.endDate,
    description: event.eventDescription,
    image: event.image,
    location: event.location,
    ticketTitle: ticket.ticketName,
    ticketAmount: ticket.ticketAmount,
    ticketPrice: ticket.ticketPrice,
    ticketImage: ticket.image
  }
  const eventToSubmit: EventTableSupabase = {
    name: event.eventName,
    summary: event.eventSummary,
    description: event.eventDescription,
    image: event.image,
    tags: 'none',
    location: event.location,
    start_date: event.startDate,
    end_date: event.endDate,
    time_zone: event.timezone,
    country: event.country,
    event_type: event.eventType,
    category: event.eventCategory,
    pricing_plan: 'free'

  }

  const ticketToSubmit: TicketTableSupabase = {
    name: ticket.ticketName,
    description: ticket.ticketDescription,
    image: ticket.image.name,
    start_date: ticket.startDate,
    end_date: ticket.endDate,
    price: ticket.ticketPrice,
    quantity: ticket.ticketAmount,
    max_per_user: ticket.ticketLimit,
    organizer_royalty: ticket.ticketRoyalties,
    contract_address: '0x0000000000',
    platform_address: '0x0000000000',
    platform_royalty: 5
  }

  return { eventPreview, eventToSubmit, ticketToSubmit }
}
