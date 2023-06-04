/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/config'
import { Ticket, normalizeTicket } from '@/models/Tickets/types'

type SupabaseResponse = Ticket[] | { error: string } | { tickets: Ticket[] }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<SupabaseResponse>
) {
  const { walletAddress } = req.query

  const { data: ticketPurchasedData, error: ticketPurchasedError } = await supabase
    .from('ticket_purchased')
    .select('*')
    .eq('wallet_address', walletAddress as string)
    .order('created_at', { ascending: false })

  if (ticketPurchasedError) {
    return res.status(500).json({ error: ticketPurchasedError.message ?? 'Server error' })
  }

  if (!ticketPurchasedData) {
    return res.status(404).json({ tickets: [] })
  }

  const ticketIds = ticketPurchasedData.map((ticket) => ticket.ticket_drop)

  const { data: ticketsData, error: ticketsError } = await supabase
    .from('ticket_drop')
    .select('*')
    .in('id', ticketIds)

  if (ticketsError) {
    return res.status(500).json({ error: ticketsError.message ?? 'Server error' })
  }

  const tickets: Ticket[] = ticketsData.map(ticket => normalizeTicket(ticket))

  res.status(200).json(tickets)
}
