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
        "prose dark:prose-invert max-w-none px-3",
        // Reset prose defaults to match GitHub
        "prose-p:leading-[1.6] prose-p:my-4",
        // Headings - GitHub style
        "prose-h1:text-[2em] prose-h1:font-semibold prose-h1:mt-6 prose-h1:mb-4 prose-h1:pb-[0.3em] prose-h1:border-b prose-h1:border-border",
        "prose-h2:text-[1.5em] prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-4 prose-h2:pb-[0.3em] prose-h2:border-b prose-h2:border-border",
        "prose-h3:text-[1.25em] prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-4",
        "prose-h4:text-[1em] prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-4",
        "prose-h5:text-[0.875em] prose-h5:font-semibold prose-h5:mt-6 prose-h5:mb-4",
        "prose-h6:text-[0.85em] prose-h6:font-semibold prose-h6:mt-6 prose-h6:mb-4 prose-h6:text-muted-foreground",
        // Lists - GitHub style
        "prose-ul:my-4 prose-ul:pl-8 prose-ul:list-disc",
        "prose-ol:my-4 prose-ol:pl-8 prose-ol:list-decimal",
        "prose-li:my-[0.25em]",
        // Code blocks and inline code
        "prose-pre:p-0 prose-pre:my-4 prose-pre:bg-transparent prose-pre:border-0",
        "prose-code:px-[0.2em] prose-code:py-[0.2em] prose-code:text-[85%] prose-code:bg-muted prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none",
        // Blockquotes - GitHub style
        "prose-blockquote:border-l-[0.25em] prose-blockquote:border-border prose-blockquote:pl-4 prose-blockquote:my-4 prose-blockquote:text-muted-foreground",
        // Links
        "prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline",
        // Tables - GitHub style
        "prose-table:my-4 prose-table:border-collapse prose-table:w-full",
        "prose-th:border prose-th:border-border prose-th:px-3 prose-th:py-2 prose-th:bg-muted prose-th:font-semibold",
        "prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2",
        // Horizontal rule
        "prose-hr:my-6 prose-hr:border-t prose-hr:border-border",
        // Images
        "prose-img:my-4 prose-img:max-w-full prose-img:h-auto",
        // Strong and emphasis
        "prose-strong:font-semibold",
        "prose-em:italic",
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
