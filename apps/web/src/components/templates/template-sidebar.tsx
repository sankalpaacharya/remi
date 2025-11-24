"use client";

import { useState } from "react";
import {
  FileText,
  Check,
  ExternalLink,
  FolderGit2,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Template, TemplateCategory } from "@/constant/templates";

interface TemplateSidebarProps {
  templates: Template[];
  selectedTemplate: Template;
  appliedId: string | null;
  onSelectTemplate: (template: Template) => void;
  onUseTemplate: () => void;
  totalTemplates: number;
  onClose?: () => void;
  isMobile?: boolean;
}

export function TemplateSidebar({
  templates,
  selectedTemplate,
  appliedId,
  onSelectTemplate,
  onUseTemplate,
  totalTemplates,
  onClose,
  isMobile = false,
}: TemplateSidebarProps) {
  const [activeTab, setActiveTab] = useState<TemplateCategory>("projects");

  const projectTemplates = templates.filter((t) => t.category === "projects");
  const personalTemplates = templates.filter((t) => t.category === "personal");

  const renderTemplateList = (templateList: Template[]) => (
    <div className="flex-1 overflow-y-auto">
      {templateList.map((template) => {
        const isSelected = selectedTemplate.id === template.id;
        const isApplied = appliedId === template.id;

        return (
          <div
            key={template.id}
            onClick={() => onSelectTemplate(template)}
            className={cn(
              "px-3 sm:px-4 py-3 border-b cursor-pointer transition-colors group",
              isSelected
                ? "bg-primary/10 border-l-2 border-l-primary"
                : "hover:bg-accent/50 border-l-2 border-l-transparent"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xs sm:text-sm truncate">
                  {template.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 line-clamp-2">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-muted rounded"
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
  );

  return (
    <div
      className={cn(
        "border-r flex flex-col bg-background",
        isMobile ? "w-full" : "w-full sm:w-64 md:w-72 lg:w-80"
      )}
    >
      <div className="px-3 sm:px-4 py-2 border-b flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2">
            <FileText className="size-4 sm:size-5" />
            <span>Templates</span>
          </h2>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
            {totalTemplates} templates available
          </p>
        </div>
        {isMobile && onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 shrink-0"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TemplateCategory)}
        className="flex-1 flex flex-col min-h-0"
      >
        <TabsList className="w-full rounded-none border-b bg-transparent p-0 h-auto">
          <TabsTrigger
            value="projects"
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-1 sm:gap-2 text-xs sm:text-sm"
          >
            <FolderGit2 className="size-3 sm:size-3.5" />
            <span className="hidden sm:inline">Projects</span>
            <span className="sm:hidden">Proj</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              {projectTemplates.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="personal"
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-1 sm:gap-2 text-xs sm:text-sm"
          >
            <User className="size-3 sm:size-3.5" />
            <span className="hidden sm:inline">Personal</span>
            <span className="sm:hidden">Pers</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              {personalTemplates.length}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="projects"
          className="flex-1 m-0 flex flex-col min-h-0"
        >
          {renderTemplateList(projectTemplates)}
        </TabsContent>

        <TabsContent
          value="personal"
          className="flex-1 m-0 flex flex-col min-h-0"
        >
          {renderTemplateList(personalTemplates)}
        </TabsContent>
      </Tabs>

      <div className="p-2 sm:p-3 border-t bg-muted/30">
        <Button onClick={onUseTemplate} className="w-full" size="sm">
          <ExternalLink className="size-3 sm:size-4 mr-2" />
          <span className="text-xs sm:text-sm">Use Template in Editor</span>
        </Button>
      </div>
    </div>
  );
}
