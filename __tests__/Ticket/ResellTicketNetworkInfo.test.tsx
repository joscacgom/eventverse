/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'
import { ThemeProvider } from 'styled-components'
import ResellTicketNetworkInfo from '@/components/ResellTicket/ResellTicketNetworkInfo'
import theme from '@/theme'

describe('ResellTicketNetworkInfo', () => {
  const ticket = MOCK_EVENT_TICKET

  it('should render correctly', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellTicketNetworkInfo ticket={ticket} />
        </ThemeProvider>)

    expect(screen.getByAltText('Event image')).toHaveAttribute('src', '/images/tickets/medusa-festival.png')
    expect(screen.getByText('Royalties')).toBeInTheDocument()
    expect(screen.getByText('2.5% comisión de EventVerse')).toBeInTheDocument()
    expect(screen.getByText('5% comisión del organizador')).toBeInTheDocument()
    expect(screen.getByText('Información del smart contract')).toBeInTheDocument()
    expect(screen.getByText('Dirección del contrato')).toBeInTheDocument()
    expect(screen.getByText('0x6968BaEb1058b0663a7F178725C1fF996F5Cd696')).toBeInTheDocument()
    expect(screen.getByText('Ver en PolygonScan')).toBeInTheDocument()
    expect(screen.getByText('Blockchain')).toBeInTheDocument()
    expect(screen.getByText('Polygon')).toBeInTheDocument()
  })
})
