'use client'

import { useState } from 'react'
import Nav from '@/components/nav'
import { CATEGORIES } from '@/lib/categories'

const STRIPE_COLORS = [
  '#F97316',
  '#3DB85A',
  '#3B82F6',
  '#FBBF24',
  '#8B6F4E',
  '#D946EF',
  '#818CF8',
  '#06B6D4',
]

export default function AskPage() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [instagram, setInstagram] = useState('')
  const [question, setQuestion] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, category, instagram_handle: instagram, body_text: question }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setName('')
        setCategory('')
        setInstagram('')
        setQuestion('')
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
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Striped background area */}
      <div className="relative flex-1 flex items-center justify-center py-16 overflow-hidden bg-white">
        {/* Diagonal stripes */}
        <div
          className="absolute inset-0 flex gap-4"
          style={{ transform: 'rotate(-20deg) scale(2)', transformOrigin: 'center' }}
        >
          {STRIPE_COLORS.map((color, i) => (
            <div
              key={i}
              className="flex-1"
              style={{ background: color }}
            />
          ))}
        </div>

        {/* Form card */}
        <div className="relative z-10 bg-white rounded-2xl shadow-sm w-full max-w-lg mx-8 p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold mb-2">Question sent!</p>
              <p className="text-sm text-gray-500 mb-6">
                We&apos;ll DM you on Instagram when a tio answers.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-sm underline text-gray-600"
              >
                Ask another question
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" htmlFor="ask-name">
                  Name
                </label>
                <p className="text-xs text-gray-500">
                  Your privacy is safe! Your name will be hidden from everyone except the administrator
                </p>
                <input
                  id="ask-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Name"
                  className="bg-white text-gray-900 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 mt-1"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" htmlFor="ask-category">
                  Category
                </label>
                <select
                  id="ask-category"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="bg-white text-gray-700 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                >
                  <option value="">Category</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat.slug} value={cat.slug}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Instagram */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" htmlFor="ask-instagram">
                  Your Instagram
                </label>
                <p className="text-xs text-gray-500">We&apos;ll send you a DM</p>
                <input
                  id="ask-instagram"
                  type="text"
                  value={instagram}
                  onChange={e => setInstagram(e.target.value)}
                  placeholder="@instagramhandle"
                  className="bg-white text-gray-900 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 mt-1"
                />
              </div>

              {/* Question */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" htmlFor="ask-question">
                  Question
                </label>
                <textarea
                  id="ask-question"
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  required
                  rows={4}
                  placeholder="Ask anything. Your tios will see your question without knowing your identity."
                  className="bg-white text-gray-900 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !question.trim()}
                className="bg-black text-white rounded-lg px-4 py-3 text-sm font-medium mt-1 disabled:opacity-50 hover:bg-gray-800 transition-colors"
              >
                {status === 'loading' ? 'Sending…' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
