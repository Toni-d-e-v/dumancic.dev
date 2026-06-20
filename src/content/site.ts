export const contactEmail = "info@dumancic.dev";
export const calendarLink = "https://cal.com/tonidumancic";

export const person = {
  name: "Toni Dumančić",
  role: "Founder · dumancic.dev",
  avatar: "/toni.jpg",
  location: "Mostar",
};

export const social = {
  github: "https://github.com/toni-d-e-v",
  linkedin: "https://www.linkedin.com/in/toni-dumancic/",
  x: "https://x.com/toni__dev",
  email: `mailto:${contactEmail}`,
};

export const stats = [
  { num: "8", label: "Awards & hackathon wins" },
  { num: "10+", label: "Products shipped" },
  { num: "3+", label: "Years building" },
  { num: "2", label: "Startups founded" },
];

export type Service = {
  no: string;
  title: string;
  desc: string;
  stack: string[];
};

export const services: Service[] = [
  {
    no: "01",
    title: "Web3 & Blockchain",
    desc: "Smart contracts, DeFi protocols, NFT platforms and dApps built with Solidity, Rust and modern Web3 tooling.",
    stack: ["Solidity", "Rust", "Solana", "Ethereum"],
  },
  {
    no: "02",
    title: "Full-Stack Development",
    desc: "End-to-end web apps with React, Next.js, Node.js and TypeScript — built around clean UX and solid architecture.",
    stack: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    no: "03",
    title: "Cloud & DevOps",
    desc: "Scalable cloud setups, CI/CD pipelines, containerization and infrastructure automation on AWS, Azure and GCP.",
    stack: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
  },
  {
    no: "04",
    title: "Technical Consulting",
    desc: "Architecture reviews, tech-stack decisions, performance work and honest technical guidance.",
    stack: ["Architecture", "Audits", "Strategy"],
  },
];

export const industries = [
  "Startups",
  "Fintech",
  "Web3 / DeFi",
  "SaaS Platforms",
  "Hospitality",
  "Energy",
  "HealthTech",
  "E-commerce",
];

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Solidity",
  "Rust",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export const awards = [
  {
    place: "3rd place",
    title: "Superteam Balkan Startup Village",
    meta: "Demo Day · Split 2025",
  },
  {
    place: "Most Innovative",
    title: "British Council — AI Mostar",
    meta: "AI Mostar Conference",
  },
  {
    place: "Gold Medal",
    title: "ARCA Exhibition of Inventions",
    meta: "Zagreb · 2023 & 2024",
  },
];

/**
 * Orgs for the hero "Recognized at" tile. Drop a logo file at each `logo` path
 * (under /public) to show the logo; until then it falls back to the name chip.
 */
export const heroRecognition = [
  { name: "Superteam Balkan", logo: "/images/logos/superteam.svg", invert: true, size: "md" },
  { name: "Crypto.ba", logo: "/images/logos/cryptoba.png", invert: true, size: "base" },
  { name: "Colosseum", logo: "/images/logos/colosseum.svg", invert: false, size: "base" },
  { name: "British Council", logo: "/images/logos/british-council.svg", invert: false, size: "base" },
  { name: "ARCA", logo: "/images/logos/arca.svg", invert: true, size: "sm" },
  { name: "MoneyMotion", logo: "/images/logos/momo.gif", invert: false, size: "base" },
];
export const quotes = [
  {
    text: "Toni is one of the most promising young developers in the region. His work on blockchain and community projects through Crypto.ba speaks for itself.",
    name: "Nedžad Smajić",
    role: "Founder, Crypto.ba",
    initials: "NS",
    avatar: "/images/nedzad-smajic.jpg",
  },
  {
    text: "I was genuinely impressed by Toni and his team. As I said on stage — this is a young, capable group with the potential to build world-class solutions.",
    name: "Edin Mehić",
    role: "Entrepreneur & Investor",
    initials: "EM",
    avatar: "/images/edin.jpg",
  },
  {
    text: "I told Toni he might be the first unicorn founder from Bosnia. The clarity, vision and execution he showed on stage were world-class.",
    name: "Josip Volarević",
    role: "Superteam Balkan",
    initials: "JV",
    avatar: "/images/josipv.jpg",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, but most projects run 4–12 weeks from kickoff to launch. After our first call I’ll give you a clear timeline with milestones.",
  },
  {
    q: "How do you work with clients?",
    a: "I keep it simple: a short discovery call, a written scope and timeline, then steady progress with regular check-ins so you always know where things stand.",
  },
  {
    q: "What technologies do you work with?",
    a: "Mostly Next.js, React, Node.js and TypeScript on the web side, plus Solidity and Rust for blockchain. I pick the stack that fits the problem, not the other way around.",
  },
  {
    q: "Can you join an existing team?",
    a: "Yes — I’m comfortable dropping into an existing codebase and workflow, whether that’s a short contract, a specific feature, or ongoing support.",
  },
];

