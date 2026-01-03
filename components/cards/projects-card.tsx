"use client";

import { cn } from "@/lib/utils";
import { projectsData, type Project } from "@/lib/data/portfolio";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ExternalLink, Rocket } from "lucide-react";
import { useState } from "react";

interface ProjectsCardProps {
  className?: string;
}

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="rounded-xl border border-chatgpt-border bg-chatgpt-bg/50 overflow-hidden transition-all duration-200 hover:border-chatgpt-accent/50">
        <CollapsibleTrigger className="w-full text-left p-4 group">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-chatgpt-accent/10 flex items-center justify-center">
                  <Rocket className="h-4 w-4 text-chatgpt-accent" />
                </div>
                <h4 className="text-[15px] font-medium text-chatgpt-text-primary">
                  {project.name}
                </h4>
              </div>
              <p className="text-sm text-chatgpt-text-secondary mt-2">
                {project.tagline}
              </p>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-chatgpt-text-secondary transition-transform duration-200 flex-shrink-0 mt-1",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-4 pb-4 pt-0 card-expand-animate">
            <p className="text-sm text-chatgpt-text-secondary mb-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs border-chatgpt-border text-chatgpt-text-secondary bg-transparent"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-chatgpt-accent hover:underline"
            >
              <span>Visit {project.name}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

export function ProjectsCard({ className }: ProjectsCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border border-chatgpt-border overflow-hidden bg-chatgpt-sidebar",
      "w-full max-w-full",
      className
    )}>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-medium text-chatgpt-text-secondary uppercase tracking-wider mb-4">
          Featured Projects
        </h3>
        <div className="grid gap-3">
          {projectsData.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
