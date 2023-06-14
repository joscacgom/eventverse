/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import useLogic from '@/components/Event/EventBuyOption/useLogic'
import { PaymentMethod } from '@/components/Event/EventBuyOption/types'
import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'

jest.mock('@thirdweb-dev/react', () => ({
  __esModule: true,
  useClaimConditions: jest.fn(),
  useActiveClaimConditionForWallet: jest.fn(),
  useUnclaimedNFTSupply: jest.fn()
}))

jest.mock('@crossmint/client-sdk-react-ui', () => ({
  CrossmintPayButton: () => <div data-testid="crossmint-pay-button" />
}))

describe('useLogic', () => {
  it('should render the correct payment logic for Credit Card payment method', () => {
    const ticket = MOCK_EVENT_TICKET
    const nftDrop = undefined
    const userAddress = 'user_address'
    const amount = 1
    const totalPrice = 10
    const paymentMethod = PaymentMethod.CREDIT_CARD

    const TestComponent = () => {
      const { renderPaymentLogic } = useLogic({ ticket, nftDrop, userAddress, amount, totalPrice, paymentMethod })
      return <div data-testid="payment-logic">{renderPaymentLogic()}</div>
    }

    render(
      <ThemeProvider theme={theme}>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('custom-alert')).toHaveTextContent('Este evento aun no ha sido verificado para aceptar pagos con tarjeta.')
    expect(screen.queryByTestId('thirdweb-button')).toBeNull()
    expect(screen.queryByTestId('crossmint-button')).toBeNull()
  })

  it('should render the correct payment logic for Thirdweb Wallet payment method', () => {
    const ticket = MOCK_EVENT_TICKET
    const nftDrop = undefined
    const userAddress = 'user_address'
    const amount = 1
    const totalPrice = 10
    const paymentMethod = PaymentMethod.WALLET

    const TestComponent = () => {
      const { renderPaymentLogic } = useLogic({ ticket, nftDrop, userAddress, amount, totalPrice, paymentMethod })
      return <div data-testid="payment-logic">{renderPaymentLogic()}</div>
    }

    render(
      <ThemeProvider theme={theme}>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.queryByTestId('custom-alert')).toBeNull()
    expect(screen.getByTestId('thirdweb-button')).toBeInTheDocument()
    expect(screen.queryByTestId('crossmint-button')).toBeNull()
  })
})
