"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, Copy, Check } from "lucide-react";
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

interface BadgesTabProps {
  badges: BadgeItem[];
  links: LinkItem[];
}

export function BadgesTab({ badges, links }: BadgesTabProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["Stats", "Custom", "Analytics", "Badges"])
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const handleCopyMarkdown = (url: string, name: string, id: string) => {
    const markdownImage = generateMarkdownImage(name, url);
    navigator.clipboard.writeText(markdownImage);
    setCopiedId(id);
    toast.success(`Copied ${name}`, {
      description: "Markdown badge copied to clipboard",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = getUniqueCategories(badges, links);

  return (
    <div className="flex-1 overflow-y-auto">
      {categories.map((category) => (
        <CategorySection
          key={category}
          category={category}
          badges={badges}
          links={links}
          isExpanded={expandedCategories.has(category)}
          onToggle={() => toggleCategory(category)}
          copiedId={copiedId}
          onCopy={handleCopyMarkdown}
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
  copiedId: string | null;
  onCopy: (url: string, name: string, id: string) => void;
}

function CategorySection({
  category,
  badges,
  links,
  isExpanded,
  onToggle,
  copiedId,
  onCopy,
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
              isCopied={copiedId === item.id}
              onCopy={onCopy}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface BadgeItemProps {
  item: BadgeItem | LinkItem;
  isCopied: boolean;
  onCopy: (url: string, name: string, id: string) => void;
}

function BadgeItem({ item, isCopied, onCopy }: BadgeItemProps) {
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
              onCopy(item.url, item.name, item.id);
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
              {isCopied ? (
                <Check className="size-3 text-primary shrink-0" />
              ) : (
                <Copy className="size-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
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
