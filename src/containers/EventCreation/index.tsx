/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { EventCreationForm, EventCreationSidebar, EventTicketCreationForm, EventPreviewCreationForm } from '@/components/Event'
import { MainContainer, EventCreationFormButton, ButtonContainer } from './styles'
import { useRouter } from 'next/router'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { handleEventObjects } from '@/utils/Event/handleEventObjects'
import { validationRules } from '@/utils/Event/validationRules'

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
    if (step === 3) return handleSubmit()
    const { fields, lengthMin, lengthMax, errorMessageEmpty, errorMessageDate, errorMessageLength, errorMessageDatePast, errorMessageLimit, errorMessageLengthMin, errorMessageLenghtMax, errorMessageLengthMinEvent, errorMessageLengthEvent } = validationRules[step - 1]

    for (const field of fields) {
      if (!formData[`part${step}`][field]) {
        toast.error(errorMessageEmpty)
        return
      }
    }

    const { startDate, endDate, ticketLimit, ticketAmount, ticketName, ticketDescription, eventName, eventDescription, eventSummary, ticketPrice, ticketRoyalties } = formData[`part${step}`]

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
      toast.error(errorMessageLength)
      return
    }

    if (ticketName?.length > lengthMax || ticketDescription?.length > lengthMax) {
      toast.error(errorMessageLength)
      return
    }

    if (ticketLimit < 1 || ticketAmount < 1) {
      toast.error(errorMessageLengthMin)
      return
    }

    if (ticketLimit > 100000 || ticketAmount > 100000 || ticketPrice > 100000) {
      toast.error(errorMessageLenghtMax)
      return
    }

    if (ticketRoyalties > 100000) {
      toast.error(errorMessageLenghtMax)
      return
    }

    if (eventName?.length < lengthMin || eventDescription?.length < lengthMin || eventSummary?.length < lengthMin) {
      toast.error(errorMessageLengthMinEvent)
      return
    }

    if (eventName?.length > lengthMax || eventDescription?.length > lengthMax || eventSummary?.length > lengthMax) {
      toast.error(errorMessageLengthEvent)
      return
    }
    setStep(step !== 3 ? step + 1 : step)
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

  const handleSubmit = () => {}

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
