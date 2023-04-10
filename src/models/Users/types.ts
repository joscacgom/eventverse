import { UserTicket } from '../Tickets/types'

export type User = {
    name: string;
    email: string;
    address: string;
    balance: string;
    privateKey: string;
    tickets: UserTicket[];
}
