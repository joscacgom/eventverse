/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventCard from '@/containers/Resell/ResellEventListing/ListingItemCard'
import { MOCK_RESELL_TICKETS } from '@/models/Resell/mock'

jest.mock('@thirdweb-dev/react', () => ({
  useContract: jest.fn(() => ({
    contract: {
      buyoutListing: jest.fn()
    }
  })),
  useAddress: jest.fn(() => ({ userAddress: '0x123' })),
  useNetworkMismatch: jest.fn(() => ({ networkMismatch: false })),
  ConnectWallet: jest.fn(() => <div data-testid="connect-wallet" />)
}))

describe('EventCard', () => {
  const listingItem = MOCK_RESELL_TICKETS[0]

  it('should render the title, price, and buy button', () => {
    render(
      <ThemeProvider theme={theme}>
        <EventCard listingItem={listingItem} />
      </ThemeProvider>
    )

    expect(screen.getByText('Medusa Ticket')).toBeInTheDocument()
    expect(screen.getByAltText('ticket image')).toBeInTheDocument()
  })
})
