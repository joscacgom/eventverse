import { Ticket } from '@/models/Tickets/types'
import { SmartContract, useActiveClaimConditionForWallet, useClaimConditions, useUnclaimedNFTSupply } from '@thirdweb-dev/react'
import React, { useMemo } from 'react'
import Timer from './Timer'
import Loading from '@/components/Loading'
import ThirdwebButton from './ThirdwebButton'
import { PaymentMethod } from './types'
import CrossmintButton from './CrossmintButton'
import CustomAlert from './CustomAlert'

type Props = {
  ticket: Ticket | undefined
  nftDrop: SmartContract | undefined
  userAddress: string
  amount: number
  totalPrice: number
  paymentMethod: PaymentMethod
}
const useLogic = ({ ticket, nftDrop, userAddress, amount, totalPrice, paymentMethod }: Props) => {
  const claimConditions = useClaimConditions(nftDrop)
  const activeClaimCondition = useActiveClaimConditionForWallet(nftDrop, userAddress)
  const unClaimedSupply = useUnclaimedNFTSupply(nftDrop)

  const checkTicketEndDate = useMemo(() => {
    if (!ticket?.end_date) return false

    const endDate = new Date(ticket?.end_date)
    const now = new Date()

    const isTicketEndDatePassed = endDate < now

    return isTicketEndDatePassed
  }, [ticket])

  const checkUserLogged = useMemo(() => {
    if (!userAddress) return false
    return true
  }, [userAddress])

  const checkTicketStartDate = useMemo(() => {
    const isTicketStartDatePassed = claimConditions.data && claimConditions.data[0]?.startTime > new Date()
    return isTicketStartDatePassed
  }, [claimConditions])

  const checkClaimConditionsHasError = useMemo(() => {
    return activeClaimCondition.isError
  }, [activeClaimCondition])

  const loadingClaimData = useMemo(() => {
    const loading = activeClaimCondition.isLoading || claimConditions.isLoading
    return loading
  }, [activeClaimCondition, claimConditions])

  const renderPaymentMethod = useMemo(() => {
    if (!ticket) return null

    if (paymentMethod === PaymentMethod.CREDIT_CARD) return ticket.crossmint_id ? <CrossmintButton data-testid="crossmint-button" quantity={amount} totalPrice={totalPrice} ticketId={ticket.id} userAddress={userAddress} /> : <CustomAlert status='Info' text='💳 Este evento aun no ha sido verificado para aceptar pagos con tarjeta.' />
    return <ThirdwebButton data-testid="thirdweb-button" contractAddress={ticket.contract_address} ticketId={ticket.id} />
  }, [ticket, paymentMethod, amount, totalPrice])

  const canClaim = useMemo(() => {
    return activeClaimCondition.isSuccess
  }, [
    activeClaimCondition.isSuccess
  ])
  const notEnoughTickets = useMemo(() => {
    return unClaimedSupply.data?.eq(0)
  }, [unClaimedSupply])

  const renderPaymentLogic = () => {
    if (checkTicketEndDate) {
      return (
      <CustomAlert status='Error' text='⌛ Ha finalizado el plazo de compra.' />
      )
    } else if (!checkUserLogged) {
      return (
      <CustomAlert status='Info' text='🤓 Por favor, inicia sesión.' />
      )
    } else if (checkTicketStartDate) {
      const startTime = claimConditions.data && claimConditions.data[0]?.startTime
      if (startTime) {
        return <Timer date={startTime} />
      }
    } else if (checkClaimConditionsHasError) {
      return (
      <CustomAlert status='Error' text='🎟️ Límite de tickets por persona alcanzado.' />
      )
    } else if (canClaim) {
      if (loadingClaimData) {
        return <Loading type='button' />
      } else if (notEnoughTickets) {
        return (
        <CustomAlert status='Error' text='Agotado 😭' />
        )
      } else {
        return (
        <div>{renderPaymentMethod}</div>
        )
      }
    } else {
      return <Loading type='button' />
    }
  }
  return {
    renderPaymentLogic
  }
}

export default useLogic
