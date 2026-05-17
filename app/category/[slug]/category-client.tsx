'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Category } from '@/lib/categories'

function DmPanel({ storyTitle, categoryColor }: { storyTitle: string; categoryColor: string }) {
  const [text, setText] = useState('')
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="w-full bg-green-50 rounded-2xl px-8 py-6 flex flex-col items-center gap-3 text-center">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-green-600">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="m8 12 3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="font-semibold text-gray-900 text-sm">Sent! We'll let you know when they respond.</p>
        <Link href="/messages" className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-800 transition-colors">
          Go to your messages
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full bg-white rounded-2xl px-8 py-6">
      <h3 className="font-bold text-gray-900 mb-3 text-sm">Send a DM</h3>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Ask anything about this story. The tio who wrote it will get your question without knowing your identity."
        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm resize-none h-28 outline-none focus:border-gray-400 transition-colors placeholder:text-gray-400 text-gray-900"
      />
      <div className="flex justify-end mt-3">
        <button
          onClick={() => { if (text.trim()) setSent(true) }}
          disabled={!text.trim()}
          className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full disabled:opacity-30 transition-opacity hover:opacity-80"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
          Send
        </button>
      </div>
    </div>
  )
}

type Author = {
  display_name: string
  avatar_url: string | null
}

export type Story = {
  id: string
  title: string | null
  body_text: string | null
  audio_url: string | null
  format: string
  is_anonymous: boolean
  published_at: string
  reaction_count: number
  author: Author | null
  updateText?: string
  defaultRead?: boolean
}

