import { Ticket } from "../Tickets/types";

export type Event = {
    id: number;
    organizer_id: number;
    name: string;
    description: string;
    summary: string;
    category: string;
    country: string;
    created_at: string;
    start_date: string;
    end_date: string;
    event_type: string;
    image: string;
    location: string;
    tags: string;
    time_zone: string;
    ticket?: Ticket
    pricing_plan?: string;
};

export type EventTicketPreview = Event & {
    ticketTitle: string;
    ticketAmount: number;
    ticketPrice: number;
    ticketImage: string;
    locationImage: string;
    locationFormattedAddress: string;
}
export type EventTableSupabase = {
    name: string
    summary: string
    description: string
    image: any
    tags: string
    location: string
    start_date: string
    end_date: string
    time_zone: string
    country: string
    event_type: string
    category: string
    pricing_plan: string
}

export const normalizeEvent = (event: any): Event => {
  return {
    id: event.id,
    organizer_id: event.organizer_id,
    name: event.name,
    description: event.description,
    image: event.image,
    start_date: event.start_date,
    end_date: event.end_date,
    created_at: event.created_at,
    category: event.category,
    country: event.country,
    event_type: event.event_type,
    location: event.location,
    pricing_plan: event.pricing_plan,
    summary: event.summary,
    tags: event.tags,
    time_zone: event.time_zone
  }
}
