/* eslint-disable no-undef */

import { render, screen, fireEvent } from '@testing-library/react'
import { MOCK_EVENTS } from '@/models/Events/mock'
import MainSection from '@/containers/Home/MainSection'

describe('MainSection', () => {
  it('renders the title "Novedades"', () => {
    render(<MainSection />)
    expect(screen.getByText('Novedades')).toBeInTheDocument()
  })

  it('renders a search input', () => {
    render(<MainSection />)
    expect(screen.getByPlaceholderText('🔎 Buscar eventos...')).toBeInTheDocument()
  })

  it('renders a list of event cards', () => {
    render(<MainSection />)
    MOCK_EVENTS.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument()
    })
  })

  it('filters the event list based on search input', () => {
    render(<MainSection />)
    const searchInput = screen.getByPlaceholderText('🔎 Buscar eventos...')
    fireEvent.change(searchInput, { target: { value: 'concert' } })
    const filteredEvents = MOCK_EVENTS.filter((e) =>
      e.title.toLowerCase().includes('concert')
    )
    filteredEvents.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument()
    })
  })
})
