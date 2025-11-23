"use client";

import { useState } from "react";
import { Check, Code2, Share2 } from "lucide-react";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { TechStackItem, IconTabValue } from "./types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechStackTabProps {
  techStackItems: TechStackItem[];
  socialItems: TechStackItem[];
}

export function TechStackTab({
  techStackItems,
  socialItems,
}: TechStackTabProps) {
  const { appendMarkdownContent } = useStore();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<IconTabValue>("tech-stack");

  const handleAddIcon = (item: TechStackItem) => {
    const markdown = `<img width="50" src="${item.iconUrl}" alt="${item.name}" />`;
    appendMarkdownContent(markdown);

    setCopiedId(item.id);
    toast.success(`${item.name} icon added!`, {
      description: "Check your markdown editor",
    });

    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderIconGrid = (items: TechStackItem[]) => {
    // Group items by category
    const groupedItems = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, TechStackItem[]>);

    return (
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <TooltipProvider>
          {Object.entries(groupedItems).map(([category, categoryItems]) => (
            <div key={category}>
              {/* Category Header */}
              <div className="px-4 py-2 border-b bg-muted/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    {category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {categoryItems.length}
                  </span>
                </div>
              </div>

              {/* Icons Grid */}
              <div className="grid grid-cols-6 gap-2 p-3">
                {categoryItems.map((item) => {
                  const isAdded = copiedId === item.id;

                  return (
                    <Tooltip key={item.id}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => handleAddIcon(item)}
                          className={cn(
                            "relative aspect-square rounded-md border-2 p-2 transition-all",
                            "hover:border-primary hover:bg-accent/50",
                            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                            isAdded && "border-green-500 bg-green-500/10"
                          )}
                        >
                          <img
                            src={item.iconUrl}
                            alt={item.name}
                            className="size-full object-contain"
                          />
                          {isAdded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-md">
                              <Check className="size-5 text-green-500" />
                            </div>
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-xs">{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          ))}
        </TooltipProvider>
      </div>
    );
  };

  return (
    <Tabs
      value={activeSubTab}
      onValueChange={(value) => setActiveSubTab(value as IconTabValue)}
      className="flex-1 flex flex-col min-h-0"
    >
      <TabsList className="w-full rounded-none border-b bg-transparent p-0 h-auto shrink-0">
        <TabsTrigger
          value="tech-stack"
          className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
        >
          <Code2 className="size-3.5" />
          <span>Tech Stack</span>
        </TabsTrigger>
        <TabsTrigger
          value="social"
          className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
        >
          <Share2 className="size-3.5" />
          <span>Social</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="tech-stack"
        className="flex-1 m-0 flex flex-col min-h-0 overflow-hidden"
      >
        {renderIconGrid(techStackItems)}
      </TabsContent>

      <TabsContent
        value="social"
        className="flex-1 m-0 flex flex-col min-h-0 overflow-hidden"
      >
        {renderIconGrid(socialItems)}
      </TabsContent>
    </Tabs>
  );
}
