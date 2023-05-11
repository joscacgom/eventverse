
export type Event = {
    id: string;
    title: string;
    date: string;
    endDate: string;
    description: string;
    image: string;
    location: string;
};

export type EventTicketPreview = Event & {
    ticketTitle: string;
    ticketAmount: number;
    ticketPrice: number;
    ticketImage: string;
}
