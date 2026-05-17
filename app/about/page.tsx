import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Nav from '@/components/nav'

const AVATAR_SEEDS = [
  'Aaliyah', 'Bailey', 'Cameron', 'Drew', 'Eden', 'Finley',
  'Harper', 'Indigo', 'Jordan', 'Kai', 'Lane', 'Morgan',
]

async function AboutContent() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Nav />
      <main className="max-w-4xl mx-auto px-8 py-16 flex flex-col items-center gap-12">
        <p className="text-center font-bold text-gray-900 text-base max-w-lg leading-snug">
          Tios is the village it takes to raise good humans — rebuilt for the digital age.
        </p>

        <h1 className="text-4xl font-black text-center leading-tight text-gray-900">
          Your village contains 12 tios, 37 stories, and 456 minutes of youthful tales
        </h1>

        {/* Avatar grid */}
        <div className="grid grid-cols-6 gap-4 w-full">
          {AVATAR_SEEDS.map(seed => (
            <div key={seed} className="aspect-square rounded-full overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Two-column explainer */}
        <div className="grid grid-cols-2 gap-12 w-full">
          <div>
            <p className="font-bold text-gray-900 mb-2 text-sm">For the Teens</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Growing up brings up a lot — questions you might not know how to ask, feelings that are hard to explain, moments that make you wonder if you're the only one who's ever felt this way. You're not. This is a private space built just for you by the adults in your life who love you — your tios. They've written and recorded real stories from their own adolescence: the confusing parts, the embarrassing parts, the parts they wish someone had talked to them about. Nothing here is generic. Everything here comes from people who actually know you and want you to feel a little less alone in whatever you're going through.
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900 mb-2 text-sm">For the Adults</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The teenagers in your life are navigating the same things you once did — and research tells us they're wired to hear it from you more than from their own parents. Not because you have all the answers, but because you're close enough to matter and far enough away to feel safe. Tios is a private platform where you contribute real stories from your own adolescence, organized around the themes that young people actually wonder about. You don't need to be a perfect writer or a perfect person — in fact, the messier and more honest the story, the more it tends to land. This is your chance to be the adult you might have needed when you were their age.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function AboutPage() {
  return (
    <Suspense>
      <AboutContent />
    </Suspense>
  )
}
