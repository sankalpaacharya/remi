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
import type { BadgeItem, LinkItem, TechStackItem } from "./types";

export const getBadgeUrls = (repoUrl: string) => {
  const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  const repoPath = match ? `${match[1]}/${match[2]}` : "user/repo";
  
  const repobeatsId = "REPOBEATS_EMBED_ID"; 

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

// Tech Stack Icons using devicon
export const TECH_STACK_ITEMS: TechStackItem[] = [
  // Languages
  {
    id: "python",
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "Languages",
  },
  {
    id: "javascript",
    name: "JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "Languages",
  },
  {
    id: "typescript",
    name: "TypeScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    category: "Languages",
  },
  {
    id: "java",
    name: "Java",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "Languages",
  },
  {
    id: "csharp",
    name: "C#",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    category: "Languages",
  },
  {
    id: "cpp",
    name: "C++",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    category: "Languages",
  },
  {
    id: "go",
    name: "Go",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    category: "Languages",
  },
  {
    id: "rust",
    name: "Rust",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    category: "Languages",
  },
  {
    id: "php",
    name: "PHP",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    category: "Languages",
  },
  {
    id: "ruby",
    name: "Ruby",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
    category: "Languages",
  },
  {
    id: "swift",
    name: "Swift",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    category: "Languages",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    category: "Languages",
  },

  // Frontend Frameworks
  {
    id: "react",
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    id: "vue",
    name: "Vue.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    category: "Frontend",
  },
  {
    id: "angular",
    name: "Angular",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    category: "Frontend",
  },
  {
    id: "svelte",
    name: "Svelte",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    category: "Frontend",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },
  {
    id: "html5",
    name: "HTML5",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    id: "css3",
    name: "CSS3",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    category: "Frontend",
  },

  // Backend Frameworks
  {
    id: "nodejs",
    name: "Node.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    id: "express",
    name: "Express",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    category: "Backend",
  },
  {
    id: "django",
    name: "Django",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    category: "Backend",
  },
  {
    id: "flask",
    name: "Flask",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    category: "Backend",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    category: "Backend",
  },
  {
    id: "spring",
    name: "Spring",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    category: "Backend",
  },
  {
    id: "dotnet",
    name: ".NET",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    category: "Backend",
  },
  {
    id: "rails",
    name: "Ruby on Rails",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    category: "Backend",
  },

  // Databases
  {
    id: "mongodb",
    name: "MongoDB",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    category: "Database",
  },
  {
    id: "mysql",
    name: "MySQL",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    category: "Database",
  },
  {
    id: "redis",
    name: "Redis",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    category: "Database",
  },
  {
    id: "sqlite",
    name: "SQLite",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    category: "Database",
  },
  {
    id: "firebase",
    name: "Firebase",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    category: "Database",
  },

  // DevOps & Cloud
  {
    id: "docker",
    name: "Docker",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    category: "DevOps",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    category: "DevOps",
  },
  {
    id: "aws",
    name: "AWS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "DevOps",
  },
  {
    id: "azure",
    name: "Azure",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    category: "DevOps",
  },
  {
    id: "gcp",
    name: "Google Cloud",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    category: "DevOps",
  },
  {
    id: "nginx",
    name: "Nginx",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    category: "DevOps",
  },
  {
    id: "git",
    name: "Git",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "DevOps",
  },
  {
    id: "github",
    name: "GitHub",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    category: "DevOps",
  },

  // Tools
  {
    id: "vscode",
    name: "VS Code",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    category: "Tools",
  },
  {
    id: "figma",
    name: "Figma",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    category: "Tools",
  },
  {
    id: "postman",
    name: "Postman",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    category: "Tools",
  },
  {
    id: "npm",
    name: "npm",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    category: "Tools",
  },
  {
    id: "yarn",
    name: "Yarn",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg",
    category: "Tools",
  },
  {
    id: "webpack",
    name: "Webpack",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
    category: "Tools",
  },
  {
    id: "vite",
    name: "Vite",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    category: "Tools",
  },
];

// Social Media Icons
export const SOCIAL_MEDIA_ITEMS: TechStackItem[] = [
  // Professional Networks
  {
    id: "linkedin",
    name: "LinkedIn",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    category: "Professional",
  },
  {
    id: "github",
    name: "GitHub",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    category: "Professional",
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg",
    category: "Professional",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    category: "Professional",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    category: "Professional",
  },
  {
    id: "codepen",
    name: "CodePen",
    iconUrl: "https://www.svgrepo.com/show/471218/codepen.svg",
    category: "Professional",
  },
  {
    id: "gitlab",
    name: "GitLab",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg",
    category: "Professional",
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg",
    category: "Professional",
  },

  // Social Platforms
  {
    id: "twitter",
    name: "Twitter/X",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
    category: "Social",
  },
  {
    id: "instagram",
    name: "Instagram",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    category: "Social",
  },
  {
    id: "facebook",
    name: "Facebook",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
    category: "Social",
  },
  {
    id: "youtube",
    name: "YouTube",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    category: "Social",
  },

  {
    id: "discord",
    name: "Discord",
    iconUrl: "https://www.svgrepo.com/show/353655/discord-icon.svg",
    category: "Social",
  },
  {
    id: "slack",
    name: "Slack",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    category: "Social",
  },
  {
    id: "telegram",
    name: "Telegram",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    category: "Social",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    category: "Social",
  },
  {
    id: "mastodon",
    name: "Mastodon",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mastodon_logotype_%28simple%29_new_hue.svg",
    category: "Social",
  },

  // Content Platforms
  {
    id: "medium",
    name: "Medium",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg",
    category: "Content",
  },
  {
    id: "devto",
    name: "Dev.to",
    iconUrl: "https://www.svgrepo.com/show/349334/dev-to.svg",
    category: "Content",
  },
  {
    id: "hashnode",
    name: "Hashnode",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Hashnode_icon.svg",
    category: "Content",
  },

  {
    id: "twitch",
    name: "Twitch",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg",
    category: "Content",
  },

  // Design & Creative
  {
    id: "dribbble",
    name: "Dribbble",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Dribbble_logo.svg/76px-Dribbble_logo.svg.png?20230906114116",
    category: "Design",
  },
  {
    id: "behance",
    name: "Behance",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Behance_logo.svg",
    category: "Design",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    category: "Design",
  },

  // Other
  {
    id: "spotify",
    name: "Spotify",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    category: "Other",
  },
  {
    id: "paypal",
    name: "PayPal",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    category: "Other",
  },

  {
    id: "patreon",
    name: "Patreon",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Patreon_logo.svg",
    category: "Other",
  },
];



