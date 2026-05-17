import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { name, category, instagram_handle, body_text } = await req.json()

  if (!body_text?.trim()) {
    return NextResponse.json({ error: 'Question is required.' }, { status: 400 })
  }

  const { data: profile } = await supabase
    .from('users')
    .select('group_id')
    .eq('id', user.id)
    .single()

  if (!profile?.group_id) {
    return NextResponse.json({ error: 'User not found.' }, { status: 404 })
  }

  const { error } = await supabase
    .from('questions')
    .insert({
      group_id: profile.group_id,
      asker_id: user.id,
      type: 'general',
      body_text: body_text.trim(),
      // These columns need to be added to the questions table in Supabase:
      // asker_name: name,
      // instagram_handle,
      // category,
    })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
