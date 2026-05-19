"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    company: "Theransol",
    role: "AI Engineer",
    highlights: ["AI matching platform", "OpenAI GPT", "SentenceTransformers", "PostgreSQL pgvector", "Redis", "Celery", "Semantic matching"]
  },
  {
    company: "DnD Soul",
    role: "AI Engineer",
    highlights: ["Computer vision pipeline", "AWS Bedrock", "AI workflows", "Real-time intelligence systems"]
  },
  {
    company: "Machine Learners",
    role: "Full Stack Engineer",
    highlights: ["Nest.js", "React.js", "OpenAI integration", "Tutor/Admin systems"]
  },
  {
    company: "SocialB.Digital",
    role: "Senior Software Engineer",
    highlights: ["ERP system", "Gaming platform", "Cryptocurrency support", "WebSockets", "AWS migration"]
  },
  {
    company: "Wonder Women",
    role: "Full Stack Developer",
    highlights: ["React Native", "IoT systems", "MQTT", "Real-time payments"]
  },
  {
    company: "Evolve Machine Learners",
    role: "Python Developer",
    highlights: ["AI applications", "TensorFlow", "REST APIs"]
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
                    
                    <h3 className="text-2xl font-bold text-white mb-1 relative z-10">{exp.company}</h3>
                    <h4 className="text-blue-400 font-medium mb-4 relative z-10">{exp.role}</h4>
                    
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.highlights.map((highlight, hIdx) => (
                        <span 
                          key={hIdx}
                          className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
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
