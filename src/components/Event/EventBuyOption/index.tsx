import type { FC } from 'react'
import { useCallback, useState } from 'react'
import {
  Container,
  Buttons,
  Button
} from './styles'
import { PaymentMethod, Props } from './types'
import CrossmintButton from './CrossmintButton'

const EventBuyOption: FC<Props> = ({ event }) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CREDIT_CARD)

  const updatePaymentMethod = (method: PaymentMethod) => {
    if (method === paymentMethod) return
    setPaymentMethod(method)
  }

  const renderPaymentMethod = useCallback(() => {
    if (paymentMethod === PaymentMethod.CREDIT_CARD) {
      return <CrossmintButton totalPrice={event.ticket.price} />
    }

    return (
        <h1>Wallet button</h1>
    )
  }, [paymentMethod])
  return (
        <Container>
            <Buttons>
                <Button
                    active={paymentMethod === PaymentMethod.CREDIT_CARD}
                    onClick={() => updatePaymentMethod(PaymentMethod.CREDIT_CARD)}
                >
                    {PaymentMethod.CREDIT_CARD}
                </Button>
                <Button
                    active={paymentMethod === PaymentMethod.WALLET}
                    onClick={() => updatePaymentMethod(PaymentMethod.WALLET)}
                >
                    {PaymentMethod.WALLET}
                </Button>
            </Buttons>
            {renderPaymentMethod()}
        </Container>
  )
}

export default EventBuyOption
