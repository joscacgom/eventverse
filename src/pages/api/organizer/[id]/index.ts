import { supabase } from '@/config'
import { Organizer, normalizeOrganizer } from '@/models/Users/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type SupabaseResponse = Organizer | { error: string } | { organizer: {} }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResponse>
) {
  const { id } = req.query

  const { data, error } = await supabase
    .from('organizer')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return res.status(500).json({ error: error.message ?? 'Server error' })

  if (!data) return res.status(404).json({ organizer: {} })

  const organizer: Organizer = normalizeOrganizer(data)

  res.status(200).json(organizer)
}
