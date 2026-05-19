"use client";
import React from "react";

import { Users, TrendingUp, Search, MessageSquare, Activity, CheckCircle2 } from "lucide-react";

export function AIMatchingScreen() {
  return (
    <div className="w-full bg-[#0a0f1a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl font-sans flex flex-col h-[600px] text-sm">
      {/* Top Navigation */}
      <div className="h-14 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0d1321]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="font-bold text-white tracking-wide">MATCH_ENGINE</span>
        </div>
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Semantic search by persona..." 
              className="w-full bg-[#151c2c] border-none rounded-md py-1.5 pl-9 pr-4 text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <Activity className="w-5 h-5" />
          <MessageSquare className="w-5 h-5" />
          <div className="w-8 h-8 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-white font-bold">
            US
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-800 bg-[#0d1321] p-4 flex flex-col gap-2">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Dashboards</div>
          <SidebarItem icon={<Users />} label="Entity Recommendations" active />
          <SidebarItem icon={<TrendingUp />} label="Vector Analytics" />
          <SidebarItem icon={<CheckCircle2 />} label="Match Audits" />
          
          <div className="mt-8 text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Active Pipelines</div>
          <div className="bg-[#151c2c] p-3 rounded-lg border border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-xs">Embeddings Generator</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="mt-2 text-[10px] text-gray-500">2.4M / 2.8M processed</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#0a0f1a] p-6 overflow-y-auto">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-xl font-bold text-white">Top Recommendations</h1>
              <p className="text-gray-400 text-xs mt-1">Based on Cosine Similarity against Target Persona A1</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-xs font-medium transition-colors">
              Recalculate Vectors
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <MatchCard 
              name="Sarah Jenkins (Senior Python Dev)" 
              score={98.4} 
              tags={["FastAPI", "PostgreSQL", "System Architecture"]} 
              matchFactors={[{label: "Tech Stack", val: 99}, {label: "Experience", val: 95}]}
            />
            <MatchCard 
              name="Alex Mercer (Data Engineer)" 
              score={92.1} 
              tags={["Airflow", "Kafka", "Python"]} 
              matchFactors={[{label: "Tech Stack", val: 90}, {label: "Experience", val: 88}]}
            />
            <MatchCard 
              name="David Chen (AI Specialist)" 
              score={89.7} 
              tags={["TensorFlow", "PyTorch", "NLP"]} 
              matchFactors={[{label: "Tech Stack", val: 85}, {label: "Experience", val: 92}]}
            />
            <MatchCard 
              name="Elena Rodriguez (Backend Lead)" 
              score={87.3} 
              tags={["Node.js", "Redis", "Microservices"]} 
              matchFactors={[{label: "Tech Stack", val: 70}, {label: "Experience", val: 96}]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${active ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-4 h-4" })}
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}

function MatchCard({ name, score, tags, matchFactors }: { name: string, score: number, tags: string[], matchFactors: any[] }) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div className="font-semibold text-white">{name}</div>
          <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs font-bold border border-green-500/20">
            {score}% Match
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-4">
          {tags.map((t, i) => (
            <span key={i} className="text-[10px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>
      
      <div className="space-y-2 border-t border-gray-800 pt-3">
        {matchFactors.map((factor, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="w-20 text-gray-500">{factor.label}</span>
            <div className="flex-1 h-1.5 bg-gray-800 rounded-full">
              <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: `${factor.val}%` }}></div>
            </div>
            <span className="text-gray-400 w-6 text-right">{factor.val}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
