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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contentItems = [
  { id: "title", name: "Title", icon: FileText },
  { id: "contributing", name: "Contributing", icon: Users },
  { id: "authors", name: "Authors", icon: UserCircle },
  { id: "logo", name: "Logo", icon: Image },
  { id: "screenshots", name: "Screenshots", icon: Camera },
  { id: "installation", name: "Installation", icon: Download },
  { id: "sponsors", name: "Sponsors", icon: Heart },
  { id: "demo", name: "Demo", icon: PlayCircle },
];

export function OtherTab() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Content Items List */}
      <div className="py-1">
        {contentItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => setSelectedItem(item.id)}
              className={cn(
                "w-full px-3 py-2 pl-6 h-auto flex items-center gap-2 hover:bg-accent/50 transition-colors group justify-start rounded-none"
              )}
            >
              <Icon className="size-3.5 text-primary shrink-0" />
              <span className="text-xs truncate flex-1 text-left">
                {item.name}
              </span>
              <Plus className="size-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </Button>
          );
        })}
      </div>
    </div>
  );
}
