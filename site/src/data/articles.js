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
    slug: 'thesoul-publishing-joins-bolt',
    internal: true,
    title: 'TheSoul Publishing joins Bolt+',
    date: '30 September 2024',
    categories: ['Ecosystem', 'Events', 'News', 'Thought Leadership'],
    author: 'BoltOS',
    image: '/assets/news/thesoul-5min.webp',
    excerpt: "TheSoul Publishing's channels arrive on Bolt+ in English and Spanish, with real-time interactive features, e-commerce and AI-powered content discovery.",
    body: [
      { type: 'p', html: `<strong>LONDON, UK, 30 SEPTEMBER 2024.</strong> <strong>Bolt+,</strong> the revolutionary immersive streaming platform from <strong>BoltOS</strong>, is thrilled to announce a strategic partnership with the dynamic content creation ecosystem <strong>TheSoul Publishing</strong>. This global collaboration brings 12 channels from brands such as <span class="kw">5-Minute Crafts</span>, <span class="kw">123 Go!</span>, <span class="kw">Bright Side</span>, <span class="kw">TeenVee</span>, <span class="kw">La La Life</span>, <span class="kw">Imagine PlayWorld</span>, and <span class="kw">Slick Slime Sam</span>, to the immersive streaming experience of Bolt+, redefining digital content consumption for a global audience.` },
      { type: 'p', html: `As part of this dynamic partnership, TheSoul Publishing's channels will be available on Bolt+ in English and Spanish, offering viewers real-time interactive features, e-commerce capability and AI-powered innovation for intelligent content discovery. Bolt+ continues to push the boundaries of streaming technology, offering an unparalleled variety of popular content within its innovative streaming environment.` },
      { type: 'img', src: '/assets/news/thesoul-brightside.png', alt: 'Bright Side' },
      { type: 'p', html: `<strong>Jonathan Shrank, Director of Distribution and Streaming Content Partnerships at TheSoul Publishing</strong>, commented, "We're thrilled to bring our bouquet of entertaining channels to the Bolt+ platform and explore new and innovative ways to engage with our global audience. The interactive features on Bolt+ provide an exciting opportunity to interact with viewers and enhance their experience with our hugely popular content."` },
      { type: 'p', html: `<strong>Jamal Hassim, Co-Founder and CEO of BoltOS</strong>, stated, "This partnership with TheSoul Publishing marks a significant milestone for BoltOS. We're excited to bring their diverse and popular content to our platform, enhancing our offering of immersive entertainment." He added, "At BoltOS, we are committed to redefining digital content consumption. This collaboration allows us to offer our users an even more diverse range of engaging content within our unique interactive environment."` },
      { type: 'img', src: '/assets/news/thesoul-123go.png', alt: '123 Go!' },
      { type: 'img', src: '/assets/news/thesoul-teenvee.png', alt: 'TeenVee' },
      { type: 'h', text: 'About BoltOS' },
      { type: 'p', html: `BoltOS, founded in 2017, is transforming digital content creation and consumption. Our ecosystem seamlessly integrates immersive streaming with blockchain technology, empowering creators, viewers, and advertisers. At the core of our innovation lies Bolt+ (<a href="https://boltplus.tv" target="_blank" rel="noopener noreferrer">boltplus.tv</a>), a next-generation immersive streaming platform that transcends traditional boundaries.` },
      { type: 'h', text: 'About TheSoul Publishing' },
      { type: 'p', html: `TheSoul Publishing is a dynamic content creation ecosystem that sits at the center of the creator economy. At its core, TheSoul is the world's leading digital studio that produces engaging, positive and original content for a global audience. With a creative team based in more than 70 countries and 6 continents, TheSoul produces entertaining brands including <em>5-Minute Crafts, Bright Side, La La Life, Slick Slime Sam</em> in 22 languages, which are distributed through a social media-driven cross-platform network.` },
      { type: 'p', html: `With more than 2 billion social media followers across Facebook, Instagram, TikTok, YouTube, Pinterest, and Snapchat, TheSoul creates shareable content for all ages. Its content is also featured on more than 50 FAST/OTT/VOD platforms in 180 countries around the world. The award-winning company continues to expand its presence in the digital content, talent management, and creator services landscape, exemplified by its acquisition of <span class="kw">Underscore Talent</span> and the growth of <span class="kw">Shorthand Studios</span>. In addition, TheSoul's creative services team works with brands accelerating their growth through content creation and social media management. Meanwhile, TheSoul's music division simplifies and amplifies how music is promoted, discovered, and monetised on social media and beyond.` },
      { type: 'p', html: `Founded in 2016, TheSoul Publishing is headquartered in Cyprus with production studios and offices in Europe and the U.S. For more information, please visit <a href="https://thesoul-publishing.com" target="_blank" rel="noopener noreferrer">TheSoul-Publishing.com</a>.` },
      { type: 'p', html: `<strong>Contact: marketing@bolt.global</strong>` },
    ],
  },
];

export const hrefFor = (a) => (a.internal ? `/newsroom/${a.slug}/` : a.href);
export const isExternal = (a) => !a.internal;
export const keyFor = (a) => a.slug || a.href || a.title;
