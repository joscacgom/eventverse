/* eslint-disable camelcase */
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { useState } from 'react'

const useCreateNFTDrop = () => {
  const private_key = 'f063bb5086fa0f353c9d40045eddf6c93a4290a89e7c025d66029b986c322b09'

  const sdk = ThirdwebSDK.fromPrivateKey(private_key, 'mumbai')
  const [contractAddress, setContractAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const deployContract = async () => {
    setLoading(true)
    setError(false)
    try {
      if (!sdk) return
      const contractAddress = await sdk.deployer.deployNFTDrop({
        name: 'NFT drop JVEGAX 2',
        primary_sale_recipient: '0xe4121479709D015fa3cee6Eeb29a1EB418e18600',
        description: 'NFT drop JVEGAX',
        image: 'https://avatars.githubusercontent.com/u/49287932?v=4',
        symbol: 'JVX'
      })

      //  Set claim conditions
      const claimConditions = [
        {
          startTime: new Date(),
          maxClaimableSupply: 2,
          maxClaimablePerWallet: 1,
          price: 0.01
        }
      ]

      const metadatas = [{
        name: 'NFT drop JVEGAX 2',
        description: 'NFT drop JVEGAX',
        image: 'https://avatars.githubusercontent.com/u/49287932?v=4'
      }, {
        name: 'NFT drop JVEGAX 2',
        description: 'NFT drop JVEGAX',
        image: 'https://avatars.githubusercontent.com/u/49287932?v=4'
      }]

      const contractDrop = await sdk?.getContract(contractAddress, 'nft-drop')

      await contractDrop?.createBatch(metadatas)
      await contractDrop?.claimConditions.set(claimConditions)
      setContractAddress(contractAddress)
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return {
    deployContract,
    contractAddress,
    loading,
    error
  }
}

export default useCreateNFTDrop
