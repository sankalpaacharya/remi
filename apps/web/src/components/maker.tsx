import { useState } from "react";
import { Markdown } from "./chatcn/ai/markdown";
import { Textarea } from "./ui/textarea";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export function ReadmeMaker() {
  const [state, setState] = useState("");

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-full">
      <ResizablePanel defaultSize={50} minSize={30}>
        <div className="h-full flex flex-col p-4">
          <h2 className="text-lg font-semibold mb-2">Edit</h2>
          <Textarea
            className="outline-none border-none w-full flex-1 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={(e) => setState(e.target.value)}
            value={state}
            placeholder="Start writing your README in markdown..."
            style={{ background: "transparent" }}
          />
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={50} minSize={30}>
        <div className="h-full flex flex-col p-4 overflow-auto">
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          <div className="flex-1 overflow-auto">
            <Markdown theme={"dark"}>{state}</Markdown>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
