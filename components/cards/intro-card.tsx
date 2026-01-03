"use client";

import { cn } from "@/lib/utils";
import { MapPin, Briefcase, GraduationCap, Sparkles } from "lucide-react";

interface IntroCardProps {
  className?: string;
}

export function IntroCard({ className }: IntroCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border border-chatgpt-border overflow-hidden bg-chatgpt-sidebar",
      "w-full max-w-full",
      className
    )}>

      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5 text-center sm:text-left">
          <div className="relative flex-shrink-0">
            <div className="h-16 w-16 rounded-2xl bg-chatgpt-accent flex items-center justify-center text-white text-2xl font-bold">
              AP
            </div>
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-chatgpt-accent border-2 border-chatgpt-bg flex items-center justify-center">
              <span className="text-[10px] text-white">✓</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-chatgpt-text-primary">Arthur Papailhau</h3>
            <p className="text-chatgpt-text-secondary text-sm mt-0.5">Senior Software Engineer & Founder</p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-chatgpt-accent/10 text-chatgpt-accent">
                Available for hire
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-chatgpt-bg/60 border border-chatgpt-border/50">
            <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-chatgpt-accent" />
            </div>
            <div>
              <p className="text-xs text-chatgpt-text-secondary">Location</p>
              <p className="text-sm text-chatgpt-text-primary font-medium">San Francisco</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-chatgpt-bg/60 border border-chatgpt-border/50">
            <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-chatgpt-accent" />
            </div>
            <div>
              <p className="text-xs text-chatgpt-text-secondary">Experience</p>
              <p className="text-sm text-chatgpt-text-primary font-medium">8+ years</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-chatgpt-bg/60 border border-chatgpt-border/50">
            <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-chatgpt-accent" />
            </div>
            <div>
              <p className="text-xs text-chatgpt-text-secondary">Education</p>
              <p className="text-sm text-chatgpt-text-primary font-medium">Masters in CS</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-chatgpt-bg/60 border border-chatgpt-border/50">
            <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-chatgpt-accent" />
            </div>
            <div>
              <p className="text-xs text-chatgpt-text-secondary">Focus</p>
              <p className="text-sm text-chatgpt-text-primary font-medium">AI Products</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-4 py-3 rounded-xl bg-chatgpt-bg/60 border border-chatgpt-border/50">
            <span className="inline-flex items-center justify-center h-6 px-2 rounded-md text-xs font-semibold bg-chatgpt-accent/20 text-chatgpt-accent flex-shrink-0">Previously</span>
            <span className="text-sm text-chatgpt-text-primary">Tech Lead at <span className="font-semibold">Meta AI</span> & <span className="font-semibold">Uber</span></span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-4 py-3 rounded-xl bg-chatgpt-accent/10 border border-chatgpt-accent/20">
            <span className="inline-flex items-center justify-center h-6 px-2 rounded-md text-xs font-semibold bg-chatgpt-accent text-white flex-shrink-0">Now</span>
            <span className="text-sm text-chatgpt-text-primary">Founder building <span className="font-semibold text-chatgpt-accent">AI-powered</span> SaaS products</span>
          </div>
        </div>
      </div>
    </div>
  );
}
