// /* eslint-disable no-undef */
// import 'jest-styled-components'
// import '@testing-library/jest-dom'

// import { render, screen, fireEvent } from '@testing-library/react'
// import theme from '@/theme'
// import { ThemeProvider } from 'styled-components'
// import EventTicketCreationForm from '@/components/Event/EventTicketCreationForm'

// describe('EventTicketCreationForm', () => {
//   it('renders all the form elements', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventTicketCreationForm />
//         </ThemeProvider>)
//     expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
//     expect(screen.getByLabelText('Descripción')).toBeInTheDocument()
//     expect(screen.getByLabelText('Cantidad')).toBeInTheDocument()
//     expect(screen.getByLabelText('Límite por usuario')).toBeInTheDocument()
//     expect(screen.getByLabelText('Precio')).toBeInTheDocument()
//     expect(screen.getByLabelText('Royalties')).toBeInTheDocument()
//     expect(screen.getByLabelText('Fecha de Inicio')).toBeInTheDocument()
//     expect(screen.getByLabelText('Fecha de Finalización')).toBeInTheDocument()
//     expect(screen.getByLabelText('Imagen')).toBeInTheDocument()
//   })

//   it('displays a preview of the selected image', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventTicketCreationForm />
//         </ThemeProvider>)
//     const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' })
//     fireEvent.change(screen.getByLabelText('Imagen'), { target: { files: [file] } })
//     expect(screen.getByAltText('Default image')).toBeInTheDocument()
//   })

//   it('displays a default image if no image is selected', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventTicketCreationForm />
//         </ThemeProvider>)
//     expect(screen.getByAltText('Default image')).toBeInTheDocument()
//   })
// })
