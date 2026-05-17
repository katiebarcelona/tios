export type Category = {
  slug: string
  label: string
  color: string
  textColor: 'black' | 'white'
  gifUrl: string
}

export const CATEGORIES: Category[] = [
  { slug: 'friendship',        label: 'Friendship',          color: '#F97316', textColor: 'black', gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTRtbjZvN2g3NWZ4amx0cGs2cHVoaHh4eXRsaWk3dW1lamM2dWd2cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VduFvPwm3gfGO8duNN/200.gif' },
  { slug: 'family',            label: 'Family',              color: '#3DB85A', textColor: 'black', gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWFxbWZnYWQ3YjZmOGkwNmM0ZDZxMHh2cWg2cTRweWJiOTM4aWY5aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/z38MVaGlKiD5FbRTLt/giphy.gif' },
  { slug: 'body-changes',      label: 'Body Changes',        color: '#3B82F6', textColor: 'white', gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmUwZWt4eGNxemR2NDg1eWMwN290NXRlNmp2MHpwM283Zmxpb3hlbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kxMQXnH7ucS9q/200.gif' },
  { slug: 'relationships',     label: 'Relationships',       color: '#FBBF24', textColor: 'black', gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzZlODJ1cTVybWg4c3RpOHRwNmdrczIyY3NwdndsNmV5Y3E0MzF3YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cKzxbcOTpApGQMzX1T/200.gif' },
  { slug: 'sexuality-identity',label: 'Sexuality & Identity',color: '#8B6F4E', textColor: 'black', gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTNvbnp5ODMxbHhiZmNjY25zdDVhbjN1cjcyYnN3dzc0M3R1NnB0cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ywHJbslJnd82Dzzn2A/giphy.gif' },
  { slug: 'school-career',     label: 'School & Career',     color: '#D946EF', textColor: 'white', gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGl1dThoaXpwNjg2ampsOG1xd2FscDZjYndkMHU2OXRzZ28wZmVidSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fhAwk4DnqNgw8/giphy.gif' },
  { slug: 'drugs-substances',  label: 'Drugs & Substances',  color: '#818CF8', textColor: 'white', gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmd6Z3NmZ254MDV6cmR2ZDNzbDZ4dWZnenowcmdoNzEzdjJpdDA1YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YkOJT3bnwp2Xm/200.gif' },
  { slug: 'risk-regret',       label: 'Risk & Regret',       color: '#06B6D4', textColor: 'black', gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Zmb28xYmppMTNlbnF0dXM4ajJ3dnAyaW0xdm12OXEyYzM0N3BhayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/80TEu4wOBdPLG/giphy.gif' },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug)
}

export function getAdjacentCategories(slug: string): { prev: Category | null; next: Category | null } {
  const idx = CATEGORIES.findIndex(c => c.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? CATEGORIES[idx - 1] : null,
    next: idx < CATEGORIES.length - 1 ? CATEGORIES[idx + 1] : null,
  }
}
