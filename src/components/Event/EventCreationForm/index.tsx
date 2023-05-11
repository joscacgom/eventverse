import React, { FC, useState } from 'react'
import { EventCreationMainContainer, EventCreationHeader, EventCreationFormImagePreview, EventCreationFormInputDate, EventCreationFormContainer, EventCreationInputOption, EventCreationFormLabel, EventCreationFormInput, EventCreationFormTextArea, EventCreationFormImageFile, EventCreationFormLocationImage } from './styles'

interface Props {
  onChange: (data: any) => void,
  formData: any
}

const EventCreationForm:FC<Props> = ({ onChange, formData }) => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    onChange({ [name]: value })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      const { name } = e.target
      onChange({ [name]: file })
    } else {
      setImagePreview(null)
    }
  }

  const handleImagePreviewRender = () => {
    if (imagePreview !== null) {
      return <EventCreationFormImagePreview src={imagePreview as string} alt='Selected image' />
    } else if (formData.image && formData.image instanceof File) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(formData.image)
      return <EventCreationFormImagePreview src={''} alt='Previously uploaded image' />
    } else {
      return <EventCreationFormImagePreview src='https://via.placeholder.com/150' alt='Default image' />
    }
  }

  return (
        <EventCreationMainContainer>
            <EventCreationHeader>Información del evento</EventCreationHeader>
            <EventCreationFormContainer>
                        <EventCreationFormLabel htmlFor='event-name'>Nombre</EventCreationFormLabel>
                      <EventCreationFormInput type='text' value={formData.eventName || ''} required onChange={handleChange} placeholder='Introduce el nombre del evento' id='event-name' name='eventName'></EventCreationFormInput>

                      <EventCreationFormLabel htmlFor='event-description'>Descripción</EventCreationFormLabel>
                      <EventCreationFormTextArea value={formData.eventDescription || ''} required onChange={handleChange} placeholder='Describa de forma clara y concisa el evento' id='event-description' name='eventDescription'></EventCreationFormTextArea>

                      <EventCreationFormLabel htmlFor='event-summary'>Resumen</EventCreationFormLabel>
                      <EventCreationFormTextArea value={formData.eventSummary || ''} required onChange={handleChange} placeholder='Resuma de forma clara en qué consiste el evento' id='event-summary' name='eventSummary'></EventCreationFormTextArea>

                      <EventCreationFormLabel htmlFor='event-type'>Tipo</EventCreationFormLabel>
                      <EventCreationFormInput value={formData.eventType || ''} as='select' required onChange={handleChange} placeholder='Selecciona el tipo de evento' id='event-type' name='eventType'>
                          <EventCreationInputOption value="">Selecciona un tipo</EventCreationInputOption>
                          <EventCreationInputOption value="online">Online</EventCreationInputOption>
                          <EventCreationInputOption value="presencial">Presencial</EventCreationInputOption>
                      </EventCreationFormInput>

                      <EventCreationFormLabel htmlFor='event-category'>Categoría</EventCreationFormLabel>
                      <EventCreationFormInput value={formData.eventCategory || ''} as="select" required onChange={handleChange} placeholder='Selecciona la categoría del evento' id='event-category' name='eventCategory'>
                          <EventCreationInputOption value="">Selecciona una categoría</EventCreationInputOption>
                          <EventCreationInputOption value="concierto">Concierto</EventCreationInputOption>
                          <EventCreationInputOption value="deporte">Deporte</EventCreationInputOption>
                          <EventCreationInputOption value="teatro">Teatro</EventCreationInputOption>
                          <EventCreationInputOption value="arte">Arte</EventCreationInputOption>
                      </EventCreationFormInput>
                <EventCreationFormLabel htmlFor='location'>Ubicación</EventCreationFormLabel>
              <EventCreationFormInput value={formData.location || ''} id='location' required onChange={handleChange} name='location' type='search' placeholder='Introduce la ubicación del evento'></EventCreationFormInput>

              <EventCreationFormLocationImage src={'/images/google-maps.png'} alt='Google Maps image' />

              <EventCreationFormLabel htmlFor='country'>País</EventCreationFormLabel>
              <EventCreationFormInput value={formData.country || ''} id='country' required onChange={handleChange} name='country' as='select' placeholder='Introduce el país del evento'>
                  <EventCreationInputOption value="">Selecciona un país</EventCreationInputOption>
                  <EventCreationInputOption value="España">España</EventCreationInputOption>
                  <EventCreationInputOption value="Francia">Francia</EventCreationInputOption>
                  <EventCreationInputOption value="Italia">Italia</EventCreationInputOption>
                  <EventCreationInputOption value="Alemania">Alemania</EventCreationInputOption>
              </EventCreationFormInput>

              <EventCreationFormLabel htmlFor='timezone'>Zona Horaria</EventCreationFormLabel>
              <EventCreationFormInput value={formData.timezone || ''} id='timezone' required onChange={handleChange} name='timezone' as='select' placeholder='Introduce la zona horaria'>
                  <EventCreationInputOption value="">Selecciona una zona horaria</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+1">GMT+1</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+2">GMT+2</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+3">GMT+3</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+4">GMT+4</EventCreationInputOption>
              </EventCreationFormInput>

              <EventCreationFormLabel htmlFor='start-date'>Fecha de Inicio</EventCreationFormLabel>
              <EventCreationFormInputDate value={formData.startDate || ''} id='start-date' required onChange={handleChange} name='startDate' type='datetime-local' placeholder='Introduce la fecha de comienzo'>
              </EventCreationFormInputDate>

              <EventCreationFormLabel htmlFor='end-date'>Fecha de Finalización</EventCreationFormLabel>
              <EventCreationFormInputDate value={formData.endDate || ''} id='end-date' required onChange={handleChange} name='endDate' type='datetime-local' placeholder='Introduce la fecha de clausura'></EventCreationFormInputDate>

              <EventCreationFormLabel htmlFor='image'>Imagen</EventCreationFormLabel>
              <EventCreationFormImageFile id='image' required={imagePreview ? false : undefined} name='image' type='file' accept='image/jpeg, image/png' onChange={handleImageChange}></EventCreationFormImageFile>
              {handleImagePreviewRender()}

            </EventCreationFormContainer>

        </EventCreationMainContainer>
  )
}

export default EventCreationForm
