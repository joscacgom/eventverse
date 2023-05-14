import { Event } from '@/models/Events/types'

/* eslint-disable no-unused-vars */
export type Props = {
    event: Event;
};

export enum PaymentMethod {
    CREDIT_CARD = 'Tarjeta de crédito',
    WALLET = 'Wallet'
}
