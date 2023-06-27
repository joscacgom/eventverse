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
  TicketActionLabel,
  TicketSpan
} from './styles'
import { PaymentMethod, Props } from './types'
import useTicketsByEvent from '@/hooks/useTicketsByEvent'
import AmountAlert from './AmountAlert'
import { useContract, useUnclaimedNFTSupply } from '@thirdweb-dev/react'
import useLogic from './useLogic'
import { getUserCookie } from '@/utils/Login/userCookie'

const EventBuyOption: FC<Props> = ({ event }) => {
  const { ticket } = useTicketsByEvent({ event_id: event.id })
  const userAddress = JSON.parse(getUserCookie('userData'))?.address[0] || ''
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [maticPrice, setMaticPrice] = useState<number>(ticket ? ticket.price : 0)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CREDIT_CARD)
  const { contract: nftDrop } = useContract(ticket?.contract_address)
  const unclaimedSupply = useUnclaimedNFTSupply(nftDrop)

  const { renderPaymentLogic } = useLogic({ ticket, nftDrop, userAddress, amount, maticPrice, paymentMethod })

  const updatePaymentMethod = (method: PaymentMethod) => {
    if (method === paymentMethod) return
    setPaymentMethod(method)
  }

  useEffect(() => {
    if (!ticket) return
    const fetchData = async () => {
      try {
        const response = await fetch('/api/crypto')
        if (!response.ok) {
          throw new Error('Failed to fetch data from the Crypto conversor API')
        }
        const data = await response.json()
        const eurPrice = (Number(amount * ticket.price) * data).toFixed(2)
        const maticPrice = Number((amount * ticket.price).toFixed(2))
        setTotalPrice(Number(eurPrice))
        setMaticPrice(maticPrice)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [amount, ticket])

  useEffect(() => {
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
      <AmountAlert supply={unclaimedSupply.data} />
      <TicketContainer>
        <TicketInfo>
          <TicketImage src={ticket?.image} />
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
            <TicketSpan>Máx {ticket?.max_per_user ?? 1} </TicketSpan>
            <TicketActionPrice>{totalPrice} € <small> {maticPrice} ~ MATIC </small></TicketActionPrice>
          </TicketAction>
        </TicketInfo>

        {renderPaymentLogic()}

      </TicketContainer>
    </Container>
  )
}

export default EventBuyOption
