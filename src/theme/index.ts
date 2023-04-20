import { ThemeContext } from 'styled-components'

import { useContext } from 'react'

const nord = {
  black0: '#222222',
  black1: '#434c5e',

  gray0: '#FCFCFC',
  gray1: '#ECEFF4',
  gray2: '#575757',
  gray3: '#B3B3B3',

  red: '#D65151',
  blue: '#0099FF',
  green: '#539362',
  white: '#FFFFFF'
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
