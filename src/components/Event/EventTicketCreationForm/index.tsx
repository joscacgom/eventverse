import React, { useState } from 'react'
import { EventTicketCreationMainContainer, EventTicketCreationHeader, EventTicketCreationFormImagePreview, EventTicketCreationFormInputDate, EventTicketCreationFormContainer, EventTicketCreationFormLabel, EventTicketCreationFormInput, EventTicketCreationFormTextArea, EventTicketCreationFormImageFile } from './styles'
const EventTicketCreationForm = () => {
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
      return (<EventTicketCreationFormImagePreview src={imagePreview as string} alt='Selected image' />)
    } else {
      return (<EventTicketCreationFormImagePreview src='https://via.placeholder.com/150' alt='Default image' />)
    }
  }

  return (
        <EventTicketCreationMainContainer>
            <EventTicketCreationHeader>Información de las entradas</EventTicketCreationHeader>
            <EventTicketCreationFormContainer>
                <EventTicketCreationFormLabel htmlFor='ticket-name'>Nombre</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput type='text' placeholder='Introduce el nombre de la colección de entradas' id='ticket-name' name='ticket-name'></EventTicketCreationFormInput>

        <EventTicketCreationFormLabel htmlFor='ticket-description'>Descripción</EventTicketCreationFormLabel>
        <EventTicketCreationFormTextArea placeholder='Describa de forma clara y concisa el evento' id='ticket-description' name='ticket-description'></EventTicketCreationFormTextArea>

        <EventTicketCreationFormLabel htmlFor='ticket-amount'>Cantidad</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput type='number' min='1' placeholder='Introduce la cantidad de entradas' id='ticket-amount' name='ticket-amount'></EventTicketCreationFormInput>

        <EventTicketCreationFormLabel htmlFor='ticket-limit'>Límite por usuario</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput type='number' min='1' placeholder='Introduce el límite de entradas por usuario' id='ticket-limit' name='ticket-limit'></EventTicketCreationFormInput>

         <EventTicketCreationFormLabel htmlFor='ticket-price'>Precio</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput type='number' min='0' placeholder='Introduce el precio de las entradas (€)' id='ticket-price' name='ticket-price'></EventTicketCreationFormInput>

         <EventTicketCreationFormLabel htmlFor='ticket-royalties'>Royalties</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput type='number' min='0' max='100' placeholder='Introduce un porcentaje para las regalías de las reventas' id='ticket-royalties' name='ticket-royalties'></EventTicketCreationFormInput>

    <EventTicketCreationFormLabel htmlFor='start-date'>Fecha de Inicio</EventTicketCreationFormLabel>
    <EventTicketCreationFormInputDate id='start-date' name='start-date' type='datetime-local' placeholder='Introduce la fecha de comienzo'>
    </EventTicketCreationFormInputDate>

    <EventTicketCreationFormLabel htmlFor='end-date'>Fecha de Finalización</EventTicketCreationFormLabel>
    <EventTicketCreationFormInputDate id='end-date' name='end-date' type='datetime-local' placeholder='Introduce la fecha de clausura'></EventTicketCreationFormInputDate>

    <EventTicketCreationFormLabel htmlFor='image'>Imagen</EventTicketCreationFormLabel>
    <EventTicketCreationFormImageFile id='image' name='image' type='file' accept='image/jpeg, image/png' onChange={handleImageChange}></EventTicketCreationFormImageFile>
    {handleImagePreviewRender()}

     </EventTicketCreationFormContainer>

    </EventTicketCreationMainContainer>)
}

export default EventTicketCreationForm
