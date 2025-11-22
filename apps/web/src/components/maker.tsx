import { useState } from "react";
import { Markdown } from "./chatcn/ai/markdown";
import { CodeEditor, CodeEditArea } from "./chatcn/ai/code-editor";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import LeftSideBar from "./editor/left-sidebar";

export function ReadmeMaker() {
  const [state, setState] = useState(
    "# Hello World\n\nStart writing your README in markdown..."
  );

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-full">
      {/* Left Sidebar */}
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <LeftSideBar />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={40} className="flex flex-col">
        <div className="px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">README.md</h2>
        </div>
        <div className="flex-1 min-h-0 h-full">
          <CodeEditor
            value={state}
            onValueChange={setState}
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
          <div className="flex-1 overflow-auto p-4">
            <Markdown theme={"dark"} className="font-sans">
              {state}
            </Markdown>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
