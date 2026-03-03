export const siteConfig = {
  name: "Jeremiah Egemonye",
  nameFirst: "Jeremiah",
  nameLast: "Egemonye",
  role: "Software Engineer",
  location: "Lagos, Nigeria",
  experience: "3+ Years",
  primaryStack: "React & Node.js",
  status: "Available for work",
  email: "jeremiah@egemonye.com",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  eyebrow: "Software Engineer & Builder",
  bio: `I design and build software that feels considered. Currently focused on
full-stack web and mobile applications, previously at
<a href="#experience" class="accent-link">Adashi</a>. I care about
typography, clear interfaces, and shipping things that work.`,
  ctaPrimary: { label: "Get in touch", href: "#contact" },
  ctaSecondary: { label: "View work", href: "#work" },
  meta: [
    { label: "Location", value: "Lagos, NG" },
    { label: "Experience", value: "3+ Years" },
    { label: "Stack", value: "React · Node" },
    { label: "Status", value: "Available" },
  ],
};

export const about = {
  pullQuote:
    "I believe the best software disappears — it becomes the thing you're trying to do, not the thing standing between you and what you want.",
  body: `I'm a software engineer with a background in building products across web and mobile platforms. I've worked end-to-end — from database schema to pixel-level UI — and I bring the same attention to detail whether I'm writing an API or choosing a typeface. My work sits at the intersection of engineering rigor and design sensibility. I'm drawn to teams that ship thoughtfully and care about craft.`,
};

export const stack = {
  columns: [
    {
      label: "Frontend",
      tags: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
        "Framer Motion",
      ],
    },
    {
      label: "Backend",
      tags: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
        "Firebase",
      ],
    },
    {
      label: "Tools & Workflow",
      tags: [
        "Git",
        "Figma",
        "VS Code",
        "Docker",
        "Vercel",
        "GitHub Actions",
        "Jest",
      ],
    },
  ],
};

export const projects = [
  {
    title: "Adashi Savings Platform",
    description:
      "A mobile-first savings and contribution platform helping users manage group savings, track contributions, and automate payouts with a clean, accessible interface.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Portfolio v3",
    description:
      "This portfolio — a single-page editorial site built with Next.js and Tailwind, focused on restraint, typography, and performance. No frameworks for motion, just intersection observers.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "#",
  },
  {
    title: "Logistics Dashboard",
    description:
      "An internal operations dashboard for a logistics startup, featuring real-time tracking views, route optimization summaries, and driver management panels.",
    tags: ["React", "Express", "MongoDB"],
    href: "#",
  },
  {
    title: "Church Community App",
    description:
      "A mobile application for a church community featuring event calendars, sermon archives, giving integration, and push notification-based announcements.",
    tags: ["React Native", "Firebase", "Expo"],
    href: "#",
  },
];

export const experience = [
  {
    company: "Adashi",
    dates: "2023 — Present",
    role: "Software Engineer",
    description:
      "Building and maintaining the core savings platform, implementing new features across the mobile app and backend services. Led the migration to a new design system and improved transaction processing reliability.",
  },
  {
    company: "Freelance",
    dates: "2021 — 2023",
    role: "Full-Stack Developer",
    description:
      "Delivered end-to-end web and mobile projects for startups and small businesses. Focused on clean codebases, clear documentation, and long-term maintainability over quick wins.",
  },
  {
    company: "Self-directed",
    dates: "2020 — 2021",
    role: "Learning & Building",
    description:
      "Intensive period of self-taught engineering — working through computer science fundamentals, building dozens of projects, and contributing to open source to solidify practical skills.",
  },
];

export const stats = [
  { value: "15+", label: "Projects shipped" },
  { value: "3+", label: "Years building" },
  { value: "50k", label: "Lines of code" },
  { value: "100%", label: "Remote work" },
];

export const social = [
  { platform: "GitHub", handle: "@jeremiah-eg", href: "https://github.com" },
  {
    platform: "LinkedIn",
    handle: "/in/jeremiah-eg",
    href: "https://linkedin.com",
  },
  { platform: "Twitter", handle: "@jeremiah_eg", href: "https://twitter.com" },
  {
    platform: "Email",
    handle: "jeremiah@egemonye.com",
    href: "mailto:jeremiah@egemonye.com",
  },
];
