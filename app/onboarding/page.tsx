import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { saveOnboarding } from './actions'

export default async function OnboardingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('users')
    .select('role, display_name')
    .eq('id', user.id)
    .single()

  if (!profile) redirect('/auth/login')

  if (profile.role === 'admin' || profile.role === 'youth') redirect('/home')

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome, {profile.display_name}!</h1>
          <p className="text-muted-foreground">
            Tell the youth a bit about yourself. This helps them connect with your stories.
          </p>
        </div>

        <form action={saveOnboarding} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="bio">Your bio</label>
            <textarea
              id="bio"
              name="bio"
              className="border rounded-md px-3 py-2 text-sm min-h-[100px] resize-none"
              placeholder="Share a little about who you are..."
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium mt-2"
          >
            Let's go
          </button>

          <button
            type="submit"
            name="skip"
            value="true"
            formNoValidate
            className="text-sm text-muted-foreground text-center hover:underline"
          >
            Skip for now
          </button>
        </form>
      </div>
    </div>
  )
}
