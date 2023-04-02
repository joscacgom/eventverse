
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LoginContainer, GoogleButton, MainContainer, Separator, WalletButton } from './styles'
import { Web3AuthNoModal } from '@web3auth/no-modal'
import { WALLET_ADAPTERS, CHAIN_NAMESPACES } from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'

const Login = () => {
  const [web3auth, setWeb3auth] = useState<any>(null)
  const [provider, setProvider] = useState<any>(null)
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [chainId, setChainId] = useState('')
  const [userData, setUserData] = useState({})

  const openloginAdapter = new OpenloginAdapter({
    adapterSettings: {
      network: 'cyan',
      uxMode: 'popup',
      whiteLabel: {
        name: 'EventVerse',
        logoLight: 'https://web3auth.io/images/w3a-L-Favicon-1.svg',
        logoDark: 'https://web3auth.io/images/w3a-D-Favicon-1.svg',
        defaultLanguage: 'en',
        dark: true // whether to enable dark mode. defaultValue: false
      },
      loginConfig: {
        google: {
          verifier: 'eventverse-google-testnet', // Please create a verifier on the developer dashboard and pass the name here
          typeOfLogin: 'google', // Pass on the login provider of the verifier you've created
          clientId: 'GOOGLE_CLIENT_ID.apps.googleusercontent.com' // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
        }

      }
    }
  })

  // You can change the adapter settings by calling the `setAdapterSettings()` function on the adapter instance.

  openloginAdapter.setAdapterSettings({
    web3AuthNetwork: 'cyan',
    sessionTime: 3600, // 1 hour in seconds
    redirectUrl: 'http://localhost:3000'
  })

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth: any = new Web3AuthNoModal({
          clientId: 'BPQQrA98II9GOBcdr8bJGQ-UKEGUcPPPrQOmGwU5NjulTkNu_TkkwiEadw5B9wyks0m6q8uX8tDtiGrkatQYBLI', // Get your Client ID from Web3Auth Dashboard
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x13881' // Use 0x13881 for Mumbai Testnet
          }
        })
        setWeb3auth(web3auth)
        await web3auth.init()
        setProvider(web3auth.provider)
        web3auth.configureAdapter(openloginAdapter)
      } catch (error) {
        console.log(error)
      }
    }
    init()
  }, [])

  const login = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider: 'google'
    })
    setProvider(web3authProvider)
  }

  return (
        <MainContainer>
          <Image src="/images/brand/eventverse-logo-black.png" alt="EventVerse" width={150} height={100} />
          <LoginContainer>
          <h1>Inicia sesión o regístrate</h1>
          <GoogleButton>
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p className="btn-text"><b>Inicia sesión con tu cuenta de google</b></p>
          </GoogleButton>
          <Separator/>
          <WalletButton > Conectar wallet </WalletButton>
          <small>Cuando creas una nueva cuenta aceptas las políticas de privacidad y los términos de uso de EventVerse.</small>
        </LoginContainer>
      </MainContainer>

  )
}

export default Login
