/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/config'
import { Ticket, normalizeTicket } from '@/models/Tickets/types'

type SupabaseResponse = Ticket[] | { error: string } | { tickets: Ticket[] }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResponse>
) {
  const { data, error } = await supabase
    .from('ticket_drop')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return res.status(500).json({ error: error.message ?? 'Server error' })

  if (!data) return res.status(404).json({ tickets: [] })

  const tickets: Ticket[] = data.map(ticket => normalizeTicket(ticket))

  res.status(200).json(tickets)
}
