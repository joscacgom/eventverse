import React from 'react'
/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import TopSection from '@/containers/Resell/ResellMarket/HeaderSection'

describe('TopSection', () => {
  it('should render the heading and category section', () => {
    const onSelectCategoryMock = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <TopSection onSelectCategory={onSelectCategoryMock} />
        </ThemeProvider>)

    const subheading = screen.getByText('Un lugar seguro donde comprar y vender entradas de reventa')
    expect(subheading).toBeInTheDocument()
    const categorySection = screen.getByTestId('category-section')
    expect(categorySection).toBeInTheDocument()
  })
})
