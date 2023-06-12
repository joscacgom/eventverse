/* eslint-disable camelcase */
import { TicketTableSupabase } from '@/models/Tickets/types'
import { handleSubmitImageToCloudinary } from '../Event/handleSubmitImageToCloudinary'
import { handleSubmitToThirdWeb } from './handleSubmitToThirdWeb'
import { supabase } from '@/config'
import { EventTableSupabase } from '@/models/Events/types'

type Props = {
  eventToSubmit: EventTableSupabase
  ticketToSubmit: TicketTableSupabase
  walletAddress: string | undefined
}
export const handleSubmitEventToSupabase = async ({ eventToSubmit, ticketToSubmit, walletAddress }: Props) => {
  if (!walletAddress) {
    alert('❌ Necesitas iniciar sesión para crear un evento')
    return
  }

  try {
    const imageURL = await handleSubmitImageToCloudinary(eventToSubmit.image)

    const { data: organizerData, error: organizerError } = await supabase
      .from('organizer')
      .select()
      .eq('wallet_address', walletAddress)

    const organizer_id = organizerData?.[0].id

    const { data: eventData, error: eventError } = await supabase
      .from('event')
      .insert([{ ...eventToSubmit, organizer_id, image: imageURL }])
      .select()

    if (eventError || organizerError) {
      throw new Error('Event submission failed!')
    }

    const eventId = eventData?.[0].id

    const { nftContract, nftImageURL } = await handleSubmitToThirdWeb(ticketToSubmit)

    const { error: ticketError } = await supabase
      .from('ticket_drop')
      .insert([
        {
          ...ticketToSubmit,
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
