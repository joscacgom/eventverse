import { supabase } from '@/config'
import { Event, normalizeEvent } from '@/models/Events/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type SupabaseResponse = Event[] | { error: string } | { events: Event[] }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResponse>
) {
  const { data, error } = await supabase
    .from('event')
    .select('*')

  if (error) return res.status(500).json({ error: error.message ?? 'Server error' })

  if (!data) return res.status(404).json({ events: [] })

  const events: Event[] = data.map(event => normalizeEvent(event))

  res.status(200).json(events)
}
