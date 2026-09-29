export const personalInfo = {
  name: "Harshad Kavade",
  headline: "Computer Engineer & Full-Stack Developer",
  subheadline: "I build scalable full-stack applications and AI-powered products using modern web technologies.",
  availability: "Open to Software Engineering Opportunities",
  bio: "I'm a Computer Engineering student at SCTR's Pune Institute of Computer Technology, passionate about building full-stack applications, solving complex problems, and exploring Generative AI.",
  extendedBio: "I specialize in architecting responsive frontends with React and Tailwind CSS, building resilient backends using Node.js and Express, and engineering intelligent systems using LangChain and LLMs. With 500+ DSA problems solved and a strong academic foundation (9.28 CGPA), I combine theoretical rigor with practical product engineering.",
  email: "harshukavade08@gmail.com",
  emailSecondary: "harshukavade07@gmail.com",
  location: "Pune, Maharashtra, India",
  college: "SCTR's Pune Institute of Computer Technology (PICT)",
  degree: "Bachelor of Engineering in Computer Technology",
  resumeUrl: "/Harshad_Kavade_Resume.pdf",
  socials: {
    github: "https://github.com/HarshadKavade",
    linkedin: "https://www.linkedin.com/in/harshad-kavade-7a1941294/",
    leetcode: "https://leetcode.com/u/harshad_kavade/",
    codechef: "https://www.codechef.com/users/leap_foxes_57",
  }
};

export const heroTerminalData = {
  fileName: "developer.ts",
  developerObject: {
    name: "Harshad Kavade",
    role: "Full-Stack Developer",
    college: "SCTR's PICT Pune",
    cgpa: 9.28,
    stack: ["React", "Node.js", "MongoDB", "Python", "LangChain", "Socket.IO"],
    interests: ["MERN Stack", "Data Structures & Algorithms", "Generative AI"],
    status: "Seeking SWE Internships & Full-Time Roles",
    solveProblem: "() => console.log('Building impactful real-world software!')"
  }
};

export const statistics = [
  {
    id: "cgpa",
    value: 9.28,
    precision: 2,
    prefix: "",
    suffix: " / 10",
    label: "CGPA",
    sublabel: "SCTR's PICT Pune",
    highlight: "Top Academic Tier"
  },
  {
    id: "leetcode-problems",
    value: 500,
    precision: 0,
    prefix: "",
    suffix: "+",
    label: "LeetCode Solved",
    sublabel: "DSA & System Logic",
    highlight: "Consistent Problem Solver"
  },
  {
    id: "leetcode-rating",
    value: 1734,
    precision: 0,
    prefix: "",
    suffix: "",
    label: "LeetCode Rating",
    sublabel: "Max Contest Rating",
    highlight: "Competitive Track Record"
  },
  {
    id: "codechef",
    value: 2,
    precision: 0,
    prefix: "",
    suffix: "-Star",
    label: "CodeChef Rating",
    sublabel: "150+ Problems Solved",
    highlight: "Contest Competitor"
  },
  {
    id: "mhtcet",
    value: 99.68,
    precision: 2,
    prefix: "",
    suffix: "%ile",
    label: "MHT-CET Percentile",
    sublabel: "State Engineering Entrance",
    highlight: "Top 0.32% in State"
  }
];

