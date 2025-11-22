"use client";

import { useState } from "react";
import { templates } from "@/constant/templates";
import { Markdown } from "@/components/chatcn/ai/markdown";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FileText, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [appliedId, setAppliedId] = useState<string | null>(null);
  const { setMarkdownContent } = useStore();
  const router = useRouter();

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

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left Sidebar - Template List */}
      <div className="w-80 border-r flex flex-col bg-background">
        <div className="px-4 py-2 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FileText className="size-5" />
            Templates
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            {templates.length} templates available
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {templates.map((template) => {
            const isSelected = selectedTemplate.id === template.id;
            const isApplied = appliedId === template.id;

            return (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className={cn(
                  "px-4 py-3 border-b cursor-pointer transition-colors group",
                  isSelected
                    ? "bg-primary/10 border-l-2 border-l-primary"
                    : "hover:bg-accent/50 border-l-2 border-l-transparent"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">
                      {template.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 bg-muted rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {isApplied && (
                    <Check className="size-4 text-green-500 shrink-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 border-t bg-muted/30">
          <Button
            onClick={() => handleUseTemplate(selectedTemplate.content)}
            className="w-full"
            size="sm"
          >
            <ExternalLink className="size-4 mr-2" />
            Use Template in Editor
          </Button>
        </div>
      </div>

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
