/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Footer from '@/components/Layout/Footer'

describe('Footer component', () => {
  it('should render the footer links', () => {
    render(
        <ThemeProvider theme={theme}>
            <Footer />
        </ThemeProvider>)

    const legalLink = screen.getByText('Aviso legal')
    const contactLink = screen.getByText('Contacto')
    const privacyPolicyLink = screen.getByText('Política de privacidad')

    expect(legalLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
    expect(privacyPolicyLink).toBeInTheDocument()
  })
})