export const footerCols = [
  {
    title: "Studio",
    links: [
      { t: "Home", h: "/#top" },
      { t: "Services", h: "/#services" },
      { t: "Work", h: "/work" },
      { t: "About", h: "/about" },
      { t: "Blog", h: "/blog" },
    ],
  },
  {
    title: "Work",
    links: [
      { t: "TAPP", h: "/work/tapp" },
      { t: "LetsGo Fitness", h: "/work/letsgoapp" },
      { t: "SolarSurge", h: "/work/solarsurge" },
      { t: "AI Mostar", h: "/work/aimostar" },
    ],
  },
  {
    title: "Writing",
    links: [
      { t: "Blog", h: "/blog" },
      { t: "Latest posts", h: "/blog" },
    ],
  },
  {
    title: "Connect",
    links: [
      { t: "GitHub", h: social.github },
      { t: "LinkedIn", h: social.linkedin },
      { t: "X", h: social.x },
      { t: "Email", h: social.email },
    ],
  },
];

export const about = {
  intro:
    "I’m a Mostar-based Web3 and full-stack developer who likes building things that actually ship — scalable, secure, and genuinely useful. I work across blockchain, SaaS platforms, and cloud infrastructure, and I spend a good chunk of my time on open-source projects and the local tech community.",
  calendarLink: "https://cal.com/tonidumancic",
  languages: ["English", "Bosnian", "Croatian"],
  experiences: [
    {
      company: "Superteam Balkan",
      timeframe: "2025 – Present",
      role: "Member & Builder",
      achievements: [
        "Member of Superteam Balkan — the regional Solana community supporting builders, founders and contributors across the Balkans.",
        "Built RENTL and SolarSurge as submissions for Colosseum Solana hackathons — RENTL auctions ad space on any surface (settled in USDC), and SolarSurge turns surplus solar energy into crypto rewards via DePIN.",
        "SolarSurge earned 3rd place at the Superteam Balkan Solana Startup Village (Split 2025).",
        "Pitched RENTL at the Superteam Balkan Demo Day 2026 in Belgrade (30 teams, 100+ in the room, 2.3k watching live) and earned a Judge’s Honorable Mention.",
      ],
    },
    {
      company: "Dumancic.dev",
      timeframe: "2024 – Present",
      role: "Founder & Full-Stack Developer",
      achievements: [
        "Founded dumancic.dev as a hub for personal and collaborative projects in blockchain, AI, and web infrastructure.",
        "Created Cirql — an AI-powered networking app for conferences, enabling smart attendee matching, meeting scheduling, and live notifications.",
        "Built Tapp — a SaaS platform that digitizes menus and enables contactless ordering for cafes, restaurants, and hotels.",
        "Deliver open-source tools and SaaS prototypes that combine innovation with real-world use.",
      ],
    },
    {
      company: "Crypto.ba",
      timeframe: "2023 – Present",
      role: "Blockchain Developer & Community Contributor",
      achievements: [
        "Active contributor to Crypto.ba — Bosnia’s leading blockchain community fostering crypto adoption, education, and innovation.",
        "Worked on infrastructure and integrations across RuXCrypto (RXC) and its ecosystem platforms including RXCGames and Cex.ba.",
        "Supported RXC technical development during its listing on Whitebit, with trading pairs such as RXC/USDT, BTC, ETH, and BAM.",
        "Collaborated on expanding blockchain accessibility, transparency, and education across the region.",
      ],
    },
    {
      company: "CertHub",
      timeframe: "2024 – Present",
      role: "Founder & Technical Lead",
      achievements: [
        "Led development of CertHub — a SaaS platform built on ChainVerify for blockchain-based document verification.",
        "Designed backend architecture, APIs, and dashboards supporting scalable multi-chain workflows.",
        "Presented the public pilot at MoneyMotion 2025, demonstrating live verification.",
      ],
    },
    {
      company: "Marionette.dev",
      timeframe: "2025 – Present",
      role: "DevOps & Backend Engineer",
      achievements: [
        "Manage and scale Marionette’s cloud infrastructure, CI/CD pipelines, and containerized services.",
        "Implement automated deployment, monitoring, and alerting systems to ensure reliability.",
        "Collaborate with developers to optimize backend performance and streamline workflows.",
      ],
    },
  ],
  recognition: [
    "Superteam Balkan Demo Day — Judge’s Honorable Mention (Belgrade 2026)",
    "Superteam Balkan Startup Village — 3rd Place (Split 2025)",
    "MoneyMotion Conference — Top 20 Selected Projects (CertHub)",
    "British Council — Most Innovative Project (AI Mostar)",
    "ARCA International Exhibition of Inventions — Gold Medalist (2023 & 2024)",
    "I3G Innovation Fair — Gold Medal (Ivanić Grad 2024)",
    "SUM Hackathon — 2nd Place (2024 & 2025)",
  ],
  skills: [
    {
      title: "Next.js & React",
      description:
        "Fast, scalable, SEO-optimized web apps using Next.js, React, Tailwind CSS, and state management with Redux and Zustand.",
    },
    {
      title: "Blockchain (Solana & Ethereum)",
      description:
        "Smart contract development (Solidity, Rust), wallet integrations, dApp architecture, and interaction with blockchain APIs.",
    },
    {
      title: "Backend & API Development",
      description:
        "Node.js, Express, RESTful and GraphQL API design, database management (PostgreSQL, MongoDB), and scalable microservices.",
    },
    {
      title: "DevOps & Cloud Infrastructure",
      description:
        "CI/CD pipelines (GitHub Actions), containerization (Docker, Kubernetes), cloud platforms (AWS, DigitalOcean), monitoring and automation.",
    },
  ],
};

/** The single hero "Featured project" highlight. */
export const featuredProject = {
  slug: "tapp",
  label: "TAPP — product UI",
  shot: "/images/projects/tapp.png",
  blurb:
    "A SaaS platform that digitizes menus and powers contactless ordering for cafés, restaurants and hotels.",
  metrics: ["40%↑ orders", "Real-time"],
  tags: ["Next.js", "SaaS", "Hospitality"],
};

/** Slugs of the projects featured on the landing "Selected work" section, in order. */
export const featuredWorkSlugs = ["tapp", "letsgoapp", "solarsurge"];

/** Short labels for the featured-work image badges, keyed by slug. */
export const workShotLabels: Record<string, string> = {
  tapp: "TAPP — product UI",
  letsgoapp: "LetsGo — mobile app",
  solarsurge: "SolarSurge — DePIN",
};

/** Tag chips for featured-work cards, keyed by slug. */
export const workTags: Record<string, string[]> = {
  tapp: ["SaaS", "Next.js", "Hospitality"],
  letsgoapp: ["Mobile", "AI", "Fitness"],
  solarsurge: ["Web3", "DePIN", "Energy"],
};
