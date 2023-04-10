import '@/styles/globals.css'
import theme from '@/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
      <Component {...pageProps} />
  </ThemeProvider>
)

export default App
