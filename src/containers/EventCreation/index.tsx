import React, { useState } from 'react'
import { EventCreationForm, EventCreationSidebar, EventTicketCreationForm, EventPreviewCreationForm } from '@/components/Event'
import { MainContainer, EventCreationFormButton } from './styles'
import { MOCK_EVENT } from '@/models/Events/mock'

const EventCreation = () => {
  const [step, setStep] = useState<number>(1)

  const handleStepIncrease = () => {
    step !== 3 ? setStep(step + 1) : setStep(1)
    window.scrollTo(0, 0)
  }

  const handleFormRender = () => {
    switch (step) {
      case 1:
        return <EventCreationForm />
      case 2:
        return <EventTicketCreationForm />
      case 3:
        return <EventPreviewCreationForm event={MOCK_EVENT} />
      default:
        return null
    }
  }
  const handleTextRender = () => {
    return step === 3 ? 'Finalizar y publicar' : 'Siguiente paso'
  }
  return (
    <MainContainer>
      <EventCreationSidebar step={step} />
      {handleFormRender()}
      <EventCreationFormButton onClick={handleStepIncrease}>{handleTextRender()}</EventCreationFormButton>
    </MainContainer>
  )
}

export default EventCreation
