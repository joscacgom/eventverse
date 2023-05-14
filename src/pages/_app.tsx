import '@/styles/globals.css'
import theme from '@/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  </ThemeProvider>
)

export default App
