import { Event } from '../Events/types'
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
