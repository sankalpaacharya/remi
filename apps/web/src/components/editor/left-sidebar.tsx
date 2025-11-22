"use client";

import { useState } from "react";
import {
  Star,
  GitFork,
  AlertCircle,
  GitCommit,
  Heart,
  Code,
  Users,
  Link2,
  TrendingUp,
  Award,
  Shield,
  ChevronRight,
  ChevronDown,
  Copy,
  Check,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

// Types
interface BadgeItem {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
  category: string;
}

interface LinkItem {
  id: string;
  name: string;
  icon: LucideIcon;
  category: string;
}

// Badge configuration
const BADGE_URLS = {
  stars:
    "https://img.shields.io/github/stars/sankalpaacharya/shadcn-collections",
  forks:
    "https://img.shields.io/github/forks/sankalpaacharya/shadcn-collections",
  issues:
    "https://img.shields.io/github/issues/sankalpaacharya/shadcn-collections",
  lastCommit:
    "https://img.shields.io/github/last-commit/sankalpaacharya/shadcn-collections",
  love: "https://img.shields.io/badge/Made%20with-Love-ff69b4",
  openSource: "https://img.shields.io/badge/Open%20Source-%E2%9D%A4-purple",
  contributions: "https://img.shields.io/badge/contributions-welcome-blue.svg",
} as const;

// Badge items with markdown-ready URLs
const BADGE_ITEMS: BadgeItem[] = [
  {
    id: "stars",
    name: "GitHub Stars",
    url: BADGE_URLS.stars,
    icon: Star,
    category: "Stats",
  },
  {
    id: "forks",
    name: "GitHub Forks",
    url: BADGE_URLS.forks,
    icon: GitFork,
    category: "Stats",
  },
  {
    id: "issues",
    name: "GitHub Issues",
    url: BADGE_URLS.issues,
    icon: AlertCircle,
    category: "Stats",
  },
  {
    id: "lastCommit",
    name: "Last Commit",
    url: BADGE_URLS.lastCommit,
    icon: GitCommit,
    category: "Stats",
  },
  {
    id: "love",
    name: "Made with Love",
    url: BADGE_URLS.love,
    icon: Heart,
    category: "Custom",
  },
  {
    id: "openSource",
    name: "Open Source",
    url: BADGE_URLS.openSource,
    icon: Code,
    category: "Custom",
  },
  {
    id: "contributions",
    name: "Contributions Welcome",
    url: BADGE_URLS.contributions,
    icon: Users,
    category: "Custom",
  },
];

// Additional links (without URLs - placeholders for future features)
const ADDITIONAL_LINKS: LinkItem[] = [
  {
    id: "star-history",
    name: "Star History",
    icon: TrendingUp,
    category: "Analytics",
  },
  {
    id: "shields-io",
    name: "Shields.io",
    icon: Shield,
    category: "Badges",
  },
  {
    id: "contributor-badge",
    name: "Contributors",
    icon: Award,
    category: "Badges",
  },
];

// Utility functions
const generateMarkdownImage = (name: string, url: string): string => {
  const altText = name.toLowerCase().replace(/\s+/g, "-");
  return `![${altText}](${url})`;
};

const getUniqueCategories = (
  badges: BadgeItem[],
  links: LinkItem[]
): string[] => {
  return Array.from(
    new Set([
      ...badges.map((item) => item.category),
      ...links.map((item) => item.category),
    ])
  );
};

export default function LeftSideBar() {
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

  const categories = getUniqueCategories(BADGE_ITEMS, ADDITIONAL_LINKS);

  return (
    <div className="h-full w-full flex flex-col font-mono text-sm">
      {/* Sidebar Header */}
      <div className="px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <Link2 className="size-[18px] text-primary" />
          <span className="text-lg font-semibold">Badges & Links</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {categories.map((category) => (
          <CategorySection
            key={category}
            category={category}
            badges={BADGE_ITEMS}
            links={ADDITIONAL_LINKS}
            isExpanded={expandedCategories.has(category)}
            onToggle={() => toggleCategory(category)}
            copiedId={copiedId}
            onCopy={handleCopyMarkdown}
          />
        ))}
      </div>

      {/* Footer Info */}
      <SidebarFooter
        totalItems={BADGE_ITEMS.length + ADDITIONAL_LINKS.length}
      />
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
        <TooltipContent side="right" className="font-mono text-xs max-w-xs">
          <p className="mb-1">Click to copy markdown badge</p>
          <code className="text-[10px] text-muted-foreground">
            ![{item.name.toLowerCase().replace(/\s+/g, "-")}](...)
          </code>
        </TooltipContent>
      )}
    </Tooltip>
  );
}

interface SidebarFooterProps {
  totalItems: number;
}

function SidebarFooter({ totalItems }: SidebarFooterProps) {
  return (
    <div className="px-4 py-2 border-t">
      <div className="text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Copy as Markdown</span>
          <span className="text-primary font-semibold">{totalItems} items</span>
        </div>
      </div>
    </div>
  );
}
