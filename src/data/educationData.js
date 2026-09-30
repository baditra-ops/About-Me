export const educationMilestones = [
  {
    id: 'school',
    stage: '01',
    phase: 'ORIGIN // FOUNDATION',
    institution: 'Julien Day School',
    location: 'Kalyani, West Bengal',
    period: 'Foundational Years',
    degree: 'ICSE (Class X) & ISC (Class XII)',
    status: 'FOUNDATION SECURED',
    isActive: false,
    coordinates: '22.9751° N, 88.4345° E',
    metrics: [
      { label: 'CLASS X (ICSE)', value: '97%' },
      { label: 'CLASS XII (ISC)', value: '93%' }
    ],
    narrative: 'Formative schooling centered on mathematical rigor, analytical sciences, and foundational problem-solving. This early focus cultivated the discipline and curiosity that paved the path to engineering.',
    keyTakeaways: [
      'Strong mathematical and scientific foundations',
      'Analytical reasoning and disciplined study habits',
      'Consistent academic excellence across board examinations'
    ]
  },
  {
    id: 'college',
    stage: '02',
    phase: 'ACADEMIC CORE // CAMPUS ENVIRONMENT',
    institution: 'Indian Institute of Technology (BHU), Varanasi',
    location: 'Varanasi, Uttar Pradesh',
    period: '2nd Year (Class of 2027)',
    degree: 'B.Tech in Chemical Engineering',
    status: 'ACTIVE UNDERGRADUATE',
    isActive: true,
    coordinates: '25.2677° N, 82.9913° E',
    metrics: [
      { label: 'INSTITUTION', value: 'IIT BHU' },
      { label: 'STANDING', value: '2nd Year' },
      { label: 'DISCIPLINE', value: 'Chemical Engg' }
    ],
    narrative: 'Studying within the historic and rigorous environment of IIT BHU. While coursework develops systemic modeling, thermodynamics, and balance principles, the campus culture ignited a deep drive for computing, algorithms, and engineering systems.',
    keyTakeaways: [
      'Engineering discipline, balance equations & analytical modeling',
      'Immersion in the vibrant IIT BHU technical culture',
      'Collaboration, technical team selection, and software building'
    ],
    bhuCallback: {
      beacon: 'CLOCK TOWER SECTOR',
      grid: 'CAMPUS ORTHO [VNS-BHU-27]',
      focus: 'Rigorous engineering mindset applied to computational systems'
    }
  },
  {
    id: 'self-driven',
    stage: '03',
    phase: 'EXPANSION // SYSTEMS & BEYOND',
    institution: 'Self-Directed Systems Engineering',
    location: 'Open Source / Distributed Labs',
    period: 'Continuous Execution',
    degree: 'Full-Stack Architecture & Systems Design',
    status: 'CONTINUOUS ACCELERATION',
    isActive: false,
    coordinates: 'REMOTE // LOCALHOST:5173',
    metrics: [
      { label: 'ORIENTATION', value: 'Backend / Systems' },
      { label: 'PARADIGM', value: 'Concurrency & APIs' },
      { label: 'DISPATCH', value: 'Working Software' }
    ],
    narrative: 'Complementing formal chemical engineering coursework with intensive self-guided software engineering. Driven by the philosophy that true understanding comes from designing systems from scratch, inspecting logs, and diagnosing bottlenecks.',
    keyTakeaways: [
      'Engineered production applications (VideoTube, Ticketing System, SmartInspect)',
      'Mastered event-driven pub/sub, in-memory caching, and WebSocket streams',
      'Active algorithmic problem-solving in Java on LeetCode & Codeforces'
    ]
  }
];

export const continuousLearningTracks = [
  {
    id: 'distributed-concurrency',
    title: 'Distributed Concurrency & Locking',
    desc: 'Deepening understanding of race condition mitigation, distributed mutexes, and Redis atomic primitives for zero-collision state sync.',
    tag: 'SYSTEMS'
  },
  {
    id: 'database-optimization',
    title: 'Database Indexing & Query Plans',
    desc: 'Analyzing B-Tree query execution plans, PostgreSQL transaction isolation levels, and multi-stage MongoDB aggregation pipelines.',
    tag: 'STORAGE'
  },
  {
    id: 'realtime-networking',
    title: 'Low-Latency Real-Time Architecture',
    desc: 'Exploring WebSocket clustering, connection keep-alives, and bidirectional duplex channels under concurrent user loads.',
    tag: 'NETWORKING'
  },
  {
    id: 'system-resilience',
    title: 'Service Decoupling & Microservices',
    desc: 'Structuring modular service boundaries, containerized Docker environments, and asynchronous message queues.',
    tag: 'ARCHITECTURE'
  }
];
