"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { Markdown } from "../../chatcn/ai/markdown";
import type { BadgeItem, LinkItem } from "./types";
import { generateMarkdownImage, getUniqueCategories } from "./utils";
import { useStore } from "@/store/useStore";

interface BadgesTabProps {
  badges: BadgeItem[];
  links: LinkItem[];
}

export function BadgesTab({ badges, links }: BadgesTabProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["Stats", "Custom", "Analytics", "Badges"])
  );
  const [addedId, setAddedId] = useState<string | null>(null);
  const { appendMarkdownContent } = useStore();

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleAddMarkdown = (url: string, name: string, id: string) => {
    const markdownImage = generateMarkdownImage(name, url);
    appendMarkdownContent(markdownImage);
    setAddedId(id);
    toast.success(`${name} added to README`);
    setTimeout(() => setAddedId(null), 2000);
  };

  const categories = getUniqueCategories(badges, links);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {categories.map((category) => (
        <CategorySection
          key={category}
          category={category}
          badges={badges}
          links={links}
          isExpanded={expandedCategories.has(category)}
          onToggle={() => toggleCategory(category)}
          addedId={addedId}
          onAdd={handleAddMarkdown}
        />
      ))}
    </div>
  );
}

// Sub-components
interface CategorySectionProps {
  category: string;
  badges: BadgeItem[];
  links: LinkItem[];
  isExpanded: boolean;
  onToggle: () => void;
  addedId: string | null;
  onAdd: (url: string, name: string, id: string) => void;
}

function CategorySection({
  category,
  badges,
  links,
  isExpanded,
  onToggle,
  addedId,
  onAdd,
}: CategorySectionProps) {
  const categoryItems = [
    ...badges.filter((item) => item.category === category),
    ...links.filter((item) => item.category === category),
  ];

  return (
    <div className="border-b border-border/50">
      {/* Category Header */}
      <Button
        variant="ghost"
        onClick={onToggle}
        className="w-full px-3 py-2 h-auto flex items-center gap-2 hover:bg-accent transition-colors justify-start rounded-none"
      >
        {isExpanded ? (
          <ChevronDown className="size-3.5" />
        ) : (
          <ChevronRight className="size-3.5" />
        )}
        <span className="text-xs font-semibold uppercase tracking-wide">
          {category}
        </span>
        <span className="ml-auto text-xs text-muted-foreground">
          {categoryItems.length}
        </span>
      </Button>

      {/* Category Items */}
      {isExpanded && (
        <div className="pb-1">
          {categoryItems.map((item) => (
            <BadgeItem
              key={item.id}
              item={item}
              isAdded={addedId === item.id}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface BadgeItemProps {
  item: BadgeItem | LinkItem;
  isAdded: boolean;
  onAdd: (url: string, name: string, id: string) => void;
}

function BadgeItem({ item, isAdded, onAdd }: BadgeItemProps) {
  const Icon = item.icon;
  const hasUrl = "url" in item && item.url;
  const markdownCode = hasUrl ? generateMarkdownImage(item.name, item.url) : "";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          disabled={!hasUrl}
          onClick={() => {
            if (hasUrl) {
              onAdd(item.url, item.name, item.id);
            }
          }}
          className={cn(
            "w-full px-3 py-2 pl-8 h-auto flex items-center gap-2 hover:bg-accent/50 transition-colors group justify-start rounded-none",
            !hasUrl && "opacity-60"
          )}
        >
          <Icon className="size-3.5 text-primary shrink-0" />
          <span className="text-xs truncate flex-1 text-left">{item.name}</span>
          {hasUrl && (
            <>
              {isAdded ? (
                <Check className="size-3 text-green-500 shrink-0" />
              ) : (
                <Plus className="size-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              )}
            </>
          )}
        </Button>
      </TooltipTrigger>
      {hasUrl && (
        <TooltipContent
          side="right"
          className="bg-card border-border"
          sideOffset={5}
        >
          <Markdown theme="dark">{markdownCode}</Markdown>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
