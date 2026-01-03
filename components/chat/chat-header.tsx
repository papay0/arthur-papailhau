"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Share, MoreHorizontal, PanelLeft } from "lucide-react";

interface ChatHeaderProps {
  className?: string;
}

// ChatGPT-style mobile menu icon (three horizontal lines)
function MobileMenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
}

export function ChatHeader({ className }: ChatHeaderProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex items-center justify-between h-14 px-4 bg-chatgpt-bg border-b border-chatgpt-border",
        className
      )}
    >
      {/* Left side - Sidebar trigger + Model selector */}
      <div className="flex items-center gap-2">
        {/* Desktop sidebar trigger */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="hidden sm:flex h-9 w-9 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover"
        >
          <PanelLeft className="h-5 w-5" />
        </Button>
        {/* Mobile ChatGPT-style menu icon */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="flex sm:hidden h-9 w-9 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover"
        >
          <MobileMenuIcon className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-9 px-3 text-chatgpt-text-primary hover:bg-chatgpt-hover gap-1.5"
            >
              <span className="font-semibold">ArthurGPT</span>
              <ChevronDown className="h-4 w-4 text-chatgpt-text-secondary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[200px] bg-chatgpt-sidebar border-chatgpt-border"
          >
            <DropdownMenuItem className="text-chatgpt-text-primary hover:bg-chatgpt-hover cursor-default">
              <div className="flex flex-col">
                <span className="font-medium">ArthurGPT</span>
                <span className="text-xs text-chatgpt-text-secondary">
                  Interactive Portfolio
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover"
        >
          <Share className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover"
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
