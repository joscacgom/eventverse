import { supabase } from '@/config'
import { Event, normalizeEvent } from '@/models/Events/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type SupabaseResponse = Event | { error: string } | { event: {} }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResponse>
) {
  const { id } = req.query

  const { data, error } = await supabase
    .from('event')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return res.status(500).json({ error: error.message ?? 'Server error' })

  if (!data) return res.status(404).json({ event: {} })

  const event: Event = normalizeEvent(data)

  res.status(200).json(event)
}
