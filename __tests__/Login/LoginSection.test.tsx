/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

import Login from '@/components/Login'

describe('Login', () => {
  it('renders the login section correctly', () => {
    render(
     <ThemeProvider theme={theme}>
        <Login />
    </ThemeProvider>
    )

    expect(screen.getByAltText('EventVerse')).toBeInTheDocument()

    expect(screen.getByText('Inicia sesión o regístrate')).toBeInTheDocument()

    expect(screen.getByText('Inicia sesión con tu cuenta de google')).toBeInTheDocument()

    expect(screen.getByText('Conectar wallet')).toBeInTheDocument()

    expect(screen.getByText('Cuando creas una nueva cuenta aceptas las políticas de privacidad y los términos de uso de EventVerse.')).toBeInTheDocument()
  })
})
