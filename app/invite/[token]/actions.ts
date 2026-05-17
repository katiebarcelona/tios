'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function acceptInvite(formData: FormData) {
  const token = formData.get('token') as string
  const password = formData.get('password') as string
  const displayName = formData.get('display_name') as string
  const nickname = formData.get('nickname') as string | null

  const admin = createAdminClient()

  const { data: invite } = await admin
    .from('invites')
    .select('*')
    .eq('token', token)
    .eq('status', 'pending')
    .single()

  if (!invite) {
    return { error: 'Invalid or expired invite link.' }
  }

  if (new Date(invite.expires_at) < new Date()) {
    await admin.from('invites').update({ status: 'expired' }).eq('id', invite.id)
    return { error: 'This invite has expired.' }
  }

  const { data: authData, error: authError } = await admin.auth.admin.createUser({
    email: invite.email,
    password,
    email_confirm: true,
  })

  if (authError) {
    return { error: authError.message }
  }

  const { error: profileError } = await admin.from('users').insert({
    id: authData.user.id,
    email: invite.email,
    display_name: displayName,
    nickname: invite.role === 'youth' ? nickname : null,
    role: invite.role,
    group_id: invite.group_id,
    invited_by_id: invite.invited_by_id,
    status: 'active',
  })

  if (profileError) {
    await admin.auth.admin.deleteUser(authData.user.id)
    return { error: profileError.message }
  }

  await admin
    .from('invites')
    .update({ status: 'accepted', accepted_at: new Date().toISOString() })
    .eq('id', invite.id)

  const supabase = await createClient()
  await supabase.auth.signInWithPassword({ email: invite.email, password })

  redirect('/onboarding')
}
