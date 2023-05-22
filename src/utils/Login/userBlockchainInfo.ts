import EthereumRpc from '@/utils/Login/web3RPC'

export const userBlockchainInfo = async (provider: any) => {
  const ethereumRpc = new EthereumRpc(provider)
  const balance = await ethereumRpc?.getBalance()
  const privateKey = await ethereumRpc?.getPrivateKey()
  const address = await ethereumRpc?.getAccounts()

  return { balance, privateKey, address }
}
