import { FC, useEffect, useState } from 'react'
import { Container, Label, Item, Value } from './styles'
interface ITimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerProps {
  date: Date;
}

const Timer: FC<TimerProps> = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = Number(new Date(date)) - Number(new Date())
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft as ITimeLeft
  }

  const [timeLeft, setTimeLeft] = useState<ITimeLeft>(calculateTimeLeft())
  const { days, hours, minutes, seconds } = timeLeft

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const items = [
    { label: 'Dia', value: days },
    { label: 'Hora', value: hours },
    { label: 'Minuto', value: minutes },
    { label: 'Segundo', value: seconds }
  ]

  return (
    <Container>
      {items.map(({ label, value }) => (
        <Item key={label} >
          <Value>
            {value < 10 ? `0${value}` : value}{' '}
          </Value>
          <Label>
            {value === 1 ? label : `${label}s`}
          </Label>
        </Item>
      ))}
    </Container>
  )
}
export default Timer
