/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { MOCK_EVENTS } from '@/models/Events/mock'
import MainSection from '@/containers/Home/MainSection'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

describe('MainSection', () => {
  it('renders the title "Novedades"', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainSection />
      </ThemeProvider>
    )
    expect(screen.getByText('Novedades')).toBeInTheDocument()
  })

  it('renders a search input', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainSection />
      </ThemeProvider>
    )
    expect(screen.getByPlaceholderText('🔎 Buscar eventos...')).toBeInTheDocument()
  })

  it('filters the event list based on search input', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainSection />
      </ThemeProvider>
    )
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
