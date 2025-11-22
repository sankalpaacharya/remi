import type { LucideIcon } from "lucide-react";

export interface BadgeItem {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
  category: string;
}

export interface LinkItem {
  id: string;
  name: string;
  icon: LucideIcon;
  category: string;
}

export interface TechStackItem {
  id: string;
  name: string;
  iconUrl: string;
  category: string;
}

export type TabValue = "badges" | "content" | "icons";
export type IconTabValue = "tech-stack" | "social";
