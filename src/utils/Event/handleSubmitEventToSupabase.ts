/* eslint-disable camelcase */
import { TicketTableSupabase } from '@/models/Tickets/types'
import { handleSubmitToThirdWeb } from './handleSubmitToThirdWeb'
import { supabase } from '@/config'

export const handleSubmitEventToSupabase = async (ticket: TicketTableSupabase) => {
  try {
    const organizerId = 1
    const { data: eventData, error: eventError } = await supabase
      .from('event')
      .insert([{ ...event, organizerId }])
      .select()

    if (eventError) {
      throw new Error('Event submission failed!')
    }

    const eventId = eventData?.[0].id

    const { nftContract, nftImageURL } = await handleSubmitToThirdWeb(ticket)

    const { error: ticketError } = await supabase
      .from('ticket_drop')
      .insert([
        {
          ...ticket,
          event_id: eventId,
          contract_address: nftContract,
          image: nftImageURL
        }
      ])

    if (ticketError) {
      throw new Error('Ticket submission failed!')
    }

    return 'success'
  } catch (error) {
    throw new Error('Submission failed!')
  }
}
