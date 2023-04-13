/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import ContactInfo from '@/components/InternalPolicies/ContactInfo'

describe('ContactInfo', () => {
  it('renders correctly', () => {
    render(
        <ThemeProvider theme={theme}>
            <ContactInfo />
        </ThemeProvider>)

    expect(screen.getByText('Atención al cliente')).toBeInTheDocument()

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Introduce tu nombre')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Introduce una dirección válida de correo electrónico')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Introduce el mensaje que deseas enviarnos')).toBeInTheDocument()

    expect(screen.getByText('Enviar')).toBeInTheDocument()

    expect(document.querySelector('img')).toBeInTheDocument()
  })
})
