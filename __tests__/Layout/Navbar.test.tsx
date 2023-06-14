/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Navbar from '@/components/Layout/Navbar'
import { NextRouter, useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

useRouter as jest.Mock<NextRouter>

describe('Navbar component', () => {
  it('should navigate to home when logo is clicked', () => {
    render(
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    )
    const logo = screen.getByAltText('Logo')
    fireEvent.click(logo)
    expect(window.location.pathname).toBe('/')
  })

  it('should navigate to the events page when "Eventos" link is clicked', () => {
    render(
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    )
    const eventosLink = screen.getByText('Eventos')
    fireEvent.click(eventosLink)
    expect(window.location.pathname).toBe('/')
  })

  it('should navigate to the resell page when "Reventas" link is clicked', () => {
    render(
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    )
    const reventasLink = screen.getByText('Reventas')
    fireEvent.click(reventasLink)
    expect(window.location.pathname).toBe('/resell')
  })
})
