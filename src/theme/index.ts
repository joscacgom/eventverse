import { ThemeContext } from 'styled-components'

import { useContext } from 'react'

const nord = {
  gray0: '#2E3440'
}

const theme = {
  nord
}

export type Theme = typeof theme;

export default theme as Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext)
