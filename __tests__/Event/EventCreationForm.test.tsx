/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import EventCreationForm from '@/components/Event/EventCreationForm'

describe('EventCreationForm component', () => {
  it('renders all input fields', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    expect(screen.getByPlaceholderText('Introduce el nombre del evento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Describa de forma clara y concisa el evento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Resuma de forma clara en qué consiste el evento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Selecciona el tipo de evento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Selecciona la categoría del evento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Introduce la ubicación del evento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Introduce el país del evento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Introduce la zona horaria')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Introduce la fecha de comienzo')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Introduce la fecha de clausura')).toBeInTheDocument()
    expect(screen.getByLabelText('Imagen')).toBeInTheDocument()
  })

  it('renders default image when no image is selected', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    expect(screen.getByAltText('Default image')).toBeInTheDocument()
  })

  it('renders selected image', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    const imageInput = screen.getByLabelText('Imagen')
    const image = new File(['(⌐□_□)'], 'image.png', { type: 'image/png' })
    fireEvent.change(imageInput, { target: { files: [image] } })
    expect(screen.getByAltText('Default image')).toBeInTheDocument()
  })

  it('renders google maps image', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    expect(screen.getByAltText('Google Maps image')).toBeInTheDocument()
  })

  it('renders options for event type', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    const eventTypeSelect = screen.getByPlaceholderText('Selecciona el tipo de evento')
    expect(eventTypeSelect).toContainElement(screen.getByText('Selecciona un tipo'))
    expect(eventTypeSelect).toContainElement(screen.getByText('Online'))
    expect(eventTypeSelect).toContainElement(screen.getByText('Presencial'))
  })

  it('renders options for event category', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    const eventCategorySelect = screen.getByPlaceholderText('Selecciona la categoría del evento')
    expect(eventCategorySelect).toContainElement(screen.getByText('Selecciona una categoría'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Música'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Festivales'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Teatro'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Cine'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Negocios'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Deportes'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Arte'))
    expect(eventCategorySelect).toContainElement(screen.getByText('Comida'))
  })

  it('renders options for event country', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    const eventCountrySelect = screen.getByPlaceholderText('Introduce el país del evento')
    expect(eventCountrySelect).toContainElement(screen.getByText('Selecciona un país'))
    expect(eventCountrySelect).toContainElement(screen.getByText('España'))
    expect(eventCountrySelect).toContainElement(screen.getByText('Francia'))
    expect(eventCountrySelect).toContainElement(screen.getByText('Italia'))
    expect(eventCountrySelect).toContainElement(screen.getByText('Alemania'))
    expect(eventCountrySelect).toContainElement(screen.getByText('Grecia'))
    expect(eventCountrySelect).toContainElement(screen.getByText('Portugal'))
    expect(eventCountrySelect).toContainElement(screen.getByText('Reino Unido'))
  })

  it('renders options for event timezone', () => {
    const onChange = jest.fn()
    const formData = {}

    render(
        <ThemeProvider theme={theme}>
             <EventCreationForm onChange={onChange} formData={formData} />
        </ThemeProvider>)
    const eventTimezoneSelect = screen.getByPlaceholderText('Introduce la zona horaria')
    expect(eventTimezoneSelect).toContainElement(screen.getByText('Selecciona una zona horaria'))
    expect(eventTimezoneSelect).toContainElement(screen.getByText('GMT+0: London, Lisbon, Casablanca'))
    expect(eventTimezoneSelect).toContainElement(screen.getByText('GMT+1: Paris, Berlin, Madrid'))
    expect(eventTimezoneSelect).toContainElement(screen.getByText('GMT+2: Athens, Istanbul, Helsinki'))
  })
})
