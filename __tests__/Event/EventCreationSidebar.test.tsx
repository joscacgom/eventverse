/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventCreationSidebar from '@/components/Event/EventCreationSidebar'

describe('EventCreationSidebar', () => {
  it('renders three steps', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventCreationSidebar step={1} />
        </ThemeProvider>)
    expect(screen.getByText('Paso 1')).toBeInTheDocument()
    expect(screen.getByText('Paso 2')).toBeInTheDocument()
    expect(screen.getByText('Paso 3')).toBeInTheDocument()
  })

  it('highlights the current step', () => {
    render(
        <ThemeProvider theme={theme}>
            <EventCreationSidebar step={1} />
        </ThemeProvider>)
    expect(screen.getByText('Paso 1')).not.toHaveStyle('box-shadow: none;')
    expect(screen.getByText('Paso 3')).not.toHaveStyle('box-shadow: none;')
    expect(screen.getByText('Paso 3')).not.toHaveStyle('background-color: white; color: white;')
  })
})
