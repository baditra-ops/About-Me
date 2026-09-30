export const skillCategories = [
  { id: 'all', label: 'COMPLETE TOPOLOGY', count: 14 },
  { id: 'backend', label: 'BACKEND & RUNTIMES', count: 4 },
  { id: 'systems', label: 'SYSTEMS & REAL-TIME', count: 3 },
  { id: 'database', label: 'DATABASES & ORM', count: 3 },
  { id: 'frontend', label: 'CLIENT & INTERFACES', count: 2 },
  { id: 'tools', label: 'INFRA & TOOLING', count: 2 }
];

export const technicalArsenal = [
  // BACKEND & RUNTIMES
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    layer: 'RUNTIME / ASYNC ENGINE',
    code: 'SRV_NODE',
    role: 'Asynchronous event-loop execution runtime for server-side services.',
    usageContext: 'Engineered VideoTube backend API and SmartInspect event ingestion pipeline.',
    concepts: ['Non-blocking I/O', 'Event Loop', 'Stream Processing', 'Modular Architecture'],
    connections: ['express', 'socketio', 'mongodb', 'redis'],
    prominence: 'primary'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    layer: 'GATEWAY / ROUTING',
    code: 'RT_EXPR',
    role: 'Minimalist web framework for modular middleware routing and HTTP dispatch.',
    usageContext: 'Constructed RESTful controllers, error boundaries, and token-based route guards.',
    concepts: ['Custom Middleware', 'Route Guards', 'CORS Security', 'JSON Pipelines'],
    connections: ['nodejs', 'auth', 'postgres', 'mongodb'],
    prominence: 'primary'
  },
  {
    id: 'auth',
    name: 'JWT & Security',
    category: 'backend',
    layer: 'AUTH / SECURITY',
    code: 'SEC_AUTH',
    role: 'Stateless authentication and authorization using cryptographically signed tokens.',
    usageContext: 'Implemented HTTP-only secure cookie sessions, access/refresh tokens in VideoTube.',
    concepts: ['Access & Refresh Tokens', 'bcrypt Hashing', 'HTTP-Only Cookies', 'RBAC'],
    connections: ['express', 'nodejs'],
    prominence: 'standard'
  },
  {
    id: 'java',
    name: 'Java (Core / DSA)',
    category: 'backend',
    layer: 'CORE / ALGORITHMS',
    code: 'LANG_JAVA',
    role: 'Strong object-oriented fundamentals, concurrency paradigms, and data structures.',
    usageContext: 'Competitive problem-solving, tree/graph algorithms, and memory-conscious logic.',
    concepts: ['OOP Principles', 'Memory Model', 'Generics & Collections', 'Algorithmic Complexity'],
    connections: ['nodejs'],
    prominence: 'standard'
  },

  // SYSTEMS & REAL-TIME
  {
    id: 'socketio',
    name: 'WebSockets / Socket.io',
    category: 'systems',
    layer: 'REAL-TIME / DUPLEX',
    code: 'NET_SOCK',
    role: 'Full-duplex bidirectional communication channels for instant server-client push.',
    usageContext: 'Synchronized real-time ticket collisions and streamed SmartInspect CCTV hazard alerts.',
    concepts: ['Duplex Handshake', 'Room Subscriptions', 'Event Reconnection', 'Low-Latency Push'],
    connections: ['nodejs', 'redis', 'react'],
    prominence: 'primary'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'systems',
    layer: 'IN-MEMORY / PUBSUB',
    code: 'MEM_REDIS',
    role: 'Ultra-low latency in-memory data store, cache layer, and pub/sub message broker.',
    usageContext: 'Decoupled ticket collision locks in Ticketing System and cached inspection state.',
    concepts: ['Pub/Sub Channels', 'Key Eviction / TTL', 'Atomic Increments', 'Distributed Locks'],
    connections: ['socketio', 'nodejs', 'postgres'],
    prominence: 'primary'
  },
  {
    id: 'concurrency',
    name: 'Concurrency & Locking',
    category: 'systems',
    layer: 'CONCURRENCY PATTERNS',
    code: 'SYS_SYNC',
    role: 'Mechanisms to handle simultaneous operations without race conditions or deadlocks.',
    usageContext: 'Prevented duplicate ticket assignments when multiple agents claim simultaneously.',
    concepts: ['Mutex / Atomic Operations', 'Race Prevention', 'State Synchronization', 'Idempotency'],
    connections: ['redis', 'socketio'],
    prominence: 'standard'
  },

  // DATABASES & ORM
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'database',
    layer: 'RELATIONAL / ACID',
    code: 'DB_PGSQL',
    role: 'Advanced open-source relational database supporting ACID transactions and structured schemas.',
    usageContext: 'Designed normalized schemas and relational inspection records in SmartInspect.',
    concepts: ['ACID Compliance', 'Relational Schemas', 'Foreign Key Constraints', 'Connection Pooling'],
    connections: ['prisma', 'nodejs'],
    prominence: 'primary'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    layer: 'DOCUMENT / AGGREGATION',
    code: 'DB_MONGO',
    role: 'Document-oriented NoSQL database optimized for high-volume unstructured nested payloads.',
    usageContext: 'Implemented multi-stage aggregation pipelines for user subscriptions, watch histories, and channels.',
    concepts: ['Aggregation Framework', 'Index Optimization', 'BSON Embeddings', 'Document Validation'],
    connections: ['nodejs', 'express'],
    prominence: 'primary'
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    category: 'database',
    layer: 'ORM / SCHEMA MIGRATIONS',
    code: 'ORM_PRISMA',
    role: 'Next-generation type-safe database toolkit and query builder for Node.js.',
    usageContext: 'Managed database migrations and declarative relation querying in SmartInspect.',
    concepts: ['Type Safety', 'Declarative Schemas', 'Automated Migrations', 'Nested Writes'],
    connections: ['postgres', 'nodejs'],
    prominence: 'standard'
  },

  // CLIENT & INTERFACES
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    layer: 'COMPONENT ARCHITECTURE',
    code: 'UI_REACT',
    role: 'Declarative component-driven user interface architecture with reactive state reconciliation.',
    usageContext: 'Built responsive client interfaces for VideoTube and this interactive engineering showcase.',
    concepts: ['Custom Hooks', 'Virtual DOM Diffing', 'State Reconciliation', 'Accessible Markup'],
    connections: ['javascript', 'socketio'],
    prominence: 'primary'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    layer: 'CORE FULLSTACK',
    code: 'LANG_JS',
    role: 'Versatile modern language spanning browser interactions, async promises, and Node runtimes.',
    usageContext: 'Authored end-to-end fullstack logic, async streams, and mathematical CSS animations.',
    concepts: ['Async/Await & Promises', 'Closures & Scope', 'Prototypes', 'ES Modules'],
    connections: ['react', 'nodejs'],
    prominence: 'standard'
  },

  // INFRA & TOOLING
  {
    id: 'docker',
    name: 'Docker Compose',
    category: 'tools',
    layer: 'CONTAINERIZATION',
    code: 'INFRA_DKR',
    role: 'Reproducible multi-container runtime environments isolating microservices and dependencies.',
    usageContext: 'Containerized Redis and MongoDB multi-service local testing environments.',
    concepts: ['Container Isolation', 'Volume Mounting', 'Network Bridges', 'Environment Parity'],
    connections: ['redis', 'nodejs'],
    prominence: 'standard'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'tools',
    layer: 'VERSION CONTROL',
    code: 'VCS_GIT',
    role: 'Distributed version control, branch management, and collaborative development workflow.',
    usageContext: 'Maintained atomic git histories and deployment webhooks for all open-source projects.',
    concepts: ['Atomic Commits', 'Branch Management', 'Remote Rebasing', 'CI Webhooks'],
    connections: ['nodejs', 'docker'],
    prominence: 'standard'
  }
];

