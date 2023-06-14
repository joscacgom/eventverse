import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Home from '@/containers/ResellTicketDetails'
import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'

describe('Home', () => {
  const ticket = MOCK_EVENT_TICKET
  it('should render the main image and resell ticket component', () => {
    render(
        <ThemeProvider theme={theme}>
            <Home ticket={ticket} />
        </ThemeProvider>)
    const mainImageElement = screen.getByAltText('Main Image')
    expect(mainImageElement).toBeInTheDocument()
    expect(mainImageElement).toHaveAttribute('src', '/images/events/medusa-fest-wallpaper.jpg')

    expect(screen.getByText('Detalles')).toBeInTheDocument()

    const resellTicketElement = screen.getByTestId('resell-ticket')
    expect(resellTicketElement).toBeInTheDocument()
    expect(resellTicketElement).toHaveAttribute('ticket-id', '15')
  })
})
