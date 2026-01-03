"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingAnimationOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypingAnimation({
  text,
  speed = 30,
  delay = 0,
  onComplete,
}: UseTypingAnimationOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayedText("");
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [text, speed, delay, isTyping, onComplete]);

  return {
    displayedText,
    isTyping,
    isComplete,
    startTyping,
  };
}

// Hook for managing playful responses
export function usePlayfulResponse(responses: string[]) {
  const [response, setResponse] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showResponse = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    setResponse(responses[randomIndex]);
    setIsVisible(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [responses]);

  const hideResponse = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    response,
    isVisible,
    showResponse,
    hideResponse,
  };
}
