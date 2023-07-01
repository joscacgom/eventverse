import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import { NextRouter, useRouter } from 'next/router'
import EventCard from '@/containers/Resell/ResellMarket/MainSection/EventCard'
import { MOCK_RESELL_EVENT } from '@/models/Events/mock'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>

describe('EventCard', () => {
  it('should render the event details', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventCard resellEvent={MOCK_RESELL_EVENT} />
        </ThemeProvider>)

    expect(screen.getByText('Taller React Native + Typescript')).toBeInTheDocument()

    expect(screen.getByText('Taller React Native + Typescript...')).toBeInTheDocument()

    const ticketImage = screen.getByAltText('ticket image')
    expect(ticketImage).toHaveAttribute('src', 'https://res.cloudinary.com/duffkgzef/image/upload/v1687707227/eventverse/rplf1gqpvbdsb58r9fok.jpg')
  })

  it('should navigate to the event page on click', () => {
    const pushMock = jest.fn()
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      push: pushMock
    }))
    render(<ThemeProvider theme={theme}>
            <EventCard resellEvent={MOCK_RESELL_EVENT} />
        </ThemeProvider>)

    const eventCard = screen.getByTestId('event-card')
    fireEvent.click(eventCard)

    expect(pushMock).toHaveBeenCalledWith('/resell/event/0xEe4c531415344E3EAa90d2E566ce4a24A604c0d7')
  })
})
