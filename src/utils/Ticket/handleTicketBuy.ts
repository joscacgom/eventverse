import { supabase } from '@/config'

type WalletPurchaseProps = {
  walletAddress: string;
  ticketDropId: number;
};

type CrossmintPurchaseProps = {
  walletAddress: string;
  ticketDropContractAddress: string;
};

export async function handleNewTicketPurchase ({ walletAddress, ticketDropId }: WalletPurchaseProps) {
  const { data: existingData, error } = await supabase
    .from('ticket_purchased')
    .select('*')
    .eq('wallet_address', walletAddress)
    .eq('ticket_drop', ticketDropId)

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
      ticket_drop: ticketDropId
    }
  ])
}

export async function handleNewTicketPurchaseWithCrossmint ({ walletAddress, ticketDropContractAddress }: CrossmintPurchaseProps) {
  const { data: ticketDropData, error: ticketDropError } = await supabase
    .from('ticket_drop')
    .select('*')
    .eq('contract_address', ticketDropContractAddress)

  if (ticketDropError) {
    console.error('Error fetching ticket drop data:', ticketDropError)
    return
  }

  if (!ticketDropData || ticketDropData.length === 0) {
    console.error('No ticket drop data found')
    return
  }

  const ticketDropId = ticketDropData[0].id

  const { data: existingData, error } = await supabase
    .from('ticket_purchased')
    .select('*')
    .eq('wallet_address', walletAddress)
    .eq('ticket_drop', ticketDropId)

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
      ticket_drop: ticketDropId
    }
  ])
}
