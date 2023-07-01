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
import { MOCK_EVENT } from '@/models/Events/mock'

const queryClient = new QueryClient()

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>
jest.mock('../../src/hooks/useEventsWithListedTickets', () => ({
  useEventsWithListedTickets: jest.fn(() => ({
    resellTickets: MOCK_RESELL_TICKETS,
    isLoading: false
  }))
}))

describe('MainSection', () => {
  it('should render the title and search input', () => {
    const resellEvents = [
      {
        event: MOCK_EVENT,
        contractAddress: '0x123'
      }
    ]
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MainSection resellEvents={resellEvents} isLoading={false} />
        </ThemeProvider>
      </QueryClientProvider>)

    expect(screen.getByText('Eventos con reventas disponibles')).toBeInTheDocument()
    expect(screen.getByText('Apolo Techno Fest (Sevilla)')).toBeInTheDocument()
    const description = screen.getByText('The Apolo Techno Fest in Sevilla turned ...')
    expect(description).toBeInTheDocument()
  })
})
