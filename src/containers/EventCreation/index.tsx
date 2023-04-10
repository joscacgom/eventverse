import React, { useState } from 'react'
import { EventCreationForm, EventCreationSidebar, EventTicketCreationForm } from '@/components/Event'
import { MainContainer, EventCreationFormButton } from './styles'

const EventCreation = () => {
  const [step, setStep] = useState<number>(1)

  const handleStepIncrease = () => {
    step !== 3 ? setStep(step + 1) : setStep(1)
  }

  const handleFormRender = () => {
    switch (step) {
      case 1:
        return <EventCreationForm />
      case 2:
        return <EventTicketCreationForm />
      case 3:
        return <div>Step 3 component goes here</div>
      default:
        return null
    }
  }

  return (
    <MainContainer>
      <EventCreationSidebar step={step} />
      {handleFormRender()}
      <EventCreationFormButton onClick={handleStepIncrease}>Siguiente paso</EventCreationFormButton>
    </MainContainer>
  )
}

export default EventCreation
