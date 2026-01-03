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
import { ArrowRight } from "lucide-react";

interface WelcomeModalProps {
  className?: string;
}

export function WelcomeModal({ className }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn(
          "sm:max-w-sm bg-chatgpt-sidebar border-chatgpt-border",
          className
        )}
      >
        <DialogHeader className="text-center space-y-3">
          <DialogTitle className="text-xl font-semibold text-chatgpt-text-primary">
            Welcome to ArthurGPT
          </DialogTitle>

          <DialogDescription className="text-chatgpt-text-secondary text-sm">
            This is Arthur Papailhau's portfolio disguised as ChatGPT. Scroll through the chat to explore.
          </DialogDescription>
        </DialogHeader>

        <Button
          onClick={() => setIsOpen(false)}
          className="w-full mt-2 bg-chatgpt-accent hover:bg-chatgpt-accent-light text-white rounded-xl"
        >
          <span>Start Exploring</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}
