'use client'

import { useState } from 'react'

export default function AdminInvitePage() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('guide')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/invites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setRole('guide')
      } else {
        setErrorMessage(data.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Send an invite</h1>
          <p className="text-muted-foreground">
            The person will receive an email with a link to create their account.
          </p>
        </div>

        {status === 'success' && (
          <div className="mb-6 rounded-md bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
            Invite sent to <strong>{email || 'that address'}</strong>!{' '}
            <button className="underline" onClick={() => setStatus('idle')}>
              Send another
            </button>
          </div>
        )}

        {status !== 'success' && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm"
                placeholder="name@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-white text-foreground"
              >
                <option value="guide">Guide</option>
                <option value="youth">Youth</option>
              </select>
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium mt-2 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending…' : 'Send invite'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
