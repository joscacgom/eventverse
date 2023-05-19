export type Event = {
    id: number;
    organizer_id: number;
    name: string;
    description: string;
    category: string;
    country: string;
    created_at: string;
    end_date: string;
    event_type: string;
    image: string;
    location: string;
    pricing_plan: string;
    start_date: string;
    summary: string;
    tags: string;
    time_zone: string;
}

export const normalizeEvent = (event: any): Event => {
  return {
    id: event.id,
    organizer_id: event.organizer_id,
    name: event.name,
    description: event.description,
    image: event.image,
    start_date: event.start_date,
    end_date: event.end_date,
    created_at: event.created_at,
    category: event.category,
    country: event.country,
    event_type: event.event_type,
    location: event.location,
    pricing_plan: event.pricing_plan,
    summary: event.summary,
    tags: event.tags,
    time_zone: event.time_zone
  }
}
