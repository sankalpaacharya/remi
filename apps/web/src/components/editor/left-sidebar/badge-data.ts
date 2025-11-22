import {
  Star,
  GitFork,
  AlertCircle,
  GitCommit,
  Heart,
  Code,
  Users,
  TrendingUp,
  Award,
  Shield,
  BarChart3,
} from "lucide-react";
import type { BadgeItem, LinkItem } from "./types";

export const getBadgeUrls = (repoUrl: string) => {
  const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  const repoPath = match ? `${match[1]}/${match[2]}` : "user/repo";
  
  // Extract repo ID for Repobeats (this would need to be fetched from Repobeats API)
  // For now, using a placeholder - users will need to get their own embed ID from repobeats.axiom.co
  const repobeatsId = "REPOBEATS_EMBED_ID"; // Placeholder

  return {
    stars: `https://img.shields.io/github/stars/${repoPath}`,
    forks: `https://img.shields.io/github/forks/${repoPath}`,
    issues: `https://img.shields.io/github/issues/${repoPath}`,
    lastCommit: `https://img.shields.io/github/last-commit/${repoPath}`,
    love: "https://img.shields.io/badge/Made%20with-Love-ff69b4",
    openSource: "https://img.shields.io/badge/Open%20Source-%E2%9D%A4-purple",
    contributions:
      "https://img.shields.io/badge/contributions-welcome-blue.svg",
    starHistory: `https://api.star-history.com/svg?repos=${repoPath}&type=Date`,
    contributors: `https://contrib.rocks/image?repo=${repoPath}`,
    repobeats: `https://repobeats.axiom.co/api/embed/47d5d7ebc2c5e7424e4fe7389c2f2a606a217966.svg `,
  };
};

export const getBadgeItems = (repoUrl: string): BadgeItem[] => {
  const urls = getBadgeUrls(repoUrl);

  return [
    {
      id: "stars",
      name: "GitHub Stars",
      url: urls.stars,
      icon: Star,
      category: "Stats",
    },
    {
      id: "forks",
      name: "GitHub Forks",
      url: urls.forks,
      icon: GitFork,
      category: "Stats",
    },
    {
      id: "issues",
      name: "GitHub Issues",
      url: urls.issues,
      icon: AlertCircle,
      category: "Stats",
    },
    {
      id: "lastCommit",
      name: "Last Commit",
      url: urls.lastCommit,
      icon: GitCommit,
      category: "Stats",
    },
    {
      id: "love",
      name: "Made with Love",
      url: urls.love,
      icon: Heart,
      category: "Custom",
    },
    {
      id: "openSource",
      name: "Open Source",
      url: urls.openSource,
      icon: Code,
      category: "Custom",
    },
    {
      id: "contributions",
      name: "Contributions Welcome",
      url: urls.contributions,
      icon: Users,
      category: "Custom",
    },
    {
      id: "star-history",
      name: "Star History Chart",
      url: urls.starHistory,
      icon: TrendingUp,
      category: "Analytics",
    },
    {
      id: "contributors",
      name: "Contributors",
      url: urls.contributors,
      icon: Award,
      category: "Analytics",
    },
    {
      id: "repobeats",
      name: "Repobeats Analytics",
      url: urls.repobeats,
      icon: BarChart3,
      category: "Analytics",
    },
  ];
};

// Additional links (without URLs - placeholders for future features)
export const ADDITIONAL_LINKS: LinkItem[] = [
  {
    id: "shields-io",
    name: "Shields.io",
    icon: Shield,
    category: "Badges",
  },
];



