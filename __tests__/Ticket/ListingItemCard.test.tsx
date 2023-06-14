import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventCard from '@/containers/Resell/ResellEventListing/ListingItemCard'
import { MOCK_RESELL_TICKETS } from '@/models/Resell/mock'
import { useAddress, useContract } from '@thirdweb-dev/react'

jest.mock('@thirdweb-dev/react', () => ({
  useContract: jest.fn(),
  useAddress: jest.fn()
}))

describe('EventCard', () => {
  const listingItem = MOCK_RESELL_TICKETS[0]
  it('should render the title, price, and buy button', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventCard listingItem={listingItem} />
        </ThemeProvider>)
    expect(screen.getByText('Medusa Ticket')).toBeInTheDocument()

    expect(screen.getByText('10.0 MATIC')).toBeInTheDocument()

    const buyButtonElement = screen.getByText('Comprar ticket')
    expect(buyButtonElement).toBeInTheDocument()

    const mockBuyoutListing = jest.fn()

    fireEvent.click(buyButtonElement)

    expect(mockBuyoutListing).toHaveBeenCalledWith('1', 1)
  })

  it('should render ConnectWallet component when network mismatch', () => {
    jest.spyOn(window.console, 'error').mockImplementation(() => {})
    useContract.mockReturnValue({})
    useAddress.mockReturnValue('userAddress')
    jest.mock('@thirdweb-dev/react', () => ({
      useNetworkMismatch: jest.fn(() => true)
    }))

    render(<EventCard listingItem={listingItem} />)

    expect(screen.getByTestId('connect-wallet')).toBeInTheDocument()
  })
})