export const systemPipelineLayers = [
  {
    id: 'layer-client',
    label: '01. CLIENT & INGESTION',
    desc: 'Browsers, Mobile Clients & Video Sensors',
    subtext: 'React UI · HTTP/WS Requests · CCTV Streams',
    color: '#38bdf8'
  },
  {
    id: 'layer-gateway',
    label: '02. API GATEWAY & AUTH',
    desc: 'Routing, Validation & Token Guards',
    subtext: 'Express Router · JWT Cookies · Multer Buffers',
    color: '#38bdf8'
  },
  {
    id: 'layer-runtime',
    label: '03. ASYNC SERVICE ENGINE',
    desc: 'Node.js Event-Loop & Python Microservice',
    subtext: 'Core Business Logic · Hazard Inference · Event Dispatch',
    color: '#10b981'
  },
  {
    id: 'layer-realtime',
    label: '04. REAL-TIME EVENT BROKER',
    desc: 'Low-Latency Pub/Sub & Duplex Channels',
    subtext: 'Socket.io Mesh · Redis In-Memory · Distributed Locks',
    color: '#10b981'
  },
  {
    id: 'layer-persistence',
    label: '05. RELATIONAL & DOCUMENT STORAGE',
    desc: 'ACID Compliance & Multi-Stage Aggregations',
    subtext: 'PostgreSQL · Prisma ORM · MongoDB Aggregation Pipelines',
    color: '#f59e0b'
  }
];
