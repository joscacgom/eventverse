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
    price: string;
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
