export type MockStory = {
  id: string
  title: string
  body_text: string
  audio_url?: null
  format?: 'text'
  is_anonymous: boolean
  published_at: string
  reaction_count: number
  author: { display_name: string; avatar_url: null }
  updateText?: string
  defaultRead?: boolean
}

const MOCK_STORIES: Record<string, MockStory[]> = {
  friendship: [
    {
      id: 'fr-1',
      title: 'The year I had no one to sit with at lunch',
      body_text: `We moved the summer before 8th grade, which is possibly the worst time in human history to move. Everyone already had their people. I remember walking into the cafeteria on my first day and just standing there holding my tray, scanning the room for any face that looked even slightly open.

I ate in the bathroom twice that week. I'm not ashamed to admit that now, but back then it felt like the loneliest I had ever been. I had left behind my best friend of six years, my neighborhood, everything familiar.

What I didn't know then is that one year later, I would have three people in my life who I still talk to today. One of them I met because I was in the wrong class and too embarrassed to leave. Another became my friend because we were both terrible at gym. The third just sat down next to me one day at lunch and said "you look like you need a friend."

If you're in that waiting period, I know it feels endless. It isn't.`,
      is_anonymous: false,
      author: { display_name: 'Marcus T.', avatar_url: null },
      published_at: '2024-09-10T10:00:00Z',
      reaction_count: 14,
      defaultRead: false,
    },
    {
      id: 'fr-2',
      title: 'My best friend and I didn\'t speak for two years',
      body_text: `It started over something so small I genuinely cannot remember the exact details. I think she forgot my birthday, or I said something careless, or both. What I do remember is how fast it escalated — one ignored text became two, became silence, became two years of walking past each other in the halls.

I missed her constantly. I also convinced myself I was fine. That's what you do at 16. You perform being fine until you believe it.

She was the one who reached out first. A text on a random Tuesday: "I miss you and I'm sorry." I stared at it for three days before I answered.

We spent a whole afternoon talking through everything we had been carrying. It was uncomfortable and necessary and I'm so glad we did it. We're not as close as we once were, but we're in each other's lives and we choose to be. That means something.`,
      is_anonymous: false,
      author: { display_name: 'Sofia R.', avatar_url: null },
      published_at: '2024-08-22T14:00:00Z',
      reaction_count: 22,
      defaultRead: true,
      updateText: 'I ran into her last month at a coffee shop and we ended up talking for two hours. Some friendships don\'t expire — they just pause. I wanted to add this because when I wrote the original story I wasn\'t sure we\'d ever fully rebuild. We\'re getting there.',
    },
    {
      id: 'fr-3',
      title: 'Making friends is harder as an adult than anyone tells you',
      body_text: `No one warned me that after college, friendship requires real effort. In school it happened through proximity — you saw the same people every day and eventually that became closeness. Real life doesn't work that way.

I went a full year after moving to a new city where my social world was essentially just coworkers and the internet. I didn't have a crisis about it. I just slowly noticed that I wasn't really known by anyone around me.

What helped: saying yes more, joining a running group even though I hate running, being the person who texts first even when it feels awkward. Friendship as an adult is like a plant you have to deliberately water. Once you know that, you stop waiting for it to just happen.`,
      is_anonymous: false,
      author: { display_name: 'James L.', avatar_url: null },
      published_at: '2024-07-15T09:00:00Z',
      reaction_count: 31,
      defaultRead: false,
    },
    {
      id: 'fr-4',
      title: 'The girl who sat with me every day in 7th grade',
      body_text: `Her name was Dani and she didn't know she was changing my life. I was going through something at home that I wasn't telling anyone about, and every day she would just... show up. Same table, same loud laugh, same willingness to talk about absolutely nothing important.

I think about her when I'm with people who are clearly struggling but not saying so. Sometimes just being consistent presence is enough. You don't always need to know what someone is going through to help them through it.

I tracked her down on social media two years ago to tell her this. She said she barely remembered that year. I told her that was the whole point.`,
      is_anonymous: false,
      author: { display_name: 'Amara K.', avatar_url: null },
      published_at: '2024-06-03T11:00:00Z',
      reaction_count: 47,
      defaultRead: true,
    },
    {
      id: 'fr-5',
      title: 'When your whole friend group drifts apart',
      body_text: `We were inseparable for three years. A group of six people who thought our friendship was the kind that lasts forever. Then graduation happened and within eighteen months, it was just... different.

Not dramatically. Nobody had a falling out. People moved, got into relationships, got jobs that consumed them. The group chat got quieter. Plans got cancelled more often than not.

I grieved it like a breakup and I think that was the right response. We weren't failed friends — we were people whose lives moved in different directions. That happens to almost every tight-knit group and nobody prepares you for it.

Some of those six people I still see. One I talk to every week. The rest I hope are well. That's allowed to be enough.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-05-01T16:00:00Z',
      reaction_count: 38,
      defaultRead: false,
    },
  ],

  family: [
    {
      id: 'fam-1',
      title: 'Growing up with a parent who was struggling',
      body_text: `My mom had a drinking problem for most of my childhood. I didn't have that word for it until I was in high school — before that I just thought our house was different from other houses. That some parents just got like that sometimes.

I spent a lot of energy as a kid managing the emotional temperature of our home. Knowing when to be invisible, when to be helpful, when to just get out of the way. I was good at it in a way no child should have to be good at anything.

What I want you to know, if you're in something like this, is that you didn't cause it and you can't fix it. That sounds simple but it took me years in therapy to really believe it. The love you feel for a parent who is struggling is real and valid. The anger is too. You're allowed to hold both.

My mom has been sober for four years. Our relationship is complicated and in progress. I'm glad she's alive.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-09-05T13:00:00Z',
      reaction_count: 62,
      defaultRead: true,
      updateText: 'Since writing this, my mom and I had a long conversation I\'d been avoiding for years. It was hard. It helped. I wanted to add this because I was scared to have it and I\'m glad I did. If you\'re waiting to have a hard conversation with a parent, you might not regret having it.',
    },
    {
      id: 'fam-2',
      title: 'My mom and I didn\'t speak for almost a year',
      body_text: `It came to a head the night I told her I wasn't going to the college she'd chosen for me. The silence after wasn't dramatic — it was just steady and long and painful.

I had my reasons. She had hers. Neither of us was completely wrong and neither of us was ready to say that.

The thing I didn't expect is how much it would hurt even when I knew I was making the right choice. I missed her while I was angry at her. I wanted her approval and I resented wanting it. That's a particular kind of emotional math that's very hard to carry.

We started talking again slowly, over small things — she asked about a thing I'd posted online, I called about something neutral. Eventually we had the real conversation. It took longer than it should have, but it happened. Our relationship is different now. More honest. I think I prefer it.`,
      is_anonymous: false,
      author: { display_name: 'Carmen M.', avatar_url: null },
      published_at: '2024-08-01T10:00:00Z',
      reaction_count: 29,
      defaultRead: false,
    },
    {
      id: 'fam-3',
      title: 'What my abuela taught me without meaning to',
      body_text: `My grandmother never talked about her feelings directly. She showed them through food, through showing up, through remembering every small thing anyone ever told her.

I used to find this frustrating. I wanted her to just say things plainly. Now that she's gone I realize she was teaching me the entire time — that love is mostly in the small repeated actions, not the declarations.

She called me every Sunday until she couldn't. I would sometimes forget to call back. I wish I had known those calls were numbered.`,
      is_anonymous: false,
      author: { display_name: 'David P.', avatar_url: null },
      published_at: '2024-07-10T08:00:00Z',
      reaction_count: 55,
      defaultRead: false,
    },
    {
      id: 'fam-4',
      title: 'Being the oldest child',
      body_text: `There's a specific weight to being the firstborn that nobody really names. You're the experiment — your parents are figuring it out on you in real time. By the time your siblings arrive there's a system, there's experience, there's patience that didn't exist for you.

I used to resent my younger sibling for having an easier time of it. An easier version of the same parents. Now I understand that my parents were younger, more scared, more unsure of themselves. They weren't harder on me because they loved me less. They were harder on me because they didn't know what they were doing yet.

Understanding that didn't fix everything. But it made it easier to stop carrying something that was never mine to carry.`,
      is_anonymous: false,
      author: { display_name: 'Theo B.', avatar_url: null },
      published_at: '2024-06-20T15:00:00Z',
      reaction_count: 41,
      defaultRead: true,
    },
    {
      id: 'fam-5',
      title: 'The day I finally understood my dad',
      body_text: `My dad wasn't around much when I was growing up. Not absent — just not really there, even when he was in the room. Quiet. Contained. I spent years interpreting that as not caring.

When I was 24, he got sick. Nothing life-threatening, but enough to slow him down. I started visiting more. We watched a lot of bad television together in silence and gradually started talking around it.

He told me once, almost like an accident, that he hadn't been shown how to be close to people. That his father had been the same. That he'd always assumed I knew he loved me because he'd tried so hard to provide.

I did know. I just needed to hear it too. We've both been working on that.`,
      is_anonymous: false,
      author: { display_name: 'Marcus T.', avatar_url: null },
      published_at: '2024-05-15T09:00:00Z',
      reaction_count: 18,
      defaultRead: false,
    },
  ],

  'body-changes': [
    {
      id: 'bc-1',
      title: 'I got my period at swim practice',
      body_text: `I was thirteen. It was a Tuesday. I had been waiting for it to happen because everyone else seemed to already be dealing with it, and then it happened in the worst possible setting, which felt extremely on-brand for puberty.

The coach was a man. The other girls were all older than me. I handled it by pretending nothing had happened for about forty-five minutes until someone noticed and quietly helped me.

What I remember most is not the embarrassment but the kindness of the older girl who just... took care of it without making it a thing. She handed me what I needed, walked me to the locker room, and said "it's fine, it happens to everyone, I'll tell coach you're not feeling well."

I never got to thank her properly. If you're ever in a position to be that person for someone else, please be that person.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-09-12T11:00:00Z',
      reaction_count: 83,
      defaultRead: true,
      updateText: 'I showed this to my younger sister who just started at the same school, and she told me it made her feel so much less scared about her own body. I wanted to share that because sometimes you write something for yourself and it ends up helping someone else.',
    },
    {
      id: 'bc-2',
      title: 'I was 16 before anyone explained puberty to me',
      body_text: `No one sat me down. Not my mom, not a teacher, not even a slightly older cousin who might have had useful information. I learned what I knew from whispering with friends who also didn't really know anything.

I spent years confused about my own body. Confused and too embarrassed to ask because I assumed everyone else already knew and asking would reveal that I didn't.

Looking back, I want to say loudly: if you have questions about your body, please ask them. There are no stupid questions when it comes to your own body. You deserve real information. Whatever you're wondering about — it's probably completely normal, and even if it isn't, finding out is always better than not knowing.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-08-28T14:00:00Z',
      reaction_count: 67,
      defaultRead: false,
    },
    {
      id: 'bc-3',
      title: 'Hating my body at 13 and what changed',
      body_text: `At thirteen, I could tell you exactly what was wrong with every part of me. My thighs. My arms. The way my stomach looked. I had a running inventory of all of it and I revisited it constantly.

I thought this was a personal failing. I didn't understand that almost every girl I knew was doing the exact same thing, and that we had all been carefully taught to.

What changed wasn't my body — my body is more or less the same. What changed was slowly, gradually learning that my body was for living in, not for being looked at. That it carried me through things, healed, worked. That it deserved care instead of punishment.

I won't pretend that I woke up one day completely at peace with it. But I stopped treating it like an enemy, and that was the beginning of something better.`,
      is_anonymous: false,
      author: { display_name: 'Sofia R.', avatar_url: null },
      published_at: '2024-07-22T10:00:00Z',
      reaction_count: 91,
      defaultRead: false,
    },
    {
      id: 'bc-4',
      title: 'What I wish someone had told me about acne',
      body_text: `Mine started at eleven and lasted until I was twenty-two. Eleven years of trying every product, every medication, every piece of advice that people felt free to offer me, constantly, without being asked.

I want to say clearly: acne is a medical condition. It's not caused by being dirty or eating the wrong foods or touching your face too much. A lot of what I was told was wrong. A dermatologist was the person who finally helped.

The other thing I want to say is that the social weight of acne is real and unfair and it is not a reflection of who you are or how clean you are or how much you deserve to be loved. I know that's easy to say and hard to believe when you're in it. I believed it eventually.`,
      is_anonymous: false,
      author: { display_name: 'Amara K.', avatar_url: null },
      published_at: '2024-06-15T12:00:00Z',
      reaction_count: 44,
      defaultRead: true,
    },
    {
      id: 'bc-5',
      title: 'Learning to take up space',
      body_text: `I spent most of my teenage years trying to make myself smaller — physically, literally, always angling my body away from photos, apologizing for how much room I took up.

The moment things started to shift was when I read something that said: your body is not an apology. I don't even remember where. It just landed.

I'm not going to tell you it's easy to unlearn years of feeling like your body is a problem to be solved. But I can tell you it's possible. And that the people worth being around will never make you feel that way.`,
      is_anonymous: false,
      author: { display_name: 'Carmen M.', avatar_url: null },
      published_at: '2024-05-20T09:00:00Z',
      reaction_count: 37,
      defaultRead: false,
    },
  ],

  relationships: [
    {
      id: 'rel-1',
      title: 'My first real heartbreak',
      body_text: `I was seventeen and absolutely certain that I would never feel normal again. I ate approximately nothing for a week. I listened to the same four songs on repeat. I convinced myself that what I was feeling was unique and permanent.

It wasn't. But that doesn't mean it wasn't real.

What I learned from that heartbreak — and I didn't learn it right away, it took a couple of years — is that loving someone who doesn't love you back the same way isn't a failure. It means you're capable of real feeling. That's actually a good thing even when it doesn't feel like it.

The other thing I learned is that the pain does have an end point. You can't see it when you're inside it, but it has one. You will feel like yourself again. Maybe a different version of yourself, but yourself.`,
      is_anonymous: false,
      author: { display_name: 'James L.', avatar_url: null },
      published_at: '2024-09-08T11:00:00Z',
      reaction_count: 58,
      defaultRead: true,
      updateText: 'I ran into that person at a wedding last year. We talked for a while. They\'re well. I\'m well. I thought I\'d feel something dramatic and instead I just felt glad that we both ended up okay. Time is a strange thing.',
    },
    {
      id: 'rel-2',
      title: 'I stayed too long',
      body_text: `The relationship wasn't bad in any obvious way. No one was cruel. There were good days. That actually made it harder to leave — I kept thinking that if it wasn't terrible, maybe it was fine enough.

I stayed for almost two years past the point where I knew I should leave. I told myself I was being mature, being committed, not giving up too easily. I wasn't. I was afraid of what it would mean to start over.

Leaving was one of the harder things I've done. It was also the right thing. I want to say that plainly because sometimes you need to hear that leaving is allowed — that leaving something that's just okay, for the possibility of something that's actually right, is not failure.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-08-14T13:00:00Z',
      reaction_count: 72,
      defaultRead: true,
    },
    {
      id: 'rel-3',
      title: 'What happens when you fall for your best friend',
      body_text: `I spent a year pretending I didn't. Overcompensating. Being extremely fine about everything. Being the most normal person in every room we were both in.

Eventually I told them. It was terrifying and it changed things. We weren't as close for a while. I grieved the friendship while also navigating the rejection. It was a lot to carry at once.

We're still friends, years later. It took time and some real conversations and both of us choosing the friendship over the awkwardness. I don't regret telling them — holding it in was its own kind of distance.

What I would say to you is: it's okay if this is complicated. Feelings and friendships are complicated. You'll figure out how to navigate it, even if the path isn't clear right now.`,
      is_anonymous: false,
      author: { display_name: 'Theo B.', avatar_url: null },
      published_at: '2024-07-30T10:00:00Z',
      reaction_count: 49,
      defaultRead: false,
    },
    {
      id: 'rel-4',
      title: 'The person I thought I would marry at 17',
      body_text: `We were so sure about each other. I remember thinking that I understood love in a way adults didn't give teenagers credit for.

I was right that the feeling was real. I was wrong that the feeling meant we were right for each other.

We broke up at 19. It was mutual and still devastating. I think about that relationship sometimes not with regret but with a kind of tenderness — I loved someone with everything I had at an age when you don't know how to protect yourself yet, and even though it ended, I don't wish it away.`,
      is_anonymous: false,
      author: { display_name: 'Sofia R.', avatar_url: null },
      published_at: '2024-07-01T14:00:00Z',
      reaction_count: 34,
      defaultRead: false,
    },
    {
      id: 'rel-5',
      title: 'What healthy love actually feels like',
      body_text: `I had to have a few relationships that weren't right to understand this. Healthy love is quieter than I expected. It doesn't spike the same way — there's less drama, fewer extreme highs and lows. For a while I confused this with being less in love.

I wasn't. Calm is not the absence of love. Stability isn't boring — it's something you have to learn to recognize and receive.

Healthy love is also the one where you don't feel like you have to be a different version of yourself. Where your person is glad you exist exactly as you are, on the difficult days too. If you haven't found that yet, you haven't found the right one. That's not a failure. That's just not yet.`,
      is_anonymous: false,
      author: { display_name: 'Amara K.', avatar_url: null },
      published_at: '2024-06-10T09:00:00Z',
      reaction_count: 86,
      defaultRead: false,
    },
  ],

  'sexuality-identity': [
    {
      id: 'si-1',
      title: 'Coming out — the long version',
      body_text: `I came out twice. The first time at seventeen, to my best friend, in her car outside a gas station. She said "I know" and then asked if I wanted fries and I cried from relief and the complete normalcy of it.

The second time was harder. I came out to my family two years later, and that went differently. Not badly — no one rejected me — but there was a long quiet period where I could feel everyone adjusting. Questions I wasn't ready to answer. Looks I wasn't sure how to read.

My mom came around first. My dad took longer, not because he loves me less but because he grew up in a world where this wasn't discussed, and he had to learn new language for something he'd never thought about.

Where we are now: he calls me first on my birthday. He met my partner. He's trying. I've decided trying counts.`,
      is_anonymous: false,
      author: { display_name: 'David P.', avatar_url: null },
      published_at: '2024-09-01T10:00:00Z',
      reaction_count: 104,
      defaultRead: true,
      updateText: 'My dad asked me to go to a Pride event with him last June. He wore a pin the whole day. I didn\'t expect that from him and I want to share it because people can grow in ways you don\'t anticipate. Give the people you love room to surprise you.',
    },
    {
      id: 'si-2',
      title: 'I didn\'t have words for what I felt until I was 22',
      body_text: `I grew up in a town where there wasn't a lot of language available for what I was experiencing. So I just... didn't have words. I knew I felt different. I didn't know what to call it or whether it even needed a name.

Finding language for yourself is such a specific kind of relief. It doesn't change who you are — you've always been who you are — but suddenly there's a map. Suddenly you're not alone in your particular experience of being yourself.

If you're still looking for the right words, that's okay. You don't have to have a label to be valid. But if and when you find one that fits, let yourself have it.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-08-18T12:00:00Z',
      reaction_count: 77,
      defaultRead: false,
    },
    {
      id: 'si-3',
      title: 'Being queer in a religious family',
      body_text: `My faith and my identity felt like a contradiction for years. I tried to resolve it by choosing one over the other — and neither worked. I was losing part of myself either way.

What I eventually found, slowly and imperfectly, was that I didn't have to resolve it like an equation. That I was allowed to be a person of faith and a queer person and that these things could coexist in me without canceling each other out.

I'm not saying it's been simple. My relationship with my family's church is complicated. My relationship with my family is complicated in different ways. But I'm whole in a way I wasn't when I was trying to carve myself down to fit.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-07-25T11:00:00Z',
      reaction_count: 95,
      defaultRead: true,
    },
    {
      id: 'si-4',
      title: 'Finding my people changed everything',
      body_text: `I know that sounds dramatic but it's the most accurate thing I can say. I spent most of high school feeling like I was performing a version of myself that wasn't quite right. Then I found a community where I wasn't performing anything.

You deserve to be in rooms where you can be completely yourself. If you haven't found those rooms yet, please keep looking. They exist and there are people in them who will recognize you.`,
      is_anonymous: false,
      author: { display_name: 'Carmen M.', avatar_url: null },
      published_at: '2024-06-28T13:00:00Z',
      reaction_count: 61,
      defaultRead: false,
    },
    {
      id: 'si-5',
      title: 'I\'m still figuring it out — and that\'s okay',
      body_text: `At 28 I have more questions about my identity than I did at 18. I thought it worked the other way. I thought you figured things out and then they stayed figured out.

What I've learned instead is that identity isn't a destination. It shifts. It deepens. New language becomes available and you apply it to yourself and some of it fits and some of it doesn't quite. That's not confusion. That's just being a living person.

You don't have to have your whole self figured out right now. Nobody does.`,
      is_anonymous: false,
      author: { display_name: 'Theo B.', avatar_url: null },
      published_at: '2024-05-30T09:00:00Z',
      reaction_count: 53,
      defaultRead: false,
    },
  ],

  'school-career': [
    {
      id: 'sc-1',
      title: 'I failed my freshman year',
      body_text: `I went to college very confident and came home after the first year on academic probation. I had been a good student my whole life. I had no skills for failure because I had never needed them.

What happened: I stopped going to class by October. Not because I was partying or being irresponsible in any obvious way — I just couldn't make myself go. I didn't have words for what was happening to me then. I know now it was depression.

I took a semester off. Got help. Went back. Graduated, late, which is not the same as not graduating.

If you're struggling in a way that doesn't make sense — a way that doesn't match who you think you are — please talk to someone. What's happening might not be about effort or discipline. It might be something that needs care.`,
      is_anonymous: false,
      author: { display_name: 'James L.', avatar_url: null },
      published_at: '2024-09-03T11:00:00Z',
      reaction_count: 68,
      defaultRead: true,
      updateText: 'A kid I mentor just went through something similar and I shared this with him. He asked me if I regret college and I said no — I regret not getting help sooner. I\'m adding this because that\'s the thing I most want to say.',
    },
    {
      id: 'sc-2',
      title: 'Dropping pre-med was the best decision I made',
      body_text: `I was pre-med because my parents were doctors and I had never questioned whether I wanted that too. I was good at science. I assumed that was enough of a reason.

By junior year I was miserable in a way I kept trying to reason away. I told myself everyone found organic chemistry hard. I told myself it would get better once I got to the parts I cared about. I couldn't actually locate the parts I cared about.

I switched majors in the first semester of senior year. I graduated with a degree in sociology and terrified about what happened next. What happened next was a career I didn't plan for that turned out to be exactly right.

You're allowed to change direction. The path doesn't have to be a straight line.`,
      is_anonymous: false,
      author: { display_name: 'Amara K.', avatar_url: null },
      published_at: '2024-08-10T10:00:00Z',
      reaction_count: 44,
      defaultRead: false,
    },
    {
      id: 'sc-3',
      title: 'Nobody told me it was okay not to know',
      body_text: `Everyone around me seemed to have a plan. What they wanted to study, what they wanted to be, what city they were going to live in. I had no idea. I went to college undecided and spent two years feeling like I was behind.

I wasn't behind. I was just listening to myself instead of performing certainty I didn't have.

What I want you to know is that not knowing is completely legitimate. The pressure to have it all mapped out at 17 or 18 is a strange thing we've decided to put on young people and it doesn't actually lead to better outcomes. The people who figured it out at 22 or 27 or 35 are not less successful. They're just more honest about how it actually works.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-07-18T14:00:00Z',
      reaction_count: 79,
      defaultRead: true,
    },
    {
      id: 'sc-4',
      title: 'Getting fired from my first real job',
      body_text: `I thought I would be there forever. I thought it was going fine. I thought wrong.

The conversation lasted eleven minutes. I walked out of the building and sat on a bench outside and called my mom.

What I know now that I didn't know then: being fired is survivable. It happens to more people than will admit it. It does not mean you're incompetent — it means you were in a job that wasn't the right fit, or the company changed, or a hundred things that aren't about you.

I found another job. A better one. The firing was the thing that forced me out of a situation I had been telling myself was fine when it wasn't.`,
      is_anonymous: false,
      author: { display_name: 'Marcus T.', avatar_url: null },
      published_at: '2024-06-25T12:00:00Z',
      reaction_count: 33,
      defaultRead: false,
    },
    {
      id: 'sc-5',
      title: 'Choosing passion over salary',
      body_text: `I make less money than most of my friends. I also work on something I care about every day and get to leave work at work, which a lot of them can't.

I'm not saying one choice is right and the other is wrong. Both are real tradeoffs. What I want to say is: the money choice isn't automatically the responsible one, and the passion choice isn't automatically the naive one. They're both just choices with consequences you have to weigh.

Figure out what you're actually optimizing for before you decide. Not what you think you should want — what you actually want.`,
      is_anonymous: false,
      author: { display_name: 'Sofia R.', avatar_url: null },
      published_at: '2024-05-25T09:00:00Z',
      reaction_count: 27,
      defaultRead: false,
    },
  ],

  'drugs-substances': [
    {
      id: 'ds-1',
      title: 'What started as just weekends',
      body_text: `I want to be honest with you about how it happens, because the way it's usually described made me think I was immune.

It doesn't look like a decision. It looks like a series of small frictions disappearing. It's a weekend thing, then a Friday thing, then a thing that helps you sleep, then a thing that helps you function, then a thing that's just there all the time and you're not sure when that happened.

I was twenty when I realized I had a problem. I was twenty-two before I actually did anything about it. Those two years in between cost me a lot — a relationship, a job, time I can't get back.

I'm okay now. I want you to know that too. It doesn't have to end badly. But getting help early is so much easier than getting help late. If you're asking yourself whether it's a problem, that question is worth taking seriously.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-09-15T10:00:00Z',
      reaction_count: 88,
      defaultRead: true,
      updateText: 'It\'s been three years since I wrote this. I\'m still okay. I want to update it because when I was in the middle of things I couldn\'t imagine that three years clean was possible. It is. You can get there.',
    },
    {
      id: 'ds-2',
      title: 'Watching someone I love disappear',
      body_text: `My older brother changed slowly and then all at once. By the time I really understood what was happening, it had been happening for years.

I want to tell you about what it's like to love someone who's struggling with addiction, because this doesn't get talked about enough. You feel helpless. You feel angry. You feel guilty for being angry. You wonder what you should have done differently even though there was nothing you could have done.

You can love someone without being able to fix them. That's the hardest thing I've learned. Loving them doesn't stop their choices. Not loving them doesn't either. You are not responsible for another person's relationship with substances.

My brother is in recovery now. It was his choice to get there. I couldn't make it for him. All I could do was stay, which I did.`,
      is_anonymous: false,
      author: { display_name: 'Carmen M.', avatar_url: null },
      published_at: '2024-08-20T12:00:00Z',
      reaction_count: 55,
      defaultRead: false,
    },
    {
      id: 'ds-3',
      title: 'The night I actually scared myself',
      body_text: `I'm not going to go into the details because I don't think the details are the useful part. What I want to say is that I had a night that showed me clearly what a different version of my life could look like and I didn't want that version.

Before that night I thought I had control. After that night I knew I had been telling myself a story.

Telling someone was the hardest part. I told my roommate first because she was there. Then I told my parents. Then I got help. I'm not going to say it was easy — it was embarrassing and humbling and slow. But I'm glad something scared me enough to do it.

Trust your fear when it's telling you something true.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-07-28T15:00:00Z',
      reaction_count: 43,
      defaultRead: false,
    },
    {
      id: 'ds-4',
      title: 'Why I said yes when I should have said no',
      body_text: `Because I didn't want to seem scared. Because everyone else seemed to be doing it. Because saying no felt like an explanation I didn't have language for yet.

If I could go back I'd tell myself: "No" is a complete sentence. You don't need a reason that satisfies the room. You don't owe anyone an explanation for what you do with your own body.

I didn't have a dramatic consequence from that night. But I made a choice I didn't actually want to make because I didn't know how to not make it. I want you to know how to not make it.`,
      is_anonymous: false,
      author: { display_name: 'David P.', avatar_url: null },
      published_at: '2024-06-30T11:00:00Z',
      reaction_count: 39,
      defaultRead: true,
    },
    {
      id: 'ds-5',
      title: 'It wasn\'t as harmless as everyone said',
      body_text: `I'm not here to tell you that marijuana is the most dangerous thing in the world. It isn't. But I also can't tell you it had no effect on me, because it did.

For me it was motivation. Focus. A growing preference for being slightly dulled over being fully present in my own life. None of this was dramatic. All of it added up.

I'm not saying your experience would be the same as mine. I'm saying it's worth paying attention to what something is actually doing for you versus what you've decided it's doing. Those can be different things.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-06-05T10:00:00Z',
      reaction_count: 31,
      defaultRead: false,
    },
  ],

  'risk-regret': [
    {
      id: 'rr-1',
      title: 'The summer everyone talked me into everything',
      body_text: `I was sixteen and desperate to be liked and I said yes to almost everything that summer. Not because I wanted to but because I hadn't yet learned that the people worth having in your life won't make you feel like you need to earn your spot.

Some of it was harmless. Some of it wasn't. By August I was exhausted from being a version of myself that I didn't recognize and couldn't fully maintain.

The thing about people who pressure you is that it's usually about them, not you. They need you to do the thing to feel okay about themselves doing the thing. Your discomfort is not their concern.

You are allowed to protect yourself. You are allowed to disappoint people rather than betray yourself. That's not selfishness — that's wisdom.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-09-18T10:00:00Z',
      reaction_count: 71,
      defaultRead: true,
      updateText: 'I talked about this with my therapist recently and she pointed out that what I was describing is called people-pleasing and it often starts in childhood in response to an environment where approval felt conditional. I\'m adding this because naming it helped me understand it better — maybe it will for you too.',
    },
    {
      id: 'rr-2',
      title: 'The shortcut that cost me more than it saved',
      body_text: `Junior year, under more pressure than I knew how to handle, I cheated on an exam. Not dramatically — I just had notes I wasn't supposed to have. I told myself it was a one-time thing.

I didn't get caught. Which sounds like the story has a clean ending. It doesn't.

I carried that thing for years. Not with constant guilt — more like a low-level static. A small permanent decrease in how much I trusted my own work, my own capability. Because I had given myself evidence that I'd take the shortcut when things got hard.

Eventually I told someone. I don't know why it helped but it did. The shortcut cost me the confidence it was supposed to protect.`,
      is_anonymous: true,
      author: { display_name: 'Anonymous', avatar_url: null },
      published_at: '2024-08-25T13:00:00Z',
      reaction_count: 46,
      defaultRead: false,
    },
    {
      id: 'rr-3',
      title: 'The text I wish I hadn\'t sent',
      body_text: `It was 2am. I was upset. I sent it before I had thought it through.

I can't take it back. The relationship it damaged is still damaged. I've apologized. The apology was accepted but things are not the same.

The advice I give myself and anyone who will listen: never send anything important when you're activated. Wait. Sleep on it. Say it out loud to yourself or to someone you trust. The message will still be there in the morning and you'll know better whether it should be sent at all.`,
      is_anonymous: false,
      author: { display_name: 'James L.', avatar_url: null },
      published_at: '2024-07-20T16:00:00Z',
      reaction_count: 52,
      defaultRead: true,
    },
    {
      id: 'rr-4',
      title: 'When I stayed silent and wish I hadn\'t',
      body_text: `There was a moment where I could have said something and I didn't. Someone I cared about was being treated badly and I stood there and said nothing because I didn't want the conflict or the attention or to be wrong.

I think about it sometimes. Not obsessively — but it comes back. A small persistent reminder that silence has its own consequences.

I can't fix that specific moment. What I can do is be different in the next one. That's what I try to do.`,
      is_anonymous: false,
      author: { display_name: 'Amara K.', avatar_url: null },
      published_at: '2024-06-18T10:00:00Z',
      reaction_count: 29,
      defaultRead: false,
    },
    {
      id: 'rr-5',
      title: 'The risk that actually turned out okay',
      body_text: `Not everything ends badly. I want to say that because most of the stories we tell about risk are cautionary tales, which are valuable, but not the whole picture.

I quit a stable job at 26 to try something I believed in. Everything about it was uncertain. My parents were worried. I had about four months of savings.

It worked. Not because I was lucky, though luck was part of it, but because I had made a real plan and I knew my own tolerance for discomfort better than anyone else did.

Some risks are worth taking. The work is in learning to tell the difference between risk that has a foundation under it and risk that's just fear or avoidance wearing a different outfit. I got better at telling the difference over time. So will you.`,
      is_anonymous: false,
      author: { display_name: 'Marcus T.', avatar_url: null },
      published_at: '2024-05-28T11:00:00Z',
      reaction_count: 48,
      defaultRead: false,
    },
  ],
}

export function getMockStories(slug: string): MockStory[] {
  return MOCK_STORIES[slug] ?? []
}

export function getPreReadIds(slug: string): string[] {
  return getMockStories(slug)
    .filter(s => s.defaultRead)
    .map(s => s.id)
}
