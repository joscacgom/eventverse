import { supabase } from '@/config'

type Props = {
  walletAddress: string;
  ticketId: number;
};

export async function createTicketBuy ({ walletAddress, ticketId }: Props) {
  const { data: existingData, error } = await supabase
    .from('ticket_purchased')
    .select('*')
    .eq('wallet_address', walletAddress)
    .eq('ticket_drop', ticketId)

  if (error) {
    console.error('Error checking for existing row:', error)
    return
  }

  if (existingData && existingData.length > 0) {
    return
  }

  await supabase.from('ticket_purchased').insert([
    {
      wallet_address: walletAddress,
      ticket_drop: ticketId
    }
  ])
}
