import { createAdminClient } from '@/lib/supabase/admin'
import { acceptInvite } from './actions'

export default async function InvitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const admin = createAdminClient()

  const { data: invite } = await admin
    .from('invites')
    .select('email, role, expires_at, status')
    .eq('token', token)
    .single()

  const isValid = invite && invite.status === 'pending' && new Date(invite.expires_at) > new Date()

  if (!isValid) {
    return (
      <div className="flex min-h-svh items-center justify-center p-6">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-2">Link expired</h1>
          <p className="text-muted-foreground">
            This invite link is no longer valid. Ask your admin to send a new one.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">You're invited to Tios</h1>
          <p className="text-muted-foreground">
            Create your account to join as a <strong>{invite.role}</strong>.
          </p>
        </div>

        <form action={acceptInvite} className="flex flex-col gap-4">
          <input type="hidden" name="token" value={token} />

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
              className="border rounded-md px-3 py-2 text-sm bg-muted text-muted-foreground"
              value={invite.email}
              disabled
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="display_name">Your name</label>
            <input
              id="display_name"
              name="display_name"
              className="border rounded-md px-3 py-2 text-sm"
              placeholder="Jane Smith"
              required
            />
          </div>

          {invite.role === 'youth' && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="nickname">Nickname</label>
              <input
                id="nickname"
                name="nickname"
                className="border rounded-md px-3 py-2 text-sm"
                placeholder="What should guides call you?"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="password">Create a password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border rounded-md px-3 py-2 text-sm"
              placeholder="At least 8 characters"
              minLength={8}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium mt-2"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  )
}
