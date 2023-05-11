import React, { FC, useState } from 'react'
import { EventTicketCreationMainContainer, EventTicketCreationHeader, EventTicketCreationFormImagePreview, EventTicketCreationFormInputDate, EventTicketCreationFormContainer, EventTicketCreationFormLabel, EventTicketCreationFormInput, EventTicketCreationFormTextArea, EventTicketCreationFormImageFile } from './styles'
interface Props {
  onChange: (data: any) => void,
  formData: any
}
const EventTicketCreationForm:FC<Props> = ({ onChange, formData }) => {
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
    if (imagePreview) {
      return <EventTicketCreationFormImagePreview src={imagePreview as string} alt='Selected image' />
    } else if (formData.image instanceof File) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(formData.image)
      return <EventTicketCreationFormImagePreview src={''} alt='Previously uploaded image' />
    } else {
      return <EventTicketCreationFormImagePreview src='https://via.placeholder.com/150' alt='Default image' />
    }
  }

  return (
        <EventTicketCreationMainContainer>
            <EventTicketCreationHeader>Información de las entradas</EventTicketCreationHeader>
            <EventTicketCreationFormContainer>
                <EventTicketCreationFormLabel htmlFor='ticket-name'>Nombre</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput value={formData.ticketName || ''} type='text' required onChange={handleChange} placeholder='Introduce el nombre de la colección de entradas' id='ticket-name' name='ticketName'></EventTicketCreationFormInput>

        <EventTicketCreationFormLabel htmlFor='ticket-description'>Descripción</EventTicketCreationFormLabel>
        <EventTicketCreationFormTextArea value={formData.ticketDescription || ''} required onChange={handleChange} placeholder='Describa de forma clara y concisa el evento' id='ticket-description' name='ticketDescription'></EventTicketCreationFormTextArea>

        <EventTicketCreationFormLabel htmlFor='ticket-amount'>Cantidad</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput value={formData.ticketAmount || ''} required onChange={handleChange} type='number' min='1' placeholder='Introduce la cantidad de entradas' id='ticket-amount' name='ticketAmount'></EventTicketCreationFormInput>

        <EventTicketCreationFormLabel htmlFor='ticket-limit'>Límite por usuario</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput value={formData.ticketLimit || ''} required onChange={handleChange} type='number' min='1' placeholder='Introduce el límite de entradas por usuario' id='ticket-limit' name='ticketLimit'></EventTicketCreationFormInput>

         <EventTicketCreationFormLabel htmlFor='ticket-price'>Precio</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput value={formData.ticketPrice || ''} required onChange={handleChange} type='number' min='0' placeholder='Introduce el precio de las entradas (€)' id='ticket-price' name='ticketPrice'></EventTicketCreationFormInput>

         <EventTicketCreationFormLabel htmlFor='ticket-royalties'>Royalties</EventTicketCreationFormLabel>
        <EventTicketCreationFormInput value={formData.ticketRoyalties || ''} required onChange={handleChange} type='number' min='0' max='100' placeholder='Introduce un porcentaje para las regalías de las reventas' id='ticket-royalties' name='ticketRoyalties'></EventTicketCreationFormInput>

    <EventTicketCreationFormLabel htmlFor='start-date'>Fecha de Inicio</EventTicketCreationFormLabel>
    <EventTicketCreationFormInputDate value={formData.startDate || ''} required onChange={handleChange} id='start-date' name='startDate' type='datetime-local' placeholder='Introduce la fecha de comienzo'>
    </EventTicketCreationFormInputDate>

    <EventTicketCreationFormLabel htmlFor='end-date'>Fecha de Finalización</EventTicketCreationFormLabel>
    <EventTicketCreationFormInputDate value={formData.endDate || ''} required onChange={handleChange} id='end-date' name='endDate' type='datetime-local' placeholder='Introduce la fecha de clausura'></EventTicketCreationFormInputDate>

    <EventTicketCreationFormLabel htmlFor='image'>Imagen</EventTicketCreationFormLabel>
    <EventTicketCreationFormImageFile id='image' required={imagePreview ? false : undefined} name='image' type='file' accept='image/jpeg, image/png' onChange={handleImageChange}></EventTicketCreationFormImageFile>
    {handleImagePreviewRender()}

     </EventTicketCreationFormContainer>

    </EventTicketCreationMainContainer>)
}

export default EventTicketCreationForm
