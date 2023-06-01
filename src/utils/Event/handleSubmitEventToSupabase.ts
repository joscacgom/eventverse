/* eslint-disable camelcase */
import { EventTableSupabase } from '@/models/Events/types'
import { TicketTableSupabase } from '@/models/Tickets/types'
import { handleSubmitImageToCloudinary } from '../Event/handleSubmitImageToCloudinary'
import { handleSubmitToThirdWeb } from './handleSubmitToThirdWeb'
import { supabase } from '@/config'

export const handleSubmitEventToSupabase = async (event: EventTableSupabase, ticket: TicketTableSupabase) => {
  try {
    const organizerId = 1
    const imageURL = await handleSubmitImageToCloudinary(event.image)
    const { data: eventData, error: eventError } = await supabase
      .from('event')
      .insert([{ ...event, organizerId, image: imageURL }])
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
