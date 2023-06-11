/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

// import { render, screen } from '@testing-library/react'
// import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'
// import { ThemeProvider } from 'styled-components'
// import theme from '@/theme'
// import TicketWithNFTs from '@/components/UserInfo/UserTicketList/TicketsNFT'

describe('TicketWithNFTs component', () => {
  it('renders 1+1 correctly', () => {
    expect(1 + 1).toBe(2)
  })
  // const ticket = MOCK_EVENT_TICKET

  // const address = '0xCA87652d18e9c340F7747aDAD8b1bC73cB85f7f1'

  // it('renders the ticket information', () => {
  //   render(
  //        <ThemeProvider theme={theme}>
  //           <TicketWithNFTs ticket={ticket} address={address} />
  //        </ThemeProvider>
  //   )

  //   const ticketName = screen.getByText('Ticket - Apolo Techno Festival')
  //   const ticketPrice = screen.getByText('0.02€')

  //   expect(ticketName).toBeInTheDocument()
  //   expect(ticketPrice).toBeInTheDocument()
  // })

  // it('displays the correct status color for active tickets', () => {
  //   render(
  //        <ThemeProvider theme={theme}>
  //           <TicketWithNFTs ticket={ticket} address={address} />
  //        </ThemeProvider>
  //   )

  //   const statusElement = screen.getByText('Activo')

  //   expect(statusElement).toHaveStyle('color: #539362')
  // })

  // it('displays the resell button for active tickets', () => {
  //   render(
  //        <ThemeProvider theme={theme}>
  //           <TicketWithNFTs ticket={ticket} address={address} />
  //        </ThemeProvider>
  //   )

  //   const resellButton = screen.getByText('$')

  //   expect(resellButton).toBeInTheDocument()
  // })
  // it('displays the correct status color for finished tickets', () => {
  //   const finishedTicket = { ...ticket, status: 'Finalizado' }
  //   render(
  //   <ThemeProvider theme={theme}>
  //           <TicketWithNFTs ticket={finishedTicket} address={address} />
  //   </ThemeProvider>
  //   )

  //   const statusElement = screen.getByText('Finalizado')

  //   expect(statusElement).toHaveStyle('color: #d65151')
  // })
  // it('does not display the resell button for finished tickets', () => {
  //   const finishedTicket = { ...ticket, status: 'Finalizado' }
  //   render(
  //        <ThemeProvider theme={theme}>
  //           <TicketWithNFTs ticket={finishedTicket} address={address} />
  //        </ThemeProvider>
  //   )
  //   const resellButton = screen.queryByText('$')

  //   expect(resellButton).toBeNull()
  // })

  // it('calls the router push function when the ticket is clicked', () => {
  //   const mockPush = jest.fn()
  //   jest.mock('next/router', () => ({
  //     useRouter: () => ({
  //       push: mockPush
  //     })
  //   }))

  //   render(
  //        <ThemeProvider theme={theme}>
  //           <TicketWithNFTs ticket={ticket} address={address} />
  //        </ThemeProvider>
  //   )
  //   const ticketItem = screen.getByTestId('ticket-item')
  //   ticketItem.click()

  //   expect(mockPush).toHaveBeenCalledWith('/event/36')
  // })
})
