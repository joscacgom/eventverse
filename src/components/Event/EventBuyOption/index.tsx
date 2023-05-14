import { FC, useEffect, useCallback, useState } from 'react'
import {
  Container,
  Buttons,
  Button,
  Ticket,
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

const EventBuyOption: FC<Props> = ({ event }) => {
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0.01)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CREDIT_CARD)

  const updatePaymentMethod = (method: PaymentMethod) => {
    if (method === paymentMethod) return
    setPaymentMethod(method)
  }

  const renderPaymentMethod = useCallback(() => {
    if (paymentMethod === PaymentMethod.CREDIT_CARD) return <CrossmintButton quantity={amount} totalPrice={totalPrice} />
    return <ThirdwebButton contractAddress={event.ticket.contractAddress} />
  }, [paymentMethod, amount, totalPrice])

  useEffect(() => {
    setTotalPrice(amount * event.ticket.price)
  }, [amount])

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
            <Ticket>
                <TicketInfo>
                <TicketImage src ={event.image}/>
                <TicketAction>
                    <TicketActionLabel htmlFor="amount">
                        Cantidad
                    </TicketActionLabel>
                    <TicketActionAmount
                      name="amount"
                      id="amount"
                      type="number"
                      min="1"
                      max={event.ticket.maxPerUser}
                      defaultValue={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                    <TicketActionPrice>
                        {totalPrice} MATIC
                    </TicketActionPrice>
                </TicketAction>
                </TicketInfo>
                <div>
                  {renderPaymentMethod()}
                </div>
            </Ticket>
        </Container>
  )
}

export default EventBuyOption
