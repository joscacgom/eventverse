import React, { FC } from 'react'
import { Container, Text } from './styles'
import { BigNumber } from 'ethers'
import InfoIcon from './InfoIcon'
type Props = {
  supply: BigNumber | undefined
}

const AmountAlert: FC<Props> = ({ supply }) => {
  return (
    <Container status={supply?.lt(10) ? 'Danger' : 'Safe'}>
      <InfoIcon />
      {(supply?.lt(10))
        ? <Text>¡Solo quedan {BigNumber.from(supply || 0).toString()} tickets disponibles!</Text>
        : <Text>Aún Quedan {BigNumber.from(supply || 0).toString()} tickets disponibles.</Text>
      }
    </Container>
  )
}

export default AmountAlert
