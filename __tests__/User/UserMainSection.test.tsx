/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { MOCK_USER } from '@/models/Users/mock'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

import UserMainContent from '@/components/UserInfo/UserMainContent'

describe('UserMainContent', () => {
  it('renders user information correctly', () => {
    const userData = MOCK_USER
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
    expect(screen.getByText(`${userData.balance} MATIC`)).toBeInTheDocument()
    expect(screen.getByText('Obtener clave privada')).toBeInTheDocument()
  })
})
