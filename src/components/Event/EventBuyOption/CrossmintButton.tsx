import type { FC } from 'react'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'

type Props = {
    clientId: string
    quantity: number
    totalPrice: number
    userAddress: string
}

const CrossmintButton: FC<Props> = ({ clientId, totalPrice, quantity, userAddress }) => {
  const totalPriceToString = String(totalPrice)
  const quantityToString = String(quantity)
  return (
        <CrossmintPayButton
            data-testid="crossmint-pay-button"
            clientId={clientId}
            mintConfig={{
              type: 'thirdweb-drop',
              totalPrice: totalPriceToString,
              quantity: quantityToString,
              currency: 'eur',
              locale: 'es-ES'
            }}
            mintTo={userAddress}
            currency='eur'
            environment="staging"
            successCallbackURL='https://www.eventverse.app/payment/success'
            failureCallbackURL='https://www.eventverse.app/payment/failure'
        />
  )
}

export default CrossmintButton
