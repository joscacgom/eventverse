import type { FC } from 'react'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'

type Props = {
    clientId: string
    quantity: number
    totalPrice: number
    ticketId: number
    userAddress: string
}

const CrossmintButton: FC<Props> = ({ clientId, totalPrice, quantity, ticketId, userAddress }) => {
  const totalPriceToString = String(totalPrice)
  const quantityToString = String(quantity)
  return (
        <CrossmintPayButton
            data-testid="crossmint-pay-button"
            clientId={clientId}
            mintConfig={{
              type: 'thirdweb-drop',
              totalPrice: totalPriceToString,
              quantity: quantityToString
            }}
            mintTo={userAddress}
            currency='eur'
            environment="staging"
        />
  )
}

export default CrossmintButton
