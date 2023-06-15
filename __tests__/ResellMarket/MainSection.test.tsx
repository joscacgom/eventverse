/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import { NextRouter, useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainSection from '@/containers/Resell/ResellMarket/MainSection'
import { MOCK_RESELL_TICKETS } from '@/models/Resell/mock'

const queryClient = new QueryClient()

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>
jest.mock('../../src/hooks/useListedTickets', () => ({
  useListedTickets: jest.fn(() => ({
    resellTickets: MOCK_RESELL_TICKETS,
    isLoading: false
  }))
}))

describe('MainSection', () => {
  it('should render the title and search input', () => {
    render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <MainSection />
        </ThemeProvider>
        </QueryClientProvider>)

    expect(screen.getByText('Eventos con reventas disponibles')).toBeInTheDocument()

    const searchInput = screen.getByPlaceholderText('🔎 Buscar eventos...')
    expect(searchInput).toBeInTheDocument()
  })

  it('should render the event cards', () => {
    render(<QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <MainSection />
        </ThemeProvider>
        </QueryClientProvider>)

    const eventCards = screen.getAllByTestId('event-card')
    expect(eventCards).toHaveLength(2)
    expect(eventCards[0]).toHaveTextContent('Medusa Ticket')
    expect(eventCards[1]).toHaveTextContent('Medusa Ticket')
  })
})
