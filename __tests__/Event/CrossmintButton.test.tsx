/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import CrossmintButton from '@/components/Event/EventBuyOption/CrossmintButton'

jest.mock('@crossmint/client-sdk-react-ui', () => ({
  CrossmintPayButton: () => <div data-testid="crossmint-pay-button" />
}))

describe('CrossmintButton', () => {
  it('renders the CrossmintPayButton component', () => {
    const quantity = 2
    const totalPrice = 20
    const ticketId = 123
    const userAddress = '0x123abc'

    render(
        <ThemeProvider theme={theme}>
            <CrossmintButton
                clientId='b01bd14f-1da4-4343-84a9-dc1909844036'
                quantity={quantity}
                totalPrice={totalPrice}
                ticketId={ticketId}
                userAddress={userAddress}
            />
        </ThemeProvider>
    )

    const crossmintPayButton = screen.getByTestId('crossmint-pay-button')
    expect(crossmintPayButton).toBeInTheDocument()
  })
})
