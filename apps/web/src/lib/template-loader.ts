import type { Template, TemplateMetadata } from "@/constant/templates";

/**
 * Load a single template by fetching its markdown file
 */
export async function loadTemplate(
  metadata: TemplateMetadata
): Promise<Template> {
  const response = await fetch(metadata.filePath);

  if (!response.ok) {
    throw new Error(`Failed to load template: ${metadata.filePath}`);
  }

  const content = await response.text();

  // Generate preview (first 300 characters)
  const preview = content.substring(0, 300) + (content.length > 300 ? "..." : "");

  return {
    ...metadata,
    content,
    preview,
  };
}

/**
 * Load all templates from metadata
 */
export async function loadAllTemplates(
  metadataList: TemplateMetadata[]
): Promise<Template[]> {
  return Promise.all(metadataList.map(loadTemplate));
}

/**
 * Load a template by ID
 */
export async function loadTemplateById(
  metadataList: TemplateMetadata[],
  id: string
): Promise<Template | null> {
  const metadata = metadataList.find((t) => t.id === id);
  if (!metadata) return null;
  return loadTemplate(metadata);
}
