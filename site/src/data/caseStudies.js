// Data for the shared CaseStudy layout. One entry per study; the layout renders
// every section from this. Copy carried verbatim from the prototype .dc.html files.
//
// NOTE (copy audit): the three "What they needed" cards and the three "The BoltOS
// Solution" card blurbs are byte-identical across all four studies in the prototype
// (they still say "Hisense TVs" / "Hisense's content offerings" on the non-Hisense
// pages). Reproduced verbatim per the "character for character" rule (flagged, not
// rewritten). Per client direction, Bloomberg's headline em dash was changed to a
// colon and its intro en dash to a comma (no dash punctuation on the site).

// Shared across all four studies (identical in the prototype).
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
    headline: 'Innovation in Streaming: A New Way to Deliver the News',
    headlineMax: '22ch',
    video: '/assets/video/boltvideo-bloomberg.mp4',
    intro: [
      'Bloomberg, a global leader in business and financial information, utilises BoltOS technology to launch dedicated streaming channels with immersive features for each of its shows, covering over 14,000 minutes of daily streaming on Bolt+. This move further elevates the award-winning repertoire of content that Bloomberg is renowned for, significantly increasing viewer engagement and expanding audience reach.',
    ],
    needLead: 'Bloomberg is exploring innovative ways to enhance its news delivery and audience engagement on modern media platforms.',
    needs: NEEDS,
    whyBrandmark: '/assets/logos/bloomberg.png',
    why: [
      "Bloomberg partnered with BoltOS due to its ability to integrate live streaming with enhanced interactivity, allowing it to not just reach, but actively engage a global audience in real-time, for the first time. BoltOS's innovative approach to immersive streaming was perfectly aligned with Bloomberg's goal to transform how they wanted to elevate the Bloomberg viewing experience.",
    ],
    quote: '"The partnership with Bolt+ marks a significant milestone in our mission to bring high-quality, reliable news to viewers worldwide. Through the innovative features on Bolt+ and BoltChain, we\'re not just sharing content. We\'re directly engaging with our audience in a way that\'s both meaningful and rewarding. This partnership represents a leap forward in news dissemination and audience engagement."',
    quoteBy: 'Sophia Yuen, Head of Video and Audio at Bloomberg',
    solutionTheme: 'dark',
    solution: withImages([
      { img: '/assets/case/bloomberg-stand-out.png', alt: 'Bloomberg presenter on set' },
      { img: '/assets/case/bloomberg-billion.png', alt: 'The $13 Billion AI Bet on Bolt+' },
      { img: '/assets/case/bloomberg-studio.png', alt: 'BoltOS and Bloomberg teams in the Daybreak Europe studio' },
    ]),
    resultLead: "The collaboration with Bolt+ is revolutionising Bloomberg's approach to news delivery, and elevating the immersive viewing experience for more viewers globally.",
    resultNote: 'By offering dynamic, interactive, and personalised viewing options, Bloomberg is not only expanding its audience but also setting a new standard in news broadcasting, positioning itself at the forefront of media innovation.',
  },

  'dubai-hankook-24hr-race': {
    title: 'Dubai Hankook 24HR Race, BoltOS',
    brandmark: '/assets/logos/dubai-24h.png',
    eyebrow: 'Dubai Hankook 24HR Race',
    headline: 'Accelerating Race Day Engagement',
    headlineMax: '18ch',
    video: '/assets/video/boltvideo-dubai-24h.mp4',
    intro: [
      'In the competitive world of endurance racing, Sports Advantage, a new market leader in connecting sports teams with potential sponsors, has partnered with BoltOS to elevate the viewing experience of the Dubai Hankook 24H Race. Utilising innovative multistreaming services, this collaboration effectively showcased the FACH AUTO TECH motorsports racing team, offering unprecedented interactive access for fans worldwide.',
    ],
    needLead: 'Sports Advantage was looking to maximise brand exposure for FACH AUTO TECH in a cost-effective manner, overcoming the limited coverage typically available at the Dubai 24H Race through official coverage.',
    needs: NEEDS,
    whyBrandmark: '/assets/logos/dubai-24h.png',
    why: [
      "Sports Advantage chose BoltOS for its ability to offer multistreaming capabilities and immersive features, enabling FACH AUTO TECH to create a unique and engaging viewing experience that was not possible through traditional race coverage. Bolt+ provided the perfect platform to showcase its team's prowess and behind-the-scenes action, all without the high costs and limited features associated with traditional media broadcasting.",
    ],
    quote: '"The pilot race showcased interactive features, moderated feeds, behind-the-scenes content from FACH AUTO TECH, and car POV feeds incredibly well. This approach would be the highlight of the entire Hankook Endurance Season."',
    quoteBy: 'Erik Naeser, Head of Operations and Legal, Sports Advantage',
    solutionTheme: 'dark',
    solution: withImages([
      { img: '/assets/case/dubai-fach-car.webp', alt: 'FACH AUTO TECH Porsche at 24H Dubai' },
      { img: '/assets/case/dubai-grid.webp', alt: '24 Hours of Dubai 2024 grid' },
      { img: '/assets/case/dubai-crowd.webp', alt: 'Grandstand crowd at Hankook 24H Dubai' },
    ]),
    resultLead: 'This collaboration not only increased the team\'s visibility and fan engagement, but also demonstrated a scalable, cost-effective model for sports broadcasting that could significantly impact future sports marketing and sponsorship strategies.',
    resultNote: 'The innovative approach provided by Bolt+ positioned FACH AUTO TECH as a forward-thinking brand in motorsports, attracting new fans and potential sponsors.',
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
