/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import CustomAlert from '@/components/Event/EventBuyOption/CustomAlert'

describe('CustomAlert', () => {
  it('renders the alert with correct status and text', () => {
    const status = 'danger'
    const text = 'Alert message'

    render(
        <ThemeProvider theme={theme}>
            <CustomAlert status={status} text={text} />
        </ThemeProvider>
    )

    const alertContainer = screen.getByTestId('alert-container')
    const alertText = screen.getByText(text)

    expect(alertContainer).toBeInTheDocument()
    expect(alertContainer).toHaveStyle(`background-color: ${theme.nord.red}`)
    expect(alertText).toBeInTheDocument()
    expect(alertText).toHaveTextContent(text)
  })
})
