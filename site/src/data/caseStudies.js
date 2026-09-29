// Data for the shared CaseStudy layout. One entry per study; the layout renders
// every section from this. Copy carried verbatim from the prototype .dc.html files.
//
// Bloomberg and Hankook 24H Dubai are rewritten from the 2026 case-study decks.
// Hisense and One Football still use the prototype's shared NEEDS / SOLUTION_COPY,
// which mention Hisense on the One Football page. No dash punctuation on the site.

// Shared by the studies not yet rewritten from the decks.
const NEEDS = [
  'A way to stand out in a crowded streaming market',
  'A way to expand diversity and immersiveness of streaming for users',
  'A way to elevate the user experience for all',
];

const SOLUTION_COPY = [
  { num: '01', bar: '#7B2FE2', title: 'Stand Out in a Crowded Market',
    copy: 'Bolt+ integrates directly into Hisense TVs, providing unique immersive features across its streaming platform, such as Chat, Shop, Read and AI.', imgOrder: 1 },
  { num: '02', bar: '#D62086', title: 'Expand Content Diversity',
    copy: "Bolt+ offers a wide range of live streaming content including sports, news, gaming and entertainment, which broadened Hisense's content offerings and appeal to a diverse audience.", imgOrder: 2 },
  { num: '03', bar: '#35C7DF', title: 'Elevate Audience Experience',
    copy: 'Bolt+ enhances the standard viewing experience by introducing immersive features such as real-time interaction, audience participation, programmatic advertising, and extensive content revenue options for all.', imgOrder: 1 },
];

// Merge per-study images/alts onto the shared solution copy.
const withImages = (imgs) => SOLUTION_COPY.map((c, i) => ({ ...c, ...imgs[i] }));

