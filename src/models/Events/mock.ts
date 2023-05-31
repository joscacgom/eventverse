import { Event, EventTicketPreview } from './types'

export const MOCK_EVENT: Event = {
  id: 36,
  created_at: '2023-05-18T14:56:29.715909+00:00',
  organizer_id: 2,
  name: 'Apolo Techno Fest (Sevilla)',
  summary: 'The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes.',
  description: 'The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes. The festival drew in a diverse crowd of techno enthusiasts, who danced the night away to pulsating beats from renowned DJs and up-and-coming talents. With mind-blowing visuals and immersive soundscapes, Apolo Techno Fest established itself as a premier destination for electronic music lovers, leaving attendees craving for more.',
  image: 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg',
  tags: 'techno, electronic, music',
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
    tags: 'techno, electronic, music',
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
    tags: 'music, festival, sport',
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
    tags: 'music, festival, sport',
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
