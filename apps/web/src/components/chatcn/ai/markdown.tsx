import React from "react";
import { default as MarkdownRender } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/chatcn/ai/codeblock";

type MarkDownProps = {
  children: React.ReactNode;
  className?: string;
  theme?: string;
};

export function Markdown({ children, className, theme }: MarkDownProps) {
  return (
    <div
      className={cn(
        "prose dark:prose-invert max-w-4xl px-3 prose-pre:p-0 prose-pre:resize-none prose-h1:border-b prose-h1:pb-2 prose-h1:border-border",
        className
      )}
    >
      <MarkdownRender
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <CodeBlock
                {...props}
                lang={"tsx"}
                theme={
                  theme == "dark"
                    ? "github-dark-default"
                    : "github-light-default"
                }
                className={cn("not-prose")}
              >
                {String(children).replace(/\n$/, "")}
              </CodeBlock>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {String(children)}
      </MarkdownRender>
    </div>
  );
}
