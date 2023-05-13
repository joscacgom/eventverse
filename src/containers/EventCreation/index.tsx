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
      toast.error('Por favor, completa todos los campos 😬')
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
