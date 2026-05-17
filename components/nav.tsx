'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CATEGORIES } from '@/lib/categories'
import { MOCK_THREADS } from '@/lib/mock-messages'

const hasUnreadMessages = MOCK_THREADS.some(t => t.status === 'unread')

export default function Nav() {
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const pathname = usePathname()

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between text-gray-900">
      <Link href="/home" className="select-none">
        <img src="/logo.png" alt="TIOS" className="h-10 w-auto" onError={e => { (e.currentTarget as HTMLImageElement).style.display='none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display='block' }} />
        <span className="text-3xl font-black tracking-tighter leading-none text-gray-900 hidden">TIOS</span>
      </Link>

      <div className="flex items-center gap-8 text-sm">
        {/* Categories dropdown */}
        <div className="relative">
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className={`hover:opacity-60 transition-opacity ${isActive('/category') ? 'font-bold' : 'font-medium'}`}
          >
            Categories
          </button>
          {categoriesOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setCategoriesOpen(false)} />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50">
                {CATEGORIES.map(cat => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                    {cat.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        <Link
          href="/ask"
          className={`hover:opacity-60 transition-opacity ${isActive('/ask') ? 'font-bold' : 'font-medium'}`}
        >
          Ask anything
        </Link>

        <Link
          href="/about"
          className={`hover:opacity-60 transition-opacity ${isActive('/about') ? 'font-bold' : 'font-medium'}`}
        >
          About
        </Link>

        <div className="relative">
          <Link
            href="/messages"
            className={`hover:opacity-60 transition-opacity ${isActive('/messages') ? 'font-bold' : 'font-medium'}`}
          >
            Messages
          </Link>
          {hasUnreadMessages && (
            <span className="absolute -top-1 -right-2.5 w-2 h-2 rounded-full bg-green-500" />
          )}
        </div>
      </div>

      {/* Search */}
      <label className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 w-48 cursor-text text-gray-900">
        <input
          type="text"
          placeholder="Search stories"
          className="text-sm outline-none flex-1 bg-transparent placeholder:text-gray-400"
        />
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400 flex-shrink-0">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </label>
    </nav>
  )
}
