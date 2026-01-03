"use client";

import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  className?: string;
}

export function TypingIndicator({ className }: TypingIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="typing-dot h-2 w-2 rounded-full bg-chatgpt-text-secondary" />
      <span className="typing-dot h-2 w-2 rounded-full bg-chatgpt-text-secondary" />
      <span className="typing-dot h-2 w-2 rounded-full bg-chatgpt-text-secondary" />
    </div>
  );
}
