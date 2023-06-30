import { ResellEvent } from '@/hooks/useEventsWithListedTickets'
import { Event, EventTicketPreview } from './types'

export const MOCK_EVENT: Event = {
  id: 36,
  created_at: '2023-05-18T14:56:29.715909+00:00',
  organizer_id: 2,
  name: 'Apolo Techno Fest (Sevilla)',
  summary: 'The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes.',
  description: 'The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes. The festival drew in a diverse crowd of techno enthusiasts, who danced the night away to pulsating beats from renowned DJs and up-and-coming talents. With mind-blowing visuals and immersive soundscapes, Apolo Techno Fest established itself as a premier destination for electronic music lovers, leaving attendees craving for more.',
  image: 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg',
  location: 'Seville, Spain',
  locationImage: '/images/google-maps.png',
  start_date: '22-08-2023 16:00',
  end_date: '23-08-2023 03:00',
  time_zone: 'GMT+2',
  country: 'SPAIN',
  event_type: 'PHYSICAL',
  category: 'MUSIC',
  pricing_plan: 'STANDARD'
}

export const MOCK_EVENT_TICKET_PREVIEW: EventTicketPreview = {
  name: 'Apolo Techno Fest (Sevilla)',
  start_date: '22-08-2023 16:00',
  end_date: '23-08-2023 03:00',
  description: 'The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes.',
  image: 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg',
  location: 'Seville, Spain',
  ticketTitle: 'Standard Ticket',
  ticketAmount: 100,
  ticketPrice: 20,
  ticketImage: 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg',
  locationImage: 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg',
  locationFormattedAddress: 'Sevilla'
}

export const MOCK_EVENTS: Event[] = [
  {
    id: 36,
    created_at: '2023-05-18T14:56:29.715909+00:00',
    organizer_id: 2,
    name: 'Apolo Techno Fest (Sevilla)',
    summary: 'The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes.',
    description: 'The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes. The festival drew in a diverse crowd of techno enthusiasts, who danced the night away to pulsating beats from renowned DJs and up-and-coming talents. With mind-blowing visuals and immersive soundscapes, Apolo Techno Fest established itself as a premier destination for electronic music lovers, leaving attendees craving for more.',
    image: 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg',
    location: 'Seville, Spain',
    start_date: '22-08-2023 16:00',
    end_date: '23-08-2023 03:00',
    time_zone: 'GMT+2',
    country: 'SPAIN',
    event_type: 'PHYSICAL',
    category: 'MUSIC',
    pricing_plan: 'STANDARD'
  },
  {
    id: 37,
    created_at: '2023-05-18T15:04:47.70507+00:00',
    organizer_id: 2,
    name: 'Color Run Fest (Málaga)',
    summary: 'The Color Run Fest in Málaga brought a burst of vibrant energy to the city, as participants united in a kaleidoscope of colors.',
    description: 'The Color Run Fest in Málaga brought a burst of vibrant energy to the city, as participants united in a kaleidoscope of colors. Runners of all ages dashed through the course, getting drenched in a rainbow of powdered pigments at every turn. The event created a joyful atmosphere filled with laughter, music, and a strong sense of community. The Color Run Fest left a trail of unforgettable memories, leaving everyone eagerly anticipating the next colorful adventure.',
    image: 'https://ipfs.thirdwebcdn.com/ipfs/Qmebu988xCYHPTY13GRYenPf9WDmygW21aFJDVYm7xXXYT/color-run-event.jpg',
    location: 'Malaga, Spain',
    start_date: '18-07-2023 18:30',
    end_date: '18-07-2023 23:30',
    time_zone: 'GMT+2',
    country: 'SPAIN',
    event_type: 'PHYSICAL',
    category: 'MUSIC',
    pricing_plan: 'STANDARD'
  },
  {
    id: 38,
    created_at: '2023-05-18T15:04:47.70507+00:00',
    organizer_id: 2,
    name: 'Color Run Fest (Málaga) v2',
    summary: 'The Color Run Fest in Málaga brought a burst of vibrant energy to the city, as participants united in a kaleidoscope of colors.',
    description: 'The Color Run Fest in Málaga brought a burst of vibrant energy to the city, as participants united in a kaleidoscope of colors. Runners of all ages dashed through the course, getting drenched in a rainbow of powdered pigments at every turn. The event created a joyful atmosphere filled with laughter, music, and a strong sense of community. The Color Run Fest left a trail of unforgettable memories, leaving everyone eagerly anticipating the next colorful adventure.',
    image: 'https://ipfs.thirdwebcdn.com/ipfs/Qmebu988xCYHPTY13GRYenPf9WDmygW21aFJDVYm7xXXYT/color-run-event.jpg',
    location: 'Malaga, Spain',
    start_date: '18-07-2023 18:30',
    end_date: '18-07-2023 23:30',
    time_zone: 'GMT+2',
    country: 'SPAIN',
    event_type: 'PHYSICAL',
    category: 'MUSIC',
    pricing_plan: 'STANDARD'
  }
]

export const MOCK_RESELL_EVENT: ResellEvent =
{
  event: {
    id: 93,
    organizer_id: 33,
    name: 'Taller React Native + Typescript',
    description: 'Taller React Native + Typescript',
    image: 'https://res.cloudinary.com/duffkgzef/image/upload/v1687707227/eventverse/rplf1gqpvbdsb58r9fok.jpg',
    start_date: '2023-12-29T17:32',
    end_date: '2023-12-30T17:33',
    created_at: '2023-06-25T15:33:48.528979+00:00',
    category: 'Negocios',
    country: 'España',
    event_type: 'Online',
    location: 'Sevilla, España',
    locationImage: 'https://maps.googleapis.com/maps/api/staticmap?center=37.3890924,-5.9844589&zoom=13&size=800x800&key=AIzaSyDp8ieppBq87VKJq9E9Oh9ebjcab2IsYoo',
    pricing_plan: 'STANDARD',
    summary: 'Taller React Native + Typescript',
    time_zone: 'GMT+1'
  },
  contractAddress: '0xEe4c531415344E3EAa90d2E566ce4a24A604c0d7'
}