function readingTime(text: string | null): string {
  if (!text) return ''
  const words = text.trim().split(/\s+/).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min`
}

type ReadStatus = 'unread' | 'read' | 'updated'

function useReadStories(preReadIds: string[], stories: Story[]) {
  const [reads, setReads] = useState<Record<string, number>>({})
  const seeded = useRef(false)

  useEffect(() => {
    if (seeded.current) return
    seeded.current = true
    try {
      const stored = localStorage.getItem('tios-reads')
      const existing: Record<string, number> = stored ? JSON.parse(stored) : {}
      const seededReads = { ...existing }
      preReadIds.forEach(id => {
        if (!seededReads[id]) {
          seededReads[id] = Date.now() - 1000 * 60 * 60 * 48
        }
      })
      localStorage.setItem('tios-reads', JSON.stringify(seededReads))
      setReads(seededReads)
    } catch {}
  }, [preReadIds])

  function markRead(storyId: string) {
    setReads(prev => {
      const updated = { ...prev, [storyId]: Date.now() }
      try { localStorage.setItem('tios-reads', JSON.stringify(updated)) } catch {}
      return updated
    })
  }

  function getStatus(story: Story): ReadStatus {
    const wasRead = !!reads[story.id]
    if (!wasRead) return 'unread'
    if (story.updateText) return 'updated'
    return 'read'
  }

  return { markRead, getStatus }
}

function AudioPlayer({ url }: { url: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState<number | null>(null)

  function toggle() {
    if (!audioRef.current) return
    if (playing) { audioRef.current.pause(); setPlaying(false) }
    else { audioRef.current.play(); setPlaying(true) }
  }

  function fmt(secs: number) {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <button onClick={toggle} className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
      <audio ref={audioRef} src={url}
        onLoadedMetadata={e => setDuration(e.currentTarget.duration)}
        onEnded={() => setPlaying(false)} />
      <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center flex-shrink-0">
        {playing
          ? <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="1" y="1" width="3" height="8" /><rect x="6" y="1" width="3" height="8" /></svg>
          : <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M1 1l8 5-8 5V1z" /></svg>
        }
      </span>
      <span>Listen{duration ? ` ${fmt(duration)}` : ''}</span>
    </button>
  )
}

const STATUS_STYLES: Record<ReadStatus, string> = {
  updated:  'bg-gray-900 text-white',
  unread:   'bg-green-100 text-green-800',
  read:     'bg-gray-100 text-gray-500',
}

const STATUS_LABELS: Record<ReadStatus, string> = {
  updated: 'Updated',
  unread:  'Unread',
  read:    'Read',
}

function StoryBody({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim())
  if (paragraphs.length === 0) return null
  return (
    <div className="text-gray-800 leading-relaxed space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className={i === 0 ? 'text-xl' : 'text-base'}>
          {p}
        </p>
      ))}
    </div>
  )
}

type Props = {
  category: Category
  stories: Story[]
  prevCategory: Category | null
  nextCategory: Category | null
  preReadIds: string[]
}

export default function CategoryPageClient({ category, stories, prevCategory, nextCategory, preReadIds }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(stories[0]?.id ?? null)
  const { markRead, getStatus } = useReadStories(preReadIds, stories)
  const [slideClass, setSlideClass] = useState('')

  const selected = stories.find(s => s.id === selectedId) ?? stories[0] ?? null

  useEffect(() => {
    const dir = sessionStorage.getItem('tios-nav-dir')
    sessionStorage.removeItem('tios-nav-dir')
    if (dir === 'right') setSlideClass('animate-slide-from-right')
    else if (dir === 'left') setSlideClass('animate-slide-from-left')
  }, [])

  function handleSelect(story: Story) {
    setSelectedId(story.id)
    markRead(story.id)
  }

  useEffect(() => {
    if (stories[0]) markRead(stories[0].id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {/* Category header with sliding adjacent categories */}
      <div className="flex items-center gap-3 px-4 py-6 overflow-hidden">
        {prevCategory ? (
          <Link
            href={`/category/${prevCategory.slug}`}
            className="flex-shrink-0 -ml-16 w-40 h-20 rounded-full hover:opacity-90 transition-opacity"
            style={{ background: prevCategory.color }}
            title={prevCategory.label}
            onClick={() => sessionStorage.setItem('tios-nav-dir', 'left')}
          />
        ) : <div className="flex-shrink-0 w-4" />}

        <div
          className={`flex-1 h-20 rounded-full flex items-center justify-center ${slideClass}`}
          style={{ background: category.color }}
        >
          <h1 className="text-2xl font-bold text-center px-6" style={{ color: category.textColor === 'white' ? '#fff' : '#111' }}>
            {category.label}
          </h1>
        </div>

        {nextCategory ? (
          <Link
            href={`/category/${nextCategory.slug}`}
            className="flex-shrink-0 -mr-16 w-40 h-20 rounded-full hover:opacity-90 transition-opacity"
            style={{ background: nextCategory.color }}
            title={nextCategory.label}
            onClick={() => sessionStorage.setItem('tios-nav-dir', 'right')}
          />
        ) : <div className="flex-shrink-0 w-4" />}
      </div>

      {/* Split panel */}
      <div className="flex justify-center px-4 pb-8 gap-4" style={{ minHeight: 'calc(100vh - 220px)' }}>
        {/* Story list */}
        <div className="w-80 flex-shrink-0 flex flex-col gap-2 overflow-y-auto">
          {stories.length === 0 && (
            <p className="text-sm text-gray-400 py-8 text-center">No stories yet.</p>
          )}
          {stories.map(story => {
            const status = getStatus(story)
            const isSelected = story.id === selectedId

            return (
              <button
                key={story.id}
                onClick={() => handleSelect(story)}
                className={`text-left rounded-lg border-2 p-4 transition-colors w-full bg-white ${
                  isSelected ? '' : 'border-gray-100 hover:border-gray-200'
                }`}
                style={isSelected ? { borderColor: category.color } : {}}
              >
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${STATUS_STYLES[status]}`}>
                  {STATUS_LABELS[status]}
                </span>

                <p className="text-sm font-medium leading-snug line-clamp-2 mb-2 text-gray-900">
                  {story.title || story.body_text?.slice(0, 80) || 'Untitled'}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {!story.is_anonymous && story.author?.avatar_url && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={story.author.avatar_url} alt="" className="w-5 h-5 rounded-full object-cover" />
                    )}
                    <span className="text-xs text-gray-500">
                      {story.is_anonymous ? 'Anonymous' : (story.author?.display_name ?? 'Anonymous')}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{readingTime(story.body_text)}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Right column: story detail + DM panel */}
        <div className="w-full max-w-[800px] flex flex-col gap-4">
          <div className="bg-white rounded-2xl px-16 py-8 overflow-y-auto">
            {selected ? (
              <>
                <h2 className="text-2xl font-bold mb-4 leading-snug" style={{ color: category.color }}>
                  {selected.title || 'Untitled'}
                </h2>

                {selected.audio_url && (
                  <div className="mb-6"><AudioPlayer url={selected.audio_url} /></div>
                )}

                {selected.body_text && <StoryBody text={selected.body_text} />}

                {selected.updateText && (
                  <div className="mt-8 border-l-4 border-gray-900 pl-4">
                    <span className="inline-block bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                      Update
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">{selected.updateText}</p>
                  </div>
                )}

                <p className="text-sm text-gray-400 mt-8">
                  {selected.is_anonymous ? 'Anonymous' : (selected.author?.display_name ?? 'Anonymous')}
                </p>
              </>
            ) : (
              <p className="text-gray-400 text-sm">Select a story to read it.</p>
            )}
          </div>

          {selected && (
            <DmPanel
              key={selected.id}
              storyTitle={selected.title || 'Untitled'}
              categoryColor={category.color}
            />
          )}
        </div>
      </div>
    </div>
  )
}
