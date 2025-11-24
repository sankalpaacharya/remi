"use client";
import { useState } from "react";
import { Markdown } from "./chatcn/ai/markdown";
import { CodeEditor, CodeEditArea } from "./chatcn/ai/code-editor";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import LeftSideBar from "./editor/left-sidebar";
import { useStore } from "@/store/useStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileEdit, Eye, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReadmeMaker() {
  const { markdownContent, setMarkdownContent } = useStore();
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  // Check if we're on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    if (!isMobileView) {
      setIsMobileView(true);
    }
  }

  // Mobile View with Tabs
  if (isMobileView) {
    return (
      <div className="w-full h-full flex flex-col">
        <Tabs defaultValue="editor" className="flex-1 flex flex-col min-h-0">
          <TabsList className="w-full rounded-none border-b bg-transparent p-0 h-auto shrink-0">
            <TabsTrigger
              value="resources"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Resources
            </TabsTrigger>
            <TabsTrigger
              value="editor"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              <FileEdit className="size-4 mr-2" />
              Editor
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              <Eye className="size-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resources" className="flex-1 m-0 min-h-0">
            <LeftSideBar />
          </TabsContent>

          <TabsContent
            value="editor"
            className="flex-1 m-0 flex flex-col min-h-0"
          >
            <div className="px-4 py-2 border-b shrink-0">
              <h2 className="text-base font-semibold">README.md</h2>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <CodeEditor
                value={markdownContent}
                onValueChange={setMarkdownContent}
                language="markdown"
                theme="vs-dark"
                className="h-full border-none rounded-none"
              >
                <CodeEditArea
                  loader={<div className="text-xl p-4">Loading Editor...</div>}
                  height="100%"
                  width="100%"
                  className="mt-0 border-none h-full"
                />
              </CodeEditor>
            </div>
          </TabsContent>

          <TabsContent
            value="preview"
            className="flex-1 m-0 flex flex-col min-h-0"
          >
            <div className="px-4 py-2 border-b">
              <h2 className="text-base font-semibold">Preview</h2>
            </div>
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 min-h-0">
              <Markdown theme={"dark"} className="font-sans">
                {markdownContent}
              </Markdown>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // Desktop View with Resizable Panels
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-full">
      {/* Left Sidebar - Collapsible on tablets */}
      {showSidebar && (
        <>
          <ResizablePanel
            defaultSize={15}
            minSize={15}
            maxSize={30}
            className="hidden md:block"
          >
            <LeftSideBar />
          </ResizablePanel>
          <ResizableHandle withHandle className="hidden md:flex" />
        </>
      )}

      <ResizablePanel
        defaultSize={showSidebar ? 40 : 50}
        className="flex flex-col min-h-0"
      >
        <div className="px-4 py-2 border-b shrink-0 flex items-center justify-between">
          <h2 className="text-base lg:text-lg font-semibold">README.md</h2>
          <Button
            variant="ghost"
            size="icon"
            className="md:flex lg:hidden h-8 w-8"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? (
              <PanelLeftClose className="size-4" />
            ) : (
              <PanelLeftOpen className="size-4" />
            )}
          </Button>
        </div>
        <div className="flex-1 min-h-0 overflow-hidden">
          <CodeEditor
            value={markdownContent}
            onValueChange={setMarkdownContent}
            language="markdown"
            theme="vs-dark"
            className="h-full border-none rounded-none"
          >
            <CodeEditArea
              loader={<div className="text-xl p-4">Loading Editor...</div>}
              height="100%"
              width="100%"
              className="mt-0 border-none h-full"
            />
          </CodeEditor>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={showSidebar ? 40 : 50} minSize={30}>
        <div className="h-full flex flex-col">
          <div className="px-4 py-2 border-b">
            <h2 className="text-base lg:text-lg font-semibold">Preview</h2>
          </div>
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4 min-h-0">
            <Markdown theme={"dark"} className="font-sans">
              {markdownContent}
            </Markdown>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
