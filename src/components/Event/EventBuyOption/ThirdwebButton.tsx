import type { FC } from 'react'
import { Web3Button, useAddress, useClaimNFT, useContract } from '@thirdweb-dev/react'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BigNumber } from 'ethers'
import { createTicketBuy } from '@/utils/Ticket/handleTicketBuy'

type Props = {
    contractAddress: string
    quantity?: number
    ticketId: number
}
const ThirdwebButton: FC<Props> = ({ contractAddress, quantity, ticketId }) => {
  const { contract } = useContract(contractAddress)
  const walletAddress = useAddress() || ''
  const { mutate: claimNft } = useClaimNFT(contract)

  return (
    <>
    <ToastContainer theme='colored' transition={Zoom} position='top-center' />
    <Web3Button
        contractAddress={contractAddress}
        onSuccess={async () => createTicketBuy({ walletAddress, ticketId })}
        onError={() => { toast.error('Puede que hayas alcanzado el límite de compras por persona 😢') }}
        action={() =>
          claimNft({
            to: walletAddress,
            quantity: BigNumber.from(quantity || 1)
          })
      }
        theme="dark"

    >
        Comprar con Wallet
    </Web3Button>
    </>

  )
}

export default ThirdwebButton
