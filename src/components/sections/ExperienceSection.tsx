"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    company: "Theransol",
    role: "Full Stack AI Engineer (Remote)",
    duration: "Aug 2025 - Present",
    location: "Pakistan",
    highlights: ["Python", "FastAPI", "AWS Bedrock", "OpenAI GPT", "SentenceTransformers", "pgvector", "DynamoDB", "Redis", "Celery", "Express.js"],
    description: [
      "Worked on a psychology-based assessment platform, handling backend development in Express.js.",
      "Collaborated with a React developer and built a Python-based audio streaming service.",
      "Built an AI-powered matchmaking and reciprocity platform using Python, FastAPI, AWS Bedrock, OpenAI GPT, and SentenceTransformers to generate user personas and perform semantic matching.",
      "Designed and implemented a scalable backend architecture using PostgreSQL (pgvector), DynamoDB, Redis, and Celery for asynchronous AI workflows.",
      "Developed a bidirectional matching engine with reciprocal updates and AI-generated explanations, improving match relevance and transparency.",
      "Implemented a feedback-driven learning loop using sentiment analysis to continuously refine vector embeddings and improve match quality.",
      "Managed deployment and cloud infrastructure on AWS, including EC2, ECS, Lambda, IAM, and networking configuration."
    ]
  },
  {
    company: "DnD Soul",
    role: "AI Engineer (Remote)",
    duration: "Oct 2024 - Aug 2025",
    location: "UAE",
    highlights: ["Python", "Computer Vision", "YOLO", "AWS Bedrock LLMs", "Microservices", "Real-Time Systems"],
    description: [
      "Designed and implemented a scalable computer vision data pipeline in Python that automates the ingestion, normalization, and unification of diverse aerial datasets (e.g., VisDrone, xView) into standard YOLO format, saving hours of dataset prep.",
      "Seamlessly integrated the unified aerial object detection model into the core infrastructure, delivering a scalable AI microservice that reduced manual threat analysis time and provided real-time situational awareness.",
      "Engineered a search-and-analysis subsystem where users can query battlefield data by location/time, using AWS Bedrock LLMs to perform semantic scene labeling and produce natural language summaries of retrieved intelligence."
    ]
  },
  {
    company: "Machine Learners",
    role: "Full Stack Engineer (Remote)",
    duration: "Jun 2024 - Oct 2024",
    location: "Estonia",
    highlights: ["Django", "React.js", "AWS S3", "Revolut API", "Twilio WhatsApp", "Kanban System"],
    description: [
      "Developed and maintained a robust insurance platform using Django and React.js, handling complex data models for policies, quotes, and subscriptions.",
      "Designed a scalable architecture integrating multiple external services including AWS S3 for storage, Revolut for payments, and Twilio WhatsApp for real-time communication.",
      "Implemented a custom Kanban-style workflow system to streamline lead management and policy processing workflows."
    ]
  },
  {
    company: "SocialB.Digital",
    role: "Senior Software Engineer",
    duration: "Sep 2022 - May 2024",
    location: "Lahore, Pakistan",
    highlights: ["Ruby on Rails", "Python", "FastAPI", "Nest.js", "WebSockets", "AWS Migration", "Crypto Bets"],
    description: [
      "Built an interactive ERP system using Ruby on Rails.",
      "Led backend development using Python and FastAPI for a gaming platform, developing a high-concurrency engine that enabled cryptocurrency and fiat bets across various multiplayer crash games.",
      "Integrated microservices with Nest.js to support real-time chatting, crypto user wallet management, and secure fiat currency transactions.",
      "Managed integrations with Node.js, SocketCluster, and React.js to enhance overall user experience.",
      "Collaborated with DevOps engineers to set up and migrate the backend infrastructure from Heroku to AWS."
    ]
  },
  {
    company: "Wonder Women Pvt. Ltd",
    role: "Full Stack Developer",
    duration: "Jan 2021 - Aug 2022",
    location: "Lahore, Pakistan",
    highlights: ["React Native", "Django", "MQTT", "WebSockets", "IoT Vending", "Telematics"],
    description: [
      "Developed a React Native mobile app for Wonder Women's ASANI project, enabling vending machines to dispense hygienic items digitally.",
      "Implemented backend for user management and admin portal using Django.",
      "Integrated MQTT, WebSockets, and socket-based connections to facilitate secure and real-time payment processing, item dispensing, and locking/unlocking mechanisms for field maintenance."
    ]
  },
  {
    company: "Evolve Machine Learners",
    role: "Python Developer",
    duration: "Apr 2018 - Dec 2020",
    location: "Lahore, Pakistan",
    highlights: ["Python", "Django", "TensorFlow", "CNN", "REST APIs", "AI Classification"],
    description: [
      "Worked on an AI developers only freelancing website using Django.",
      "Developed and maintained AI applications using Python and ML libraries.",
      "Implemented RESTful APIs for seamless integration with third-party services.",
      "Implemented an X-ray classification tool using CNN and TensorFlow."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey across high-growth startups and tech companies." 
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border transform md:-translate-x-1/2" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-6 md:p-8 hover:bg-white/5 transition-colors relative group overflow-hidden">
                    {/* Subtle hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col gap-1 mb-4 relative z-10">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
                        {exp.duration} • {exp.location}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">{exp.company}</h3>
                      <h4 className="text-gray-300 font-medium text-sm">{exp.role}</h4>
                    </div>
                    
                    <ul className="list-disc list-outside pl-4 space-y-2 mb-6 text-gray-400 text-sm relative z-10 leading-relaxed">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-1.5 relative z-10">
                      {exp.highlights.map((highlight, hIdx) => (
                        <span 
                          key={hIdx}
                          className="px-2.5 py-0.5 text-[11px] font-medium bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
