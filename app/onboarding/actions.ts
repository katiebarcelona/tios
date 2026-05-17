'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function saveOnboarding(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  const bio = formData.get('bio') as string
  const skip = formData.get('skip') === 'true'

  if (!skip && bio) {
    await supabase.from('users').update({ bio }).eq('id', user.id)
  }

  redirect('/home')
}
