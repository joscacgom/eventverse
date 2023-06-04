import { useEffect, useMemo, useState } from 'react'
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
import CrossmintButton from './CrossmintButton'
import ThirdwebButton from './ThirdwebButton'
import useTicketsByEvent from '@/hooks/useTicketsByEvent'
import AmountAlert from './AmountAlert'
import { useActiveClaimConditionForWallet, useClaimConditions, useContract, useUnclaimedNFTSupply } from '@thirdweb-dev/react'
import Timer from './Timer'
import { getUserCookie } from '@/utils/Login/userCookie'
import Loading from '@/components/Loading'

const EventBuyOption: FC<Props> = ({ event }) => {
  const { ticket } = useTicketsByEvent({ event_id: event.id })
  const userAddress = JSON.parse(getUserCookie('userData'))?.address[0] || ''
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState<number>(ticket ? ticket.price : 0)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CREDIT_CARD)
  const { contract: nftDrop } = useContract(ticket?.contract_address)
  const unclaimedSupply = useUnclaimedNFTSupply(nftDrop)
  const claimConditions = useClaimConditions(nftDrop)
  const activeClaimCondition = useActiveClaimConditionForWallet(
    nftDrop,
    userAddress
  )

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess
    )
  }, [
    activeClaimCondition.isSuccess
  ])

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      !nftDrop
    )
  }, [
    activeClaimCondition.isLoading,
    nftDrop,
    unclaimedSupply.isLoading
  ])

  const isTicketEndDatePassed = useMemo(() => {
    if (ticket?.end_date) {
      const endDate = new Date(ticket?.end_date)
      return endDate < new Date()
    }
    return false
  }, [ticket?.end_date])

  const updatePaymentMethod = (method: PaymentMethod) => {
    if (method === paymentMethod) return
    setPaymentMethod(method)
  }

  const renderPaymentMethod = () => {
    if (!ticket) return null

    if (paymentMethod === PaymentMethod.CREDIT_CARD) {
      return ticket.crossmint_id
        ? (
      <CrossmintButton
        quantity={amount}
        totalPrice={totalPrice}
        ticketId={ticket.id}
        userAddress={userAddress}
      />
          )
        : (
      <p>Este evento necesita pasar el proceso de verificación</p>
          )
    }
    return (
      <ThirdwebButton
        contractAddress={ticket.contract_address}
        quantity={amount}
        ticketId={ticket.id}
      />
    )
  }
  useEffect(() => {
    if (!ticket) return

    setTotalPrice(amount * ticket.price)
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
            <TicketSpan>Máx {ticket?.max_per_user ?? 1} </TicketSpan>
            <TicketActionPrice>{totalPrice} €</TicketActionPrice>
          </TicketAction>
        </TicketInfo>
    {isTicketEndDatePassed
      ? (
  <div>
    <p>Ha finalizado el plazo de compra.</p>
  </div>
        )
      : userAddress === '' && paymentMethod === PaymentMethod.CREDIT_CARD
        ? (
  <div>
    <p>Por favor, inicia sesión.</p>
  </div>
          )
        : claimConditions.data && claimConditions.data[0].startTime > new Date()
          ? (
  <div>
    <Timer date={claimConditions.data[0].startTime} />
  </div>
            )
          : activeClaimCondition.isError
            ? (
  <div>
    <p>Límite de tickets por persona alcanzado.</p>
  </div>
              )
            : canClaim
              ? (
                  isLoading
                    ? (
    <div>
      <Loading type='button' />
    </div>
                      )
                    : unclaimedSupply.data?.eq(0)
                      ? (
    <div>
      <p>Agotado 😭</p>
    </div>
                        )
                      : (
    <div>
      {renderPaymentMethod()}
    </div>
                        )
                )
              : (
  <div>
    <Loading type='button' />
  </div>
                )}

      </TicketContainer>
    </Container>
  )
}

export default EventBuyOption
