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



