import { Markdown } from "./chatcn/ai/markdown";
import { CodeEditor, CodeEditArea } from "./chatcn/ai/code-editor";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import LeftSideBar from "./editor/left-sidebar";
import { useStore } from "@/store/useStore";

export function ReadmeMaker() {
  const { markdownContent, setMarkdownContent } = useStore();

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-full">
      {/* Left Sidebar */}
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <LeftSideBar />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={40} className="flex flex-col min-h-0">
        <div className="px-4 py-2 border-b shrink-0">
          <h2 className="text-lg font-semibold">README.md</h2>
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

      <ResizablePanel defaultSize={40} minSize={30}>
        <div className="h-full flex flex-col">
          <div className="px-4 py-2 border-b">
            <h2 className="text-lg font-semibold">Preview</h2>
          </div>
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 min-h-0">
            <Markdown theme={"dark"} className="font-sans">
              {markdownContent}
            </Markdown>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
