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

    expect(screen.getByAltText('Event image')).toHaveAttribute('src', 'https://ipfs.thirdwebcdn.com/ipfs/QmP9MEiC7WPmoZ3p2dPn8ZYzjFQKNUe4DPCzrGoAkXFxDz/apolo-event.jpg')
    expect(screen.getByText('Royalties')).toBeInTheDocument()
    expect(screen.getByText('5% comisión de EventVerse')).toBeInTheDocument()
    expect(screen.getByText('5% comisión del organizador')).toBeInTheDocument()
    expect(screen.getByText('Información del smart contract')).toBeInTheDocument()
    expect(screen.getByText('Dirección del contrato')).toBeInTheDocument()
    expect(screen.getByText('0x1dd488Aa32731bED13A54581d78061AAeBdA4d91')).toBeInTheDocument()
    expect(screen.getByText('Ver en PolygonScan')).toBeInTheDocument()
    expect(screen.getByText('Blockchain')).toBeInTheDocument()
    expect(screen.getByText('Polygon')).toBeInTheDocument()
  })
})