export const skillCategories = [
  {
    name: "Languages",
    id: "languages",
    skills: [
      { name: "C++", level: "Proficient", icon: "Code", highlight: "STL, DSA, Competitions" },
      { name: "Java", level: "Proficient", icon: "Coffee", highlight: "OOP, Concurrency" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", highlight: "Async/Await, DOM, Tooling" },
      { name: "Python", level: "Proficient", icon: "Terminal", highlight: "LangChain, RAG, Scripting" },
      { name: "SQL", level: "Proficient", icon: "Database", highlight: "Complex Queries, Joins, Indexing" },
    ]
  },
  {
    name: "Frontend",
    id: "frontend",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Layers", highlight: "Hooks, Context, Performance" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette", highlight: "Responsive, Modern UI/UX" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", highlight: "Semantic Web, Accessibility" },
      { name: "Responsive UI", level: "Advanced", icon: "Smartphone", highlight: "Mobile-First Design" },
      { name: "Framer Motion", level: "Intermediate", icon: "Sparkles", highlight: "Micro-interactions" },
    ]
  },
  {
    name: "Backend",
    id: "backend",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server", highlight: "Event Loop, Streams, Modular Arch" },
      { name: "Express.js", level: "Advanced", icon: "Cpu", highlight: "Middleware, Routing, Controllers" },
      { name: "REST APIs", level: "Advanced", icon: "Network", highlight: "RESTful Standards, CRUD" },
      { name: "API Optimization", level: "Proficient", icon: "Zap", highlight: "Pagination, Error Handling" },
    ]
  },
  {
    name: "Databases",
    id: "databases",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database", highlight: "Mongoose, Aggregations, Schema" },
      { name: "MySQL", level: "Proficient", icon: "Table", highlight: "Relational Modeling, Normalization" },
    ]
  },
  {
    name: "Authentication & Real-Time",
    id: "auth-realtime",
    skills: [
      { name: "Socket.IO", level: "Advanced", icon: "Radio", highlight: "Live Rooms, WebSockets, Telemetry" },
      { name: "JWT", level: "Advanced", icon: "KeyRound", highlight: "Stateless Tokens, Auth Guards" },
      { name: "bcrypt", level: "Proficient", icon: "ShieldCheck", highlight: "Salting & Password Hashing" },
      { name: "RBAC", level: "Proficient", icon: "Lock", highlight: "Role-Based Access Control" },
    ]
  },
  {
    name: "Generative AI",
    id: "generative-ai",
    skills: [
      { name: "LLMs", level: "Proficient", icon: "Brain", highlight: "Mistral, GPT, Prompting" },
      { name: "RAG Architecture", level: "Proficient", icon: "Search", highlight: "Semantic Retrieval & Context" },
      { name: "LangChain", level: "Proficient", icon: "GitFork", highlight: "Agents, Chains & Tool Invocations" },
      { name: "Prompt Engineering", level: "Advanced", icon: "MessageSquareCode", highlight: "Zero/Few-Shot, Structured Output" },
      { name: "Mistral AI", level: "Proficient", icon: "Bot", highlight: "Conversational Embeddings & Inference" },
    ]
  },
  {
    name: "Tools & Platforms",
    id: "tools",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch", highlight: "Branching, PRs, Versioning" },
      { name: "GitHub", level: "Advanced", icon: "Github", highlight: "CI/CD, Workflows, Collaboration" },
      { name: "Postman", level: "Advanced", icon: "Send", highlight: "API Testing, Collections, Mocking" },
      { name: "VS Code", level: "Advanced", icon: "Code", highlight: "Extensions, Debugging" },
      { name: "Vercel & Render", level: "Proficient", icon: "Cloud", highlight: "Automated Deployments" },
      { name: "Cloudinary", level: "Proficient", icon: "Image", highlight: "Media CDN & Asset Pipelines" },
    ]
  }
];

