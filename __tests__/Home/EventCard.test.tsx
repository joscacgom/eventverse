import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventCard from '@/containers/Home/MainSection/EventCard'
import { MOCK_EVENT } from '@/models/Events/mock'

describe('EventCard', () => {
  const event = MOCK_EVENT
  it('should render the event card with correct details', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventCard event={event} />
        </ThemeProvider>)

    expect(screen.getByText(event.name)).toBeInTheDocument()
    expect(screen.getByText('22-08-2023 16:00 undefined')).toBeInTheDocument()
    expect(screen.getByText('The Apolo Techno Fest in Sevilla turned up th...')).toBeInTheDocument()
    expect(screen.getByAltText('avatar-events')).toBeInTheDocument()

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/event/36')
  })
})