export const caseStudies = {
  hisense: {
    title: 'Hisense, BoltOS',
    brandmark: '/assets/logos/hisense.png',
    eyebrow: 'Hisense',
    headline: 'Revolutionising TV for a new generation of viewers',
    headlineMax: '20ch',
    video: '/assets/video/boltvideo-hisense.mp4',
    intro: [
      'Hisense, the second largest TV manufacturer in the world, is well known for its high-quality smart TVs and wide range of consumer electronics products. Hisense has partnered with BoltOS since 2019 to leverage Bolt+ in enhancing its content offerings.',
      'This business collaboration started in South Africa in 2019, gradually expanding across the African continent in 2020, the Middle East in 2021, Asia-Pacific and Australia in 2022, and finally, global availability in late 2023. Today, every Hisense Smart TV comes pre-installed with the Bolt+ TV app, with Bolt+ reaching more than 10 million households globally.',
      "The collaboration between Bolt+ and Hisense has transformed the viewing experience by integrating immersive streaming and social TV features, elevating Hisense's market position globally.",
    ],
    needLead: 'Hisense was seeking an innovative way to stand out in the competitive smart TV market, using a unique and immersive content experience to enhance the value offered to their customers.',
    needs: NEEDS,
    whyBrandmark: '/assets/logos/hisense.png',
    why: [
      'Hisense chose to partner with Bolt because of its advanced immersive streaming platform, Bolt+. The free, advertising-supported Bolt+ smart TV app is the only one that merges both live streaming and linear TV channels with immersive features, such as Chat, Read, Shop and AI.',
      'This creates a more engaging, immersive, and unique viewing experience for audiences.',
      'Additionally, the anticipated integration with BoltChain ensures a futureproof approach to technical expansion, adding cutting-edge blockchain functionalities that will further enhance viewer interaction and content revenue generation.',
    ],
    quote: '"We view our partnership with BoltOS as strategic and valuable for building and maintaining viewer loyalty. Integrating content, payment systems, and hardware offers a compelling global consumer experience."',
    quoteBy: 'Jerry Liu, Vice President of Hisense International',
    solutionTheme: 'light',
    solution: withImages([
      { img: '/assets/case/hisense-tv-sydney.png', alt: 'Bolt+ and VIDAA on a Hisense TV' },
      { img: '/assets/case/hisense-the-deal.jpeg', alt: 'The Deal on Bolt+' },
      { img: '/assets/case/hisense-booth.png', alt: 'BoltOS and VIDAA teams' },
    ]),
    resultLead: "The immersive technology of Bolt+ complements Hisense's advanced hardware, providing smart, cutting-edge features that are perceived by audiences as revolutionary for their viewing experiences.",
    resultNote: 'This synergy enhances the perceived value of Hisense TVs, setting a new standard in smart TV functionality.',
  },

  bloomberg: {
    title: 'Bloomberg, BoltOS',
    brandmark: '/assets/logos/bloomberg.png',
    eyebrow: 'Bloomberg',
    headline: 'Bloomberg had reach and trust. BoltOS helped turn that attention into participation.',
    headlineMax: '24ch',
    video: '/assets/video/boltvideo-bloomberg.mp4',
    intro: [
      'Bloomberg, a global leader in news and business information, had a large, long-standing audience consuming high-frequency business and financial content.',
      'The challenge was no longer simply reaching viewers. Bloomberg wanted to deepen engagement with its content and create a clearer pathway from audience attention towards subscription.',
    ],
    needLead: 'Three gaps stood between Bloomberg’s daily reach and a deeper audience relationship.',
    needs: [
      { title: 'Passive consumption', copy: 'Viewers consumed content without a structured way to interact in real time.' },
      { title: 'Limited behavioural insight', copy: 'View data alone could not show which content generated deeper audience interest.' },
      { title: 'Subscription gap', copy: 'Passive viewing created a weaker path to subscription than active engagement.' },
    ],
    objective: 'Transform daily reach into an active audience relationship that could support subscription behaviour.',
    whyBrandmark: '/assets/logos/bloomberg.png',
    why: [
      "Bloomberg partnered with BoltOS due to its ability to integrate live streaming with enhanced interactivity, allowing it to not just reach, but actively engage a global audience in real-time, for the first time. BoltOS's innovative approach to immersive streaming was perfectly aligned with Bloomberg's goal to transform how they wanted to elevate the Bloomberg viewing experience.",
    ],
    quote: '"The partnership with Bolt+ marks a significant milestone in our mission to bring high-quality, reliable news to viewers worldwide. Through the innovative features on Bolt+ and BoltChain, we\'re not just sharing content. We\'re directly engaging with our audience in a way that\'s both meaningful and rewarding. This partnership represents a leap forward in news dissemination and audience engagement."',
    quoteBy: 'Sophia Yuen, Head of Video and Audio at Bloomberg',
    solutionTheme: 'dark',
    solutionLead: 'BoltOS layered real-time engagement and subscription pathways on top of Bloomberg’s content. Bloomberg also helped shape the early use case for IRIS, exploring how the conversational layer could support complex financial information.',
    solution: [
      { num: '01', bar: '#7B2FE2', title: 'Content', copy: 'Bloomberg’s existing show portfolio remained the core content asset.', imgOrder: 1,
        img: '/assets/case/bloomberg-stand-out.png', alt: 'Bloomberg presenter on set' },
      { num: '02', bar: '#D62086', title: 'Engagement', copy: 'Connect introduced real-time interaction around Bloomberg content.', imgOrder: 2,
        img: '/assets/case/bloomberg-billion.png', alt: 'The $13 Billion AI Bet on Bolt+' },
      { num: '03', bar: '#35C7DF', title: 'Conversion', copy: 'Direct redirects connected audience engagement to the Bloomberg subscription journey.', imgOrder: 1,
        img: '/assets/case/bloomberg-studio.png', alt: 'BoltOS and Bloomberg teams in the Daybreak Europe studio' },
    ],
    beforeAfter: {
      before: ['High-volume content', 'Passive viewing', 'Limited real-time interaction', 'No direct in-content subscription pathway'],
      after: ['Content + interaction', 'Real-time participation', 'Behaviour becomes measurable', 'Engagement connects to subscription'],
    },
    resultLead: 'A year of engagement data shows that business-news audiences will participate.',
    metrics: [
      { value: '11,136', label: 'Views' },
      { value: '898', label: 'Monthly unique active users' },
      { value: '35m', label: 'Average session length' },
      { value: '30,545', label: 'Chat messages' },
      { value: '632', label: 'Click-throughs to subscription page' },
    ],
    signalTitle: '30,545 chat messages demonstrate substantial audience participation around high-value financial content.',
    resultNote: 'With an average session length of 35 minutes, the experience moved beyond passive consumption towards sustained interaction. The 632 subscription-page click-throughs created a measurable path from engagement towards subscription intent.',
    proves: {
      lead: 'Engagement can work even with complex, high-frequency information content. Bloomberg demonstrates that BoltOS is not limited to sports or entertainment.',
      points: [
        { title: 'Engagement', copy: 'Audiences will actively participate around dense financial and business content when given a structured way to do so.' },
        { title: 'Conversion', copy: 'Real-time engagement can connect directly to a subscription pathway.' },
        { title: 'Product evolution', copy: 'A long-term partner can also help shape new capabilities such as IRIS around real-world content needs.' },
      ],
      takeaway: 'Bloomberg is proof that BoltOS can convert high-frequency audience reach into an ongoing engagement relationship, while creating measurable commercial intent and informing product development over time.',
    },
  },

  'dubai-hankook-24hr-race': {
    title: 'Dubai Hankook 24HR Race, BoltOS',
    brandmark: '/assets/logos/dubai-24h.png',
    eyebrow: 'Dubai Hankook 24HR Race',
    headline: 'A global race audience was watching, but not participating.',
    headlineMax: '20ch',
    video: '/assets/video/boltvideo-dubai-24h.mp4',
    intro: [
      'The Hankook 24H Dubai endurance race had strong global fan interest and was broadcast through the Bolt+ world feed.',
      'The race needed a way to move beyond passive viewing: giving fans access to more perspectives, direct interaction with teams and a pathway towards merchandise.',
    ],
    needLead: 'Three gaps stood between a watching audience and a participating one.',
    needs: [
      { title: 'One-way viewing', copy: 'The world feed provided a single perspective.' },
      { title: 'No direct team interaction', copy: 'Fans could not participate with the teams they followed.' },
      { title: 'Disconnected commerce', copy: 'Merchandise existed, but there was no direct path from viewing to purchase.' },
    ],
    objective: 'Turn the live broadcast into an interactive experience where audience attention could become measurable participation and commercial action.',
    whyBrandmark: '/assets/logos/dubai-24h.png',
    why: [
      "Sports Advantage chose BoltOS for its ability to offer multistreaming capabilities and immersive features, enabling FACH AUTO TECH to create a unique and engaging viewing experience that was not possible through traditional race coverage. Bolt+ provided the perfect platform to showcase its team's prowess and behind-the-scenes action, all without the high costs and limited features associated with traditional media broadcasting.",
    ],
    quote: '"The pilot race showcased interactive features, moderated feeds, behind-the-scenes content from FACH AUTO TECH, and car POV feeds incredibly well. This approach would be the highlight of the entire Hankook Endurance Season."',
    quoteBy: 'Erik Naeser, Head of Operations and Legal, Sports Advantage',
    solutionTheme: 'dark',
    solutionLead: 'BoltOS turned the race into a two-way fan experience, combining additional race perspectives, live interaction and commerce into one experience.',
    solution: [
      { num: '01', bar: '#7B2FE2', title: 'Streaming', copy: 'Bolt+ carried the world feed alongside two dedicated in-car feeds, giving fans more ways to experience the race.', imgOrder: 1,
        img: '/assets/case/dubai-fach-car.webp', alt: 'FACH AUTO TECH Porsche at 24H Dubai' },
      { num: '02', bar: '#D62086', title: 'Engagement', copy: 'Live chat, hosted by team ambassadors, became the primary activity centre.', imgOrder: 2,
        img: '/assets/case/dubai-crowd.webp', alt: 'Grandstand crowd at Hankook 24H Dubai' },
      { num: '03', bar: '#35C7DF', title: 'Commerce', copy: 'A shop module connected fans directly from the experience to team merchandise pages.', imgOrder: 1,
        img: '/assets/case/dubai-grid.webp', alt: '24 Hours of Dubai 2024 grid' },
    ],
    beforeAfter: {
      before: ['One world feed', 'No team interaction', 'No additional perspectives', 'No direct path from viewing to purchase'],
      after: ['Multiple race perspectives', 'Ambassador-led live chat', 'Direct team interaction', 'Chat-to-shop pathway'],
    },
    resultLead: 'The first interactive experience generated deep engagement and strong commercial action.',
    metrics: [
      { value: '477', label: 'Views' },
      { value: '222', label: 'Unique active users' },
      { value: '29m 06s', label: 'Average session length' },
      { value: '601', label: 'Chat messages' },
      { value: '259', label: 'Click-throughs' },
      { value: '54%', label: 'Click-through rate on total views' },
    ],
    signalTitle: 'Chat messages exceeded total views.',
    resultNote: 'The experience generated repeated participation rather than simply one-off viewing, while the shop pathway created a direct connection between fan engagement and merchandise. A 54% click-through rate on total views provides a strong commercial proof point from a single live event.',
    proves: {
      lead: 'Live sport can connect fan participation directly to commercial action.',
      points: [
        { title: 'Deeper engagement', copy: 'Additional perspectives and live interaction gave fans reasons to stay and participate.' },
        { title: 'Repeat participation', copy: '601 chat messages from 477 views demonstrate engagement beyond passive viewing.' },
        { title: 'Commercial action', copy: 'The shop pathway created a direct route from fan interaction to team merchandise.' },
      ],
      takeaway: 'BoltOS can turn live sports broadcasts into interactive, sponsor-ready and revenue-connected experiences, without requiring the broadcast itself to become the destination for every commercial action.',
    },
  },

  'bridgets-healthy-kitchen': {
    title: "Bridget's Healthy Kitchen, BoltOS",
    brandmark: '/assets/logos/bridget.png',
    eyebrow: "Bridget's Healthy Kitchen",
    headline: 'A global live audience needed one place to participate and act.',
    headlineMax: '20ch',
    video: null,
    plainHero: true,
    intro: [
      "Bridget's Healthy Kitchen, led by Bridget Folaki-Davis, ran a 3-day live bootcamp that brought together a globally distributed audience watching from around the world.",
      'The event needed one destination where viewers could participate throughout the live experience and easily find information about future events.',
    ],
    needLead: 'Three gaps stood between a global live audience and lasting participation.',
    needs: [
      { title: 'Audience fragmentation', copy: 'Viewers were distributed across time zones and platforms.' },
      { title: 'Engagement gap', copy: 'The live feed alone could not capture the depth of audience participation.' },
      { title: 'Conversion friction', copy: 'Interest in future events existed, but booking information was not embedded directly into the experience.' },
    ],
    objective: 'Create a single live destination that could hold audience attention, encourage participation and convert interest into future-event bookings.',
    whyBrandmark: '/assets/logos/bridget.png',
    why: [
      "Bridget's audience was spread across time zones and platforms, and the live feed alone could not hold their participation or point them towards what came next.",
      "BoltOS placed Connect alongside Bridget's existing live feed for all three days, giving the audience one destination to watch, take part and find the next event.",
    ],
    facts: [
      { label: 'Client', value: "Bridget's Healthy Kitchen" },
      { label: 'Creator', value: 'Bridget Folaki-Davis' },
      { label: 'Format', value: '3-day creator-led live bootcamp' },
      { label: 'Category', value: 'Health & wellness' },
    ],
    solutionTheme: 'dark',
    solutionLead: "BoltOS made Connect the event's activity and information centre, sitting alongside Bridget's existing live feed throughout the three-day event.",
    solution: [
      { num: '01', bar: '#7B2FE2', title: 'Content', copy: 'The live broadcast connected Bridget with a global audience.', imgOrder: 1 },
      { num: '02', bar: '#D62086', title: 'Engagement', copy: 'Live chat became the primary way for the audience to participate throughout the event.', imgOrder: 2 },
      { num: '03', bar: '#35C7DF', title: 'Commerce', copy: 'Booking information for the next event was embedded directly alongside the live experience.', imgOrder: 1 },
    ],
    beforeAfter: {
      before: ['Live feed', 'Fragmented audience', 'No structured participation', 'Future-event information harder to find'],
      after: ['Live feed + Connect', 'Central audience destination', 'Continuous live chat', 'Immediate access to next-event information'],
    },
    resultLead: 'The event generated deep participation and same-day commercial action.',
    metrics: [
      { value: '823', label: 'Views' },
      { value: '250', label: 'Unique active users' },
      { value: '1h 50m', label: 'Average session length' },
      { value: '2,813', label: 'Chat messages' },
      { value: '213', label: 'Click-throughs' },
    ],
    signalTitle: 'The 1h 50m average session was the longest recorded across our case studies.',
    resultNote: "Audience members didn't simply watch the bootcamp. They spent extended periods participating in the experience. The embedded pathway also supported same-day pre-bookings for the next event, directly connecting live engagement to future-event demand.",
    proves: {
      lead: 'Live creator events can become both communities and conversion channels. A live event can create value beyond the broadcast itself.',
      points: [
        { title: 'Engage', copy: 'Live chat creates a persistent participation layer around the event.' },
        { title: 'Retain', copy: 'Long sessions indicate the platform can hold audience attention across multi-day programming.' },
        { title: 'Convert', copy: 'Embedded information can turn live-event interest into action on the next event.' },
      ],
      takeaway: 'BoltOS can support creator and influencer-led live formats where the commercial opportunity depends on community participation, sustained attention and follow-on purchases.',
    },
  },

  'one-football': {
    title: 'One Football, BoltOS',
    brandmark: '/assets/logos/one-football.webp',
    eyebrow: 'One Football',
    headline: 'Where Football Can be Local and Global',
    headlineMax: '18ch',
    video: null, // KNOWN GAP: boltvideo-one-football.mp4 is missing (hero shows the poster only).
    intro: [
      'OneFootball, a premier digital platform offering news, scores, and live updates for football fans, embraced BoltOS to transform its live sports viewing experience on Bolt+. Through this partnership, OneFootball delivers highly interactive and personalised content, engaging a global audience like never before.',
    ],
    needLead: 'OneFootball wanted to focus on revolutionising the live match viewing experience by connecting with a global fanbase in more personal, intimate and innovative ways.',
    needs: NEEDS,
    whyBrandmark: '/assets/logos/one-football.webp',
    why: [
      'OneFootball chose Bolt+ for its capacity to offer an interactive and deeply engaging platform, enabling a dynamic way to watch football that brings fans closer to their own teams, while also opening a channel for all football fans to watch together and connect through the sport.',
    ],
    quote: '"We are delighted that this new agreement with BoltOS will allow us to deliver international football content to a rapidly-growing audience of passionate football fans in South Asia and Africa. BoltOS\'s innovative use of technology to bring audiences together makes it a well-suited partner for OneFootball embed player, data-driven and creative approach, allowing us to marry engaged audiences with first-rate football video footage."',
    quoteBy: 'Charlie Moss, Head of Partnerships, APAC & MENA at OneFootball',
    solutionTheme: 'dark',
    solution: withImages([
      { img: '/assets/case/of-player.webp', alt: 'Manchester City player celebrating' },
      { img: '/assets/case/of-fan.webp', alt: 'Fan celebrating in the stands' },
      { img: '/assets/case/of-stadium.webp', alt: 'England supporters in a full stadium' },
    ]),
    resultLead: 'Partnering with Bolt+ allows OneFootball to transform its live sports content into highly interactive and personalised viewing experiences.',
    resultNote: "This approach not only expands its audience reach but also deepens the connection between fans and their teams, enhancing loyalty and satisfaction. The innovative use of Bolt+ features leads to a new standard in sports engagement, driving significant growth in viewer numbers and interaction rates across OneFootball's content.",
  },
};
