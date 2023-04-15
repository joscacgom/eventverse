/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventPreviewCreationForm from '@/components/Event/EventPreviewCreationForm'
import { MOCK_EVENT } from '@/models/Events/mock'

describe('EventPreviewCreationForm', () => {
  const event = MOCK_EVENT

  it('should display the event title', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('Medusa Festival')).toBeInTheDocument()
  })

  it('should display the event description', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('Abonos ya a la venta para el Medusa Festival 2023')).toBeInTheDocument()
  })

  it('should display the event start date', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('22 de Agosto 2023')).toBeInTheDocument()
  })

  it('should display the event end date', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('23 de Agosto 2023')).toBeInTheDocument()
  })

  it('should display the event location', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('Sevilla')).toBeInTheDocument()
  })

  it('should display the ticket name', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('Medusa Festival')).toBeInTheDocument()
  })

  it('should display the ticket price', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('90€')).toBeInTheDocument()
  })
})
