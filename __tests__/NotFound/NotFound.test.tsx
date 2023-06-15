/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import NotFound from '@/components/NotFound'

describe('NotFound', () => {
  it('should render the "not found" message', () => {
    render(
        <ThemeProvider theme={theme}>
            <NotFound />
        </ThemeProvider>)

    const notFoundMessage = screen.getByText('😕 Ups... Parece que no encontramos lo que buscas')
    expect(notFoundMessage).toBeInTheDocument()
  })
})
