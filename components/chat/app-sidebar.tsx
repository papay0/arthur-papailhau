"use client";

import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  SquarePen,
  User,
  Briefcase,
  Rocket,
  Code,
  Mail,
  ExternalLink,
  Sun,
  Moon,
  FileText,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

interface AppSidebarProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

const navigationItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Rocket },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
];

export function AppSidebar({ className, onNavigate }: AppSidebarProps) {
  const { theme, setTheme } = useTheme();

  const handleNavigate = (sectionId: string) => {
    onNavigate?.(sectionId);
  };

  return (
    <Sidebar
      className={cn("border-r border-chatgpt-border bg-chatgpt-sidebar", className)}
      collapsible="icon"
    >
      <SidebarHeader className="p-2">
        {/* New Chat Button */}
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 h-10 px-3 text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl"
        >
          <SquarePen className="h-5 w-5" />
          <span className="group-data-[collapsible=icon]:hidden">New chat</span>
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Navigation Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-chatgpt-text-secondary text-xs uppercase tracking-wider px-3 mb-2 group-data-[collapsible=icon]:hidden">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => handleNavigate(item.id)}
                    className="text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl h-10"
                    tooltip={item.label}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* External Links */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-chatgpt-text-secondary text-xs uppercase tracking-wider px-3 mb-2 group-data-[collapsible=icon]:hidden">
            Links
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl h-10"
                  tooltip="LinkedIn"
                >
                  <Link
                    href="https://www.linkedin.com/in/arthur-papailhau/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl h-10"
                  tooltip="Twitter"
                >
                  <Link
                    href="https://x.com/papay0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Twitter</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl h-10"
                  tooltip="Resume"
                >
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Resume</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2 border-t border-chatgpt-border">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-full justify-start gap-2 h-10 px-3 text-chatgpt-text-secondary hover:text-chatgpt-text-primary hover:bg-chatgpt-hover rounded-xl"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="group-data-[collapsible=icon]:hidden">
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </span>
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-chatgpt-hover cursor-default">
          <div className="h-8 w-8 rounded-full bg-chatgpt-accent flex items-center justify-center text-white text-sm font-medium">
            AP
          </div>
          <span className="text-sm text-chatgpt-text-primary group-data-[collapsible=icon]:hidden">
            Arthur Papailhau
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
