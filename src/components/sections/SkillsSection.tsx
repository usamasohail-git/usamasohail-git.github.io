"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "ai", label: "AI & ML" },
  { id: "cloud", label: "Cloud & DB" },
];

const skills = [
  { name: "Python", category: "backend", level: 95 },
  { name: "FastAPI / Django", category: "backend", level: 90 },
  { name: "Node.js / Nest.js", category: "backend", level: 85 },
  { name: "React.js / Next.js", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 88 },
  { name: "Tailwind CSS", category: "frontend", level: 95 },
  { name: "OpenAI GPT / LLMs", category: "ai", level: 92 },
  { name: "Vector Search / RAG", category: "ai", level: 88 },
  { name: "TensorFlow", category: "ai", level: 75 },
  { name: "PostgreSQL / pgvector", category: "cloud", level: 90 },
  { name: "AWS", category: "cloud", level: 80 },
  { name: "Docker / CI/CD", category: "cloud", level: 85 },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Technologies and frameworks I use to build scalable products." 
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glass-card p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-blue-400 text-sm font-mono">{skill.level}%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
