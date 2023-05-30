// /* eslint-disable no-undef */
// import 'jest-styled-components'
// import '@testing-library/jest-dom'

// import { render, screen, fireEvent } from '@testing-library/react'
// import theme from '@/theme'
// import { ThemeProvider } from 'styled-components'
// import EventCreationForm from '@/components/Event/EventCreationForm'

// describe('EventCreationForm component', () => {
//   it('renders all input fields', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     expect(screen.getByPlaceholderText('Introduce el nombre del evento')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Describa de forma clara y concisa el evento')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Resuma de forma clara en qué consiste el evento')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Selecciona el tipo de evento')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Selecciona la categoría del evento')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Introduce la ubicación del evento')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Introduce el país del evento')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Introduce la zona horaria')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Introduce la fecha de comienzo')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Introduce la fecha de clausura')).toBeInTheDocument()
//     expect(screen.getByLabelText('Imagen')).toBeInTheDocument()
//   })

//   it('renders default image when no image is selected', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     expect(screen.getByAltText('Default image')).toBeInTheDocument()
//   })

//   it('renders selected image', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     const imageInput = screen.getByLabelText('Imagen')
//     const image = new File(['(⌐□_□)'], 'image.png', { type: 'image/png' })
//     fireEvent.change(imageInput, { target: { files: [image] } })
//     expect(screen.getByAltText('Default image')).toBeInTheDocument()
//   })

//   it('renders google maps image', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     expect(screen.getByAltText('Google Maps image')).toBeInTheDocument()
//   })

//   it('renders options for event type', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     const eventTypeSelect = screen.getByPlaceholderText('Selecciona el tipo de evento')
//     expect(eventTypeSelect).toContainElement(screen.getByText('Selecciona un tipo'))
//     expect(eventTypeSelect).toContainElement(screen.getByText('Online'))
//     expect(eventTypeSelect).toContainElement(screen.getByText('Presencial'))
//   })

//   it('renders options for event category', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     const eventCategorySelect = screen.getByPlaceholderText('Selecciona la categoría del evento')
//     expect(eventCategorySelect).toContainElement(screen.getByText('Selecciona una categoría'))
//     expect(eventCategorySelect).toContainElement(screen.getByText('Concierto'))
//     expect(eventCategorySelect).toContainElement(screen.getByText('Deporte'))
//     expect(eventCategorySelect).toContainElement(screen.getByText('Teatro'))
//     expect(eventCategorySelect).toContainElement(screen.getByText('Arte'))
//   })

//   it('renders options for event country', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     const eventCountrySelect = screen.getByPlaceholderText('Introduce el país del evento')
//     expect(eventCountrySelect).toContainElement(screen.getByText('Selecciona un país'))
//     expect(eventCountrySelect).toContainElement(screen.getByText('España'))
//     expect(eventCountrySelect).toContainElement(screen.getByText('Francia'))
//     expect(eventCountrySelect).toContainElement(screen.getByText('Italia'))
//     expect(eventCountrySelect).toContainElement(screen.getByText('Alemania'))
//   })

//   it('renders options for event timezone', () => {
//     render(
//         <ThemeProvider theme={theme}>
//             <EventCreationForm />
//         </ThemeProvider>)
//     const eventTimezoneSelect = screen.getByPlaceholderText('Introduce la zona horaria')
//     expect(eventTimezoneSelect).toContainElement(screen.getByText('Selecciona una zona horaria'))
//     expect(eventTimezoneSelect).toContainElement(screen.getByText('GMT+1'))
//     expect(eventTimezoneSelect).toContainElement(screen.getByText('GMT+2'))
//     expect(eventTimezoneSelect).toContainElement(screen.getByText('GMT+3'))
//     expect(eventTimezoneSelect).toContainElement(screen.getByText('GMT+4'))
//   })
// })
