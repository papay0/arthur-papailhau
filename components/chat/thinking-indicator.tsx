"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ThinkingIndicatorProps {
  className?: string;
}

export function ThinkingIndicator({ className }: ThinkingIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Avatar className="h-6 w-6 sm:h-7 sm:w-7 bg-chatgpt-accent">
          <AvatarFallback className="bg-chatgpt-accent text-white text-xs font-medium">
            A
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Thinking Content */}
      <div className="flex items-center gap-2 text-chatgpt-text-secondary text-sm">
        <span className="leading-none">ArthurGPT is thinking</span>
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-chatgpt-text-secondary animate-pulse" style={{ animationDelay: "0ms" }} />
          <span className="h-1 w-1 rounded-full bg-chatgpt-text-secondary animate-pulse" style={{ animationDelay: "200ms" }} />
          <span className="h-1 w-1 rounded-full bg-chatgpt-text-secondary animate-pulse" style={{ animationDelay: "400ms" }} />
        </span>
      </div>
    </div>
  );
}
