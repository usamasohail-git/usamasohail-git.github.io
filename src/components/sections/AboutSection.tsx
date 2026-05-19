"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Database, BrainCircuit, Rocket } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "7+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Technologies Used", value: "25+" },
  { label: "Industries Served", value: "5+" },
];

const interests = [
  { icon: <BrainCircuit className="w-6 h-6" />, title: "AI Integration", desc: "Building intelligent agents and matching systems using LLMs and vector search." },
  { icon: <Rocket className="w-6 h-6" />, title: "Scalable Architecture", desc: "Designing robust backend systems capable of handling millions of requests." },
  { icon: <Code2 className="w-6 h-6" />, title: "Modern Web", desc: "Crafting beautiful, responsive, and dynamic user interfaces with Next.js." },
  { icon: <Database className="w-6 h-6" />, title: "Data Engineering", desc: "Optimizing database queries and managing real-time data pipelines." },
];

export function AboutSection() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about building AI-driven platforms and scalable backend architectures." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am a seasoned Software Engineer with over 7 years of experience specializing in Python and React. My expertise lies in designing scalable backend architectures, implementing robust design patterns, and integrating Large Language Models (LLMs) to solve complex real-world problems.
            </p>
            <p>
              In my recent roles, I have focused heavily on the Python ecosystem, building advanced AI pipelines, semantic search engines, and scalable microservices. I have extensive experience implementing database optimization techniques for low-latency queries, alongside leveraging Python's multiprocessing and threading to efficiently manage compute-intensive workloads and concurrent I/O operations. I am deeply passionate about writing clean, maintainable code using proven design patterns and leveraging the latest AI technologies to deliver high-performance solutions.
            </p>
            <p>
              Whether it's architecting a scalable backend in Python or crafting dynamic, intuitive frontends with React, my goal is to build beautifully designed, highly functional products that make a genuine impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
              className="glass-card p-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
