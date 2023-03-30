import '@/styles/globals.css'
import theme from '@/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
