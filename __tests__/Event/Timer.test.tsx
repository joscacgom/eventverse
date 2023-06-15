/* eslint-disable no-undef */
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { render, screen, act } from '@testing-library/react'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Timer from '@/components/Event/EventBuyOption/Timer'

jest.useFakeTimers()

describe('Timer', () => {
  it('renders the timer and updates time left', () => {
    const date = new Date()
    date.setSeconds(date.getSeconds() + 10)

    render(
        <ThemeProvider theme={theme}>
            <Timer date={date} />
        </ThemeProvider>
    )

    const initialDays = screen.getByText('Dias')
    const initialHours = screen.getByText('Horas')
    const initialMinutes = screen.getByText('Minutos')
    const initialSeconds = screen.getByText('Segundos')
    const initialSecondsNumber = screen.getByText('10')

    expect(initialDays).toBeInTheDocument()
    expect(initialHours).toBeInTheDocument()
    expect(initialMinutes).toBeInTheDocument()
    expect(initialSeconds).toBeInTheDocument()
    expect(initialSecondsNumber).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    const updatedDays = screen.getByText('Dias')
    const updatedHours = screen.getByText('Horas')
    const updatedMinutes = screen.getByText('Minutos')
    const updatedSeconds = screen.getByText('Segundos')
    const updatedSecondsNumber = screen.getByText('09')

    expect(updatedDays).toBeInTheDocument()
    expect(updatedHours).toBeInTheDocument()
    expect(updatedMinutes).toBeInTheDocument()
    expect(updatedSeconds).toBeInTheDocument()
    expect(updatedSecondsNumber).toBeInTheDocument()
  })
})
