'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CATEGORIES } from '@/lib/categories'

type BadgeCounts = Record<string, { updates?: number; newCount?: number }>

export default function CategoryGrid({ badges = {} }: { badges?: BadgeCounts }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  const allItems = [
    ...CATEGORIES,
    { slug: 'ask', label: 'Ask anything', color: '#000000', textColor: 'white' as const, gifUrl: '' },
  ]

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-[clamp(0.75rem,1.5vw,1.5rem)] w-full" style={{ height: 'calc(100svh - 210px)' }}>
      {allItems.map((cat) => {
        const isHovered = hoveredSlug === cat.slug
        const href = cat.slug === 'ask' ? '/ask' : `/category/${cat.slug}`
        const badge = badges[cat.slug]

        return (
          <Link
            key={cat.slug}
            href={href}
            className="relative rounded-full flex items-center justify-center w-full h-full overflow-hidden group select-none"
            style={{
              background: cat.gifUrl && isHovered ? undefined : cat.color,
            }}
            onMouseEnter={() => setHoveredSlug(cat.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            {/* GIF layer — shown on hover when a gifUrl is set */}
            {cat.gifUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cat.gifUrl}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            )}

            {/* Wiggle placeholder — shown on hover when no gifUrl */}
            {!cat.gifUrl && (
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: cat.color,
                  animation: isHovered ? 'wiggle 0.4s ease-in-out infinite alternate' : 'none',
                  transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.2s ease',
                }}
              />
            )}

            {/* Badge (Updates / New) */}
            {badge && (badge.updates || badge.newCount) && (
              <span className="absolute top-3 right-3 bg-black text-white text-xs font-medium px-2.5 py-1 rounded-full z-10">
                {badge.updates
                  ? `${badge.updates} Update${badge.updates > 1 ? 's' : ''}`
                  : `${badge.newCount} New`}
              </span>
            )}

            {/* Label */}
            <span
              className="relative z-10 text-center px-4 leading-snug font-medium"
              style={{ color: cat.textColor === 'white' ? '#fff' : '#111', fontSize: 'clamp(0.95rem, 2.2vw, 2rem)' }}
            >
              {cat.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
