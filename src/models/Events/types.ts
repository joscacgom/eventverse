import { Ticket } from '../Tickets/types'

export type Event = {
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    location: string;
    ticket: Ticket
};
