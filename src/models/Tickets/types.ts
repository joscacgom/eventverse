export type UserTicket ={
    name: string;
    date: string;
    place: string;
    time: string;
    quantity: number;
    price: number;
    status: string;
    imagEvent: string;
}
export type Ticket ={
    id: string;
    image: string;
    name: string;
    price: number;
    amount: number;
    description: string;
    startDate: string;
    endDate: string;
    maxPerUser: number;
    contractAddress: string;
    organizerRoyalty: number;
    platformRoyalty: number;
    eventId: string;
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
