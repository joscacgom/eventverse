/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Web3Auth } from '@web3auth/modal'
import Web3AuthContext from '@/context/Web3AuthContext'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { TorusWalletConnectorPlugin } from '@web3auth/torus-wallet-connector-plugin'
import { WalletConnectV2Adapter, getWalletConnectV2Settings } from '@web3auth/wallet-connect-v2-adapter'
import { MetamaskAdapter } from '@web3auth/metamask-adapter'
import { TorusWalletAdapter } from '@web3auth/torus-evm-adapter'
import { getUserCookie, setCookie, removeCookie } from '@/utils/Login/userCookie'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string
const walletConnectClientId = process.env.NEXT_PUBLIC_WALLET_CONNECT_CLIENT_ID as string

export const handleWeb3AuthInit = () => {
  const { web3auth, setWeb3auth, setUserData } = useContext(Web3AuthContext)
  const [torusPlugin, setTorusPlugin] =
    useState<TorusWalletConnectorPlugin | null>(null)
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  )
  useEffect(() => {
    const init = async () => {
      const storedProvider = getUserCookie()
      if (storedProvider) {
        setProvider(JSON.parse(storedProvider))
      } else {
        try {
          const web3auth = new Web3Auth({
            clientId,
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.EIP155,
              chainId: '0x13881' // Chain ID for Mumbai testnet
            },
            uiConfig: {
              theme: 'light',
              loginMethodsOrder: ['google'],
              defaultLanguage: 'es',
              appLogo: '/favicon.ico'
            },
            web3AuthNetwork: 'cyan'
          })

          const openloginAdapter = new OpenloginAdapter({
            loginSettings: {
              mfaLevel: 'default'
            },
            adapterSettings: {
              whiteLabel: {
                name: 'EventVerse',
                logoLight: '/favicon.ico',
                logoDark: '/favicon.ico',
                defaultLanguage: 'es',
                dark: true
              }
            }
          })
          web3auth.configureAdapter(openloginAdapter)

          const torusPlugin = new TorusWalletConnectorPlugin({
            torusWalletOpts: {
              buttonPosition: 'bottom-left'
            },
            walletInitOptions: {
              whiteLabel: {
                theme: { isDark: true, colors: { primary: '#222222' } },
                logoDark: '/favicon.png',
                logoLight: '/favicon.png',
                defaultLanguage: 'es',
                topupHide: false,
                featuredBillboardHide: true,
                disclaimerHide: true
              },
              useWalletConnect: true,
              enableLogging: true
            }
          })
          setTorusPlugin(torusPlugin)
          await web3auth.addPlugin(torusPlugin)

          // adding wallet connect v2 adapter
          const defaultWcSettings = await getWalletConnectV2Settings('eip155', [1, 80001, 137], walletConnectClientId)
          const walletConnectV2Adapter = new WalletConnectV2Adapter({
            adapterSettings: { ...defaultWcSettings.adapterSettings },
            loginSettings: { ...defaultWcSettings.loginSettings }
          })

          web3auth.configureAdapter(walletConnectV2Adapter)

          // adding metamask adapter
          const metamaskAdapter = new MetamaskAdapter({
            clientId,
            sessionTime: 3600, // 1 hour in seconds
            web3AuthNetwork: 'cyan',
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.EIP155,
              chainId: '0x13881'
            }
          })
          metamaskAdapter.setAdapterSettings({
            sessionTime: 86400, // 1 day in seconds
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.EIP155,
              chainId: '0x13881'
            },
            web3AuthNetwork: 'cyan'
          })

          // it will add/update  the metamask adapter in to web3auth class
          web3auth.configureAdapter(metamaskAdapter)

          const torusWalletAdapter = new TorusWalletAdapter({
            clientId
          })

          // it will add/update  the torus-evm adapter in to web3auth class
          web3auth.configureAdapter(torusWalletAdapter)

          setWeb3auth(web3auth)

          await web3auth.initModal()

          if (web3auth.provider) {
            setProvider(web3auth.provider)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    init()
  }, [])

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    const user = await web3auth.getUserInfo()
    console.log(user)
  }

  const login = async () => {
    if (!web3auth) {
      return
    }
    const web3authProvider = await web3auth.connect()
    setCookie('web3auth_provider', JSON.stringify(web3authProvider), 7)
    setProvider(web3authProvider)
    const user = await web3auth.getUserInfo()
    setUserData(user)
  }

  const logout = async () => {
    if (!web3auth) {
      return
    }
    await web3auth.logout()
    torusPlugin?.disconnect()
    removeCookie('web3auth_provider')
    setProvider(null)
    setUserData(null)
  }

  return { login, logout, provider }
}
