import '@/styles/globals.css'
import theme from '@/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Web3AuthProvider } from '@/context/Web3AuthContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { QueryClient, QueryClientProvider } from 'react-query'

config.autoAddCss = false

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Web3AuthProvider>
      <ThemeProvider theme={theme}>
        <ThirdwebProvider activeChain={ChainId.Mumbai}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </ThemeProvider>
    </Web3AuthProvider >
  </QueryClientProvider>
)

export default App
