/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventBuyOption from '@/components/Event/EventBuyOption'
import { MOCK_EVENT } from '@/models/Events/mock'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

jest.mock('@crossmint/client-sdk-react-ui', () => ({
  CrossmintPayButton: () => <div data-testid="crossmint-pay-button" />
}))

jest.mock('ethers', () => {
  const original = jest.requireActual('ethers')
  const mockEthers = {
    ...original,
    BigNumber: {
      ...original.BigNumber,
      from: jest.fn().mockReturnValue({
        lte: jest.fn().mockReturnValue(false),
        toString: jest.fn()
      }),
      lte: jest.fn().mockReturnValue(false)
    }
  }
  return mockEthers
})

jest.mock('@thirdweb-dev/react', () => ({
  __esModule: true,
  useContract: jest.fn().mockReturnValue({ contract: '0x1dd488Aa32731bED13A54581d78061AAeBdA4d91' }),
  useUnclaimedNFTSupply: jest.fn().mockReturnValue({
    isLoading: false,
    isError: false,
    isSuccess: true
  }),
  useClaimConditions: jest.fn().mockReturnValue({
    data: [{ startTime: new Date() }],
    isLoading: false,
    isError: false,
    isSuccess: true
  }),
  useActiveClaimConditionForWallet: jest.fn().mockReturnValue({
    data: 'mock_active_claim_condition',
    isLoading: false,
    isError: false,
    isSuccess: true
  })
}))

const useUnclaimedNFTSupplyMock = jest.requireMock('@thirdweb-dev/react').useUnclaimedNFTSupply
useUnclaimedNFTSupplyMock.mockReturnValue({
  data: { eq: jest.fn().mockReturnValue(false), lte: jest.fn().mockReturnValue(false) },
  isLoading: false,
  isError: false,
  isSuccess: true
})

describe('EventBuyOption', () => {
  const event = MOCK_EVENT
  it('renders the component and updates amount', () => {
    render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <EventBuyOption event={event} />
            </ThemeProvider>
        </QueryClientProvider>
    )

    expect(screen.getByLabelText('Cantidad')).toHaveValue(1)

    const amountInput = screen.getByLabelText('Cantidad')
    fireEvent.change(amountInput, { target: { value: '3' } })

    expect(amountInput).toHaveValue(3)
  })

  it('resets state on event change', () => {
    render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <EventBuyOption event={event} />
            </ThemeProvider>
        </QueryClientProvider>
    )

    const amountInput = screen.getByLabelText('Cantidad')
    fireEvent.change(amountInput, { target: { value: '3' } })
    fireEvent.click(screen.getByText('Wallet'))

    expect(amountInput).toHaveValue(3)

    render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <EventBuyOption event={event} />
            </ThemeProvider>
        </QueryClientProvider>
    )

    expect(screen.getByLabelText('Cantidad')).toHaveValue(3)
  })
})
