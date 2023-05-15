/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useState } from 'react'
import { EventCreationMainContainer, EventCreationHeader, EventCreationFormImagePreview, EventCreationFormInputDate, EventCreationFormContainer, EventCreationInputOption, EventCreationFormLabel, EventCreationFormInput, EventCreationFormTextArea, EventCreationFormImageFile, EventCreationFormLocationImage, LimitCharacterSpan } from './styles'
import { getStaticMapImageUrl, handleEventLocation } from '@/utils/Event/handleEventLocation'
import { useDebouncedCallback } from 'use-debounce'

interface Props {
  onChange: (data: any) => void,
  formData: any
}

const EventCreationForm:FC<Props> = ({ onChange, formData }) => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const [mapImageUrl, setMapImageUrl] = useState(formData.locationImage || 'https://via.placeholder.com/150')
  const [characterCount, setCharacterCount] = useState({
    eventName: formData.eventName?.length || 0,
    eventDescription: formData.eventDescription?.length || 0,
    eventSummary: formData.eventSummary?.length || 0

  })
  const [formDataCharacters, setFormDataCharacters] = useState({
    eventName: '',
    eventDescription: '',
    eventSummary: ''
  })

  const handleChangeCharacters = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormDataCharacters((prevFormData) => ({ ...prevFormData, [name]: value }))
    setCharacterCount((prevCharacterCount) => ({
      ...prevCharacterCount,
      [name]: value.length
    }))
  }

  const debouncedHandleChangeLocation = useDebouncedCallback(async (value: string) => {
    if (value.length === 0) return
    setLoading(true)
    try {
      const results = await handleEventLocation(value)
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry.location
        const mapImage = getStaticMapImageUrl(lat, lng)
        const formattedAddress = results[0].formatted_address
        setMapImageUrl(mapImage)
        setLocation(formattedAddress)
      }
    } catch (error) {
      console.error('Error occurred while fetching geocoding results:', error)
    } finally {
      setLoading(false)
    }
  }, 1000)

  useEffect(() => {
    debouncedHandleChangeLocation(location)
  }, [debouncedHandleChangeLocation])

  useEffect(() => {
    onChange({ locationFormattedAddress: location })
  }, [location])

  useEffect(() => {
    onChange({ locationImage: mapImageUrl })
  }, [mapImageUrl])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    if (name === 'eventName' || name === 'eventDescription' || name === 'eventSummary') {
      handleChangeCharacters(event)
      onChange({ [name]: value })
    }
    if (name === 'location' && value.length > 0) {
      await debouncedHandleChangeLocation(value)
      onChange({ [name]: value })
    } else {
      onChange({ [name]: value })
    }
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
                      <EventCreationFormInput type='text' value={formData.eventName || ''} required onChange={handleChange} placeholder='Introduce el nombre del evento' id='event-name' maxLength={50} name='eventName'></EventCreationFormInput>
                      <LimitCharacterSpan
                                tooLong={characterCount.eventName >= 45}
                                nearLimit={characterCount.eventName > 30}
                                safe={characterCount.eventName <= 30}>

                                {characterCount.eventName}/{50} caracteres
                      </LimitCharacterSpan>

                      <EventCreationFormLabel htmlFor='event-description'>Descripción</EventCreationFormLabel>
                      <EventCreationFormTextArea value={formData.eventDescription || ''} required onChange={handleChange} placeholder='Describa de forma clara y concisa el evento' id='event-description' maxLength={255} name='eventDescription'></EventCreationFormTextArea>
                       <LimitCharacterSpan
                                tooLong={characterCount.eventDescription >= 250}
                                nearLimit={characterCount.eventDescription > 200}
                                safe={characterCount.eventDescription <= 200}>

                                {characterCount.eventDescription}/{255} caracteres
                        </LimitCharacterSpan>

                      <EventCreationFormLabel htmlFor='event-summary'>Resumen</EventCreationFormLabel>
                      <EventCreationFormTextArea value={formData.eventSummary || ''} required onChange={handleChange} placeholder='Resuma de forma clara en qué consiste el evento' id='event-summary' maxLength={255} name='eventSummary'></EventCreationFormTextArea>
                       <LimitCharacterSpan
                                tooLong={characterCount.eventSummary >= 250}
                                nearLimit={characterCount.eventSummary > 200}
                                safe={characterCount.eventSummary <= 200}>

                                {characterCount.eventSummary}/{255} caracteres
                        </LimitCharacterSpan>

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
              <EventCreationFormLocationImage src={formData.locationImage || mapImageUrl !== 'https://via.placeholder.com/150' ? mapImageUrl : 'https://via.placeholder.com/150'} alt='Google Maps image' />

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
