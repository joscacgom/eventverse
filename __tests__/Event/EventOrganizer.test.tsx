/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventOrganizer from '@/components/Event/EventOrganizer'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
jest.mock('../../src/hooks/useOrganizerById.ts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: {
      id: 2,
      name: 'Jorge Vega',
      image: '/images/avatar.jpg'
    },
    isLoading: false,
    error: null
  }))
}))

describe('EventOrganizer', () => {
  it('should render the organizer information', () => {
    render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <EventOrganizer id={2} />
        </ThemeProvider>
    </QueryClientProvider>
    )

    expect(screen.getByText('Organizado por')).toBeInTheDocument()
    expect(screen.getByAltText('Organizer image')).toHaveAttribute('src', '/images/avatar.jpg')
    expect(screen.getByText('Jorge Vega')).toBeInTheDocument()
  })
})
