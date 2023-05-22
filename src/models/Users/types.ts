import { UserTicket } from '../Tickets/types'

export type User = {
    name: string;
    email: string;
    profileImage: string;
    address: string;
    balance: string;
    privateKey: string;
    tickets: UserTicket[];
}
