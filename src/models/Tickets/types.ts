import { Event } from '../Events/types'

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
    event:Event;
}
