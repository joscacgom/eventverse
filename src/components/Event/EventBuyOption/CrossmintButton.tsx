import type { FC } from 'react'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'

type Props = {
    clientId?: string
    totalPrice: string
}
const TEST_CLIENT_ID = 'b01bd14f-1da4-4343-84a9-dc1909844036'

const CrossmintButton: FC<Props> = ({ clientId = TEST_CLIENT_ID, totalPrice }) =>
    <CrossmintPayButton
        clientId={clientId}
        mintConfig={{ type: 'thirdweb-drop', totalPrice, quantity: '1' }}
        environment="staging"
    />

export default CrossmintButton
