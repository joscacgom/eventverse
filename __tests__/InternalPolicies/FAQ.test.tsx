import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import FAQ from '@/components/InternalPolicies/FAQ'

describe('FAQ component', () => {
  beforeEach(() => {
    render(
        <ThemeProvider theme={theme}>
            <FAQ />
        </ThemeProvider>)
  })

  it('renders FAQ questions', () => {
    const question1 = screen.getByText('¿Cómo es el proceso de compra?')
    const question2 = screen.getByText('¿Qué son los tickets NFT?')
    const question3 = screen.getByText('¿Cuáles son las ventajas de los tickets NFT?')
    const question4 = screen.getByText('¿Dónde puedo ver los tickets que he comprado?')
    const question5 = screen.getByText('Soy organizador ¿Cómo creo un evento? ¿Cómo funciona la emisión de NFTs?')
    const question6 = screen.getByText('¿Cuáles son las restricciones que puedo definir en un evento?')
    const question7 = screen.getByText('¿Qué son las regalías (royalties) de reventa?')
    const question8 = screen.getByText('¿EventVerse se lleva comisión?')
    const question9 = screen.getByText('Autenticidad de los tickets')
    const question10 = screen.getByText('¿Cómo funciona el registro?')
    const question11 = screen.getByText('¿Cómo añadir fondos a mi cuenta?')
    const question12 = screen.getByText('¿Puedo editar los datos de mi perfil?')
    const question13 = screen.getByText('¿Puedo poner en reventa mis tickets?')

    expect(question1).toBeInTheDocument()
    expect(question2).toBeInTheDocument()
    expect(question3).toBeInTheDocument()
    expect(question4).toBeInTheDocument()
    expect(question5).toBeInTheDocument()
    expect(question6).toBeInTheDocument()
    expect(question7).toBeInTheDocument()
    expect(question8).toBeInTheDocument()
    expect(question9).toBeInTheDocument()
    expect(question10).toBeInTheDocument()
    expect(question11).toBeInTheDocument()
    expect(question12).toBeInTheDocument()
    expect(question13).toBeInTheDocument()
  })

  it('renders paragraphs for each question', () => {
    const question1Paragraph1 = screen.getByText('El proceso de compra en EventVerse es muy sencillo, solo debes seguir los siguientes pasos:')
    const question1Paragraph2 = screen.getByText('1. Selecciona el evento que deseas comprar.')
    const question1Paragraph3 = screen.getByText('2. Selecciona la cantidad de entradas que deseas comprar.')
    const question1Paragraph4 = screen.getByText('3. Selecciona el método de pago. (Tarjeta de Crédito/Débito o Wallet de criptomonedas)')
    const question1Paragraph5 = screen.getByText('4. Si seleccionas el método de pago con tarjeta de crédito/débito, ingresa los datos de tu tarjeta y confirma la compra.')

    expect(question1Paragraph1).toBeInTheDocument()
    expect(question1Paragraph2).toBeInTheDocument()
    expect(question1Paragraph3).toBeInTheDocument()
    expect(question1Paragraph4).toBeInTheDocument()
    expect(question1Paragraph5).toBeInTheDocument()
  })
})
