import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'

export const parseDate = (dateString:string) => {
  const [datePart, timePart] = dateString.includes('T') ? dateString.split('T') : dateString.split(' ')

  const parsedDate = dateString.includes('T') ? parse(datePart, 'yyyy-MM-dd', new Date()) : parse(datePart, 'dd-MM-yyyy', new Date())
  const parsedTime = parse(timePart, 'HH:mm', new Date())

  const formattedDate = format(parsedDate, "dd 'de' MMMM yyyy", { locale: es })
  const formattedTime = format(parsedTime, 'HH:mm')

  return `${formattedDate} ${formattedTime}`
}
