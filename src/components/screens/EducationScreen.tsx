"use client";
import React from "react";

import { Video, BookOpen, MessageCircle, BarChart, Settings, Play, Send } from "lucide-react";

export function EducationScreen() {
  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 rounded-xl border border-gray-200 overflow-hidden shadow-2xl font-sans flex h-[600px] text-sm">
      {/* Sidebar */}
      <div className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col items-center md:items-start py-6 gap-6">
        <div className="px-0 md:px-6 flex items-center gap-2 mb-4 text-blue-600 font-bold text-lg">
          <BookOpen className="w-6 h-6" />
          <span className="hidden md:inline">LearnSphere AI</span>
        </div>
        
        <div className="flex flex-col w-full px-2 md:px-4 gap-2">
          <SidebarBtn icon={<Video />} label="My Courses" active />
          <SidebarBtn icon={<MessageCircle />} label="Tutor Chat" />
          <SidebarBtn icon={<BarChart />} label="Progress" />
          <SidebarBtn icon={<Settings />} label="Settings" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#f1f5f9]">
        {/* Header */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h2 className="font-semibold text-gray-800 hidden sm:block">Advanced Python Engineering - Module 4</h2>
          <div className="flex items-center gap-3">
            <div className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
              68% Completed
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              US
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Video / Course Section */}
          <div className="flex-[2] p-6 overflow-y-auto">
            <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden relative group mb-6 shadow-md border border-gray-200">
              {/* Fake Video Thumbnail */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg border-2 border-white/20">
                  <Play className="w-6 h-6 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-center text-white">
                <span className="font-medium">4.2 Memory Management & Garbage Collection</span>
                <span className="text-xs">14:23 / 28:50</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">About this lesson</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              In this lesson, we dive deep into how Python handles memory allocation and garbage collection. Understanding reference counting and the cyclic garbage collector is crucial for building high-performance APIs.
            </p>
          </div>

          {/* AI Chat Assistant Panel */}
          <div className="flex-1 border-l border-gray-200 bg-white flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-blue-50/50 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">AI Tutor</h4>
                <p className="text-xs text-green-600 font-medium">Online • Context Aware</p>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#f8fafc]">
              <ChatMessage 
                role="tutor" 
                text="Hi Usama! I see you're learning about Python's memory management. Did you have any questions about reference counting?" 
              />
              <ChatMessage 
                role="student" 
                text="Yes, what happens when two objects reference each other? Won't their reference count never reach zero?" 
              />
              <ChatMessage 
                role="tutor" 
                text="Great question! That's called a reference cycle. Python's primary reference counting can't handle this, which is why it also includes a generational cyclic garbage collector that periodically scans for these cycles and cleans them up." 
              />
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <input 
                  type="text" 
                  placeholder="Ask a question..." 
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-800"
                />
                <button className="text-blue-600 hover:text-blue-800">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarBtn({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`w-full flex justify-center md:justify-start items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-medium'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
      <span className="hidden md:inline text-sm">{label}</span>
    </div>
  );
}

function ChatMessage({ role, text }: { role: "tutor" | "student", text: string }) {
  const isTutor = role === "tutor";
  return (
    <div className={`flex ${isTutor ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
        isTutor 
          ? 'bg-white border border-gray-100 text-gray-800 rounded-tl-none' 
          : 'bg-blue-600 text-white rounded-tr-none'
      }`}>
        {text}
      </div>
    </div>
  );
}
