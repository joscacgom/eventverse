import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import PrivacyPolicy from '@/components/InternalPolicies/PrivacyPolicy'

describe('PrivacyPolicy Component', () => {
  it('renders without error', () => {
    render(
        <ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
  }
  )

  it('displays the privacy policy title', () => {
    render(
        <ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    const privacyPolicyTitle = screen.getByText('Política de Privacidad')
    expect(privacyPolicyTitle).toBeInTheDocument()
  })

  it('renders the privacy policy text with the correct content', () => {
    render(<ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    const privacyPolicyText = screen.getByText(
      'El presente Política de Privacidad establece los términos en que EventVerse usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta aplicación está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada, por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse de que está de acuerdo con dichos cambios.'
    )
    expect(privacyPolicyText).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(<ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    expect(container).toMatchSnapshot()
  })

  it('renders the privacy policy body', () => {
    render(<ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    const privacyPolicyBody = screen.getByTestId('privacy-policy-body')
    expect(privacyPolicyBody).toBeInTheDocument()
  })

  it('displays the correct privacy policy title', () => {
    render(<ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    const privacyPolicyTitle = screen.getByText('Política de Privacidad')
    expect(privacyPolicyTitle).toBeInTheDocument()
  })

  it('displays the cookie policy section', () => {
    render(<ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    const cookiePolicySection = screen.getByText('Cookies')
    expect(cookiePolicySection).toBeInTheDocument()
  })

  it('displays the third-party information section', () => {
    render(<ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    const thirdPartySection = screen.getByText('Información de terceras partes')
    expect(thirdPartySection).toBeInTheDocument()
  })

  it('displays the control of personal information section', () => {
    render(<ThemeProvider theme={theme}>
            <PrivacyPolicy />
        </ThemeProvider>)
    const controlSection = screen.getByText('Control de su información personal')
    expect(controlSection).toBeInTheDocument()
  })
})
