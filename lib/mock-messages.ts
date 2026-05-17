export type MessageFrom = 'you' | 'tio'

export type ThreadMessage = {
  id: string
  from: MessageFrom
  text: string
  date: string
}

export type Thread = {
  id: string
  subject: string
  status: 'unread' | 'read'
  lastDate: string
  messages: ThreadMessage[]
}

export const MOCK_THREADS: Thread[] = [
  {
    id: '1',
    subject: 'Re: Consectetur adipiscing elit sed Lorem ipsum',
    status: 'unread',
    lastDate: '16 May 2026',
    messages: [
      {
        id: 'm1',
        from: 'you',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content?",
        date: '10 May 2026',
      },
      {
        id: 'm2',
        from: 'tio',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)\n\nThat doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content",
        date: '16 May 2026',
      },
    ],
  },
  {
    id: '2',
    subject: 'Re: Consectetur adipiscing elit sed Lorem ipsum',
    status: 'read',
    lastDate: '16 May 2026',
    messages: [
      {
        id: 'm3',
        from: 'you',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '14 May 2026',
      },
    ],
  },
  {
    id: '3',
    subject: 'Re: Consectetur adipiscing elit sed Lorem ipsum',
    status: 'read',
    lastDate: '16 May 2026',
    messages: [
      {
        id: 'm4',
        from: 'you',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '13 May 2026',
      },
    ],
  },
]
