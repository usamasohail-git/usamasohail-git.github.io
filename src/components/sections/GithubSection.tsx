"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitPullRequest, Star, GitCommit, GitFork } from "lucide-react";

const stats = [
  { icon: <GitCommit />, label: "Total Commits", value: "3,402" },
  { icon: <Star />, label: "Stars Earned", value: "128" },
  { icon: <GitPullRequest />, label: "Pull Requests", value: "450+" },
];

const repos = [
  { name: "ai-matching-engine", desc: "Open-source core logic for semantic vector matching.", lang: "Python", stars: 85, forks: 24 },
  { name: "nextjs-startup-template", desc: "A premium boilerplate for AI startups with Next.js.", lang: "TypeScript", stars: 42, forks: 12 },
];

export function GithubSection() {
  return (
    <section className="py-24 relative" id="github">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Open Source" 
          subtitle="Contributing back to the community and building in public." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Column */}
          <div className="flex flex-col gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="text-blue-400">{stat.icon}</div>
                  <span className="font-medium">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Contribution Graph Placeholder & Repos */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-green-500" />
                Contribution Activity
              </h3>
              
              {/* Fake GitHub Graph Grid */}
              <div className="grid grid-cols-12 sm:grid-cols-18 md:grid-cols-24 gap-1">
                {Array.from({ length: 168 }).map((_, i) => {
                  const intensity = Math.random();
                  let colorClass = "bg-gray-800";
                  if (intensity > 0.8) colorClass = "bg-green-400";
                  else if (intensity > 0.6) colorClass = "bg-green-600";
                  else if (intensity > 0.4) colorClass = "bg-green-800";
                  else if (intensity > 0.2) colorClass = "bg-green-900";
                  
                  return (
                    <div 
                      key={i} 
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] ${colorClass}`}
                      style={{ opacity: intensity > 0.2 ? 1 : 0.5 }}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* Repositories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.map((repo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                  className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <h4 className="text-lg font-bold text-blue-400 mb-2">{repo.name}</h4>
                  <p className="text-sm text-gray-400 mb-6">{repo.desc}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {repo.lang}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
