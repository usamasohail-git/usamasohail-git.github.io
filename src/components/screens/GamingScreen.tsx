"use client";

import { Wallet, Activity, Gamepad2, ArrowUpRight, ArrowDownRight, MessageSquare, History } from "lucide-react";

export function GamingScreen() {
  return (
    <div className="w-full bg-[#121212] text-gray-300 rounded-xl border border-gray-800 overflow-hidden shadow-2xl font-sans flex flex-col h-[600px] text-sm">
      {/* Top Navbar */}
      <div className="h-16 border-b border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-6 h-6 text-green-500" />
          <span className="font-bold text-white text-lg tracking-wider italic">NEXUS<span className="text-green-500">BET</span></span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="bg-[#252525] px-4 py-2 rounded-lg border border-[#333] flex items-center gap-3 shadow-inner">
            <Wallet className="w-4 h-4 text-gray-400" />
            <span className="font-mono text-white font-bold tracking-tight">4.25091 BTC</span>
            <div className="w-px h-4 bg-[#444] mx-1"></div>
            <span className="font-mono text-green-500 font-bold">+$124.50</span>
          </div>
          <div className="w-8 h-8 rounded bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center font-bold text-white shadow-md">
            U
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Betting Area */}
        <div className="flex-[2] flex flex-col">
          {/* Live Game Feed */}
          <div className="h-48 border-b border-[#2a2a2a] relative overflow-hidden flex items-center justify-center bg-black">
            {/* Fake game visualization */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 via-[#121212] to-[#121212]"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-green-500 font-mono text-5xl font-bold tracking-tighter mb-2" style={{ textShadow: "0 0 20px rgba(34,197,94,0.5)" }}>2.45x</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] animate-pulse">Live Multiplier</div>
            </div>
            
            {/* Fake graph line */}
            <svg className="absolute bottom-0 left-0 w-full h-24" preserveAspectRatio="none">
              <path d="M0,80 Q50,70 100,50 T200,60 T300,30 T400,40 T500,10 L500,100 L0,100 Z" fill="rgba(34,197,94,0.1)" stroke="#22c55e" strokeWidth="2" />
            </svg>
          </div>

          {/* Betting Interface */}
          <div className="p-6 bg-[#181818] flex-1 flex flex-col gap-6 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#222] p-4 rounded-xl border border-[#333]">
                <div className="text-xs text-gray-500 font-bold mb-2 uppercase">Bet Amount</div>
                <div className="flex bg-[#111] rounded-lg border border-[#333] p-1">
                  <input type="text" value="0.05" className="bg-transparent border-none text-white font-mono flex-1 px-3 focus:outline-none" readOnly />
                  <div className="flex gap-1">
                    <button className="bg-[#2a2a2a] hover:bg-[#333] px-3 py-1 rounded text-xs font-bold transition-colors">1/2</button>
                    <button className="bg-[#2a2a2a] hover:bg-[#333] px-3 py-1 rounded text-xs font-bold transition-colors">2x</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#222] p-4 rounded-xl border border-[#333]">
                <div className="text-xs text-gray-500 font-bold mb-2 uppercase">Auto Cashout</div>
                <div className="flex bg-[#111] rounded-lg border border-[#333] p-1">
                  <input type="text" value="3.00" className="bg-transparent border-none text-white font-mono flex-1 px-3 focus:outline-none" readOnly />
                  <div className="flex items-center px-3 text-gray-500 font-bold">x</div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-black text-lg uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              Place Bet (0.05 BTC)
            </button>

            {/* Recent Bets */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-3 uppercase">
                <History className="w-4 h-4" /> My Recent Bets
              </div>
              <div className="space-y-2">
                <BetRow multiplier="2.10x" amount="0.02 BTC" profit="+0.022 BTC" won={true} />
                <BetRow multiplier="1.00x" amount="0.05 BTC" profit="-0.050 BTC" won={false} />
                <BetRow multiplier="4.50x" amount="0.01 BTC" profit="+0.035 BTC" won={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Chat sidebar */}
        <div className="w-72 border-l border-[#2a2a2a] bg-[#1a1a1a] flex flex-col">
          <div className="p-4 border-b border-[#2a2a2a] flex items-center gap-2 font-bold text-gray-200">
            <MessageSquare className="w-4 h-4 text-blue-400" /> Global Chat <span className="text-xs font-normal text-gray-500 ml-auto">1,204 online</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
            <div className="flex gap-2"><span className="text-pink-500 font-bold">crypto_king:</span> <span className="text-gray-300">Just cashed out at 10x! 🔥</span></div>
            <div className="flex gap-2"><span className="text-blue-500 font-bold">user4921:</span> <span className="text-gray-300">lost again...</span></div>
            <div className="flex gap-2"><span className="text-yellow-500 font-bold">whale_alert:</span> <span className="text-gray-300">Huge bet incoming watch out</span></div>
            <div className="flex gap-2"><span className="text-purple-500 font-bold">UsamaS:</span> <span className="text-gray-300">WebSocket latency looking good at 45ms.</span></div>
            <div className="flex gap-2"><span className="text-green-500 font-bold">system:</span> <span className="text-gray-500 italic">Game #84920 started</span></div>
          </div>

          <div className="p-3 border-t border-[#2a2a2a]">
            <div className="bg-[#111] rounded border border-[#333] flex">
              <input type="text" placeholder="Say something..." className="bg-transparent border-none px-3 py-2 text-xs flex-1 text-white focus:outline-none font-mono" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BetRow({ multiplier, amount, profit, won }: { multiplier: string, amount: string, profit: string, won: boolean }) {
  return (
    <div className={`flex justify-between items-center p-3 rounded-lg border ${won ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
      <div className="flex items-center gap-3 font-mono text-xs font-bold">
        {won ? <ArrowUpRight className="w-4 h-4 text-green-500" /> : <ArrowDownRight className="w-4 h-4 text-red-500" />}
        <span className="text-white">{multiplier}</span>
      </div>
      <div className="flex items-center gap-4 font-mono text-xs">
        <span className="text-gray-500">{amount}</span>
        <span className={`font-bold ${won ? 'text-green-500' : 'text-red-500'}`}>{profit}</span>
      </div>
    </div>
  );
}
