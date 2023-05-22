/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventData from '@/components/Event/EventData'
import { MOCK_EVENT } from '@/models/Events/mock'

describe('EventData', () => {
  const event = MOCK_EVENT

  it('should render the event data correctly', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('Apolo Techno Fest (Sevilla)')).toBeInTheDocument()
  })

  it('should render the event description', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes. The festival drew in a diverse crowd of techno enthusiasts, who danced the night away to pulsating beats from renowned DJs and up-and-coming talents. With mind-blowing visuals and immersive soundscapes, Apolo Techno Fest established itself as a premier destination for electronic music lovers, leaving attendees craving for more.')).toBeInTheDocument()
  })

  it('should render the event date', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('22 de Agosto 2023')).toBeInTheDocument()
  })

  it('should render the event location', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('Seville, Spain')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/google-maps.png')
  })
})
