"use client";

import { useState, useEffect } from "react";
import { templateMetadata, type Template } from "@/constant/templates";
import { loadAllTemplates } from "@/lib/template-loader";
import { Markdown } from "@/components/chatcn/ai/markdown";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Check, Loader2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TemplateSidebar } from "../../components/templates/template-sidebar";

export default function Templates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [appliedId, setAppliedId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setSidebarOpen(false);
  };

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Loading templates...
          </p>
        </div>
      </div>
    );
  }

  if (!selectedTemplate) {
    return (
      <div className="flex h-full w-full items-center justify-center p-4">
        <p className="text-xs sm:text-sm text-muted-foreground">
          No templates available
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full overflow-hidden relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <TemplateSidebar
          templates={templates}
          selectedTemplate={selectedTemplate}
          appliedId={appliedId}
          onSelectTemplate={handleSelectTemplate}
          onUseTemplate={() => handleUseTemplate(selectedTemplate.content)}
          totalTemplates={templates.length}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full sm:w-80 z-50 md:hidden bg-background">
            <TemplateSidebar
              templates={templates}
              selectedTemplate={selectedTemplate}
              appliedId={appliedId}
              onSelectTemplate={handleSelectTemplate}
              onUseTemplate={() => handleUseTemplate(selectedTemplate.content)}
              totalTemplates={templates.length}
              onClose={() => setSidebarOpen(false)}
              isMobile={true}
            />
          </div>
        </>
      )}

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-14 left-2 z-30 h-10 w-10 bg-background/80 backdrop-blur-sm border"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {/* Right Side - Preview */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="px-3 sm:px-4 py-2 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h2 className="text-base sm:text-lg font-semibold truncate">
              {selectedTemplate.name}
            </h2>
            <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">
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
            className="shrink-0 w-full sm:w-auto"
          >
            {appliedId === selectedTemplate.id ? (
              <>
                <Check className="size-3 sm:size-4 mr-2 text-green-500" />
                <span className="text-xs sm:text-sm">Applied</span>
              </>
            ) : (
              <span className="text-xs sm:text-sm">Apply Template</span>
            )}
          </Button>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6 min-h-0">
          <div className="max-w-4xl mx-auto">
            <Markdown theme="dark" className="font-sans text-sm sm:text-base">
              {selectedTemplate.content}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
