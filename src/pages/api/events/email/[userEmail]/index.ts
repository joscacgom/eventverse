import { supabase } from '@/config'
import { Event, normalizeEvents } from '@/models/Events/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type SupabaseResponse = Event[] | { error: string } | { event: {} }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResponse>
) {
  const { userEmail } = req.query

  //  1. Get single user by email
  const { data: user, error: userError } = await supabase
    .from('organizer')
    .select('*')
    .eq('email', userEmail)
    .single()

  if (userError) return res.status(500).json({ error: userError.message ?? 'Server error' })
  if (!user) return res.status(404).json({ event: {} })

  // 2. Get all events by user
  const { data: events, error: eventsError } = await supabase
    .from('event')
    .select('*')
    .eq('organizer_id', user.id)

  if (eventsError) return res.status(500).json({ error: eventsError.message ?? 'Server error' })
  if (!events) return res.status(404).json({ event: {} })

  const normalizedEvents: Event[] = normalizeEvents(events)

  res.status(200).json(normalizedEvents)
}
