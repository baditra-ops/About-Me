export const personalInfo = {
  name: "Baditra Choudhury",
  role: "Backend-focused Full Stack Developer",
  tagline: "I build real-world systems, explore what happens behind the interface, and turn ideas into working software.",
  academic: {
    college: "IIT BHU (Varanasi)",
    branch: "Chemical Engineering",
    year: "2nd Year",
    school: "Julien Day School, Kalyani, West Bengal",
    metrics: {
      tenth: "97%",
      twelfth: "93%"
    }
  },
  displayName: "Baditra",
  aboutNarrative: {
    primary: "I'm a developer who enjoys understanding what happens behind the interface — from APIs and databases to the systems that make applications work.",
    secondary: "I like building, breaking, learning, and then building it better.",
    quote: "Behind every interface is a system."
  },
  interests: [
    { name: "Cricket", tag: "SPORT", note: "Strategy & discipline on the pitch." },
    { name: "Football", tag: "SPORT // FAN", note: "Football is something I follow as much as I play — Manchester United supporter." },
    { name: "eFootball", tag: "TACTICAL GAMING", note: "Tactical team building & mobile competition." },
    { name: "Free Fire", tag: "MOBILE ESPORTS", note: "Quick reflexes, spatial awareness & squad communication." }
  ],
  developerFocus: [
    { id: "backend", label: "BACKEND", desc: "Server architecture, concurrency, and async runtimes" },
    { id: "apis", label: "APIs", desc: "RESTful endpoints & bidirectional WebSocket channels" },
    { id: "databases", label: "DATABASES", desc: "PostgreSQL relational schemas & MongoDB document models" },
    { id: "realtime", label: "REAL-TIME SYSTEMS", desc: "Low-latency message streaming & socket feeds" },
    { id: "sysdesign", label: "SYSTEM DESIGN", desc: "Scalability, decoupling, and high-availability patterns" },
    { id: "infra", label: "CLOUD / INFRASTRUCTURE", desc: "Redis caching layers, queues, and containerization" }
  ],
  techIdentity: [
    { label: "JAVA", layer: "CORE / DSA", category: "Language" },
    { label: "JAVASCRIPT", layer: "FULLSTACK", category: "Language" },
    { label: "NODE.JS", layer: "ASYNC ENGINE", category: "Runtime" },
    { label: "REDIS", layer: "IN-MEMORY / PUBSUB", category: "Caching" },
    { label: "WEBSOCKETS", layer: "REAL-TIME / DUPLEX", category: "Networking" }
  ],
  projects: [
    {
      id: "videotube",
      num: "01",
      title: "VideoTube",
      tagline: "Full-Stack Video Streaming & Media Pipeline",
      category: "FLAGSHIP APPLICATION",
      badge: "PROUDEST WORK",
      description: "A comprehensive video-sharing platform inspired by YouTube, engineered to explore large-scale user-generated content workflows, JWT-based authentication, Cloudinary media pipelines, subscriptions, playlists, and channel analytics.",
      backendFocus: ["MEDIA PIPELINE", "JWT AUTH", "AGGREGATION", "REST APIs"],
      techStack: ["Node.js", "Express.js", "MongoDB", "React", "Cloudinary", "Multer", "JWT"],
      diagramType: "media-pipeline",
      statsNote: "Real-world user workflows · Production deployed",
      links: {
        github: "https://github.com/baditra-ops/Backend",
        live: "https://videotube-s8y97kpnq-baditra7.vercel.app",
        api: "https://videotube-backend-1wpd.onrender.com"
      }
    },
    {
      id: "ticketing-system",
      num: "02",
      title: "Real-Time Ticketing System",
      tagline: "Distributed Event-Driven Concurrency System",
      category: "CONCURRENCY & NETWORKING",
      badge: "REAL-TIME / DUPLEX",
      description: "A high-concurrency ticket management platform utilizing WebSocket duplex event channels and Redis in-memory pub/sub to deliver instant state synchronizations and concurrent agent collaboration without race conditions.",
      backendFocus: ["WEBSOCKETS", "REDIS PUB/SUB", "CONCURRENCY", "DOCKER"],
      techStack: ["Node.js", "Express.js", "Redis", "Socket.io", "MongoDB", "Docker Compose"],
      diagramType: "event-broker",
      statsNote: "Sub-millisecond event broadcast · Dockerized setup",
      links: {
        github: "https://github.com/baditra-ops/Ticketing-System"
      }
    },
    {
      id: "smartinspect",
      num: "03",
      title: "SmartInspect",
      tagline: "Smart Real-Time Facility Monitoring Platform",
      category: "ENTERPRISE MONITORING",
      badge: "RELATIONAL & AI PIPELINE",
      description: "An intelligent inspection and compliance monitoring platform integrating a Prisma PostgreSQL relational pool, Redis event cache, automated report generation, and an asynchronous computer-vision risk scoring microservice.",
      backendFocus: ["ACID TRANSACTIONS", "PRISMA ORM", "EVENT CACHE", "VISION PIPELINE"],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "Socket.io", "Python/YOLO"],
      diagramType: "distributed-service",
      statsNote: "Multi-service architecture · ACID compliance",
      links: {
        github: "https://github.com/baditra-ops/SmartInspect"
      }
    }
  ],
  socials: {
    github: "https://github.com/baditra-ops",
    linkedin: "https://www.linkedin.com/in/baditra-choudhury-481333427/",
    leetcode: "https://leetcode.com/u/7Pqq86zdXo",
    codeforces: "https://codeforces.com/profile/Baditra_7"
  },
  navLinks: [
    { label: "HOME", href: "#home" },
    { label: "CAMPUS SCENE", href: "#experience" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "CONTACT", href: "#contact" }
  ]
};
