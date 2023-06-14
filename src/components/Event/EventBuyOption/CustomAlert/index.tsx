import React, { FC } from 'react'
import { Container, Text } from './styles'

type Props = {
  status: string,
  text: string
}
const CustomAlert: FC<Props> = ({ status, text }) => {
  return (
    <Container status={status} data-testid="alert-container">
        <Text>{text}</Text>
    </Container>
  )
}

export default CustomAlert
