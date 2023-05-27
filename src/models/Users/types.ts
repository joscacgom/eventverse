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

export type Organizer = {
    id: number;
    created_at: string;
    name: string;
    email: string;
    phone: string;
    description: string;
    wallet_address: string;
    image: string;
}

export const normalizeOrganizer = (organizer: any): Organizer => {
  return {
    id: organizer.organizer_id,
    name: organizer.name,
    phone: organizer.phone,
    description: organizer.description,
    wallet_address: organizer.wallet_address,
    email: organizer.email,
    image: organizer.image,
    created_at: organizer.created_at
  }
}
