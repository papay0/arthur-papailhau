"use client";

import { cn } from "@/lib/utils";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, Globe, ArrowUp, Mic } from "lucide-react";
import { playfulResponses } from "@/lib/data/portfolio";

interface ChatInputProps {
  className?: string;
  onSendMessage?: (userMessage: string, aiResponse: string) => void;
}

export function ChatInput({ className, onSendMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");

  const getRandomResponse = () => {
    return playfulResponses[Math.floor(Math.random() * playfulResponses.length)];
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const userMessage = inputValue.trim();
      const aiResponse = getRandomResponse();
      onSendMessage?.(userMessage, aiResponse);
      setInputValue("");
    }
  };

  return (
    <div className={cn("sticky bottom-0 pb-4 pt-2 bg-chatgpt-bg", className)}>

      <div className="max-w-3xl mx-auto px-3 sm:px-4">
        <form onSubmit={handleSubmit}>
          <div className="relative flex items-end gap-1 sm:gap-2 rounded-3xl border border-chatgpt-border bg-chatgpt-input-bg p-1.5 sm:p-2 shadow-sm">
            {/* Attachment Button */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl"
            >
              <Paperclip className="h-5 w-5" />
            </Button>

            {/* Input Field */}
            <div className="flex-1 min-h-[44px] flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message ArthurGPT..."
                className="w-full bg-transparent text-chatgpt-text-primary placeholder-chatgpt-text-secondary text-[15px] focus:outline-none resize-none py-2 px-1"
              />
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Web Search Button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl"
              >
                <Globe className="h-5 w-5" />
              </Button>

              {/* Voice Button or Submit */}
              {inputValue.trim() ? (
                <Button
                  type="submit"
                  size="icon"
                  className="h-9 w-9 bg-gradient-to-r from-chatgpt-accent to-chatgpt-accent-light text-white hover:opacity-90 rounded-xl shadow-md shadow-chatgpt-accent/20 transition-all hover:scale-105"
                >
                  <ArrowUp className="h-5 w-5" />
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-chatgpt-text-secondary hover:text-chatgpt-accent hover:bg-chatgpt-accent/10 rounded-xl transition-colors"
                >
                  <Mic className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </form>

        {/* Footer text */}
        <p className="text-xs text-chatgpt-text-secondary text-center mt-2">
          ArthurGPT - Scroll up to explore his journey.
        </p>
      </div>
    </div>
  );
}
