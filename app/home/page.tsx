import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Nav from '@/components/nav'
import CategoryGrid from '@/components/category-grid'

async function HomeContent() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      <main className="px-[5vw] py-8 flex flex-col items-center gap-6">
        <p className="text-center text-lg font-semibold max-w-xl leading-snug text-gray-900">
          Growing up is confusing. This is a private space made for you by the
          people who love you — and who were once young too.
        </p>

        <CategoryGrid />
      </main>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  )
}
