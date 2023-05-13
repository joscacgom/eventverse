/* eslint-disable camelcase */
import { EventTableSupabase } from '@/models/Events/types'
import { TicketTableSupabase } from '@/models/Tickets/types'
import { createClient } from '@supabase/supabase-js'
import { handleSubmitImageToCloudinary } from '../Event/handleSubmitImageToCloudinary'

const supabase = createClient('https://mxfgbnuvnebcyxbczdcr.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_KEY as string)
const organizer_id = 1

export const handleSubmitEventToSupabase = async (event: EventTableSupabase, ticket: TicketTableSupabase) => {
  try {
    const imageURL = await handleSubmitImageToCloudinary(event.image)
    const { data: eventData, error: eventError } = await supabase
      .from('event')
      .insert([{ ...event, organizer_id, image: imageURL }])
      .select()

    if (eventError) {
      throw new Error('Event submission failed!')
    }

    const eventId = eventData?.[0].id

    const { error: ticketError } = await supabase
      .from('ticket_drop')
      .insert([{ ...ticket, event_id: eventId }])

    if (ticketError) {
      throw new Error('Ticket submission failed!')
    }

    return 'success'
  } catch (error) {
    throw new Error('Submission failed!')
  }
}
