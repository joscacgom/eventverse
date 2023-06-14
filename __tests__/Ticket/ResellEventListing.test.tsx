import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import { NextRouter, useRouter } from 'next/router'
import ResellEventListing from '@/containers/Resell/ResellEventListing'
import { MOCK_RESELL_TICKETS } from '@/models/Resell/mock'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>

describe('ResellEventListing', () => {
  const listing = MOCK_RESELL_TICKETS
  it('should render the title, event name, and listing items', () => {
    render(
        <ThemeProvider theme={theme}>
            <ResellEventListing listing={listing} />
        </ThemeProvider>)

    expect(screen.getByText('Reventas')).toBeInTheDocument()

    const mainImageElement = screen.getByAltText('Main Image')
    expect(mainImageElement).toBeInTheDocument()
    expect(mainImageElement).toHaveAttribute('src', '/images/events/medusa-fest-wallpaper.jpg')

    const backButtonElement = screen.getByText('Volver')
    expect(backButtonElement).toBeInTheDocument()

    expect(screen.getByText('Event Name')).toBeInTheDocument()

    expect(screen.getByText('Tickets de reventa disponibles 🎟️')).toBeInTheDocument()

    expect(screen.getByTestId('listing-item-0')).toBeInTheDocument()
    expect(screen.getByTestId('listing-item-1')).toBeInTheDocument()
  })
})
