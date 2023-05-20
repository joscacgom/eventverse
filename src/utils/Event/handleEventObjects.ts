import { EventTableSupabase, EventTicketPreview } from '@/models/Events/types'
import { TicketTableSupabase } from '@/models/Tickets/types'

type FormData = {
  [part: string]: any;
};

export const handleEventObjects = (event:FormData, ticket: FormData) => {
  const eventPreview: EventTicketPreview = {
    title: event.eventName,
    date: event.startDate,
    endDate: event.endDate,
    description: event.eventDescription,
    image: event.image,
    location: event.location,
    locationImage: event.locationImage,
    ticketTitle: ticket.ticketName,
    ticketAmount: ticket.ticketAmount,
    ticketPrice: ticket.ticketPrice,
    ticketImage: ticket.image,
    locationFormattedAddress: event.locationFormattedAddress
  }
  const eventToSubmit: EventTableSupabase = {
    name: event.eventName,
    summary: event.eventSummary,
    description: event.eventDescription,
    image: event.image,
    tags: 'none',
    location: event.locationFormattedAddress,
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
    image: ticket.image,
    start_date: ticket.startDate,
    end_date: ticket.endDate,
    price: ticket.ticketPrice,
    quantity: ticket.ticketAmount,
    max_per_user: ticket.ticketLimit,
    organizer_royalty: ticket.ticketRoyalties,
    platform_address: '0xEC504299EEd0774293BE523c52a8FB2B2F2ABb13',
    platform_royalty: 5
  }

  return { eventPreview, eventToSubmit, ticketToSubmit }
}
