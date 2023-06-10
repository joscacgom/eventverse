import type { FC } from 'react'
import { Web3Button } from '@thirdweb-dev/react'

type Props = {
    contractAddress: string
    quantity?: number
}
const ThirdwebButton: FC<Props> = ({ contractAddress, quantity = 1 }) => (
    <Web3Button
        contractAddress={contractAddress}
        action={(contract) => contract.erc721.claim(quantity)}
        theme="dark"

    >
        Comprar con Wallet
    </Web3Button>
)

export default ThirdwebButton
