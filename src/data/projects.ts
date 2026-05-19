export const projectData = {
  "ai-matching-platform": {
    title: "AI Matching Platform",
    overview: "A specialized AI platform designed to semantically match user profiles, entities, and complex datasets using advanced vector embeddings.",
    problem: "Traditional keyword matching resulted in poor recommendation quality, missing nuanced similarities between complex user personas and entities.",
    architecture: "FastAPI Backend, PostgreSQL with pgvector, Redis for caching, Celery for async tasks, and OpenAI embeddings.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "OpenAI", "React"],
    challenges: "Handling real-time embedding generation and vector search across millions of records with sub-100ms latency.",
    role: "Lead AI Engineer - Architected the vector search pipeline and developed the core matching algorithm.",
    solution: "Implemented an async embedding pipeline that batches text, generates OpenAI embeddings, and stores them in pgvector. Built an approximate nearest neighbor (ANN) search for lightning-fast matching.",
    results: "Increased match accuracy by 340%, reduced search latency to 45ms, and successfully scaled to support over 2 million entities."
  },
  "education-platform": {
    title: "Education Platform",
    overview: "A comprehensive EdTech solution providing real-time AI tutor interactions and robust administrative workflows for course management.",
    problem: "Students lacked personalized guidance outside of working hours, and administrators struggled to track student engagement across various courses.",
    architecture: "Nest.js microservices, Next.js frontend, PostgreSQL, OpenAI GPT-4 integration, WebRTC for video lessons.",
    technologies: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "OpenAI", "WebRTC"],
    challenges: "Maintaining contextual memory for AI tutors over long-term student interactions and ensuring real-time UI updates during active chat sessions.",
    role: "Full Stack Engineer - Built the interactive student dashboard, AI chat interface, and course management systems.",
    solution: "Developed a streaming AI chat interface using React and Server-Sent Events (SSE). Implemented a vector-based memory system for the AI tutor to recall past lessons.",
    results: "Boosted student retention by 45%, facilitated over 100k+ automated tutoring hours, and reduced admin overhead by 60%."
  },
  "gaming-platform": {
    title: "Gaming Platform",
    overview: "A high-concurrency betting and gaming infrastructure with deep cryptocurrency wallet integrations and real-time multiplayer features.",
    problem: "The legacy system suffered from race conditions during concurrent betting and could not support modern cryptocurrency payment gateways.",
    architecture: "Node.js/Express, WebSockets, Redis Pub/Sub, AWS RDS, integration with multiple blockchain RPC nodes.",
    technologies: ["React", "Node.js", "WebSockets", "Redis", "AWS", "Crypto RPC"],
    challenges: "Ensuring 100% transactional integrity during concurrent high-volume betting spikes and managing volatile crypto conversion rates.",
    role: "Senior Software Engineer - Led the migration to a WebSocket-based real-time architecture and integrated crypto payments.",
    solution: "Rewrote the betting engine using Redis transactions and distributed locks. Implemented a robust WebSocket layer for real-time odds updates and live chat.",
    results: "Achieved 99.99% uptime during peak events, successfully processed over $5M in crypto volume monthly, and reduced server costs by migrating to AWS."
  },
  "asani-iot-platform": {
    title: "Asani IoT Platform",
    overview: "A React Native mobile app and real-time device monitoring system orchestrating data from hundreds of deployed vending machines for Wonder Women.",
    problem: "Field machines were frequently offline without operators knowing, and the legacy payment terminals were prone to mechanical failures.",
    architecture: "React Native mobile app, MQTT broker for device telemetry, AWS IoT Core, Serverless Lambda functions.",
    technologies: ["React Native", "MQTT", "AWS IoT Core", "Serverless", "Node.js"],
    challenges: "Handling intermittent network connectivity from machines in remote locations and ensuring secure, instantaneous mobile payments.",
    role: "Full Stack Developer - Built the React Native mobile payment app and the real-time telemetry dashboard.",
    solution: "Designed an offline-first mobile architecture using local caching and an MQTT-based lightweight messaging protocol for telemetry.",
    results: "Reduced machine downtime by 75% through predictive maintenance alerts, and increased digital payment adoption by 200%."
  }
};
