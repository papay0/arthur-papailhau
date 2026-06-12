// Portfolio Data Types
export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  type: "work" | "education";
}

export interface Project {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  cardType?: "intro" | "timeline" | "projects" | "skills" | "contact";
  sectionId?: string;
}

// Timeline Data
export const timelineData: TimelineEntry[] = [
  {
    id: "openai",
    role: "Member of Technical Staff",
    company: "OpenAI",
    location: "San Francisco, USA",
    period: "May 2026 – Present",
    description: "Working on Codex at OpenAI.",
    highlights: [
      "Building Codex",
      "Helping shape the future of AI-assisted software development",
    ],
    technologies: ["Codex", "AI Agents", "Developer Tools", "Software Engineering"],
    type: "work",
  },
  {
    id: "appily",
    role: "Co-Founder",
    company: "Appily",
    location: "San Francisco, USA",
    period: "Nov 2025 – Mar 2026",
    description: "Co-founded Appily, a vibe coding platform to build native mobile apps from prompts.",
    highlights: [
      "Built a prompt-to-App-Store platform for native mobile apps",
      "Developed AI agent workflows and scalable SaaS infrastructure",
    ],
    technologies: ["AI Agents", "Mobile", "SaaS", "Automation"],
    type: "work",
  },
  {
    id: "meta",
    role: "Senior Software Engineer · Tech Lead",
    company: "Meta AI",
    location: "San Francisco, USA",
    period: "Jun 2024 – Nov 2025",
    description: "Tech Lead on the Core Experience team - the central MetaAI team working on all AI experiences across Messenger, Instagram, Facebook, WhatsApp, and the Meta AI app.",
    highlights: [
      "Search integration and feedback loop",
      "Rich Responses workstream - Created native markdown parser",
      "Code Formatting (syntax highlighting) workstream",
      "Reasoning capabilities & AI Long Term Memory",
    ],
    technologies: ["React", "GraphQL", "AI/ML", "iOS", "Android"],
    type: "work",
  },
  {
    id: "uber",
    role: "iOS Senior Software Engineer · Tech Lead",
    company: "Uber",
    location: "San Francisco, USA",
    period: "2017 – 2024",
    duration: "6.5+ years",
    description: "iOS Tech Lead on UberEats Storefront Team, leading ~20 engineers. Built new iOS Storefront experience enabling multiple verticals.",
    highlights: [
      "Led ~20 engineers on UberEats Storefront Team",
      "UI designed (Figma), architected, and led implementation of orders experience",
      "Founding member of Uber Design System (iOS, Android, Web)",
      "Developed internal iOS SDK: Screenflow (Similar to React Native)",
      "Uber Hackathon Winner 2019 & 2021",
      "Created Uber Mentoring Program with Superposition (~100 mentors, ~100 mentees)",
    ],
    technologies: ["Swift", "Objective-C", "RxSwift", "Figma", "Design Systems"],
    type: "work",
  },
  {
    id: "sigfox",
    role: "Full Stack Software Engineer",
    company: "Sigfox",
    location: "Toulouse, France",
    period: "2017",
    description: "Full Stack development at IoT startup, building open source IoT Web libraries.",
    highlights: [
      "Built web applications with React.js, Redux, Node.js",
      "Worked with MongoDB and Redis",
      "Created open source IoT Web libraries",
    ],
    technologies: ["React.js", "Redux", "Node.js", "MongoDB", "Redis"],
    type: "work",
  },
  {
    id: "ibm",
    role: "Full Stack Software Engineer",
    company: "IBM Extreme Blue",
    location: "Dublin, Ireland",
    period: "2016",
    description: "Developed the Web Client and iOS application of IBM Watson Workspace collaboration tool.",
    highlights: [
      "Built Web Client for IBM Watson Workspace",
      "Developed iOS application",
      "Worked on collaboration tool features",
    ],
    technologies: ["iOS", "Swift", "Web", "Watson AI"],
    type: "work",
  },
  {
    id: "insa",
    role: "Masters in Computer Science",
    company: "INSA",
    location: "Toulouse, France",
    period: "2012 – 2017",
    description: "Engineering School - Masters in Computer Science",
    highlights: [],
    technologies: [],
    type: "education",
  },
  {
    id: "linkoping",
    role: "Bachelor in Computer Science",
    company: "Linköping University",
    location: "Linköping, Sweden",
    period: "2014 – 2015",
    description: "Exchange program - Bachelor in Computer Science",
    highlights: [],
    technologies: [],
    type: "education",
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    id: "ideate",
    name: "Ideate",
    url: "https://ideate.build",
    tagline: "Describe an app idea, get a working prototype in seconds",
    description: "Full-stack AI agent generating production-ready web apps with Stripe billing and containerized cloud execution.",
    technologies: ["AI Agent", "Next.js", "Stripe", "Docker"],
  },
  {
    id: "appily",
    name: "Appily",
    url: "https://appily.dev",
    tagline: "Prompt-to-App-Store platform, no coding required",
    description: "End-to-end system from prompt to deployed mobile app with scalable SaaS architecture and agent workflows.",
    technologies: ["AI Agent", "Mobile", "SaaS", "Automation"],
  },
  {
    id: "agentsos",
    name: "AgentsOS",
    url: "https://www.AgentsOS.app",
    tagline: "Your AI Coding Agent Operating System",
    description: "An operating system for managing and orchestrating AI coding agents.",
    technologies: ["AI Agents", "Developer Tools", "Automation"],
  },
];

