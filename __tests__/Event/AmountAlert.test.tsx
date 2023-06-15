/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import AmountAlert from '@/components/Event/EventBuyOption/AmountAlert'
import { BigNumber } from 'ethers'

describe('AmountAlert', () => {
  it('renders the component with the correct message', () => {
    const supply = BigNumber.from(5)

    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <AmountAlert supply={supply} />
        </ThemeProvider>)

    expect(getByText('¡Solo quedan 5 tickets disponibles!')).toBeInTheDocument()
  })

  it('renders the component with a different message for larger supply', () => {
    const supply = BigNumber.from(15)

    const { getByText } = render(
    <ThemeProvider theme={theme}>
        <AmountAlert supply={supply} />
    </ThemeProvider>)

    expect(getByText('Aún Quedan 15 tickets disponibles.')).toBeInTheDocument()
  })

  it('renders the component with a default message when supply is undefined', () => {
    const { getByText } = render(
    <ThemeProvider theme={theme}>
        <AmountAlert supply={undefined} />
    </ThemeProvider>)

    expect(getByText('Aún Quedan 0 tickets disponibles.')).toBeInTheDocument()
  })
})
