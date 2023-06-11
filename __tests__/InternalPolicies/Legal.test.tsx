import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'

import Legal from '@/components/InternalPolicies/Legal'

describe('Legal Component', () => {
  it('renders without error', () => {
    render(
        <ThemeProvider theme={theme}>
            <Legal />
       </ThemeProvider>)
  }
  )
  it('displays the legal title', () => {
    render(<Legal />)
    const legalTitle = screen.getByText('Aviso Legal')
    expect(legalTitle).toBeInTheDocument()
  })

  it('displays the privacy and data treatment section', () => {
    render(<ThemeProvider theme={theme}>
            <Legal />
        </ThemeProvider>)
    const privacySection = screen.getByText('Privacidad y tratamiento de datos')
    expect(privacySection).toBeInTheDocument()
  })

  it('renders the legal text with the correct content', () => {
    render(<ThemeProvider theme={theme}>
            <Legal />
        </ThemeProvider>)
    const legalText = screen.getByText(
      'EventVerse, responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso. Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación. EventVerse, se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web de EventVerse'
    )
    expect(legalText).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(<ThemeProvider theme={theme}>
            <Legal />
        </ThemeProvider>)
    expect(container).toMatchSnapshot()
  })
})