// Skills Data
export const skillsData: SkillCategory[] = [
  {
    category: "Full-Stack",
    icon: "code",
    skills: ["Next.js", "React.js", "Redux", "Node.js", "MongoDB", "TypeScript", "HTML/CSS"],
  },
  {
    category: "iOS",
    icon: "smartphone",
    skills: ["Swift", "Objective-C", "Cocoa Touch", "RxSwift", "SnapKit", "Interface Builder"],
  },
  {
    category: "Languages",
    icon: "globe",
    skills: ["French (Native)", "English (Professional)", "Spanish (Beginner)", "Swedish (Beginner)"],
  },
];

// Social Links
export const socialLinksData: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:papailhau@gmail.com",
    icon: "mail",
    label: "papailhau@gmail.com",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/arthur-papailhau/",
    icon: "linkedin",
    label: "linkedin.com/in/arthur-papailhau",
  },
  {
    platform: "Twitter",
    url: "https://x.com/papay0",
    icon: "twitter",
    label: "@papay0",
  },
  {
    platform: "Resume",
    url: "/resume.pdf",
    icon: "file",
    label: "Download PDF Resume",
  },
];

// Chat Flow Data
export const chatFlowData: ChatMessage[] = [
  {
    id: "intro-q",
    type: "user",
    content: "Who is Arthur?",
    sectionId: "about",
  },
  {
    id: "intro-a",
    type: "ai",
    content: `**Arthur Papailhau** is a Member of Technical Staff at **OpenAI**, based in **San Francisco**.

He works on **Codex** and previously led AI infrastructure and product experiences at **Meta AI** and **Uber**. Here's a quick overview:`,
    cardType: "intro",
    sectionId: "about",
  },
  {
    id: "experience-q",
    type: "user",
    content: "What's his professional experience?",
    sectionId: "experience",
  },
  {
    id: "experience-a",
    type: "ai",
    content: `Arthur has an impressive track record spanning **8+ years** in tech, with leadership roles at some of the world's most innovative companies:

- **OpenAI** → Member of Technical Staff working on Codex
- **Meta AI** → Tech Lead on Core Experience team
- **Uber** → iOS Tech Lead, led ~20 engineers over 6.5 years

Click on each entry below to expand and see more details:`,
    cardType: "timeline",
    sectionId: "experience",
  },
  {
    id: "projects-q",
    type: "user",
    content: "Show me his projects",
    sectionId: "projects",
  },
  {
    id: "projects-a",
    type: "ai",
    content: `Arthur is currently focused on building **AI-powered products**. Here are his featured projects:

- **Ideate** → Describe an app idea, get a working prototype in seconds
- **Appily** → Prompt-to-App-Store platform, no coding required
- **AgentsOS** → Your AI Coding Agent Operating System

Click on each project to learn more:`,
    cardType: "projects",
    sectionId: "projects",
  },
  {
    id: "skills-q",
    type: "user",
    content: "What are his technical skills?",
    sectionId: "skills",
  },
  {
    id: "skills-a",
    type: "ai",
    content: `Arthur is a **versatile full-stack engineer** with expertise across multiple domains:

- **Full-Stack** → Next.js, React, Node.js, TypeScript
- **iOS** → Swift, Objective-C, 6.5+ years at Uber
- **AI/ML** → Building AI agents and LLM-powered products
- **Languages** → French (native), English (professional)`,
    cardType: "skills",
    sectionId: "skills",
  },
  {
    id: "contact-q",
    type: "user",
    content: "How can I contact him?",
    sectionId: "contact",
  },
  {
    id: "contact-a",
    type: "ai",
    content: `Arthur is always **open to interesting conversations** and new opportunities!

Whether you want to discuss:
- **AI product development**
- **Startup opportunities**
- **Technical leadership roles**
- **Collaboration on projects**

Feel free to reach out through any of these channels:`,
    cardType: "contact",
    sectionId: "contact",
  },
];

// Playful Responses when user tries to type
export const playfulResponses: string[] = [
  "Looks like you want to chat! Reach me at **[papailhau@gmail.com](mailto:papailhau@gmail.com)**",
  "I'd love to hear from you! Connect with me on **[LinkedIn](https://www.linkedin.com/in/arthur-papailhau/)**",
  "Curious about something? Let's talk - **[papailhau@gmail.com](mailto:papailhau@gmail.com)**",
  "Want to discuss opportunities? Find me on **[Twitter @papay0](https://x.com/papay0)**",
  "Thanks for your interest! Email me at **[papailhau@gmail.com](mailto:papailhau@gmail.com)**",
  "Great question! Let's connect on **[LinkedIn](https://www.linkedin.com/in/arthur-papailhau/)** to discuss further",
  "I appreciate your curiosity! Check out my **[Resume](/resume.pdf)** or reach out via **[email](mailto:papailhau@gmail.com)**",
];

// Intro welcome message
export const welcomeMessage = `Welcome to **ArthurGPT**!

Scroll down to discover his journey, or use the sidebar to navigate directly to what interests you.`;
