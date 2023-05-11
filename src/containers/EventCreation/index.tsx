import React, { useState } from 'react'
import { EventCreationForm, EventCreationSidebar, EventTicketCreationForm, EventPreviewCreationForm } from '@/components/Event'
import { MainContainer, EventCreationFormButton, ButtonContainer } from './styles'
import { useRouter } from 'next/router'
import type { EventTicketPreview } from '@/models/Events/types'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type FormData = {
  [part: string]: any;
};

const EventCreation = () => {
  const [step, setStep] = useState<number>(1)
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    part1: {},
    part2: {}
  })

  const event: EventTicketPreview = {
    id: 'pending',
    title: formData.part1.eventName,
    date: formData.part1.startDate,
    endDate: formData.part1.endDate,
    description: formData.part1.eventDescription,
    image: formData.part1.image,
    location: formData.part1.location,
    ticketTitle: formData.part2.ticketName,
    ticketAmount: formData.part2.ticketAmount,
    ticketPrice: formData.part2.ticketPrice,
    ticketImage: formData.part2.image
  }

  const handleStepIncrease = () => {
    let isValid = true
    switch (step) {
      case 1:
        if (!formData.part1.eventName || !formData.part1.startDate || !formData.part1.endDate || !formData.part1.eventDescription || !formData.part1.image || !formData.part1.location || !formData.part1.eventSummary || !formData.part1.eventCategory || !formData.part1.eventType || !formData.part1.country || !formData.part1.timezone) {
          isValid = false
        }
        break
      case 2:
        if (!formData.part2.ticketName || !formData.part2.ticketAmount || !formData.part2.ticketPrice || !formData.part2.image || !formData.part2.ticketDescription || !formData.part2.ticketLimit || !formData.part2.ticketRoyalties || !formData.part2.endDate || !formData.part2.startDate) {
          isValid = false
        }
        break
      default:
        break
    }

    if (isValid) {
      step !== 3 ? setStep(step + 1) : handleSubmit()
      window.scrollTo(0, 0)
    } else {
      toast.error('Por favor, completa todos los campos')
    }
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
    toast.promise(
      connectToSupabaseAndSubmit(),
      {
        pending: 'Procesando datos de tu evento... 😅',
        success: 'Tu evento ha sido creado exitosamente! 😍',
        error: 'Hubo un error al crear tu evento! 😭 Por favor, intenta nuevamente.'
      }
    )
  }

  const connectToSupabaseAndSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return 'success'
    } catch (error) {
      throw new Error('Submission failed!')
    }
  }

  const handleFormRender = () => {
    switch (step) {
      case 1:
        return <EventCreationForm formData={formData.part1} onChange={data => handleFormChange('part1', data)} />
      case 2:
        return <EventTicketCreationForm formData={formData.part2} onChange={data => handleFormChange('part2', data)}/>
      case 3:
        return <EventPreviewCreationForm event={event} />
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
        <EventCreationFormButton onClick={handleStepDecrease}>{handleDecreaseTextRender()}</EventCreationFormButton>
        <EventCreationFormButton onClick={handleStepIncrease}>{handleIncreaseTextRender()}</EventCreationFormButton>
      </ButtonContainer>
    </MainContainer>
  )
}

export default EventCreation
