/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import UserSideBar from '@/components/UserInfo/UserSideBar'
import { NextRouter, useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
useRouter as jest.Mock<NextRouter>

describe('UserSideBar', () => {
  it('renders sidebar options correctly', () => {
    render(
            <ThemeProvider theme={theme}>
                <UserSideBar />
            </ThemeProvider>
    )

    expect(screen.getAllByRole('img', { hidden: true })).toHaveLength(2)
    expect(screen.getByText('Mis tickets')).toBeInTheDocument()
    expect(screen.getByText('Mis datos')).toBeInTheDocument()
  })
})
