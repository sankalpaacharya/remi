export type TemplateCategory = "projects" | "personal";

export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  tags: string[];
  category: TemplateCategory;
  filePath: string;
}

export interface Template extends TemplateMetadata {
  content: string;
  preview: string;
}

export const templateMetadata: TemplateMetadata[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple README with essential sections",
    tags: ["basic", "simple", "starter"],
    category: "projects",
    filePath: "/templates/projects/minimal.md",
  },
  {
    id: "comprehensive",
    name: "Comprehensive",
    description: "Full-featured README with all standard sections",
    tags: ["complete", "detailed", "professional"],
    category: "projects",
    filePath: "/templates/projects/comprehensive.md",
  },
  {
    id: "centered",
    name: "Centered & Stylish",
    description: "Eye-catching centered design with badges and icons",
    tags: ["styled", "centered", "badges"],
    category: "projects",
    filePath: "/templates/projects/centered.md",
  },
  {
    id: "tech-stack",
    name: "Tech Stack Showcase",
    description: "Perfect for projects showcasing technologies used",
    tags: ["tech", "stack", "frameworks"],
    category: "projects",
    filePath: "/templates/projects/tech-stack.md",
  },
  {
    id: "api-docs",
    name: "API Documentation",
    description: "Ideal for API projects and libraries",
    tags: ["api", "documentation", "library"],
    category: "projects",
    filePath: "/templates/projects/api-docs.md",
  },
  {
    id: "open-source",
    name: "Open Source Project",
    description: "Community-focused with contribution guidelines",
    tags: ["opensource", "community", "collaborative"],
    category: "projects",
    filePath: "/templates/projects/open-source.md",
  },
  {
    id: "profile-minimal",
    name: "Minimal Profile",
    description: "Clean and simple profile README",
    tags: ["profile", "simple", "about"],
    category: "personal",
    filePath: "/templates/personal/minimal-profile.md",
  },
  {
    id: "profile-detailed",
    name: "Detailed Profile",
    description: "Comprehensive profile with stats and activity",
    tags: ["profile", "detailed", "stats"],
    category: "personal",
    filePath: "/templates/personal/detailed-profile.md",
  },
  {
    id: "profile-creative",
    name: "Creative Profile",
    description: "Eye-catching profile with animations and widgets",
    tags: ["profile", "creative", "animated"],
    category: "personal",
    filePath: "/templates/personal/creative-profile.md",
  },
];
