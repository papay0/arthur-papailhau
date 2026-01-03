"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Copy, ThumbsUp, ThumbsDown, RotateCcw, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { MarkdownRenderer } from "./markdown-renderer";

interface AIMessageProps {
  content: string;
  children?: React.ReactNode;
  className?: string;
  showActions?: boolean;
}

export function AIMessage({ content, children, className, showActions = true }: AIMessageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text content with avatar */}
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Avatar className="h-6 w-6 sm:h-7 sm:w-7 bg-chatgpt-accent">
            <AvatarFallback className="bg-chatgpt-accent text-white text-xs font-medium">
              A
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Message Content */}
        <div className="flex-1 min-w-0 [&_.prose-chatgpt_p:first-of-type]:!leading-[24px]">
          <MarkdownRenderer content={content} />

          {/* Card Content - Desktop only (inline with text) */}
          {children && (
            <div className="hidden sm:block mt-4 w-full max-w-full overflow-hidden">
              {children}
            </div>
          )}

          {/* Action Buttons */}
          {showActions && (
            <div className={cn(
              "flex items-center gap-1 mt-3 transition-opacity duration-200",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText(content);
                  toast.success("Copied to clipboard");
                }}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-lg"
                onClick={() => toast.success("Thanks for the feedback!")}
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-lg"
                onClick={() => toast.info("Feedback noted - I'll try to improve!")}
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-lg"
                onClick={() => toast.info("This is a portfolio - no regeneration needed!")}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Link copied to clipboard");
                }}
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Card Content - Mobile only (full width, centered) */}
      {children && (
        <div className="sm:hidden mt-4 w-full max-w-full overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
}
