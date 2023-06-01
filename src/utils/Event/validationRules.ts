export const validationRules = [
  {
    fields: [
      'eventName',
      'startDate',
      'endDate',
      'eventDescription',
      'image',
      'location',
      'eventSummary',
      'eventCategory',
      'eventType',
      'country',
      'timezone'
    ],
    lengthMin: 5,
    lengthMax: 255,
    errorMessageEmpty: 'Por favor, completa todos los campos 😬',
    errorMessageDate: 'La fecha de inicio no puede ser mayor que la fecha de fin 😬',
    errorMessageLengthEvent: 'Los campos de nombre, descripción y resumen deben tener entre 5 y 255 caracteres 😬',
    errorMessageLengthMinEvent: 'Los campos de nombre, descripción y resumen no pueden ser menores a 5 caracteres 😬',
    errorMessageDatePast: 'La fecha de inicio no puede ser menor a la fecha actual 😬',
    errorMessageStartDateTicket: 'La fecha de inicio de venta del ticket no puede ser mayor a la fecha de inicio del evento 😬',
    errorMessageEndDateTicket: 'La fecha de fin de venta del ticket no puede ser mayor a la fecha de fin del evento 😬'
  },
  {
    fields: [
      'ticketName',
      'ticketAmount',
      'ticketPrice',
      'image',
      'ticketDescription',
      'ticketLimit',
      'ticketRoyalties',
      'endDate',
      'startDate'
    ],
    lengthMin: 5,
    lengthMax: 255,
    errorMessageEmpty: 'Por favor, completa todos los campos 😬',
    errorMessageDate: 'La fecha de inicio no puede ser mayor que la fecha de fin 😬',
    errorMessageLength: 'Los campos de nombre y descripción deben tener entre 5 y 255 caracteres 😬',
    errorMessageLengthMin: 'Los campos de cantidad, precio, límite y regalías no pueden ser menores a 1 😬',
    errorMessageLenghtMax: 'Los campos de cantidad, precio, límite y regalías no pueden ser mayores a 100000 😬',
    errorMessageDatePast: 'La fecha de inicio no puede ser menor a la fecha actual 😬',
    errorMessageLimit: 'El límite de tickets de un usuario no puede ser mayor a la cantidad de tickets 😬',
    errorMessageStartDateTicket: 'La fecha de inicio de venta del ticket no puede ser mayor a la fecha de inicio del evento 😬',
    errorMessageEndDateTicket: 'La fecha de fin de venta del ticket no puede ser mayor a la fecha de fin del evento 😬'
  }
]
