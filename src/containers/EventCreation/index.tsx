import React, { useState } from 'react'
import { EventCreationForm, EventCreationSidebar, EventTicketCreationForm, EventPreviewCreationForm } from '@/components/Event'
import { MainContainer, EventCreationFormButton, ButtonContainer } from './styles'
import { useRouter } from 'next/router'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { handleSubmitEventToSupabase } from '@/utils/Event/handleSubmitEventToSupabase'
import { handleEventObjects } from '@/utils/Event/handleEventObjects'

type FormData = {
  [part: string]: any;
};

const EventCreation = () => {
  const [step, setStep] = useState<number>(1)
  const [sendingData, setSendingData] = useState<boolean>(false)
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    part1: {},
    part2: {}
  })

  const handleStepIncrease = () => {
    const validationRules = [
      {
        fields: [
          'eventName',
          'startDate',
          'endDate',
          'eventDescription',
          'image',
          'location',
          'eventSummary',
          'eventCategory',
          'eventType',
          'country',
          'timezone'
        ],
        lengthMin: 5,
        lengthMax: 255,
        errorMessageEmpty: 'Por favor, completa todos los campos 😬',
        errorMessageDate: 'La fecha de inicio no puede ser mayor que la fecha de fin 😬',
        errorMessageLength: 'Los campos de nombre, descripción y resumen deben tener entre 5 y 255 caracteres 😬',
        errorMessageLengthMin: 'Los campos de nombre, descripción y resumen no pueden ser menores a 5 caracteres 😬',
        errorMessageDatePast: 'La fecha de inicio no puede ser menor a la fecha actual 😬'
      },
      {
        fields: [
          'ticketName',
          'ticketAmount',
          'ticketPrice',
          'image',
          'ticketDescription',
          'ticketLimit',
          'ticketRoyalties',
          'endDate',
          'startDate'
        ],
        lengthMin: 5,
        lengthMax: 255,
        errorMessageEmpty: 'Por favor, completa todos los campos 😬',
        errorMessageDate: 'La fecha de inicio no puede ser mayor que la fecha de fin 😬',
        errorMessageLength: 'Los campos de nombre y descripción deben tener entre 5 y 255 caracteres 😬',
        errorMessageLengthMin: 'Los campos de cantidad, precio, límite y regalías no pueden ser menores a 1 😬',
        errorMessageDatePast: 'La fecha de inicio no puede ser menor a la fecha actual 😬',
        errorMessageLimit: 'El límite de tickets de un usuario no puede ser mayor a la cantidad de tickets 😬'
      }
    ]

    const { fields, lengthMin, lengthMax, errorMessageEmpty, errorMessageDate, errorMessageLength, errorMessageDatePast, errorMessageLimit, errorMessageLengthMin } = validationRules[step - 1]

    for (const field of fields) {
      if (!formData[`part${step}`][field]) {
        toast.error(errorMessageEmpty)
        return
      }
    }

    const { startDate, endDate, ticketLimit, ticketAmount, ticketName, ticketDescription } = formData[`part${step}`]

    if (startDate > endDate) {
      toast.error(errorMessageDate)
      return
    }

    if (startDate < new Date().toISOString()) {
      toast.error(errorMessageDatePast)
      return
    }

    if (ticketLimit > ticketAmount) {
      toast.error(errorMessageLimit)
      return
    }

    if (ticketName?.length < lengthMin || ticketDescription?.length < lengthMin) {
      toast.error(errorMessageLengthMin)
      return
    }

    if (ticketName?.length > lengthMax || ticketDescription?.length > lengthMax) {
      toast.error(errorMessageLength)
    }
    setStep(step !== 3 ? step + 1 : step)
    if (step === 3) handleSubmit()
    window.scrollTo(0, 0)
  }

  const handleStepDecrease = () => {
    step !== 1 ? setStep(step - 1) : router.push('/')
    window.scrollTo(0, 0)
  }

  const handleFormChange = (part:string, data:any) => {
    setFormData(prevData => ({
      ...prevData,
      [part]: {
        ...prevData[part],
        ...data
      }
    }))
  }

  const handleSubmit = () => {
    setSendingData(true)
    const { eventToSubmit, ticketToSubmit } = handleEventObjects(formData.part1, formData.part2)
    toast.promise(handleSubmitEventToSupabase(eventToSubmit, ticketToSubmit), {
      pending: 'Procesando datos de tu evento... 😅',
      success: 'Tu evento ha sido creado exitosamente! 😍',
      error: 'Hubo un error al crear tu evento! 😭 Por favor, intenta nuevamente.'
    }).then(() => {
      setTimeout(() => {
        router.push('/')
      }, 5000)
    })
  }

  const handleFormRender = () => {
    switch (step) {
      case 1:
        return <EventCreationForm formData={formData.part1} onChange={data => handleFormChange('part1', data)} />
      case 2:
        return <EventTicketCreationForm formData={formData.part2} onChange={data => handleFormChange('part2', data)} />
      case 3: {
        const { eventPreview } = handleEventObjects(formData.part1, formData.part2)
        return <EventPreviewCreationForm event={eventPreview} />
      }
      default:
        return null
    }
  }

  const handleIncreaseTextRender = () => {
    return step === 3 ? 'Finalizar y publicar' : 'Siguiente paso'
  }

  const handleDecreaseTextRender = () => {
    return step === 1 ? 'Cancelar' : 'Anterior paso'
  }

  return (
    <MainContainer>
       <ToastContainer theme='colored' transition={Zoom} position='top-center' />
      <EventCreationSidebar step={step} />
      {handleFormRender()}
      <ButtonContainer>
        <EventCreationFormButton sending={sendingData} onClick={handleStepDecrease}>{handleDecreaseTextRender()}</EventCreationFormButton>
        <EventCreationFormButton sending={sendingData} onClick={handleStepIncrease}>{handleIncreaseTextRender()}</EventCreationFormButton>
      </ButtonContainer>
    </MainContainer>
  )
}

export default EventCreation
