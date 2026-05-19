"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "AI Matching Platform",
    slug: "ai-matching-platform",
    description: "An advanced system using OpenAI GPT and SentenceTransformers to semantically match entities based on complex multidimensional data.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "pgvector", "Redis", "OpenAI"]
  },
  {
    title: "Education Platform",
    slug: "education-platform",
    description: "A comprehensive EdTech solution featuring real-time AI tutor integrations and complex admin/student workflows.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Nest.js", "PostgreSQL"]
  },
  {
    title: "Gaming Platform",
    slug: "gaming-platform",
    description: "High-concurrency betting and gaming infrastructure with cryptocurrency wallet integration and real-time WebSockets.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "WebSockets", "Node.js", "Crypto"]
  },
  {
    title: "Wonder Women - Asani IoT Platform",
    slug: "asani-iot-platform",
    description: "React Native mobile app and real-time device monitoring system for Wonder Women's vending machines via MQTT.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "IoT", "MQTT", "AWS"]
  }
];

export function ProjectsSection() {
  return (
    <section className="py-24 relative bg-black/50" id="projects">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of high-impact platforms and AI systems I have architected and built." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative glass-card overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                {/* We use standard img to avoid Next.js unoptimized warnings for external images without config */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  View Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
