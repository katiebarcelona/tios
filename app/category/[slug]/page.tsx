import { Suspense } from 'react'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Nav from '@/components/nav'
import CategoryPageClient, { Story } from './category-client'
import { getCategoryBySlug, getAdjacentCategories } from '@/lib/categories'
import { getMockStories, getPreReadIds } from '@/lib/mock-stories'

async function CategoryContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('users')
    .select('group_id')
    .eq('id', user.id)
    .single()

  let stories: Story[] = []

  if (profile?.group_id) {
    const { data } = await supabase
      .from('stories')
      .select(`
        id,
        title,
        body_text,
        audio_url,
        format,
        is_anonymous,
        published_at,
        reaction_count,
        author:users!stories_author_id_fkey (
          display_name,
          avatar_url
        )
      `)
      .eq('status', 'published')
      .eq('group_id', profile.group_id)
      .order('published_at', { ascending: false })

    stories = (data as Story[] | null) ?? []
  }

  // Fall back to mock stories when DB has no content yet
  if (stories.length === 0) {
    stories = getMockStories(slug) as Story[]
  }

  const preReadIds = getPreReadIds(slug)
  const { prev, next } = getAdjacentCategories(slug)

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Nav />
      <CategoryPageClient
        category={category}
        stories={stories}
        prevCategory={prev}
        nextCategory={next}
        preReadIds={preReadIds}
      />
    </div>
  )
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense>
      <CategoryContent params={params} />
    </Suspense>
  )
}
