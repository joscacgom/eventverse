import { Layout } from '@/components'
import { handleNewTicketPurchaseWithCrossmint } from '@/utils/Ticket/handleTicketBuy'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 80vh;
    width: 100%;
`

export type Payload = [{
  type: string
  status: string
  walletAddress: string
  clientId: string
  txId: string
  contractAddress: string
  tokenId: string
  tokenIds: string[]
}]

const SuccessPage = () => {
  const router = useRouter()
  const { p: payload } = router.query

  useEffect(() => {
    if (!payload) return

    const parsedPayload = JSON.parse(payload as string) as Payload
    const options = {
      walletAddress: parsedPayload[0].walletAddress,
      ticketDropContractAddress: parsedPayload[0].contractAddress
    }

    handleNewTicketPurchaseWithCrossmint(options)
  }, [payload])

  return (
    <Layout title='Payment success'>
      <Container>
        <h1>Pago completado 🎉</h1>
        <a href='/'>Vuelve a la página de inicio</a>
      </Container>
    </Layout>
  )
}

export default SuccessPage
