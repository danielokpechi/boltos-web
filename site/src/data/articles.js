// Newsroom articles. Internal ones render a full page at /newsroom/<slug>/;
// external ones link out to boltos.ai until their full copy is provided.
// Body is authored HTML blocks (trusted, static). Em dashes removed per the
// site-wide no-dash rule (the press release used several).

export const articles = [
  {
    slug: 'kieran-gibbs-senior-advisor-soccer',
    internal: true,
    title: 'BoltOS Appoints Former Premier League & England International Defender Kieran Gibbs as Senior Advisor, Soccer',
    date: '25 February 2026',
    categories: ['News', 'Press Release'],
    author: 'BoltOS',
    image: '/assets/news/kieran-gibbs.png',
    heroCaption: 'Gibbs and BoltOS Founder & CEO Jamal Hassim',
    excerpt: '',
    body: [
      { type: 'p', html: `<strong>London, UK, February 25, 2026.</strong> BoltOS has announced the appointment of Kieran Gibbs as Senior Advisor, Soccer, deepening the company's strategic push into sport and football/soccer fan engagement. Gibbs first joined BoltOS as an investor after being introduced to BoltOS CEO Jamal Hassim, and is now stepping into a formal advisory role to help guide BoltOS' sports strategy, partnerships, and go-to-market approach.` },
      { type: 'p', html: `Gibbs brings elite, first-hand operating perspective from the top levels of professional football/soccer, adding practical insight into the pressures and priorities faced by clubs, leagues, players, and stakeholders. BoltOS will leverage this experience to ensure its sports-facing products and partnerships are built for on-the-ground reality, strengthening how rights-holders and organisations create deeper, more meaningful engagement with fans and brand stakeholders.` },
      { type: 'p', html: `"I have been eager to announce and officially welcome Kieran Gibbs to BoltOS as our Senior Advisor, Soccer," said Jamal Hassim, CEO of BoltOS. "Kieran started as an investor who genuinely believed in what we're building, and as we spent more time together it became clear there was a much bigger opportunity to work together in a deeper way. His real-world experience at the highest level of football is incredibly valuable as we grow our work across sport."` },
      { type: 'p', html: `Gibbs said the move reflects a long-term commitment to helping shape how technology supports the future of sport, across stakeholders, business models, and fan expectations.` },
      { type: 'p', html: `"There are certain people and projects you come across in life where you know you want to be involved at a deeper level, BoltOS is one of those," said Kieran Gibbs, Senior Advisor, Soccer. "I came in as an investor because I believed in the vision and product. As I got closer to the team, it became clear I could add value in a hands-on way, helping shape how BoltOS shows up in the world of sport and how it builds with the realities of the future ecosystem in mind."` },
      { type: 'p', html: `In his advisory capacity, Gibbs will support BoltOS across:` },
      { type: 'ul', items: [
        `<strong>Football (soccer) strategy and stakeholder alignment</strong> (clubs, leagues, players, partners)`,
        `<strong>Partnership development</strong> across the sport ecosystem`,
        `<strong>Product-market fit input</strong> to help ensure sports-focused solutions translate into measurable outcomes in real operating environments`,
      ] },
    ],
  },
  {
    internal: false,
    title: "BoltOS Powers Olympusat's Revenue Evolution with Immersive Technology Integration Across FreeTV Channels",
    date: '28 November 2025',
    categories: ['News'],
    author: 'BoltOS',
    excerpt: 'Olympusat gains access to advanced audience engagement tools that drive revenue increases through enhanced viewer retention and interactivity.',
    href: 'https://boltos.ai/boltos-powers-olympusats-revenue-evolution-with-immersive-technology-integration-across-freetv-channels/',
    image: '/assets/news/olympusat.png',
  },
  {
    internal: false,
    title: 'BoltOS Scores Star Studded Lineup with Dooya Media Group',
    date: '26 February 2025',
    categories: ['News'],
    author: 'BoltOS',
    excerpt: "A partnership with Dooya Media Group building on last summer's events, with audience immersion features driving interaction and brand building.",
    href: 'https://boltos.ai/boltos-scores-star-studded-lineup-with-dooya-media-group/',
    image: '/assets/news/dooya.webp',
  },
  {
    internal: false,
    title: 'Bolt+ Migration: Phase One Successfully Completed',
    date: '27 November 2024',
    categories: ['News'],
    author: 'BoltOS',
    excerpt: 'The first phase of the Bolt+ infrastructure migration is complete, with the platform transitioned to new service providers.',
    href: 'https://boltos.ai/bolt-migration-phase-one-successfully-completed/',
    image: '/assets/news/bolt-migration.webp',
  },
  {
    internal: false,
    title: 'TheSoul Publishing joins Bolt+',
    date: '30 September 2024',
    categories: ['News'],
    author: 'BoltOS',
    excerpt: "TheSoul Publishing's channels arrive on Bolt+ in English and Spanish, with real-time interactive features, e-commerce and AI-powered content discovery.",
    href: 'https://boltos.ai/thesoul-publishing-joins-bolt/',
    image: '/assets/news/thesoul.webp',
  },
];

export const hrefFor = (a) => (a.internal ? `/newsroom/${a.slug}/` : a.href);
export const isExternal = (a) => !a.internal;
export const keyFor = (a) => a.slug || a.href || a.title;
