import useCreateNFTDrop from '@/hooks/useCreateNFTDrop'
import { ConnectWallet } from '@thirdweb-dev/react'

const CreateNFTDrop = () => {
  const {
    contractAddress,
    deployContract,
    error,
    loading
  } = useCreateNFTDrop()

  const renderStatus = () => {
    if (loading) {
      return <p>Loading...</p>
    }
    if (error) {
      return <p>{error}</p>
    }
    if (contractAddress) {
      return (
        <p>
          Contract deployed at address: {contractAddress}
        </p>
      )
    }
  }
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          margin: '1rem 0',
          color: '#000'
        }}
      >Vite + React</h1>
      <div className="card">
        <button onClick={() => deployContract()}>
          Deploy Contract
        </button>
        <ConnectWallet />
        {renderStatus()}
      </div>
    </>
  )
}

export default CreateNFTDrop
