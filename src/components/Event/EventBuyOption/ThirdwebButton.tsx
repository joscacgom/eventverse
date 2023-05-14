import React, { FC } from 'react'
import { Web3Button } from '@thirdweb-dev/react'

type Props = {
    contractAddress: string
}
const ThirdwebButton: FC<Props> = ({ contractAddres }) => (
    <Web3Button
        contractAddress={contractAddress}
        action={(contract) => contract.erc721.claim(1)}
        theme="dark"
    >
        Comprar con Wallet
    </Web3Button>
)

export default ThirdwebButton
