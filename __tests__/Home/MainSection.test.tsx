/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, waitFor } from '@testing-library/react'
import MainSection from '@/containers/Home/MainSection'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import theme from '@/theme'
import { NextRouter, useRouter } from 'next/router'
import { MOCK_EVENT } from '@/models/Events/mock'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()
const queryClient = new QueryClient()

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>
jest.mock('../../src/hooks/useEvents.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [
      MOCK_EVENT,
      MOCK_EVENT
    ],
    isLoading: false,
    error: null
  }))
}))

describe('MainSection', () => {
  it('renders the title "Novedades"', async () => {
    render(
     <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <MainSection />
        </ThemeProvider>
      </QueryClientProvider>
    )
    await waitFor(() => {
      expect(screen.getByText('Novedades')).toBeInTheDocument()
    })
  })

  it('renders a search input', async () => {
    render(
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <MainSection />
        </ThemeProvider>
      </QueryClientProvider>
    )

    await waitFor(() => {
      expect(screen.getByPlaceholderText('🔎 Buscar eventos...')).toBeInTheDocument()
    })
  })

  // it('filters the event list based on search input', async () => {
  //   render(
  //    <QueryClientProvider client={queryClient}>
  //         <ThemeProvider theme={theme}>
  //           <MainSection />
  //       </ThemeProvider>
  //     </QueryClientProvider>
  //   )
  //   await waitFor(() => {
  //     const searchInput = screen.getByPlaceholderText('🔎 Buscar eventos...')
  //   })
  //   fireEvent.change(searchInput, { target: { value: 'concert' } })
  //   const filteredEvents = MOCK_EVENTS.filter((e) =>
  //     e.name.toLowerCase().includes('concert')
  //   )
  //   filteredEvents.forEach((event) => {
  //     expect(screen.getByText(event.name)).toBeInTheDocument()
  //   })
  // })
})
