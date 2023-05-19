import { useEffect, useState } from 'react'
import type { FC } from 'react'
import {
  Container,
  Buttons,
  Button,
  TicketContainer,
  TicketAction,
  TicketActionAmount,
  TicketActionPrice,
  TicketImage,
  TicketInfo,
  TicketActionLabel
} from './styles'
import { PaymentMethod, Props } from './types'
import CrossmintButton from './CrossmintButton'
import ThirdwebButton from './ThirdwebButton'
import useTicketsByEvent from '@/hooks/useTicketsByEvent'

const EventBuyOption: FC<Props> = ({ event }) => {
  const { ticket } = useTicketsByEvent({ event_id: event.id })

  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState<number>(ticket ? ticket.price : 0)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CREDIT_CARD)

  const updatePaymentMethod = (method: PaymentMethod) => {
    if (method === paymentMethod) return
    setPaymentMethod(method)
  }

  const renderPaymentMethod = () => {
    if (!ticket) return null

    if (paymentMethod === PaymentMethod.CREDIT_CARD) return <CrossmintButton quantity={amount} totalPrice={totalPrice} />
    return <ThirdwebButton contractAddress={ticket.contract_address} />
  }

  useEffect(() => {
    if (!ticket) return

    setTotalPrice(amount * ticket.price)
  }, [amount, ticket])

  useEffect(() => {
    // Reset the state when the event prop changes
    setAmount(1)
    setTotalPrice(ticket ? ticket.price : 0)
    setPaymentMethod(PaymentMethod.CREDIT_CARD)
  }, [event])

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
      <TicketContainer>
        <TicketInfo>
          <TicketImage src={event.image} />
          <TicketAction>
            <TicketActionLabel htmlFor="amount">Cantidad</TicketActionLabel>
            <TicketActionAmount
              name="amount"
              id="amount"
              type="number"
              min="1"
              max={ticket?.max_per_user ?? 1}
              defaultValue={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <TicketActionPrice>{totalPrice} €</TicketActionPrice>
          </TicketAction>
        </TicketInfo>
        <div>{renderPaymentMethod()}</div>
      </TicketContainer>
    </Container>
  )
}

export default EventBuyOption
