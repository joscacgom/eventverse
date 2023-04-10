/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { MOCK_USER } from '@/models/Users/mock'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

import UserMainContent from '@/components/UserInfo/UserMainContent'

describe('UserMainContent', () => {
  const userData = MOCK_USER
  it('renders user information correctly', () => {
    render(
        <ThemeProvider theme={theme}>
            <UserMainContent userData={userData} />
        </ThemeProvider>
    )

    expect(screen.getByText('Bienvenido Jorge! 👋')).toBeInTheDocument()
    expect(screen.getByAltText('user')).toBeInTheDocument()
    expect(screen.getByText('Información de tu cuenta')).toBeInTheDocument()
    expect(screen.getByText(userData.name)).toBeInTheDocument()
    expect(screen.getByText(userData.email)).toBeInTheDocument()
    expect(screen.getByText('Información de la cartera')).toBeInTheDocument()
    expect(screen.getByText(userData.address)).toBeInTheDocument()
    expect(screen.getByText(`${userData.balance} ~ MATIC`)).toBeInTheDocument()
  })

  it('shows the private key when the button is clicked', () => {
    render(<ThemeProvider theme={theme}>
            <UserMainContent userData={userData} />
        </ThemeProvider>)
    const button = screen.getByText('Obtener clave privada')
    expect(screen.queryByText(userData.privateKey)).not.toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByText(userData.privateKey)).toBeInTheDocument()
  })
})