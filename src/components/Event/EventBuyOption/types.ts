import { Event } from '@/models/Events/types'
import { Ticket } from '@/models/Tickets/types'

/* eslint-disable no-unused-vars */
export type Props = {
    event: Event;
    ticket: Ticket;
};

export enum PaymentMethod {
    CREDIT_CARD = 'Tarjeta de crédito',
    WALLET = 'Wallet'
}
