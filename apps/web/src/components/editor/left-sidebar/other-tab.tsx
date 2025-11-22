"use client";

import { useState } from "react";
import {
  FileText,
  Users,
  UserCircle,
  Image,
  Camera,
  Download,
  Heart,
  Plus,
  PlayCircle,
  Check,
  ImageIcon,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import {
  title,
  installation,
  contributing,
  authors,
  logo,
  screenshots,
  sponsors,
  demo,
  titleWithLogo,
  techStack,
} from "@/constant/content";
import { toast } from "sonner";

const contentItems = [
  { id: "title", name: "Title", icon: FileText, content: title },
  {
    id: "titleWithLogo",
    name: "Title with Logo",
    icon: ImageIcon,
    content: titleWithLogo,
  },
  {
    id: "installation",
    name: "Installation",
    icon: Download,
    content: installation,
  },
  {
    id: "contributing",
    name: "Contributing",
    icon: Users,
    content: contributing,
  },
  { id: "authors", name: "Authors", icon: UserCircle, content: authors },
  { id: "logo", name: "Logo", icon: Image, content: logo },
  {
    id: "screenshots",
    name: "Screenshots",
    icon: Camera,
    content: screenshots,
  },
  {
    id: "techStack",
    name: "Tech Stack",
    icon: Layers,
    content: techStack,
  },
  { id: "sponsors", name: "Sponsors", icon: Heart, content: sponsors },
  { id: "demo", name: "Demo", icon: PlayCircle, content: demo },
];

export function OtherTab() {
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { appendMarkdownContent } = useStore();

  const handleAddContent = (item: (typeof contentItems)[0]) => {
    appendMarkdownContent(item.content);
    setAddedItems((prev) => new Set(prev).add(item.id));
    toast.success(`${item.name} added to README`);

    // Reset the checkmark after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Content Items List */}
      <div className="py-1">
        {contentItems.map((item) => {
          const Icon = item.icon;
          const isAdded = addedItems.has(item.id);
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => handleAddContent(item)}
              className={cn(
                "w-full px-3 py-2 pl-6 h-auto flex items-center gap-2 hover:bg-accent/50 transition-colors group justify-start rounded-none"
              )}
            >
              <Icon className="size-3.5 text-primary shrink-0" />
              <span className="text-xs truncate flex-1 text-left">
                {item.name}
              </span>
              {isAdded ? (
                <Check className="size-3 text-green-500 shrink-0" />
              ) : (
                <Plus className="size-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
