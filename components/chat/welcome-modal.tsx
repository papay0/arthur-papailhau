"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles, ArrowRight, MessageSquare } from "lucide-react";

interface WelcomeModalProps {
  className?: string;
}

const STORAGE_KEY = "arthurgpt-welcome-seen";

export function WelcomeModal({ className }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has seen the welcome modal before
    const hasSeenWelcome = localStorage.getItem(STORAGE_KEY);
    if (!hasSeenWelcome) {
      // Small delay for dramatic effect
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsAnimating(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn(
          "sm:max-w-md bg-chatgpt-sidebar border-chatgpt-border shadow-2xl",
          className
        )}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center space-y-4">
          {/* Animated Logo */}
          <div className="flex justify-center">
            <div
              className={cn(
                "relative h-20 w-20 rounded-2xl bg-gradient-to-br from-chatgpt-accent to-chatgpt-accent-light flex items-center justify-center shadow-lg",
                isAnimating && "animate-pulse"
              )}
            >
              <MessageSquare className="h-10 w-10 text-white" />
              <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center animate-bounce">
                <Sparkles className="h-3 w-3 text-yellow-800" />
              </div>
            </div>
          </div>

          <DialogTitle className="text-2xl font-bold text-chatgpt-text-primary">
            Welcome to ArthurGPT
          </DialogTitle>

          <DialogDescription className="text-chatgpt-text-secondary text-base space-y-3">
            <p>
              This isn't just another ChatGPT clone - it's{" "}
              <span className="text-chatgpt-accent font-medium">
                Arthur Papailhau's portfolio
              </span>{" "}
              disguised as a chat interface.
            </p>
            <p>
              Scroll through the conversation to discover his journey from{" "}
              <span className="font-medium text-chatgpt-text-primary">
                Meta AI
              </span>{" "}
              and{" "}
              <span className="font-medium text-chatgpt-text-primary">
                Uber
              </span>{" "}
              to building AI-powered products.
            </p>
          </DialogDescription>
        </DialogHeader>

        {/* Features */}
        <div className="grid gap-2 py-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-chatgpt-bg/50 border border-chatgpt-border">
            <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
              <span className="text-lg">📜</span>
            </div>
            <div className="text-sm">
              <p className="font-medium text-chatgpt-text-primary">
                Scroll to explore
              </p>
              <p className="text-chatgpt-text-secondary text-xs">
                Each message reveals more about Arthur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-chatgpt-bg/50 border border-chatgpt-border">
            <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
              <span className="text-lg">👆</span>
            </div>
            <div className="text-sm">
              <p className="font-medium text-chatgpt-text-primary">
                Click to expand
              </p>
              <p className="text-chatgpt-text-secondary text-xs">
                Tap on cards to see more details
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-chatgpt-bg/50 border border-chatgpt-border">
            <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
              <span className="text-lg">🧭</span>
            </div>
            <div className="text-sm">
              <p className="font-medium text-chatgpt-text-primary">
                Use the sidebar
              </p>
              <p className="text-chatgpt-text-secondary text-xs">
                Jump to any section instantly
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleClose}
          className="w-full h-12 bg-chatgpt-accent hover:bg-chatgpt-accent-light text-white font-medium text-base rounded-xl shadow-lg shadow-chatgpt-accent/20 transition-all hover:scale-[1.02]"
        >
          <span>Start Exploring</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <p className="text-xs text-center text-chatgpt-text-secondary">
          Built with Next.js, Tailwind CSS, and shadcn/ui
        </p>
      </DialogContent>
    </Dialog>
  );
}
