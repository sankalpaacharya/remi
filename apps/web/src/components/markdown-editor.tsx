"use client";
import { CodeEditor, CodeEditArea } from "@/components/chatcn/ai/code-editor";
import { useState } from "react";

export default function MarkdownEditor() {
  const [code, setCode] = useState(
    "# Hello World\n\nStart writing your markdown here..."
  );

  return (
    <CodeEditor value={code} onValueChange={setCode} language="markdown">
      <CodeEditArea
        loader={<div className="text-xl p-4">Loading Editor...</div>}
        className="mt-0"
      />
    </CodeEditor>
  );
}
