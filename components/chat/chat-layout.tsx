"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { ChatHeader } from "./chat-header";
import { ChatMessages, ChatMessagesRef } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { WelcomeModal } from "./welcome-modal";

interface ChatLayoutProps {
  className?: string;
}

export interface UserChatMessage {
  id: string;
  userMessage: string;
  aiResponse: string;
}

export interface PendingMessage {
  id: string;
  userMessage: string;
}

export function ChatLayout({ className }: ChatLayoutProps) {
  const chatMessagesRef = useRef<ChatMessagesRef>(null);
  const [userMessages, setUserMessages] = useState<UserChatMessage[]>([]);
  const [pendingMessage, setPendingMessage] = useState<PendingMessage | null>(null);

  const handleNavigate = (sectionId: string) => {
    chatMessagesRef.current?.scrollToSection(sectionId);
  };

  const handleNewMessage = useCallback((userMessage: string, aiResponse: string) => {
    const messageId = `user-${Date.now()}`;

    // First, show the user message with thinking indicator
    setPendingMessage({ id: messageId, userMessage });

    // Scroll to bottom immediately to show thinking indicator
    setTimeout(() => {
      chatMessagesRef.current?.scrollToBottom();
    }, 50);

    // After 1.5 seconds, replace thinking with actual response
    setTimeout(() => {
      setPendingMessage(null);
      setUserMessages((prev) => [...prev, {
        id: messageId,
        userMessage,
        aiResponse,
      }]);
      // Scroll to bottom to show the response
      setTimeout(() => {
        chatMessagesRef.current?.scrollToBottom();
      }, 50);
    }, 1500);
  }, []);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className={cn("flex h-screen w-full bg-chatgpt-bg", className)}>
        <AppSidebar onNavigate={handleNavigate} />
        <SidebarInset className="flex flex-col bg-chatgpt-bg">
          <ChatHeader />
          <ChatMessages
            ref={chatMessagesRef}
            userMessages={userMessages}
            pendingMessage={pendingMessage}
          />
          <ChatInput onSendMessage={handleNewMessage} />
        </SidebarInset>
      </div>
      <WelcomeModal />
    </SidebarProvider>
  );
}
