/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import CategorySection, { Category } from '@/containers/Resell/ResellMarket/HeaderSection/CategorySection'

describe('CategorySection', () => {
  it('should render category items', () => {
    render(
        <ThemeProvider theme={theme}>
            <CategorySection />
        </ThemeProvider>)
    Object.values(Category).forEach((category) => {
      const categoryItem = screen.getByText(category)
      expect(categoryItem).toBeInTheDocument()
    })
  })
})