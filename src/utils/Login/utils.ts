import { supabase } from '@/config'
import { getUserCookie } from './userCookie'

export async function checkOrganizerExists () {
  const user = JSON.parse(getUserCookie('userData'))
  const { error } = await supabase
    .from('organizer')
    .select('*')
    .eq('email', user.email)
    .single()

  return !error
}

export async function createOrganizer () {
  const user = JSON.parse(getUserCookie('userData'))
  await supabase
    .from('organizer')
    .insert([
      {
        name: user.name,
        email: user.email,
        image: user.profileImage,
        wallet_address: user.address
      }
    ])
    .select()
}
