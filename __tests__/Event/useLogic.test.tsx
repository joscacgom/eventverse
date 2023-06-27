/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, waitFor } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import useLogic from '@/components/Event/EventBuyOption/useLogic'
import { PaymentMethod } from '@/components/Event/EventBuyOption/types'
import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'

jest.mock('@thirdweb-dev/react', () => ({
  __esModule: true,
  useClaimConditions: jest.fn(() => ({
    data: [],
    isLoading: false,
    isError: false
  })),
  useActiveClaimConditionForWallet: jest.fn(() => ({
    data: [],
    isLoading: false,
    isError: false
  })),
  useUnclaimedNFTSupply: jest.fn(() => ({
    data: {
      eq: (value: number) => value === 0
    },
    isLoading: false,
    isError: false
  }))
}))
jest.mock('../../src/config/supabase.ts', () => {
  const mockSupabase = {
    auth: {
      signUp: jest.fn(),
      signIn: jest.fn(),
      signOut: jest.fn()
    }
  }

  return mockSupabase
})
jest.mock('@crossmint/client-sdk-react-ui', () => ({
  CrossmintPayButton: () => <div data-testid="crossmint-pay-button" />
}))

describe('useLogic', () => {
  it('should render the correct payment logic for Credit Card payment method', async () => {
    const ticket = MOCK_EVENT_TICKET
    const nftDrop = undefined
    const userAddress = 'user_address'
    const amount = 1
    const maticPrice = 10
    const paymentMethod = PaymentMethod.CREDIT_CARD

    const TestComponent = () => {
      const { renderPaymentLogic } = useLogic({ ticket, nftDrop, userAddress, amount, maticPrice, paymentMethod })
      return <div data-testid="payment-logic">{renderPaymentLogic()}</div>
    }

    render(
      <ThemeProvider theme={theme}>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('payment-logic')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByTestId('thirdweb-button')).toBeNull()
      expect(screen.queryByTestId('crossmint-button')).toBeNull()
    })
  })
})
