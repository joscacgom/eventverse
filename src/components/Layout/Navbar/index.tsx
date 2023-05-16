/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Button85, LinkItem, MenuLinks, Nav } from './styles'
import { useRouter } from 'next/router'
import { Web3Auth } from '@web3auth/modal'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { TorusWalletConnectorPlugin } from '@web3auth/torus-wallet-connector-plugin'
import { WalletConnectV2Adapter, getWalletConnectV2Settings } from '@web3auth/wallet-connect-v2-adapter'
import { MetamaskAdapter } from '@web3auth/metamask-adapter'
import { TorusWalletAdapter } from '@web3auth/torus-evm-adapter'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string
const walletConnectClientId = process.env.NEXT_PUBLIC_WALLET_CONNECT_CLIENT_ID as string
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const router = useRouter()
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null)
  const [torusPlugin, setTorusPlugin] =
    useState<TorusWalletConnectorPlugin | null>(null)
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  )

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMobileMenu(true)
      }
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClickLogo = () => {
    router.push('/')
  }

  const handleClickCreateEvent = () => {
    router.push('/event/create')
  }

  useEffect(() => {
    const init = async () => {
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
            appLogo: '/favicon.ico' // Your App Logo Here
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
              dark: true // whether to enable dark mode. defaultValue: false
            }
          }
        })
        web3auth.configureAdapter(openloginAdapter)

        // adding torus wallet connector plugin

        const torusPlugin = new TorusWalletConnectorPlugin({
          torusWalletOpts: {
            buttonPosition: 'bottom-left'
          },
          walletInitOptions: {
            whiteLabel: {
              theme: { isDark: true, colors: { primary: '#222222' } },
              logoDark: '/favicon.ico',
              logoLight: '/favicon.ico',
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
        // we can change the above settings using this function
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

        // await web3auth.initModal({
        //   modalConfig: {
        //     [WALLET_ADAPTERS.OPENLOGIN]: {
        //       label: "openlogin",
        //       loginMethods: {
        //         // Disable facebook and reddit
        //         facebook: {
        //           name: "facebook",
        //           showOnModal: false
        //         },
        //         reddit: {
        //           name: "reddit",
        //           showOnModal: false
        //         },
        //         // Disable email_passwordless and sms_passwordless
        //         email_passwordless: {
        //           name: "email_passwordless",
        //           showOnModal: false
        //         },
        //         sms_passwordless: {
        //           name: "sms_passwordless",
        //           showOnModal: false
        //         }
        //       }
        //     }
        //   }
        // });

        if (web3auth.provider) {
          setProvider(web3auth.provider)
        }
      } catch (error) {
        console.error(error)
      }
    }

    init()
  }, [])

  const login = async () => {
    if (!web3auth) {
      return
    }
    const web3authProvider = await web3auth.connect()
    setProvider(web3authProvider)
  }

  const logout = async () => {
    if (!web3auth) {
      return
    }
    await web3auth.logout()
    setProvider(null)
  }
  return (
    <Nav mobile={showMobileMenu}>
        <img
          src={'/images/brand/eventverse-logo-black.png'}
          alt="Logo"
          width={150}
          height={'auto'}
          onClick={handleClickLogo}
        />
      <MenuLinks mobile={showMobileMenu}>
        <LinkItem mobile={showMobileMenu} primary={false} href={'/'}>Eventos</LinkItem>
        <LinkItem mobile={showMobileMenu} primary={false} href={'/resell'}>Reventas</LinkItem>
        <Button85 onClick={login}>Login</Button85>
        <Button85 onClick={handleClickCreateEvent}>Crear evento</Button85>
      </MenuLinks>
    </Nav>
  )
}

export default Navbar
