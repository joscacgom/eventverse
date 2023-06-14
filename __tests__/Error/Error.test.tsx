/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Error from '@/components/Error'

describe('Error component', () => {
  it('should render the error message', () => {
    render(
        <ThemeProvider theme={theme}>
            <Error />
        </ThemeProvider>
    )

    const errorMessage = screen.getByText(
      '❌ Ups... Ha ocurrido un error inesperado'
    )

    expect(errorMessage).toBeInTheDocument()
  })
})
