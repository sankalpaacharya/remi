"use client";

import { useState, useEffect } from "react";
import { templateMetadata, type Template } from "@/constant/templates";
import { loadAllTemplates } from "@/lib/template-loader";
import { Markdown } from "@/components/chatcn/ai/markdown";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TemplateSidebar } from "../../components/templates/template-sidebar";

export default function Templates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [appliedId, setAppliedId] = useState<string | null>(null);
  const { setMarkdownContent } = useStore();
  const router = useRouter();

  // Load templates on mount
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const loadedTemplates = await loadAllTemplates(templateMetadata);
        setTemplates(loadedTemplates);
        setSelectedTemplate(loadedTemplates[0]);
      } catch (error) {
        console.error("Failed to load templates:", error);
        toast.error("Failed to load templates");
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, []);

  const handleApplyTemplate = (
    templateId: string,
    content: string,
    name: string
  ) => {
    setMarkdownContent(content);
    setAppliedId(templateId);
    toast.success(`${name} template applied!`, {
      description: "Navigate to Editor to customize your README",
    });
    setTimeout(() => setAppliedId(null), 2000);
  };

  const handleUseTemplate = (content: string) => {
    setMarkdownContent(content);
    router.push("/");
    toast.success("Template loaded in editor!");
  };

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Loading templates...</p>
        </div>
      </div>
    );
  }

  if (!selectedTemplate) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-sm text-muted-foreground">No templates available</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left Sidebar */}
      <TemplateSidebar
        templates={templates}
        selectedTemplate={selectedTemplate}
        appliedId={appliedId}
        onSelectTemplate={setSelectedTemplate}
        onUseTemplate={() => handleUseTemplate(selectedTemplate.content)}
        totalTemplates={templates.length}
      />

      {/* Right Side - Preview */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="px-4 py-2 border-b flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{selectedTemplate.name}</h2>
            <p className="text-xs text-muted-foreground">
              {selectedTemplate.description}
            </p>
          </div>
          <Button
            onClick={() =>
              handleApplyTemplate(
                selectedTemplate.id,
                selectedTemplate.content,
                selectedTemplate.name
              )
            }
            variant="outline"
            size="sm"
          >
            {appliedId === selectedTemplate.id ? (
              <>
                <Check className="size-4 mr-2 text-green-500" />
                Applied
              </>
            ) : (
              "Apply Template"
            )}
          </Button>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 min-h-0">
          <div className="max-w-4xl mx-auto">
            <Markdown theme="dark" className="font-sans">
              {selectedTemplate.content}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
