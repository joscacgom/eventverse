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
        onSubmit={async () => toast.promise(createTicketBuy({ walletAddress, ticketId }), {
          pending: 'Procesando datos de tu compra... ⏳',
          success: 'Tu compra ha sido procesada exitosamente! 😍',
          error: 'Hubo un error al procesar tu compra! 😭 Por favor, intenta nuevamente.'
        })}
        onError={() => { toast.error('Puede que hayas alcanzado el límite de compras por persona 😢') }}
        action={() =>
          claimNft({
            to: walletAddress,
            quantity: BigNumber.from(quantity || 0)
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
