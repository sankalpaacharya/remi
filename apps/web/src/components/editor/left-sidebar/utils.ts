import type { BadgeItem, LinkItem } from "./types";

// Utility function to generate markdown image syntax
export const generateMarkdownImage = (name: string, url: string): string => {
  const altText = name.toLowerCase().replace(/\s+/g, "-");
  return `![${altText}](${url})`;
};

// Get unique categories from badges and links
export const getUniqueCategories = (
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
