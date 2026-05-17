'use client'

import { useState } from 'react'
import { MOCK_THREADS, Thread } from '@/lib/mock-messages'

const STATUS_STYLES = {
  unread: 'bg-green-100 text-green-800',
  read:   'bg-gray-100 text-gray-500',
}

export default function MessagesClient() {
  const [threads, setThreads] = useState(MOCK_THREADS)
  const [selectedId, setSelectedId] = useState(MOCK_THREADS[0]?.id ?? null)
  const [replyText, setReplyText] = useState('')

  const selected = threads.find(t => t.id === selectedId) ?? null

  function handleSelect(thread: Thread) {
    setSelectedId(thread.id)
    setReplyText('')
    setThreads(prev => prev.map(t =>
      t.id === thread.id ? { ...t, status: 'read' as const } : t
    ))
  }

  function handleReply() {
    if (!replyText.trim() || !selected) return
    const newMsg = {
      id: `m-${Date.now()}`,
      from: 'you' as const,
      text: replyText,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    }
    setThreads(prev => prev.map(t =>
      t.id === selected.id
        ? { ...t, messages: [...t.messages, newMsg], lastDate: newMsg.date }
        : t
    ))
    setReplyText('')
  }

  return (
    <div className="flex justify-center px-4 py-8 gap-4" style={{ minHeight: 'calc(100vh - 80px)' }}>
      {/* Thread list */}
      <div className="w-80 flex-shrink-0 flex flex-col gap-2">
        {threads.map(thread => {
          const isSelected = thread.id === selectedId
          return (
            <button
              key={thread.id}
              onClick={() => handleSelect(thread)}
              className="text-left rounded-lg border-2 p-4 bg-white w-full transition-colors"
              style={{ borderColor: isSelected ? '#111' : '#f3f4f6' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${STATUS_STYLES[thread.status]}`}>
                  {thread.status === 'unread' ? 'Unread' : 'Read'}
                </span>
                <span className="text-xs text-gray-400">{thread.lastDate}</span>
              </div>
              <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 mb-1">
                {thread.subject}
              </p>
              <p className="text-xs text-gray-400">Anonymous</p>
            </button>
          )
        })}
      </div>

      {/* Conversation */}
      {selected && (
        <div className="w-full max-w-[800px] flex flex-col gap-4">
          {/* Messages — gray panel, You = white bubble right, Tio = plain text left */}
          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-8">
            {selected.messages.map(msg => (
              <div key={msg.id} className={msg.from === 'you' ? 'flex flex-col items-end' : ''}>
                <div className="flex items-baseline justify-between w-full mb-2">
                  <span className={`font-semibold text-gray-900 text-sm ${msg.from === 'you' ? 'order-2' : ''}`}>
                    {msg.from === 'you' ? 'You' : 'Your Tio'}
                  </span>
                  <span className={`text-xs text-gray-400 ${msg.from === 'you' ? 'order-1' : ''}`}>
                    {msg.date}
                  </span>
                </div>
                {msg.from === 'you' ? (
                  <div className="bg-white rounded-2xl p-5 max-w-[85%]">
                    <p className="text-sm text-gray-800 leading-relaxed">{msg.text}</p>
                  </div>
                ) : (
                  <div className="text-sm text-gray-800 leading-relaxed space-y-3">
                    {msg.text.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reply input */}
          <div className="bg-white rounded-2xl px-6 py-4 flex items-center">
            <input
              type="text"
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleReply()}
              placeholder="Reply..."
              className="w-full outline-none text-sm text-gray-800 placeholder:text-gray-400 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  )
}
