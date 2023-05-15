import { Ticket } from '../Tickets/types'

export type Event = {
    id?: string;
    title: string;
    date: string;
    endDate: string;
    description: string;
    image: string;
    location: string;
    ticket?: Ticket
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
