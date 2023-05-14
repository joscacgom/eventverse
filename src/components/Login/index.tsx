
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LoginContainer, GoogleButton, MainContainer, Separator, WalletButton, IconWrapper, ButtonText } from './styles'
import { Web3AuthNoModal } from '@web3auth/no-modal'
import { WALLET_ADAPTERS, CHAIN_NAMESPACES } from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'

const Login = () => {
  const [web3auth, setWeb3auth] = useState<any>(null)

  const openloginAdapter = new OpenloginAdapter({
    adapterSettings: {
      network: 'cyan',
      uxMode: 'popup',
      whiteLabel: {
        name: 'EventVerse',
        logoLight: 'https://web3auth.io/images/w3a-L-Favicon-1.svg',
        logoDark: 'https://web3auth.io/images/w3a-D-Favicon-1.svg',
        defaultLanguage: 'en',
        dark: true
      },
      loginConfig: {
        google: {
          verifier: process.env.GOOGLE_AUTH_VERIFYER || '',
          typeOfLogin: 'google',
          clientId: process.env.GOOGLE_AUTH_CLIENT_ID
        }

      }
    }
  })

  openloginAdapter.setAdapterSettings({
    web3AuthNetwork: 'cyan',
    sessionTime: 3600,
    redirectUrl: 'http://localhost:3000'
  })

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth: any = new Web3AuthNoModal({
          clientId: process.env.WEB3_CLIENT_ID || '',
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x13881'
          }
        })
        setWeb3auth(web3auth)
        await web3auth.init()
        web3auth.configureAdapter(openloginAdapter)
      } catch (error) {
        throw new Error()
      }
    }
  }, [])

  const login = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
    }
  }
  return (
        <MainContainer>
          <Image src="/images/brand/eventverse-logo-black.png" alt="EventVerse" width={150} height={100} />
          <LoginContainer>
          <h1>Inicia sesión o regístrate</h1>
          <GoogleButton>
            <IconWrapper>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width={20} height={20} />
            </IconWrapper>
            <ButtonText>Inicia sesión con tu cuenta de google</ButtonText>
          </GoogleButton>
          <Separator/>
          <WalletButton > Conectar wallet </WalletButton>
          <small>Cuando creas una nueva cuenta aceptas las políticas de privacidad y los términos de uso de EventVerse.</small>
        </LoginContainer>
      </MainContainer>

  )
}

export default Login
