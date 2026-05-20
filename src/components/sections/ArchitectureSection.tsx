"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Terminal, Cpu, Database, Network, ChevronRight, Zap } from "lucide-react";

interface LogLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export function ArchitectureSection() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "Initializing interactive system terminal...", type: "system" },
    { text: "Type 'help' or click the buttons below to explore my production engineering.", type: "output" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [activePath, setActivePath] = useState<"idle" | "db" | "ai" | "cache">("idle");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const availableCommands = ["help", "arch", "optimize", "surveillance", "skills", "clear"];

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: LogLine[] = [{ text: `visitor@usamasohail:~$ ${cmd}`, type: "input" }];

    switch (trimmed) {
      case "help":
        newLines.push({ 
          text: "Available commands:\n" +
               "  arch          - Visualize the FastAPI, pgvector, and AI pipeline request lifecycle.\n" +
               "  optimize      - View database indexing specs (pgvector HNSW) and Python multiprocessing strategies.\n" +
               "  surveillance  - View real-time computer vision threat telemetry streaming logs.\n" +
               "  skills        - Render an ASCII progress indicator of core systems engineering.\n" +
               "  clear         - Flush the terminal interface.",
          type: "output" 
        });
        setActivePath("idle");
        break;
      
      case "arch":
        newLines.push({
          text: "[SYSTEM] Activating Systems Request Lifecycle Map...\n" +
               "[FASTAPI] Gateway received client request on route '/api/v1/semantic-search'\n" +
               "[REDIS] Performing cache lookup... (Miss)\n" +
               "[PGVECTOR] Executing HNSW Cosine Similarity vector search...\n" +
               "[COMPLETED] Returns 3 top matched elements in 42ms.",
          type: "output"
        });
        setActivePath("db");
        break;

      case "optimize":
        newLines.push({
          text: "=== SYSTEMS TUNING DEEP-DIVE ===\n" +
               "1. VECTOR DATABASES (PostgreSQL + pgvector):\n" +
               "   - Configured hierarchical navigable small world (HNSW) indexes using cosine distance operator.\n" +
               "   - Spec: CREATE INDEX ON items USING pgvector_hnsw_ops (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);\n" +
               "   - Achieved 45ms average vector match lookup latency over 2.4M records with ef_search = 16.\n\n" +
               "2. PYTHON MULTIPROCESSING & CPU CORE BINDING:\n" +
               "   - Solved GIL restrictions by architecting worker threads using python 'multiprocessing' library.\n" +
               "   - Bind CPU core-affinity locks for parallel YOLO/CV image conversion feeds to prevent core starvation.\n" +
               "   - Leveraged shared memory buffers for streaming frames to eliminate expensive inter-process communication serialization overhead.",
          type: "output"
        });
        setActivePath("cache");
        break;

      case "surveillance":
        newLines.push({
          text: "=== CV PERSISTENT PIPELINE LOGS (YOLOv8 + AWS BEDROCK) ===\n" +
               "[12:45:01] Frame 4920 converted successfully to standard YOLO dimensions [640x640]\n" +
               "[12:45:02] Model Inference: 1 Tank (94% confidence), 2 Trucks (89% confidence) detected.\n" +
               "[12:45:03] S3 Upload: Frame uploaded successfully under S3://dnd-surveillance/frame_4920.jpg\n" +
               "[12:45:04] LLM Prompt: Synthesizing natural-language battlefield report via AWS Bedrock Claude-3...\n" +
               "[12:45:05] LLM Response: 'Active transport vehicles identified near sector 4. Speed is consistent with standard logistic operations. Threat assessed as MEDIUM.'",
          type: "output"
        });
        setActivePath("ai");
        break;

      case "skills":
        newLines.push({
          text: "=== SYSTEM SKILLS METRICS ===\n" +
               "Python/FastAPI/Django  [=======================>] 95%\n" +
               "Vector Databases/RAG   [=====================>  ] 90%\n" +
               "AWS/Cloud DevOps       [====================>   ] 85%\n" +
               "React.js/Next.js       [=====================>  ] 90%\n" +
               "High-Concurrency (WS)  [====================>   ] 88%",
          type: "output"
        });
        setActivePath("idle");
        break;

      case "clear":
        setHistory([]);
        setInputValue("");
        setActivePath("idle");
        return;

      default:
        newLines.push({
          text: `bash: ${trimmed}: command not found. Type 'help' to view valid tactical commands.`,
          type: "error"
        });
        setActivePath("idle");
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputValue("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section className="py-24 relative" id="architecture">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Systems Architecture & CLI Console" 
          subtitle="Interact with my virtual terminal terminal or select nodes to trace request lifecycles." 
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-12">
          
          {/* Left Column: UNIX Terminal Emulator */}
          <div className="bg-[#050811]/90 rounded-xl border border-white/10 overflow-hidden flex flex-col h-[520px] shadow-2xl relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
            
            {/* Terminal Header */}
            <div className="h-12 border-b border-white/10 px-4 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-[10px] text-gray-500 tracking-wider flex items-center gap-1 font-mono uppercase">
                <Terminal className="w-3.5 h-3.5 text-blue-400" /> interactive_shell.sh
              </span>
              <div className="w-16"></div>
            </div>

            {/* Terminal Logs Scrollbox */}
            <div className="flex-1 p-6 overflow-y-auto font-mono text-xs leading-relaxed space-y-3 bg-black/60 scrollbar-thin scrollbar-thumb-gray-800">
              {history.map((line, idx) => {
                let colorClass = "text-gray-300";
                if (line.type === "input") colorClass = "text-emerald-400 font-bold";
                else if (line.type === "error") colorClass = "text-red-400";
                else if (line.type === "system") colorClass = "text-blue-400 font-semibold";
                else if (line.type === "output") colorClass = "text-gray-400";

                return (
                  <pre key={idx} className={`whitespace-pre-wrap select-text ${colorClass}`}>
                    {line.text}
                  </pre>
                );
              })}
              <div ref={terminalEndRef} />
            </div>

            {/* Clickable Quick Command Badges */}
            <div className="px-6 py-3 bg-black/40 border-t border-white/10 flex flex-wrap gap-2 items-center">
              <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold mr-1 font-mono">QUICK CMD:</span>
              {availableCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-1 text-[10px] bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 text-gray-300 hover:text-white rounded transition-all cursor-pointer font-mono font-bold"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputValue);
              }}
              className="h-12 border-t border-white/10 bg-[#050811] flex items-center px-4 gap-2"
            >
              <ChevronRight className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-gray-500 font-mono text-xs">usama@portfolio:~$</span>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type command here (e.g. arch, optimize)..."
                className="flex-1 bg-transparent border-none focus:outline-none text-xs text-white placeholder-gray-600 font-mono focus:ring-0"
              />
              <button type="submit" className="text-gray-500 hover:text-emerald-400 transition-colors">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </button>
            </form>
          </div>

          {/* Right Column: Interactive System Architecture Canvas */}
          <div className="glass-card p-8 flex flex-col justify-between h-[520px] relative overflow-hidden bg-[#050811]/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f605_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400 animate-pulse" /> System Diagram Canvas
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Click on the core clusters below to trace operational API routing flows.
              </p>
            </div>

            {/* SVG Visual Architecture Diagram */}
            <div className="flex-1 w-full relative min-h-[300px] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting Lines */}
                <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#1e293b" strokeWidth="2" />
                <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#1e293b" strokeWidth="2" />
                <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" />

                {/* Animated request particles flowing on active pathways */}
                {activePath === "db" && (
                  <>
                    <circle r="4" fill="#3b82f6" className="shadow-lg">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 90,95 L 270,95 L 270,285" />
                    </circle>
                    <circle r="4" fill="#10b981">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 270,285 L 90,285 L 90,95" />
                    </circle>
                  </>
                )}

                {activePath === "cache" && (
                  <>
                    <circle r="4" fill="#eab308">
                      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 90,95 L 270,95 L 90,95" />
                    </circle>
                  </>
                )}

                {activePath === "ai" && (
                  <>
                    <circle r="4" fill="#ec4899">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 90,95 L 90,285 L 270,285" />
                    </circle>
                    <circle r="4" fill="#a855f7">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 270,285 L 270,95 L 90,95" />
                    </circle>
                  </>
                )}
              </svg>

              {/* Node Layout Grid */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-4 gap-8">
                
                {/* Node 1: API Gateway (FastAPI) */}
                <div 
                  onClick={() => handleCommand("arch")}
                  className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${
                    activePath === "db" 
                      ? "bg-blue-500/10 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105" 
                      : "bg-[#0b101d] border-white/5 text-gray-400 hover:border-blue-500/30 hover:text-white"
                  }`}
                >
                  <Network className={`w-8 h-8 mb-2 ${activePath === "db" ? "text-blue-400" : "text-gray-500"}`} />
                  <span className="font-bold text-xs font-mono uppercase">API Gateway</span>
                  <span className="text-[9px] opacity-60 mt-1 font-mono text-center">FastAPI Backend</span>
                </div>

                {/* Node 2: Distributed Queue (Redis/Celery) */}
                <div 
                  onClick={() => handleCommand("optimize")}
                  className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${
                    activePath === "cache" 
                      ? "bg-yellow-500/10 border-yellow-500 text-white shadow-[0_0_15px_rgba(234,179,8,0.3)] scale-105" 
                      : "bg-[#0b101d] border-white/5 text-gray-400 hover:border-yellow-500/30 hover:text-white"
                  }`}
                >
                  <Cpu className={`w-8 h-8 mb-2 ${activePath === "cache" ? "text-yellow-400" : "text-gray-500"}`} />
                  <span className="font-bold text-xs font-mono uppercase">Task Queue</span>
                  <span className="text-[9px] opacity-60 mt-1 font-mono text-center">Redis & Celery Cache</span>
                </div>

                {/* Node 3: Database Cluster (PostgreSQL pgvector) */}
                <div 
                  onClick={() => handleCommand("skills")}
                  className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${
                    activePath === "db" 
                      ? "bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-105" 
                      : "bg-[#0b101d] border-white/5 text-gray-400 hover:border-emerald-500/30 hover:text-white"
                  }`}
                >
                  <Database className={`w-8 h-8 mb-2 ${activePath === "db" ? "text-emerald-400" : "text-gray-500"}`} />
                  <span className="font-bold text-xs font-mono uppercase">Vector DB</span>
                  <span className="text-[9px] opacity-60 mt-1 font-mono text-center">PostgreSQL + pgvector</span>
                </div>

                {/* Node 4: Inference Core (YOLO & Bedrock) */}
                <div 
                  onClick={() => handleCommand("surveillance")}
                  className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${
                    activePath === "ai" 
                      ? "bg-pink-500/10 border-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] scale-105" 
                      : "bg-[#0b101d] border-white/5 text-gray-400 hover:border-pink-500/30 hover:text-white"
                  }`}
                >
                  <Cpu className={`w-8 h-8 mb-2 ${activePath === "ai" ? "text-pink-400" : "text-gray-500"}`} />
                  <span className="font-bold text-xs font-mono uppercase">AI Engines</span>
                  <span className="text-[9px] opacity-60 mt-1 font-mono text-center">YOLOv8 + AWS Bedrock</span>
                </div>

              </div>
            </div>

            <div className="border-t border-white/10 pt-4 text-center text-[10px] text-gray-500 font-mono">
              Active Routing Scheme: <strong className={activePath !== "idle" ? "text-emerald-400" : "text-gray-400"}>{activePath.toUpperCase()} FLOW</strong>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
