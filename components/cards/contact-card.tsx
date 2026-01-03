"use client";

import { cn } from "@/lib/utils";
import { socialLinksData } from "@/lib/data/portfolio";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink, FileText } from "lucide-react";

interface ContactCardProps {
  className?: string;
}

// Custom X/Twitter icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  linkedin: Linkedin,
  twitter: XIcon,
  file: FileText,
};

export function ContactCard({ className }: ContactCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border border-chatgpt-border overflow-hidden bg-chatgpt-sidebar",
      "w-full max-w-full",
      className
    )}>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-medium text-chatgpt-text-secondary uppercase tracking-wider mb-4">
          Get in Touch
        </h3>
        <div className="space-y-2">
          {socialLinksData.map((link) => {
            const Icon = iconMap[link.icon] || Mail;
            return (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform === "Email" ? undefined : "_blank"}
                rel={link.platform === "Email" ? undefined : "noopener noreferrer"}
                className="block"
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start h-auto py-3 px-4 hover:bg-chatgpt-accent/10 rounded-xl group border border-transparent hover:border-chatgpt-accent/20 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-chatgpt-accent/10 flex items-center justify-center mr-3 group-hover:bg-chatgpt-accent/20 group-hover:scale-105 transition-all">
                    <Icon className="h-5 w-5 text-chatgpt-accent" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-chatgpt-text-primary group-hover:text-chatgpt-accent transition-colors">
                      {link.platform}
                    </div>
                    <div className="text-xs text-chatgpt-text-secondary">
                      {link.label}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-chatgpt-text-secondary opacity-0 group-hover:opacity-100 group-hover:text-chatgpt-accent transition-all" />
                </Button>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-5 pt-4 border-t border-chatgpt-border/50">
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-chatgpt-accent/10 border border-chatgpt-accent/20">
            <span className="text-sm text-chatgpt-text-primary">
              Open to interesting conversations and new opportunities!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
