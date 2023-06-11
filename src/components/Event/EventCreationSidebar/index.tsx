import React, { FC } from 'react'
import { SideBarContainer, OptionContainer } from './styles'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props ={
    step: number
}

const EventCreationSidebar:FC<Props> = ({ step }) => {
  const StepStyle = (current: number): React.CSSProperties => {
    return {
      width: '25px',
      height: '25px',
      boxShadow: current <= step ? '0px 0.7961918735236395px 2.0700988711614627px -0.875px rgba(166, 219, 87, 0.68), 0px 2.414506143104518px 6.277715972071746px -1.75px rgba(166, 219, 87, 0.65171), 0px 6.382653521484461px 16.5948991558596px -2.625px rgba(166, 219, 87, 0.57235), 0px 20px 52px -3.5px rgba(166, 219, 87, 0.3)' : 'none',
      backgroundColor: current <= step ? '#a6db57' : 'white',
      color: current <= step ? '#a6db57' : 'white',
      border: current <= step ? 'none' : '1px solid #222222',
      borderRadius: '100px'
    }
  }

  return (
    <SideBarContainer>
        <OptionContainer>
          <FontAwesomeIcon id="Paso 1" icon={faCircle} size='xl' style={StepStyle(1)}/>
            <p>Paso 1</p>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon id="Paso 2" icon={faCircle} size='xl' style={StepStyle(2)}/>
            <p>Paso 2</p>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon id="Paso 3" icon={faCircle} size='xl'style={StepStyle(3)} />
            <p>Paso 3</p>
        </OptionContainer>
    </SideBarContainer>

  )
}

export default EventCreationSidebar
