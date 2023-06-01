import { createClient } from '@supabase/supabase-js'

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'not-your-supabase-url'
const KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? 'not-your-supabase-key'

const supabase = createClient(URL, KEY)

export default supabase