export const projects = [
  {
    id: "sahyatri",
    title: "Sahyatri – Women's Safety Application",
    tagline: "Safety-Aware Routing, Real-Time Telemetry & Offline-First Emergency Response",
    badge: "Flagship Real-World Engineering",
    type: "Full-Stack Web & Geospatial Engineering",
    description: "Full-stack women's safety application focused on safer travel, emergency communication and real-time location tracking.",
    detailedOverview: "Sahyatri is an in-depth women's safety ecosystem engineered to tackle urban mobility risks. Unlike conventional navigation services that optimize purely for travel time, Sahyatri computes weighted safety indices across route options by analyzing street illumination, crime density heuristics, and commercial point-of-interest density. In critical situations, users can trigger an SOS mechanism that broadcasts live telemetry to designated guardians and dispatches emergency WhatsApp links. Crucially, Sahyatri features an offline-first resilient architecture that caches alerts locally when network connectivity drops and dispatches them automatically as soon as service is restored.",
    tech: ["MERN Stack", "Socket.IO", "OpenRouteService", "Geoapify", "OpenStreetMap", "Leaflet", "WhatsApp API", "JWT"],
    keyFeatures: [
      "Secure JWT authentication with role-aware guardian and traveler profiles",
      "Trip planning with real-time location tracking and destination arrival checks",
      "Guardian management system allowing real-time multi-contact pairing",
      "Safety-aware routing engine combining OpenRouteService, Geoapify, and OSM APIs",
      "Real-time SOS emergency system dispatching live coordinate updates via Socket.IO",
      "Automated WhatsApp emergency alerts containing live location tracking links",
      "Engineered offline-first SOS mechanism queuing alerts locally during network outages and synching upon reconnect"
    ],
    architecture: {
      frontend: "React.js with Leaflet.js interactive maps and responsive Tailwind CSS UI",
      backend: "Node.js & Express RESTful API with Socket.IO bidirectional channels",
      geospatial: "Multi-API ingestion (OpenRouteService for pathways, Geoapify & OSM for POI and safety heuristics)",
      offlineResilience: "IndexedDB / Local storage alert buffering with reconnection event listeners"
    },
    metrics: [
      { label: "Routing Engine", value: "3 Map APIs Integrated" },
      { label: "Emergency Response", value: "Sub-second Socket.IO alerts" },
      { label: "Resilience", value: "100% Offline-Safe SOS Queue" }
    ],
    githubUrl: "https://github.com/HarshadKavade/SafeJourney",
    liveUrl: "https://sahyatri-self.vercel.app/",
    gradient: "from-rose-500/20 via-purple-500/20 to-indigo-500/20",
    borderAccent: "group-hover:border-rose-500/50",
    iconName: "ShieldAlert"
  },
  {
    id: "devcollab",
    title: "DevCollab – Developer Collaboration Platform",
    tagline: "Collaborative Workspace for Team Formation, Task Pipelines & Real-Time Chat",
    badge: "Full-Stack Collaboration System",
    type: "MERN Stack Real-Time Application",
    description: "Full-stack developer collaboration platform enabling developers to discover projects, form teams, manage tasks and collaborate in real time.",
    detailedOverview: "DevCollab bridges the gap between independent developers and high-impact software projects. Developers can post project openings with specific tech stack requirements, discover compatible teammates, submit join requests, and manage workspace membership via granular Role-Based Access Control. Once on a team, members utilize a Kanban-style task tracking board with assignments, priority flags, deadlines, and live status updates. The platform integrates Socket.IO to power instant project chatrooms and instant notifications, eliminating context-switching between external chat tools and project management software.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT", "bcrypt"],
    keyFeatures: [
      "Robust authentication with secure JWT tokens, bcrypt password hashing, and session management",
      "Role-based access control (RBAC) separating project owners, administrators, and contributors",
      "Project discovery catalog with tech-stack search, project creation, and team invitations",
      "Comprehensive task management board with member assignments, deadlines, and status tracking",
      "Real-time bidirectional team chat with dedicated Socket.IO room management",
      "Instant push notifications for comments, task assignments, and workspace updates",
      "Responsive, clean UI engineered with React and Tailwind CSS for cross-device fluidity"
    ],
    architecture: {
      frontend: "React with modular component tree, optimistic UI updates, and Tailwind CSS",
      backend: "Node.js & Express RESTful API with MVC pattern and MongoDB aggregations",
      realtime: "Socket.IO server with room-based pub/sub architecture for project channels",
      security: "Stateless JWT authorization headers, input sanitization, and bcrypt hashing"
    },
    metrics: [
      { label: "Authentication", value: "JWT + bcrypt RBAC" },
      { label: "Real-Time Channel", value: "Socket.IO Multi-room Chat" },
      { label: "Database", value: "MongoDB Normalized Schemas" }
    ],
    githubUrl: "https://github.com/vrushabhdarekar22/DevCollab-backend.git",
    liveUrl: "https://dev-collab-frontend-79h6.vercel.app/",
    gradient: "from-blue-500/20 via-indigo-500/20 to-cyan-500/20",
    borderAccent: "group-hover:border-blue-500/50",
    iconName: "Users"
  },
  {
    id: "ai-video-assistant",
    title: "AI Video Assistant",
    tagline: "Conversational RAG & Multi-Tool Agentic Video Intelligence",
    badge: "Generative AI & Agentic Workflow",
    type: "GenAI & Agent Workflow",
    description: "AI-powered video assistant that processes video content and allows users to interact with video information conversationally.",
    detailedOverview: "AI Video Assistant enables users to interact naturally with long-form video content without watching hours of footage. By orchestrating a LangChain agent pipeline, the system parses video transcripts into semantic vectors, runs contextual Retrieval-Augmented Generation (RAG) using Mistral AI, and bridges video content with the live internet through Tavily search tools. Whether inquiring about timestamps, key concepts, or real-time external validations of statements made in the video, the assistant provides accurate, grounded responses backed by citations.",
    tech: ["Python", "LangChain", "Mistral AI", "Tavily API", "REST APIs", "Vector Embeddings", "FastAPI"],
    keyFeatures: [
      "Deep video transcript extraction and semantic vectorization for contextual retrieval",
      "LangChain multi-step agent workflow managing reasoning loops and tool selection",
      "Mistral AI LLM integration providing nuanced summarization and contextual question-answering",
      "Dynamic external tool integration using Tavily web search to verify claims in real time",
      "Conversational memory buffer allowing coherent multi-turn interrogations",
      "Timestamp correlation linking extracted insights directly to video milestones"
    ],
    architecture: {
      core: "Python backend with LangChain agent runtime and Mistral LLM model",
      retrieval: "Chunked embedding generation for precise semantic search over transcripts",
      tools: "Tavily Search API tool integration for real-time web retrieval",
      api: "Clean RESTful endpoints interfacing with web frontend clients"
    },
    metrics: [
      { label: "LLM Engine", value: "Mistral AI" },
      { label: "Agentic Framework", value: "LangChain Chains & Tools" },
      { label: "Web Search", value: "Tavily Integration" }
    ],
    
    gradient: "from-purple-500/20 via-pink-500/20 to-amber-500/20",
    borderAccent: "group-hover:border-purple-500/50",
    iconName: "Bot"
  }
];

