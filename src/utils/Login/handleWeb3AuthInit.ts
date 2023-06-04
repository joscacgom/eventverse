import { useContext, useEffect, useState } from 'react'
import { Web3Auth } from '@web3auth/modal'
import Web3AuthContext from '@/context/Web3AuthContext'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { TorusWalletConnectorPlugin } from '@web3auth/torus-wallet-connector-plugin'
import { WalletConnectV2Adapter, getWalletConnectV2Settings } from '@web3auth/wallet-connect-v2-adapter'
import { MetamaskAdapter } from '@web3auth/metamask-adapter'
import { TorusWalletAdapter } from '@web3auth/torus-evm-adapter'
import { getUserCookie, setCookie, removeCookie } from '@/utils/Login/userCookie'
import { checkOrganizerExists, createOrganizer } from './utils'
import { userBlockchainInfo } from './userBlockchainInfo'

const clientId = process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID as string
const walletConnectClientId = process.env.NEXT_PUBLIC_WALLET_CONNECT_CLIENT_ID as string

export const handleWeb3AuthInit = () => {
  const { web3auth: web3authcontext, setUserData, setWeb3auth } = useContext(Web3AuthContext)
  const [torusPlugin, setTorusPlugin] =
    useState<TorusWalletConnectorPlugin | null>(null)
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null | any>(null)
  useEffect(() => {
    const init = async () => {
      if (provider && !getUserCookie('web3auth_provider')) {
        try {
          setCookie('web3auth_provider', JSON.stringify(provider))
        } catch (error) {
          setCookie('web3auth_provider', '{Metamask/Other}')
        }
        const user = JSON.parse(getUserCookie('userData'))
        const { balance, privateKey, address } = await userBlockchainInfo(provider)
        const userWithBlockchainInfo = Object.keys(user).length === 0 ? { balance, address } : { ...user, balance, privateKey, address }
        setUserData(userWithBlockchainInfo)
        setCookie('userData', JSON.stringify(userWithBlockchainInfo), 7)
        const organizerExists = await checkOrganizerExists()
        if (organizerExists) return
        await createOrganizer()
      }
    }
    init()
  }, [provider])

  useEffect(() => {
    const init = async () => {
      const storedProvider = getUserCookie('web3auth_provider')
      if (storedProvider) {
        try {
          const parsedProvider = JSON.parse(storedProvider)
          setProvider(parsedProvider)
        } catch (error) {
          setProvider(storedProvider)
        }
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
                theme: {
                  isDark: false,
                  colors: {
                    torusBrand1: '#000000',
                    primary: '#ffffff'
                  }
                },
                logoDark: 'https://res.cloudinary.com/duffkgzef/image/upload/v1685733380/favicon_hayass.ico',
                logoLight: 'https://res.cloudinary.com/duffkgzef/image/upload/v1685733380/favicon_hayass.ico',
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

          const web3provider: SafeEventEmitterProvider | null = await new Promise(resolve => {
            const checkProvider = () => {
              if (web3auth.provider) {
                resolve(web3auth.provider)
              } else {
                setTimeout(checkProvider, 100) // Check again after 100ms
              }
            }
            checkProvider()
          })
          if (web3provider) {
            setProvider(web3provider)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    init()
  }, [])

  const login = async () => {
    if (!web3authcontext) return

    await web3authcontext.connect()
    const user = await web3authcontext.getUserInfo()
    setCookie('userData', JSON.stringify(user), 7)
    setUserData(user)
  }

  const logout = async () => {
    removeCookie('web3auth_provider')
    removeCookie('userData')
    setProvider(null)
    setUserData(null)
    if (!web3authcontext) return
    await torusPlugin?.disconnect()
    await web3authcontext.logout()
  }

  return { login, logout, provider }
}
