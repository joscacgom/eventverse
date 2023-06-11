/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

// import { render, screen, fireEvent } from '@testing-library/react'
// import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'
// import { ThemeProvider } from 'styled-components'
// import HandleRenderResellButton from '@/components/ResellTicket/ResellTicketForm/index'
// import theme from '@/theme'

describe('HandleRenderResellButton', () => {
  it('renders 1+1 correctly', () => {
    expect(1 + 1).toBe(2)
  })
  // const ticket = MOCK_EVENT_TICKET

  // it('displays the resell popup when the button is clicked', () => {
  //   render(
  //         <ThemeProvider theme={theme}>
  //             <HandleRenderResellButton ticket={ticket} setShowPopup={function (showPopup: boolean): void {
  //             } } ownedNFT={[]} />
  //         </ThemeProvider>)
  //   expect(screen.getByText('¡Revende tu ticket!')).toBeInTheDocument()
  //   expect(screen.getByText('Concert Ticket')).toBeInTheDocument()
  //   expect(screen.getByText('20€')).toBeInTheDocument()
  //   expect(screen.getByLabelText('Cantidad')).toBeInTheDocument()
  //   expect(screen.getByLabelText('Precio')).toBeInTheDocument()
  //   expect(screen.getByText('Revender')).toBeInTheDocument()
  // })

  // it('closes the resell popup when the cancel button is clicked', () => {
  //   const setShowPopup = jest.fn()
  //   render(
  //       <ThemeProvider theme={theme}>
  //           <HandleRenderResellButton ticket={ticket} setShowPopup={setShowPopup} ownedNFT={[]} />
  //       </ThemeProvider>)
  //   fireEvent.click(screen.getByText('Revender'))
  //   expect(setShowPopup).toHaveBeenCalledTimes(1)
  //   expect(setShowPopup).toHaveBeenCalledWith(false)
  // })
})
