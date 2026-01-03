"use client";

import { cn } from "@/lib/utils";

interface UserMessageProps {
  content: string;
  className?: string;
}

export function UserMessage({ content, className }: UserMessageProps) {
  return (
    <div className={cn("flex justify-end", className)}>
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[70%]">
        <div className="rounded-3xl bg-chatgpt-message-user px-4 sm:px-5 py-3 text-chatgpt-message-user-text shadow-sm flex items-center justify-center min-h-[44px]">
          <p className="text-sm sm:text-[15px] leading-none">{content}</p>
        </div>
      </div>
    </div>
  );
}
