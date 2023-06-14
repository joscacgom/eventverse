/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Layout from '@/components/Layout'

describe('Layout', () => {
  it('should render the children and title', () => {
    const title = 'Test Title'
    const childText = 'Test Content'

    render(
    <ThemeProvider theme={theme}>
      <Layout title={title}>
        <div>{childText}</div>
      </Layout>
    </ThemeProvider>
    )

    const titleElement = screen.getByText(`EventVerse - ${title}`)
    const childElement = screen.getByText(childText)

    expect(titleElement).toBeInTheDocument()
    expect(childElement).toBeInTheDocument()
  })
})
