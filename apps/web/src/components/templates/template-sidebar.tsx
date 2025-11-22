"use client";

import { useState } from "react";
import { FileText, Check, ExternalLink, FolderGit2, User } from "lucide-react";
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
}

export function TemplateSidebar({
  templates,
  selectedTemplate,
  appliedId,
  onSelectTemplate,
  onUseTemplate,
  totalTemplates,
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
  );

  return (
    <div className="w-80 border-r flex flex-col bg-background">
      <div className="px-4 py-2 border-b">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FileText className="size-5" />
          Templates
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          {totalTemplates} templates available
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TemplateCategory)}
        className="flex-1 flex flex-col"
      >
        <TabsList className="w-full rounded-none border-b bg-transparent p-0 h-auto">
          <TabsTrigger
            value="projects"
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
          >
            <FolderGit2 className="size-3.5" />
            <span>Projects</span>
            <span className="text-xs text-muted-foreground">
              {projectTemplates.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="personal"
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent gap-2"
          >
            <User className="size-3.5" />
            <span>Personal</span>
            <span className="text-xs text-muted-foreground">
              {personalTemplates.length}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="flex-1 m-0 flex flex-col">
          {renderTemplateList(projectTemplates)}
        </TabsContent>

        <TabsContent value="personal" className="flex-1 m-0 flex flex-col">
          {renderTemplateList(personalTemplates)}
        </TabsContent>
      </Tabs>

      <div className="p-3 border-t bg-muted/30">
        <Button onClick={onUseTemplate} className="w-full" size="sm">
          <ExternalLink className="size-4 mr-2" />
          Use Template in Editor
        </Button>
      </div>
    </div>
  );
}
