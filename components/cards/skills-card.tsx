"use client";

import { cn } from "@/lib/utils";
import { skillsData } from "@/lib/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe } from "lucide-react";

interface SkillsCardProps {
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  smartphone: Smartphone,
  globe: Globe,
};

export function SkillsCard({ className }: SkillsCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border border-chatgpt-border overflow-hidden bg-chatgpt-sidebar",
      "w-full max-w-full",
      className
    )}>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-medium text-chatgpt-text-secondary uppercase tracking-wider mb-4">
          Technical Skills
        </h3>
        <div className="space-y-4">
          {skillsData.map((category) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div key={category.category} className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-chatgpt-accent" />
                  </div>
                  <h4 className="text-sm font-medium text-chatgpt-text-primary">
                    {category.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-10">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-chatgpt-bg/60 text-chatgpt-text-secondary border border-chatgpt-border/50 text-xs hover:bg-chatgpt-accent/10 hover:text-chatgpt-accent hover:border-chatgpt-accent/30 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
