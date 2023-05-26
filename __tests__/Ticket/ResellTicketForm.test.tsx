// /* eslint-disable no-undef */
// import 'jest-styled-components'
// import '@testing-library/jest-dom'

// import { render, screen, fireEvent } from '@testing-library/react'
// import { MOCK_EVENT_TICKET } from '@/models/Tickets/mock'
// import { ThemeProvider } from 'styled-components'
// import HandleRenderResellButton from '@/components/ResellTicket/ResellTicketForm/index'
// import theme from '@/theme'

// describe('HandleRenderResellButton', () => {
//   const ticket = MOCK_EVENT_TICKET

//   it('renders the button correctly', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <HandleRenderResellButton ticket={ticket} />
//         </ThemeProvider>)
//     expect(screen.getByText('$')).toBeInTheDocument()
//   })

//   it('displays the resell popup when the button is clicked', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <HandleRenderResellButton ticket={ticket} />
//         </ThemeProvider>)
//     fireEvent.click(screen.getByText('$'))
//     expect(screen.getByText('¡Revende tu ticket!')).toBeInTheDocument()
//     expect(screen.getByLabelText('Cantidad')).toBeInTheDocument()
//     expect(screen.getByLabelText('Precio')).toBeInTheDocument()
//   })

//   it('closes the resell popup when the cancel button is clicked', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <HandleRenderResellButton ticket={ticket} />
//         </ThemeProvider>)
//     fireEvent.click(screen.getByText('$'))
//     expect(screen.getByText('¡Revende tu ticket!')).toBeInTheDocument()
//     fireEvent.click(screen.getByText('X'))
//     expect(screen.queryByText('¡Revende tu ticket!')).toBeNull()
//   })
// })
