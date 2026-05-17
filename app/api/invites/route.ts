import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = createAdminClient()

  const { data: currentUser } = await admin
    .from('users')
    .select('role, group_id')
    .eq('id', user.id)
    .single()

  if (!currentUser || currentUser.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { email, role } = await req.json()

  const { data: invite, error } = await admin
    .from('invites')
    .insert({
      group_id: currentUser.group_id,
      invited_by_id: user.id,
      email,
      role,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const inviteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/invite/${invite.token}`

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: "You've been invited to Tios",
      html: `
        <p>You've been invited to join Tios as a <strong>${role}</strong>.</p>
        <p><a href="${inviteUrl}">Accept your invitation</a></p>
        <p>This link expires in 7 days.</p>
      `,
    })
  } catch (emailError) {
    console.error('Failed to send invite email:', emailError)
  }

  return NextResponse.json({ success: true })
}
