/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import UserTicketList from '@/components/UserInfo/UserTicketList'
import { MOCK_USER } from '@/models/Users/mock'

describe('UserTicketList component', () => {
  const userData = MOCK_USER

  it('renders tickets list with correct data', () => {
    render(
            <ThemeProvider theme={theme}>
                <UserTicketList userData={userData} />
           </ThemeProvider>
    )

    expect(screen.getByText('Bienvenido Jorge! 👋')).toBeInTheDocument()
    expect(screen.getByText('Estos son los tickets que has comprado')).toBeInTheDocument()

    const searchInput = screen.getByPlaceholderText('🔎 Buscar tickets...')
    fireEvent.change(searchInput, { target: { value: 'Medusa' } })

    expect(screen.getByText('Medusa Festival')).toBeInTheDocument()
    expect(screen.getByText('x1')).toBeInTheDocument()
    expect(screen.getByText('90€')).toBeInTheDocument()
    expect(screen.getByText('Activo')).toHaveStyle('color: #539362')
    expect(() => screen.getByText('Festival de cine')).toThrow()
  })
})
