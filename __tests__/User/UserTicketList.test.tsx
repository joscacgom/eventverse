/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import UserTicketList from '@/components/UserInfo/UserTicketList'
import { MOCK_USER } from '@/models/Users/mock'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

describe('UserTicketList component', () => {
  const userData = MOCK_USER

  it('renders the welcome message', () => {
    render(
      <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserTicketList userData={userData} />
           </ThemeProvider>
      </QueryClientProvider>
    )
    const welcomeMessage = screen.getByText(`Bienvenido ${userData.name.split(' ')[0]}! 👋`)
    expect(welcomeMessage).toBeInTheDocument()
  })

  it('renders the ticket list header', () => {
    render(
      <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserTicketList userData={userData} />
           </ThemeProvider>
      </QueryClientProvider>
    )
    const ticketListHeader = screen.getByText('Estos son los tickets que has comprado')
    expect(ticketListHeader).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(
      <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserTicketList userData={userData} />
           </ThemeProvider>
      </QueryClientProvider>
    )
    const searchInput = screen.getByPlaceholderText('🔎 Buscar tickets...')
    expect(searchInput).toBeInTheDocument()
  })

  it('renders loading message when tickets are loading', () => {
    render(
      <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserTicketList userData={userData} />
           </ThemeProvider>
      </QueryClientProvider>
    )
    const loadingMessage = screen.getByText('Loading tickets...')
    expect(loadingMessage).toBeInTheDocument()
  })

  it('renders no tickets message when no tickets are available', () => {
    render(
      <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserTicketList userData={userData} />
           </ThemeProvider>
      </QueryClientProvider>
    )
    const noTicketsMessage = screen.getByText('No tienes tickets')
    expect(noTicketsMessage).toBeInTheDocument()
  })

  // it('renders the tickets when available', () => {
  //   const tickets = [
  //     { name: 'Ticket 1', price: 10, quantity: 1, start_date: '2021-10-10', end_date: '2021-10-11', description: 'Ticket 1 description' },
  //     { name: 'Ticket 2', price: 20, quantity: 2, start_date: '2023-10-10', end_date: '2023-10-11', description: 'Ticket 2 description' }
  //   ]
  //   jest.mock('@/hooks/useTicketsByUser', () => ({
  //     useTicketsByUser: () => ({
  //       tickets,
  //       isLoading: false,
  //       error: null
  //     })
  //   }))

  //   render(
  //           <ThemeProvider theme={theme}>
  //               <UserTicketList userData={userData} />
  //          </ThemeProvider>
  //   )

  //   const ticket1 = screen.getByText('Ticket 1')
  //   const ticket2 = screen.getByText('Ticket 2')

  //   expect(ticket1).toBeInTheDocument()
  //   expect(ticket2).toBeInTheDocument()
  // })
})
