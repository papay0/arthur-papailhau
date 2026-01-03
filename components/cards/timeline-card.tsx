"use client";

import { cn } from "@/lib/utils";
import { timelineData, type TimelineEntry } from "@/lib/data/portfolio";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Building2, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";

interface TimelineCardProps {
  className?: string;
}

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast: boolean;
}

function TimelineItem({ entry, isLast }: TimelineItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isEducation = entry.type === "education";

  return (
    <div className="relative pl-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-chatgpt-border" />
      )}

      {/* Timeline Dot */}
      <div
        className={cn(
          "absolute left-0 top-1.5 h-6 w-6 rounded-full flex items-center justify-center",
          isEducation
            ? "bg-blue-500/20 text-blue-400"
            : "bg-chatgpt-accent/20 text-chatgpt-accent"
        )}
      >
        {isEducation ? (
          <GraduationCap className="h-3 w-3" />
        ) : (
          <Building2 className="h-3 w-3" />
        )}
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full text-left group">
          <div className="flex items-start justify-between gap-4 pb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-[15px] font-medium text-chatgpt-text-primary">
                  {entry.role}
                </h4>
                {entry.duration && (
                  <Badge
                    variant="secondary"
                    className="bg-chatgpt-accent/10 text-chatgpt-accent border-0 text-xs"
                  >
                    {entry.duration}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm text-chatgpt-text-secondary">{entry.company}</span>
                <span className="text-chatgpt-border">•</span>
                <span className="text-sm text-chatgpt-text-secondary">{entry.period}</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-chatgpt-text-secondary">
                <MapPin className="h-3 w-3" />
                <span>{entry.location}</span>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-chatgpt-text-secondary transition-transform duration-200 flex-shrink-0",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="pb-4">
          <div className="card-expand-animate">
            {/* Description */}
            <p className="text-sm text-chatgpt-text-secondary mb-3">
              {entry.description}
            </p>

            {/* Highlights */}
            {entry.highlights.length > 0 && (
              <ul className="space-y-1.5 mb-3">
                {entry.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-chatgpt-text-secondary flex items-start gap-2"
                  >
                    <span className="text-chatgpt-accent mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Technologies */}
            {entry.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {entry.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-chatgpt-border text-chatgpt-text-secondary bg-transparent"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export function TimelineCard({ className }: TimelineCardProps) {
  const workExperience = timelineData.filter((e) => e.type === "work");
  const education = timelineData.filter((e) => e.type === "education");

  return (
    <div className={cn(
      "rounded-2xl border border-chatgpt-border overflow-hidden bg-chatgpt-sidebar",
      "w-full max-w-full",
      className
    )}>
      <div className="p-4 sm:p-5">
      {/* Work Experience */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-chatgpt-text-secondary uppercase tracking-wider mb-4">
          Work Experience
        </h3>
        <div className="space-y-0">
          {workExperience.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isLast={index === workExperience.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-sm font-medium text-chatgpt-text-secondary uppercase tracking-wider mb-4">
          Education
        </h3>
        <div className="space-y-0">
          {education.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
