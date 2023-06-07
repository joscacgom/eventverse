import { Ticket } from '@/models/Tickets/types'
import { SmartContract, useActiveClaimConditionForWallet, useClaimConditions, useUnclaimedNFTSupply } from '@thirdweb-dev/react'
import React, { useMemo } from 'react'
import Timer from './Timer'
import Loading from '@/components/Loading'
import ThirdwebButton from './ThirdwebButton'
import { PaymentMethod } from './types'
import CrossmintButton from './CrossmintButton'

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

    if (isTicketEndDatePassed) {
      return (
        <div>
          <p>Ha finalizado el plazo de compra.</p>
        </div>
      )
    }
  }, [ticket])

  const checkUserLogged = useMemo(() => {
    if (!userAddress) {
      return (
        <div>
          <p>Por favor, inicia sesión.</p>
        </div>
      )
    }
  }, [userAddress])

  // 3. plazo de compra
  const checkTicketStartDate = useMemo(() => {
    const isTicketStartDatePassed = claimConditions.data && claimConditions.data[0]?.startTime > new Date()
    if (isTicketStartDatePassed) {
      return (
        <div>
          <Timer date={claimConditions.data[0]?.startTime} />
        </div>
      )
    }
  }, [claimConditions])

  // const checkClaimConditionsHasError = useMemo(() => {
  //   if (activeClaimCondition.isError) {
  //     console.log('activeClaimCondition.isError', activeClaimCondition.isError)
  //     return (
  //       <div>
  //         <p>Límite de tickets por persona alcanzado.</p>
  //       </div>
  //     )
  //   }
  // }, [activeClaimCondition])

  const loadingClaimData = useMemo(() => {
    const loading = activeClaimCondition.isLoading || claimConditions.isLoading
    if (loading) {
      return (
        <div>
          <Loading type='button' />
        </div>
      )
    }
  }, [activeClaimCondition, claimConditions])

  const renderPaymentMethod = useMemo(() => {
    if (!ticket) return null

    if (paymentMethod === PaymentMethod.CREDIT_CARD) return <CrossmintButton quantity={amount} totalPrice={totalPrice} />
    return <ThirdwebButton contractAddress={ticket.contract_address} />
  }, [ticket, paymentMethod, amount, totalPrice])

  const notEnoughTickets = useMemo(() => {
    if (unClaimedSupply.data?.eq(0)) {
      return (
        <div>
          <p>Agotado 😭</p>
        </div>
      )
    }
  }, [unClaimedSupply])

  const renderPaymentLogic = () => {
    if (checkTicketEndDate) return checkTicketEndDate
    if (checkUserLogged) return checkUserLogged
    if (checkTicketStartDate) return checkTicketStartDate
    if (loadingClaimData) return loadingClaimData
    if (notEnoughTickets) return notEnoughTickets
    if (renderPaymentMethod) return renderPaymentMethod
  }

  return {
    renderPaymentLogic
  }
}

export default useLogic
