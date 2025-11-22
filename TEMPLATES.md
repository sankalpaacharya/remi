# Template System

This project uses a file-based template system for better maintainability and scalability.

## Structure

```
public/
└── templates/
    ├── projects/           # Repository README templates
    │   ├── minimal.md
    │   ├── comprehensive.md
    │   ├── centered.md
    │   ├── tech-stack.md
    │   ├── api-docs.md
    │   └── open-source.md
    └── personal/           # GitHub profile templates
        ├── minimal-profile.md
        ├── detailed-profile.md
        └── creative-profile.md
```

## How It Works

### 1. Template Metadata (`src/constant/templates.ts`)

Contains metadata for all templates (name, description, tags, category, file path).

```typescript
export const templateMetadata: TemplateMetadata[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple README with essential sections",
    tags: ["basic", "simple", "starter"],
    category: "projects",
    filePath: "/templates/projects/minimal.md",
  },
  // ... more templates
];
```

### 2. Template Loader (`src/lib/template-loader.ts`)

Utility functions to dynamically load templates:

- `loadTemplate(metadata)` - Load a single template
- `loadAllTemplates(metadataList)` - Load all templates
- `loadTemplateById(metadataList, id)` - Load template by ID

### 3. Usage in Components

```typescript
import { templateMetadata } from "@/constant/templates";
import { loadAllTemplates } from "@/lib/template-loader";

// Load templates
const templates = await loadAllTemplates(templateMetadata);
```

## Adding New Templates

1. **Create the markdown file** in `public/templates/[category]/`
2. **Add metadata** to `src/constant/templates.ts`:

```typescript
{
  id: "new-template",
  name: "New Template",
  description: "Description here",
  tags: ["tag1", "tag2"],
  category: "projects", // or "personal"
  filePath: "/templates/projects/new-template.md",
}
```

3. **That's it!** The template will automatically appear in the UI.

## Benefits

✅ **Easy to Edit** - Templates are plain markdown files  
✅ **Version Control** - Templates tracked in Git  
✅ **No Code Changes** - Add templates without touching component code  
✅ **Preview in GitHub** - Templates viewable directly in the repo  
✅ **Fast Loading** - Static files served efficiently  
✅ **Community Contributions** - Easy for others to add templates

## Template Categories

- **Projects** (`projects`) - For repository README files
- **Personal** (`personal`) - For GitHub profile README files
