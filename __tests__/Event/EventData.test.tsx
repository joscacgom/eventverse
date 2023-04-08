/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventData from '@/components/Event/EventData'
import { MOCK_EVENT } from '@/models/Events/mock'

describe('EventData', () => {
  const event = MOCK_EVENT

  it('should render the event data correctly', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('Medusa Festival')).toBeInTheDocument()
  })

  it('should render the event description', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('Abonos ya a la venta para el Medusa Festival 2023')).toBeInTheDocument()
  })

  it('should render the event date', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('22 de Agosto 2023')).toBeInTheDocument()
  })

  it('should render the event location', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventData event={event} />
        </ThemeProvider>
    )
    expect(screen.getByText('Sevilla')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/google-maps.png')
  })
})
