"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShieldAlert, Search, Terminal, Crosshair, Radar, RefreshCw, Cpu, Layers } from "lucide-react";

export function DnDSoulScreen() {
  const [terminalText, setTerminalText] = useState<string>("");
  const [queryStatus, setQueryStatus] = useState<"idle" | "searching" | "streaming" | "done">("idle");
  const [activeTab, setActiveTab] = useState<string>("live");

  const fullResponseText = 
    `[AWS Bedrock - LLM Engine] QUERY COMPLETED IN 240ms\n` +
    `[YOLO-CV Core] SCANNING SECTOR-4 TIMESTAMPS FOR MATCHES...\n` +
    `[Matches Found] 3 ACTIVE GROUND VEHICLES DETECTED NEAR COORDINATES [34.022, -118.243]\n\n` +
    `>> TACTICAL INTELLIGENCE SUMMARY:\n` +
    `"Visual search confirms a convoy of 3 heavy transport trucks traveling South-East on Road-Beta (Sector-4) at 16:45 UTC. Bounding box dimensions indicate standard supply carriers. Speed is 45km/h. No heavy turret signatures detected. Overall Threat Level is assessed as MEDIUM. Active surveillance is recommended as they approach checkpoint Charlie."`;

  const runQueryDemo = () => {
    setQueryStatus("searching");
    setTerminalText("Connecting to AWS Bedrock LLM cluster...\nRunning semantic embedding vector search over battlefield data...");
    
    setTimeout(() => {
      setQueryStatus("streaming");
      setTerminalText("");
      
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullResponseText.length) {
          setTerminalText((prev) => prev + fullResponseText.charAt(index));
          index++;
        } else {
          clearInterval(interval);
          setQueryStatus("done");
        }
      }, 10); // stream fast
    }, 1500);
  };

  useEffect(() => {
    runQueryDemo();
  }, []);

  return (
    <div className="w-full bg-[#030712] text-gray-100 rounded-xl border border-gray-800 overflow-hidden shadow-2xl font-mono flex flex-col h-[600px] text-xs select-none">
      
      {/* Top Header Bar */}
      <div className="h-14 border-b border-gray-800 flex items-center justify-between px-6 bg-[#090d16] relative">
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/30 to-purple-500/20"></div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
          <span className="font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
            <Radar className="w-4 h-4 text-emerald-400" /> TACTICAL_ISR_FEED v2.4
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[10px] text-gray-500">
          <span>ALT: <strong className="text-gray-300">1,420M</strong></span>
          <span>LAT: <strong className="text-gray-300">34.0224</strong></span>
          <span>LNG: <strong className="text-gray-300">-118.2437</strong></span>
          <span>SYS_STATUS: <strong className="text-emerald-400">NOMINAL</strong></span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <button onClick={runQueryDemo} className="hover:text-white transition-colors" title="Rerun Query Simulation">
            <RefreshCw className={`w-4 h-4 ${queryStatus === "searching" || queryStatus === "streaming" ? "animate-spin text-emerald-400" : ""}`} />
          </button>
          <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold font-sans">
            US
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar Navigation */}
        <div className="w-56 border-r border-gray-800 bg-[#070b13] p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">Navigation</div>
            <SidebarBtn icon={<Eye />} label="Live Surveillance" active={activeTab === "live"} onClick={() => setActiveTab("live")} />
            <SidebarBtn icon={<ShieldAlert />} label="Threat Detection" active={activeTab === "threat"} onClick={() => setActiveTab("threat")} />
            <SidebarBtn icon={<Terminal />} label="Bedrock Console" active={activeTab === "bedrock"} onClick={() => setActiveTab("bedrock")} />
            
            <div className="mt-6 text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">CV PIPELINE (YOLO)</div>
            <div className="bg-[#0b101c] p-3 rounded border border-gray-800/80">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-gray-300 text-[10px] flex items-center gap-1"><Cpu className="w-3 h-3 text-blue-400" /> YOLO Formatter</span>
                <span className="text-[9px] text-emerald-400 font-bold">100%</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-1">
                <div className="bg-emerald-500 h-1 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <div className="mt-1.5 text-[8px] text-gray-500 leading-tight">
                Unified VisDrone/xView datasets.<br />
                14,800+ frames processed.
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-950/20 border border-emerald-500/20 p-2.5 rounded text-[9px] text-emerald-400/80 leading-relaxed">
            <strong className="text-emerald-300 block mb-0.5">Tactical Alert Level</strong>
            No active threat thresholds breached. Sector-4 under persistent drone log tracking.
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row bg-[#040810] overflow-hidden">
          
          {/* Main Visual: Drone Live Feed Simulator */}
          <div className="flex-[1.2] border-b md:border-b-0 md:border-r border-gray-800 p-4 flex flex-col overflow-hidden">
            <div className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest flex items-center justify-between">
              <span>Ground Scan View (Thermal Cam #01)</span>
              <span className="text-emerald-500 text-[9px] flex items-center gap-1 font-sans">● RECORDING</span>
            </div>
            
            {/* Simulation Canvas Container */}
            <div className="flex-1 w-full bg-[#0a0f1d] rounded border border-gray-800 relative overflow-hidden group shadow-inner">
              
              {/* Tactical grid background lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Drone Camera Image Visual (Synthetic Grid Map with Radar Circle) */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#10b98108_0%,transparent_70%)]"></div>
              
              {/* Camera Crosshair Graphics */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-emerald-500/10 rounded-full flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 border border-emerald-500/20 rounded-full flex items-center justify-center">
                  <Crosshair className="w-5 h-5 text-emerald-500/30 animate-pulse" />
                </div>
              </div>

              {/* Side bars of HUD */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 text-[8px] text-emerald-500/40 select-none">
                <span>+100</span><span>+050</span><span className="text-emerald-500 font-bold">-000-</span><span>-050</span><span>-100</span>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 text-[8px] text-emerald-500/40 select-none items-end">
                <span>100m</span><span>050m</span><span className="text-emerald-500 font-bold">ALT_H</span><span>050m</span><span>100m</span>
              </div>

              {/* Simulated YOLO Bounding Boxes overlay */}
              <AnimatePresence>
                {activeTab !== "bedrock" && (
                  <>
                    {/* Bounding Box 1: Tank (Red Threat) */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-1/4 left-1/3 border-2 border-red-500 p-1.5 shadow-[0_0_10px_rgba(239,68,68,0.3)] bg-red-950/20"
                      style={{ width: "85px", height: "60px" }}
                    >
                      <span className="absolute -top-4 -left-[2px] bg-red-500 text-white font-bold text-[8px] px-1 py-0.5 rounded-t select-none uppercase">
                        Tank: 94%
                      </span>
                      <div className="w-full h-full border border-red-500/20 flex flex-col justify-between text-[7px] text-red-400">
                        <span>SYS_RED</span>
                        <span className="self-end">[34.022, -118.243]</span>
                      </div>
                    </motion.div>

                    {/* Bounding Box 2: Truck (Yellow Logistics) */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-1/3 right-1/4 border-2 border-yellow-500 p-1.5 shadow-[0_0_10px_rgba(234,179,8,0.2)] bg-yellow-950/10"
                      style={{ width: "100px", height: "55px" }}
                    >
                      <span className="absolute -top-4 -left-[2px] bg-yellow-500 text-black font-bold text-[8px] px-1 py-0.5 rounded-t select-none uppercase">
                        Truck: 89%
                      </span>
                      <div className="w-full h-full border border-yellow-500/20 flex flex-col justify-between text-[7px] text-yellow-400">
                        <span>SYS_LOGIST</span>
                        <span className="self-end">ROAD_BETA</span>
                      </div>
                    </motion.div>

                    {/* Bounding Box 3: Tactical Drone (Cyan Target) */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="absolute top-1/2 left-[15%] border-2 border-cyan-500 p-1 bg-cyan-950/20"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <span className="absolute -top-4 -left-[2px] bg-cyan-500 text-black font-bold text-[8px] px-1 py-0.5 rounded-t select-none uppercase">
                        Drone: 96%
                      </span>
                      <div className="w-full h-full border border-cyan-500/20 flex flex-col justify-end text-[7px] text-cyan-300">
                        <span className="self-end">ELEV: 240M</span>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Bottom HUD bar overlays */}
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-[8px] text-emerald-500/60 font-sans">
                <div className="space-y-0.5">
                  <div>CAM: PERSPECTIVE_THERMAL</div>
                  <div>FPS: 60.00 / RAW_FEED_OK</div>
                </div>
                <div className="text-right">
                  <div>HEADING: 184° S</div>
                  <div>TIME: 2026-05-20 12:45:53Z</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Panel: AI Bedrock Semantic Search Terminal */}
          <div className="flex-1 p-4 flex flex-col overflow-hidden">
            <div className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-400" /> AWS Bedrock Intelligence Console
            </div>
            
            {/* Search Input Simulation */}
            <div className="relative mb-3">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
              <input 
                type="text" 
                readOnly
                value="Find active convoys in Sector-4 and retrieve threat estimates."
                className="w-full bg-[#0b111e] border border-gray-800 rounded px-8 py-2 text-gray-300 text-[10px] focus:outline-none"
              />
              <button 
                onClick={runQueryDemo}
                disabled={queryStatus === "searching" || queryStatus === "streaming"}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[8px] px-2 py-0.5 rounded transition-colors disabled:opacity-50 select-none font-sans"
              >
                RUN
              </button>
            </div>

            {/* Terminal Log Console */}
            <div className="flex-1 bg-black/80 rounded border border-gray-850 p-3 overflow-y-auto text-emerald-400/90 flex flex-col font-mono text-[9px] leading-relaxed shadow-inner">
              {queryStatus === "searching" ? (
                <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-500">
                  <RefreshCw className="w-6 h-6 animate-spin text-emerald-500/70" />
                  <span>VECTOR_SEARCHING EMBEDDING ARRAYS...</span>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap flex-1 select-text selection:bg-emerald-950 font-mono">
                  {terminalText}
                  {queryStatus === "streaming" && (
                    <span className="w-1.5 h-3 bg-emerald-400 inline-block animate-pulse ml-0.5 align-middle"></span>
                  )}
                </pre>
              )}
            </div>
            
            <div className="mt-3 flex justify-between text-[8px] text-gray-500">
              <span>Embedding Dimension: <strong className="text-gray-400">1536 (Ada-002)</strong></span>
              <span>Vector Cache: <strong className="text-emerald-400">Active (Redis)</strong></span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function SidebarBtn({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors ${
        active 
          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold" 
          : "text-gray-400 hover:bg-white/5 hover:text-gray-300 border border-transparent"
      }`}
    >
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-3.5 h-3.5" })}
      <span className="text-[10px] tracking-wide">{label}</span>
    </div>
  );
}
