export type UserTicket = {
    name: string;
    date: string;
    place: string;
    time: string;
    quantity: number;
    price: number;
    status: string;
    imagEvent: string;
}
export type Ticket = {
    id: number;
    event_id: number;
    name: string;
    contract_address: string;
    created_at: string;
    description: string;
    end_date: string;
    image: string;
    max_per_user: number;
    organizer_royalty: number;
    platform_address: string;
    platform_royalty: number;
    price: number;
    quantity: number;
    start_date: string;
}

export const normalizeTicket = (ticket: any): Ticket => {
  return {
    id: ticket.id,
    event_id: ticket.event_id,
    name: ticket.name,
    contract_address: ticket.contract_address,
    created_at: ticket.created_at,
    description: ticket.description,
    end_date: ticket.end_date,
    image: ticket.image,
    max_per_user: ticket.max_per_user,
    organizer_royalty: ticket.organizer_royalty,
    platform_address: ticket.platform_address,
    platform_royalty: ticket.platform_royalty,
    price: ticket.price,
    quantity: ticket.quantity,
    start_date: ticket.start_date
  }
}

export type TicketTableSupabase = {
      name: string;
      description: string;
      image: string;
      start_date: string;
      end_date: string;
      price: number;
      quantity: number;
      max_per_user: number;
      organizer_royalty: number;
      platform_royalty: number
      platform_address: string;
}