export const experience = [
  {
    id: "internship-pict",
    role: "Software Development Intern",
    organization: "Department of Computer Engineering",
    type: "In-House Software Development Internship",
    period: "Feb 2026 – Apr 2026",
    status: "Upcoming / Active",
    location: "Pune, Maharashtra, India",
    summary: "Spearheaded the architectural design and full-stack implementation of Sahyatri, an end-to-end women's safety web platform integrating geospatial routing heuristics, real-time socket communications, and offline-first fail-safes.",
    responsibilities: [
      "Developed Sahyatri, a full-stack women's safety application using the MERN stack with secure authentication and trip planning.",
      "Implemented comprehensive guardian management allowing travelers to pair verified emergency contacts.",
      "Built real-time location tracking telemetry and continuous guardian notification systems.",
      "Engineered safety-aware routing by integrating OpenRouteService, Geoapify, and OpenStreetMap APIs to compute weighted safety scores.",
      "Implemented real-time SOS emergency response featuring live coordinate streaming using Socket.IO.",
      "Integrated automated WhatsApp emergency alerts that deliver instant tracking links directly to guardian devices.",
      "Designed an offline-first SOS mechanism that queues alerts locally during network drops and automatically dispatches upon connection recovery."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "OpenRouteService", "Geoapify", "OpenStreetMap", "IndexedDB", "WhatsApp API"]
  }
];

