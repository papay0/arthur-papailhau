"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("prose-chatgpt", className)}>
      <ReactMarkdown
        components={{
        // Headings
        h1: ({ children }) => (
          <h1 className="text-2xl font-semibold text-chatgpt-text-primary mt-6 mb-4 first:mt-0">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-semibold text-chatgpt-text-primary mt-5 mb-3 first:mt-0">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-semibold text-chatgpt-text-primary mt-4 mb-2 first:mt-0">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-base font-semibold text-chatgpt-text-primary mt-3 mb-2 first:mt-0">
            {children}
          </h4>
        ),

        // Paragraphs
        p: ({ children }) => (
          <p className="text-sm sm:text-[15px] leading-relaxed text-chatgpt-text-primary mb-3 sm:mb-4 last:mb-0">
            {children}
          </p>
        ),

        // Strong/Bold
        strong: ({ children }) => (
          <strong className="font-semibold text-chatgpt-text-primary">
            {children}
          </strong>
        ),

        // Emphasis/Italic
        em: ({ children }) => (
          <em className="italic text-chatgpt-text-primary">{children}</em>
        ),

        // Lists
        ul: ({ children }) => (
          <ul className="list-none space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 last:mb-0">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-none space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 last:mb-0 counter-reset-list">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="flex items-start gap-2 text-sm sm:text-[15px] leading-relaxed text-chatgpt-text-primary">
            <span className="text-chatgpt-accent mt-1 sm:mt-1.5 flex-shrink-0">•</span>
            <span className="flex-1 min-w-0">{children}</span>
          </li>
        ),

        // Links
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-chatgpt-accent hover:underline"
          >
            {children}
          </a>
        ),

        // Code
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="px-1.5 py-0.5 rounded-md bg-chatgpt-hover text-chatgpt-text-primary text-sm font-mono">
                {children}
              </code>
            );
          }
          return (
            <code className="block p-4 rounded-xl bg-chatgpt-sidebar border border-chatgpt-border text-chatgpt-text-primary text-sm font-mono overflow-x-auto">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="mb-4 last:mb-0">{children}</pre>
        ),

        // Blockquote
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-chatgpt-accent pl-4 italic text-chatgpt-text-secondary mb-4 last:mb-0">
            {children}
          </blockquote>
        ),

        // Horizontal rule
        hr: () => <hr className="border-chatgpt-border my-6" />,
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  );
}
