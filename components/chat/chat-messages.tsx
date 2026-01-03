"use client";

import { cn } from "@/lib/utils";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatFlowData, welcomeMessage } from "@/lib/data/portfolio";
import { UserMessage } from "./user-message";
import { AIMessage } from "./ai-message";
import { ThinkingIndicator } from "./thinking-indicator";
import { IntroCard } from "@/components/cards/intro-card";
import { TimelineCard } from "@/components/cards/timeline-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { SkillsCard } from "@/components/cards/skills-card";
import { ContactCard } from "@/components/cards/contact-card";
import type { UserChatMessage, PendingMessage } from "./chat-layout";

interface ChatMessagesProps {
  className?: string;
  userMessages?: UserChatMessage[];
  pendingMessage?: PendingMessage | null;
}

export interface ChatMessagesRef {
  scrollToSection: (sectionId: string) => void;
  scrollToBottom: () => void;
}

const cardComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  intro: IntroCard,
  timeline: TimelineCard,
  projects: ProjectsCard,
  skills: SkillsCard,
  contact: ContactCard,
};

export const ChatMessages = forwardRef<ChatMessagesRef, ChatMessagesProps>(
  function ChatMessages({ className, userMessages = [], pendingMessage }, ref) {
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => ({
      scrollToSection: (sectionId: string) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      scrollToBottom: () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    return (
      <ScrollArea className={cn("flex-1 overflow-x-hidden", className)}>
        <div className="max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-8 space-y-4 sm:space-y-6">
          {/* Welcome Message */}
          <div className="message-animate">
            <AIMessage content={welcomeMessage} showActions={false} />
          </div>

          {/* Chat Messages */}
          {chatFlowData.map((message, index) => {
            const CardComponent = message.cardType
              ? cardComponents[message.cardType]
              : null;

            return (
              <div
                key={message.id}
                ref={(el) => {
                  if (message.sectionId) {
                    sectionRefs.current[message.sectionId] = el;
                  }
                }}
                className="message-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {message.type === "user" ? (
                  <UserMessage content={message.content} />
                ) : (
                  <AIMessage content={message.content}>
                    {CardComponent && <CardComponent />}
                  </AIMessage>
                )}
              </div>
            );
          })}

          {/* User Added Messages */}
          {userMessages.map((msg) => (
            <div key={msg.id} className="space-y-4 sm:space-y-6">
              <div className="message-animate">
                <UserMessage content={msg.userMessage} />
              </div>
              <div className="message-animate">
                <AIMessage content={msg.aiResponse} />
              </div>
            </div>
          ))}

          {/* Pending Message with Thinking Indicator */}
          {pendingMessage && (
            <div className="space-y-4 sm:space-y-6">
              <div className="message-animate">
                <UserMessage content={pendingMessage.userMessage} />
              </div>
              <div className="message-animate">
                <ThinkingIndicator />
              </div>
            </div>
          )}

          {/* Bottom Spacing & Scroll Target */}
          <div ref={bottomRef} className="h-8" />
        </div>
      </ScrollArea>
    );
  }
);
