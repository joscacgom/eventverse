/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { MOCK_EVENTS } from '@/models/Events/mock'
import MainSection from '@/containers/Home/MainSection'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import theme from '@/theme'
import { NextRouter, useRouter } from 'next/router'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()
const queryClient = new QueryClient()

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>
describe('MainSection', () => {
  it('renders the title "Novedades"', () => {
    render(
     <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <MainSection />
        </ThemeProvider>
      </QueryClientProvider>
    )
    expect(screen.getByText('Novedades')).toBeInTheDocument()
  })

  it('renders a search input', () => {
    render(
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <MainSection />
        </ThemeProvider>
      </QueryClientProvider>
    )
    expect(screen.getByPlaceholderText('🔎 Buscar eventos...')).toBeInTheDocument()
  })

  it('filters the event list based on search input', () => {
    render(
     <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <MainSection />
        </ThemeProvider>
      </QueryClientProvider>
    )
    const searchInput = screen.getByPlaceholderText('🔎 Buscar eventos...')
    fireEvent.change(searchInput, { target: { value: 'concert' } })
    const filteredEvents = MOCK_EVENTS.filter((e) =>
      e.name.toLowerCase().includes('concert')
    )
    filteredEvents.forEach((event) => {
      expect(screen.getByText(event.name)).toBeInTheDocument()
    })
  })
})
