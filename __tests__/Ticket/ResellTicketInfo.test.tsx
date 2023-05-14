/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'
import { ThemeProvider } from 'styled-components'
import ResellTicketInfo from '@/components/ResellTicket/ResellTicketInfo'
import theme from '@/theme'

describe('ResellTicketInfo', () => {
  const ticket = MOCK_EVENT_TICKET

  it('renders the ticket name', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellTicketInfo ticket={ticket} />
        </ThemeProvider>)
    expect(screen.getByText(`${ticket.name} ticket`)).toBeInTheDocument()
  })

  it('renders the ticket organizer', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellTicketInfo ticket={ticket} />
        </ThemeProvider>)
    expect(screen.getByText('@organizador')).toBeInTheDocument()
  })

  it('renders the ticket description', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellTicketInfo ticket={ticket} />
        </ThemeProvider>)
    expect(screen.getByText(ticket.description)).toBeInTheDocument()
  })

  it('renders the ticket start and end dates', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellTicketInfo ticket={ticket} />
        </ThemeProvider>)
    expect(screen.getByText('Comienzo:')).toBeInTheDocument()
    expect(screen.getByText(ticket.startDate)).toBeInTheDocument()
    expect(screen.getByText('Fin:')).toBeInTheDocument()
    expect(screen.getByText(ticket.endDate)).toBeInTheDocument()
  })

  it('renders the ticket price and cryptocurrency equivalent', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellTicketInfo ticket={ticket} />
        </ThemeProvider>)
    expect(screen.getByText(`${ticket.price}€`)).toBeInTheDocument()
    expect(screen.getByText('~118.53 MATIC')).toBeInTheDocument()
  })

  it('renders the "Comprar ticket" button', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellTicketInfo ticket={ticket} />
        </ThemeProvider>)
    expect(screen.getByText('Comprar ticket')).toBeInTheDocument()
  })
})
