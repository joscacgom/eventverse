/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import ThirdwebButton from '@/components/Event/EventBuyOption/ThirdwebButton'
import { useClaimNFT } from '@thirdweb-dev/react'
import { createTicketBuy } from '@/utils/Ticket/handleTicketBuy'

jest.mock('@thirdweb-dev/react', () => ({
  __esModule: true,
  useAddress: jest.fn().mockReturnValue('0xeE9e09F4ffe51A3F57e463A93b2227a5B52B1D52'),
  useClaimNFT: jest.fn().mockReturnValue({ mutate: jest.fn() }),
  useContract: jest.fn().mockReturnValue({ contract: '0xf1425dF0EF0b7A113AEB4ef7C60B6AAf6a506410' })
}))

describe('ThirdwebButton', () => {
  it('renders the button and calls the necessary functions on click', () => {
    render(
      <ThemeProvider theme={theme}>
        <ThirdwebButton contractAddress="0xf1425dF0EF0b7A113AEB4ef7C60B6AAf6a506410" quantity={1} ticketId={16} />
      </ThemeProvider>
    )

    const button = screen.getByText('Comprar con Wallet')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(useClaimNFT).toHaveBeenCalledWith({ contract: '0xf1425dF0EF0b7A113AEB4ef7C60B6AAf6a506410' })
    expect(createTicketBuy).toHaveBeenCalledWith({ walletAddress: '0xeE9e09F4ffe51A3F57e463A93b2227a5B52B1D52', ticketId: 16 })
  })
})
