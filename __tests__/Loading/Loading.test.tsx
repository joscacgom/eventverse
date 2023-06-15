/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Loading from '@/components/Loading'

describe('Loading', () => {
  it('should render a spinner with the specified type', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <Loading type="main" />
        </ThemeProvider>)

    const spinnerElement = getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
  })
})
