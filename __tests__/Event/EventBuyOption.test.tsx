/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventBuyOption from '@/components/Event/EventBuyOption'
import { MOCK_EVENT } from '@/models/Events/mock'

describe('EventBuyOption', () => {
  const mockEvent = MOCK_EVENT
  it('renders correctly', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventBuyOption event={mockEvent} />
        </ThemeProvider>
    )

    expect(screen.getByText('Tarjeta de crédito')).toBeInTheDocument()
    expect(screen.getByText('Wallet')).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/tickets/medusa-festival.png')
    expect(screen.getByLabelText('Cantidad')).toHaveAttribute('type', 'number')
    expect(screen.getByLabelText('Cantidad')).toHaveAttribute('min', '1')
    expect(screen.getByLabelText('Cantidad')).toHaveAttribute('value', '1')
    expect(screen.getByText('100€')).toBeInTheDocument()

    expect(screen.getByText('Comprar')).toBeInTheDocument()
  })
})
