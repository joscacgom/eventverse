import React, { useState } from 'react'
import { EventCreationMainContainer, EventCreationHeader, EventCreationFormImagePreview, EventCreationFormInputDate, EventCreationFormContainer, EventCreationInputOption, EventCreationFormLabel, EventCreationFormInput, EventCreationFormTextArea, EventCreationFormImageFile, EventCreationFormLocationImage } from './styles'
const EventCreationForm = () => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }

  const handleImagePreviewRender = () => {
    if (imagePreview !== null) {
      return (<EventCreationFormImagePreview src={imagePreview as string} alt='Selected image' />)
    } else {
      return (<EventCreationFormImagePreview src='https://via.placeholder.com/150' alt='Default image' />)
    }
  }

  return (
        <EventCreationMainContainer>
            <EventCreationHeader>Información del evento</EventCreationHeader>
            <EventCreationFormContainer>
                        <EventCreationFormLabel htmlFor='event-name'>Nombre</EventCreationFormLabel>
                      <EventCreationFormInput type='text' placeholder='Introduce el nombre del evento' id='event-name' name='event-name'></EventCreationFormInput>

                      <EventCreationFormLabel htmlFor='event-description'>Descripción</EventCreationFormLabel>
                      <EventCreationFormTextArea placeholder='Describa de forma clara y concisa el evento' id='event-description' name='event-description'></EventCreationFormTextArea>

                      <EventCreationFormLabel htmlFor='event-summary'>Resumen</EventCreationFormLabel>
                      <EventCreationFormTextArea placeholder='Resuma de forma clara en qué consiste el evento' id='event-summary' name='event-summary'></EventCreationFormTextArea>

                      <EventCreationFormLabel htmlFor='event-type'>Tipo</EventCreationFormLabel>
                      <EventCreationFormInput as='select' placeholder='Selecciona el tipo de evento' id='event-type' name='event-type'>
                          <EventCreationInputOption value="">Selecciona un tipo</EventCreationInputOption>
                          <EventCreationInputOption value="online">Online</EventCreationInputOption>
                          <EventCreationInputOption value="presencial">Presencial</EventCreationInputOption>
                      </EventCreationFormInput>

                      <EventCreationFormLabel htmlFor='event-category'>Categoría</EventCreationFormLabel>
                      <EventCreationFormInput as="select" placeholder='Selecciona la categoría del evento' id='event-category' name='event-category'>
                          <EventCreationInputOption value="">Selecciona una categoría</EventCreationInputOption>
                          <EventCreationInputOption value="concierto">Concierto</EventCreationInputOption>
                          <EventCreationInputOption value="deporte">Deporte</EventCreationInputOption>
                          <EventCreationInputOption value="teatro">Teatro</EventCreationInputOption>
                          <EventCreationInputOption value="arte">Arte</EventCreationInputOption>
                      </EventCreationFormInput>
                              <EventCreationFormLabel htmlFor='location'>Ubicación</EventCreationFormLabel>
              <EventCreationFormInput id='location' name='location' type='search' placeholder='Introduce la ubicación del evento'></EventCreationFormInput>

              <EventCreationFormLocationImage src={'/images/google-maps.png'} alt='Google Maps image' />

              <EventCreationFormLabel htmlFor='country'>País</EventCreationFormLabel>
              <EventCreationFormInput id='country' name='country' as='select' placeholder='Introduce el país del evento'>
                  <EventCreationInputOption value="">Selecciona un país</EventCreationInputOption>
                  <EventCreationInputOption value="España">España</EventCreationInputOption>
                  <EventCreationInputOption value="Francia">Francia</EventCreationInputOption>
                  <EventCreationInputOption value="Italia">Italia</EventCreationInputOption>
                  <EventCreationInputOption value="Alemania">Alemania</EventCreationInputOption>
              </EventCreationFormInput>

              <EventCreationFormLabel htmlFor='timezone'>Zona Horaria</EventCreationFormLabel>
              <EventCreationFormInput id='timezone' name='timezone' as='select' placeholder='Introduce la zona horaria'>
                  <EventCreationInputOption value="">Selecciona una zona horaria</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+1">GMT+1</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+2">GMT+2</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+3">GMT+3</EventCreationInputOption>
                  <EventCreationInputOption value="GMT+4">GMT+4</EventCreationInputOption>
              </EventCreationFormInput>

              <EventCreationFormLabel htmlFor='start-date'>Fecha de Inicio</EventCreationFormLabel>
              <EventCreationFormInputDate id='start-date' name='start-date' type='datetime-local' placeholder='Introduce la fecha de comienzo'>
              </EventCreationFormInputDate>

              <EventCreationFormLabel htmlFor='end-date'>Fecha de Finalización</EventCreationFormLabel>
              <EventCreationFormInputDate id='end-date' name='end-date' type='datetime-local' placeholder='Introduce la fecha de clausura'></EventCreationFormInputDate>

              <EventCreationFormLabel htmlFor='image'>Imagen</EventCreationFormLabel>
              <EventCreationFormImageFile id='image' name='image' type='file' accept='image/jpeg, image/png' onChange={handleImageChange}></EventCreationFormImageFile>
              {handleImagePreviewRender()}

            </EventCreationFormContainer>

        </EventCreationMainContainer>
  )
}

export default EventCreationForm