export const education = [
  {
    institution: "SCTR's Pune Institute of Computer Technology (PICT)",
    location: "Pune, Maharashtra, India",
    degree: "Bachelor of Engineering in Computer Technology",
    period: "Sept 2023 – May 2027 (Expected)",
    grade: "CGPA: 9.28 / 10.00",
    highlights: [
      "Top academic performer in Computer Technology department",
      "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks",
      "Actively developing production-grade web applications and GenAI systems"
    ],
    badge: "Premier Engineering Institute"
  },
  {
    institution: "Kedarling Highschool & Junior College",
    location: "Kadgaon, Maharashtra, India",
    degree: "Higher Secondary Certificate (HSC) — Science",
    period: "Completed Feb 2023",
    grade: "MHT-CET: 99.68 Percentile | HSC: 83.00%",
    highlights: [
      "Achieved 99.68 percentile in Maharashtra Common Entrance Test (MHT-CET)",
      "Strong foundation in Mathematics, Physics, and Analytical Problem Solving"
    ],
    badge: "99.68%ile MHT-CET"
  },
  {
    institution: "Abhinav Vidyalay",
    location: "Aralgundi, Maharashtra, India",
    degree: "Secondary School Certificate (SSC)",
    period: "Completed March 2021",
    grade: "Percentage: 98.60%",
    highlights: [
      "Secured outstanding 98.60% academic score",
      "Distinction across Mathematics and Science"
    ],
    badge: "98.60% SSC"
  }
];

export const achievements = [
  {
    title: "500+ DSA Problems Solved",
    platform: "LeetCode",
    metric: "500+",
    description: "Solved over 500 Data Structures and Algorithms problems covering Trees, Dynamic Programming, Graphs, Arrays, and Strings.",
    icon: "Code2",
    badge: "DSA Mastery"
  },
  {
    title: "Maximum LeetCode Rating: 1734",
    platform: "LeetCode Contests",
    metric: "1734 Rating",
    description: "Competed in weekly and biweekly LeetCode contests, achieving a peak contest rating of 1734 among global participants.",
    icon: "TrendingUp",
    badge: "Top Contest Tier"
  },
  {
    title: "2-Star CodeChef Coder",
    platform: "CodeChef",
    metric: "2-Star Rating",
    description: "Achieved 2-Star division status with 150+ competitive programming challenges solved across global Starters and Lunchtime rounds.",
    icon: "Award",
    badge: "150+ Solved"
  },
  {
    title: "99.68 Percentile in MHT-CET",
    platform: "State Entrance Examination",
    metric: "99.68 %ile",
    description: "Secured top 0.32% rank among over 400,000 aspirants in the Maharashtra Common Entrance Test for engineering admissions.",
    icon: "Zap",
    badge: "State Rank Achiever"
  },
  {
    title: "9.28 CGPA at PICT Pune",
    platform: "Academic Excellence",
    metric: "9.28 / 10",
    description: "Consistently maintained stellar academic performance at one of Maharashtra's top computer engineering colleges.",
    icon: "GraduationCap",
    badge: "Academic Honors"
  }
];

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "harshad_kavade",
    profileUrl: "https://leetcode.com/u/harshad_kavade/",
    headline: "500+ Problems Solved",
    rating: "1734",
    stat1: { label: "Problems Solved", value: "500+" },
    stat2: { label: "Max Rating", value: "1734" },
    stat3: { label: "Global Percentile", value: "Top 12%" },
    color: "#f59e0b",
    icon: "Code2",
    topics: ["Dynamic Programming", "Graph Algorithms", "Binary Trees", "Binary Search", "Two Pointers", "Sliding Window"]
  },
  {
    name: "CodeChef",
    handle: "leap_foxes_57",
    profileUrl: "https://www.codechef.com/users/leap_foxes_57",
    headline: "2-Star Competitive Coder",
    rating: "2-Star",
    stat1: { label: "Problems Solved", value: "150+" },
    stat2: { label: "Division", value: "Div 3 / 2-Star" },
    stat3: { label: "Contest Rounds", value: "Active Participant" },
    color: "#8b5cf6",
    icon: "Award",
    topics: ["Number Theory", "Greedy Strategies", "Sorting & Searching", "Combinatorics", "Modular Arithmetic"]
  }
];
