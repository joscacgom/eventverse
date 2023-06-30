import { supabase } from '@/config'
import { normalizeEvent } from '@/models/Events/types'
import { Ticket } from '@/models/Tickets/types'

export const getEventByAddress = async (address: Ticket['contract_address']) => {
  const { data: ticketDrop } = await supabase
    .from('ticket_drop')
    .select('*')
    .eq('contract_address', address)
    .single()

  const eventId = ticketDrop?.event_id

  const { data: event } = await supabase
    .from('event')
    .select('*')
    .eq('id', eventId)
    .single()

  return normalizeEvent(event)
}
