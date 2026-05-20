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
  "dnd-soul-ai-system": {
    title: "Aerial Object Detection & AI Search",
    overview: "A high-performance AI microservice and computer vision pipeline designed to automate aerial imagery standardization (YOLO format) and enable tactical intelligence querying via AWS Bedrock LLMs.",
    problem: "Ingesting, normalizing, and unifying diverse military-grade aerial datasets (e.g., VisDrone, xView) was highly manual, and querying tactical intelligence required slow database queries rather than natural-language situational awareness.",
    architecture: "AWS Bedrock, YOLO Model Infrastructure, FastAPI, Python Multiprocessing, AWS S3, Docker.",
    technologies: ["Python", "AWS Bedrock", "YOLO", "FastAPI", "Docker", "AWS S3"],
    challenges: "Handling highly disparate coordinate schemas and image formats from multiple aerial sources, and generating low-latency real-time natural language summaries for active ISR feeds.",
    role: "Lead AI Engineer - Engineered the automated computer vision pipeline and integrated the LLM-powered semantic search-and-analysis subsystem.",
    solution: "Developed a Python pipeline that standardized conversion of multiple annotation formats into YOLO. Integrated AWS Bedrock LLMs to perform semantic scene labeling and produce natural language intelligence summaries.",
    results: "Reduced manual threat identification analysis time by 80%, slashed dataset preparation time by 65%, and enabled seamless multi-source model training."
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
