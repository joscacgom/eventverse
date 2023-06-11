import type { FC } from 'react'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'

type Props = {
    clientId?: string
    quantity: number
    totalPrice: number
    ticketId: number
    userAddress: string
}
const TEST_CLIENT_ID = 'b01bd14f-1da4-4343-84a9-dc1909844036'

const CrossmintButton: FC<Props> = ({ clientId = TEST_CLIENT_ID, totalPrice, quantity, ticketId, userAddress }) => {
  const totalPriceToString = String(totalPrice)
  const quantityToString = String(quantity)
  return (
        <CrossmintPayButton
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
