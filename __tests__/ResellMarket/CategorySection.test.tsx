/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import CategorySection from '@/containers/Resell/ResellMarket/HeaderSection/CategorySection'
import { EventCategory } from '@/models/Events/types'

describe('CategorySection', () => {
  it('should render category items', () => {
    const onSelectCategoryMock = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <CategorySection onSelectCategory={onSelectCategoryMock} />
        </ThemeProvider>)
    Object.values(EventCategory).forEach((category) => {
      const categoryItem = screen.getByText(category)
      expect(categoryItem).toBeInTheDocument()
    })
  })
})
