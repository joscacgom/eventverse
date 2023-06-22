import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import { NextRouter, useRouter } from 'next/router'
import EventCard from '@/containers/Resell/ResellMarket/MainSection/EventCard'
import { MOCK_RESELL_TICKETS } from '@/models/Resell/mock'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>

describe('EventCard', () => {
  const ticketEvent = MOCK_RESELL_TICKETS[0]

  it('should render the event details', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventCard ticketEvent={ticketEvent} />
        </ThemeProvider>)

    expect(screen.getByText('Medusa Ticket')).toBeInTheDocument()

    expect(screen.getByText('Remember to replace this description...')).toBeInTheDocument()

    const ticketImage = screen.getByAltText('ticket image')
    expect(ticketImage).toHaveAttribute('src', 'https://ipfs-2.thirdwebcdn.com/ipfs/QmXgbYLJzdQAkTKX9bePwJpcmWt8Rxb3Ji4gZGDQY5YkHN/medusa-ticket.png')
  })

  it('should navigate to the event page on click', () => {
    const pushMock = jest.fn()
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      push: pushMock
    }))
    render(<ThemeProvider theme={theme}>
            <EventCard ticketEvent={ticketEvent} />
        </ThemeProvider>)

    const eventCard = screen.getByTestId('event-card')
    fireEvent.click(eventCard)

    expect(pushMock).toHaveBeenCalledWith('/resell/event/0x6968BaEb1058b0663a7F178725C1fF996F5Cd696')
  })
})
