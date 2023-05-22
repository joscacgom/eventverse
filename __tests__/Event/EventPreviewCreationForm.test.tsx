/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventPreviewCreationForm from '@/components/Event/EventPreviewCreationForm'
import { MOCK_EVENT_TICKET_PREVIEW } from '@/models/Events/mock'

describe('EventPreviewCreationForm', () => {
  const event = MOCK_EVENT_TICKET_PREVIEW

  it('should display the event title', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('Apolo Techno Fest (Sevilla)')).toBeInTheDocument()
  })

  it('should display the event description', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('The Apolo Techno Fest in Sevilla turned up the heat with an electrifying display of cutting-edge music and futuristic vibes.')).toBeInTheDocument()
  })

  it('should display the event start date', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('22 de agosto 2023 16:00')).toBeInTheDocument()
  })

  it('should display the event end date', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('23 de agosto 2023 03:00')).toBeInTheDocument()
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
    expect(screen.getByText('Standard Ticket')).toBeInTheDocument()
  })

  it('should display the ticket price', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventPreviewCreationForm event={event} />
        </ThemeProvider>)
    expect(screen.getByText('20€')).toBeInTheDocument()
  })
})
