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
        // Base prose settings - GitHub uses max-width: none for README
        "prose dark:prose-invert max-w-none",
        // GitHub's base font size is 16px with specific line-height
        "text-[16px] leading-[1.6]",
        // Reset margins and padding
        "prose-p:my-4 prose-p:leading-[1.6]",
        // Headings - Exact GitHub styling
        "prose-h1:text-[2em] prose-h1:font-semibold prose-h1:leading-tight prose-h1:mt-6 prose-h1:mb-4 prose-h1:pb-[0.3em] prose-h1:border-b prose-h1:border-[#21262d] dark:prose-h1:border-[#21262d]",
        "prose-h2:text-[1.5em] prose-h2:font-semibold prose-h2:leading-tight prose-h2:mt-6 prose-h2:mb-4 prose-h2:pb-[0.3em] prose-h2:border-b prose-h2:border-[#21262d] dark:prose-h2:border-[#21262d]",
        "prose-h3:text-[1.25em] prose-h3:font-semibold prose-h3:leading-tight prose-h3:mt-6 prose-h3:mb-4",
        "prose-h4:text-[1em] prose-h4:font-semibold prose-h4:leading-tight prose-h4:mt-6 prose-h4:mb-4",
        "prose-h5:text-[0.875em] prose-h5:font-semibold prose-h5:leading-tight prose-h5:mt-6 prose-h5:mb-4",
        "prose-h6:text-[0.85em] prose-h6:font-semibold prose-h6:leading-tight prose-h6:mt-6 prose-h6:mb-4 prose-h6:text-[#656d76] dark:prose-h6:text-[#7d8590]",
        // Lists - GitHub style with proper spacing
        "prose-ul:my-4 prose-ul:pl-8 prose-ul:list-disc",
        "prose-ol:my-4 prose-ol:pl-8 prose-ol:list-decimal",
        "prose-li:my-[0.25em] prose-li:leading-[1.6]",
        // Nested lists
        "prose-li:prose-ul:mt-1 prose-li:prose-ol:mt-1",
        // Code blocks and inline code - GitHub exact colors
        "prose-pre:p-0 prose-pre:my-4 prose-pre:bg-transparent prose-pre:border-0 prose-pre:rounded-md prose-pre:overflow-visible",
        "prose-code:px-[0.4em] prose-code:py-[0.2em] prose-code:text-[85%] prose-code:bg-[rgba(175,184,193,0.2)] dark:prose-code:bg-[rgba(110,118,129,0.4)] prose-code:rounded-[6px] prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:whitespace-nowrap",
        // Blockquotes - GitHub style
        "prose-blockquote:border-l-[0.25em] prose-blockquote:border-[#d0d7de] dark:prose-blockquote:border-[#3d444d] prose-blockquote:pl-4 prose-blockquote:my-4 prose-blockquote:text-[#656d76] dark:prose-blockquote:text-[#7d8590] prose-blockquote:italic-0",
        // Links - GitHub blue
        "prose-a:text-[#0969da] dark:prose-a:text-[#58a6ff] prose-a:no-underline hover:prose-a:underline prose-a:font-normal",
        // Tables - GitHub style with proper borders and backgrounds
        "prose-table:my-4 prose-table:block prose-table:overflow-auto prose-table:w-full prose-table:border-collapse",
        "prose-thead:border-0",
        "prose-tr:bg-transparent prose-tr:border-t prose-tr:border-[#21262d] dark:prose-tr:border-[#21262d]",
        "prose-th:border prose-th:border-[#21262d] dark:prose-th:border-[#21262d] prose-th:px-[13px] prose-th:py-1.5 prose-th:font-semibold prose-th:text-left",
        "prose-td:border prose-td:border-[#21262d] dark:prose-td:border-[#21262d] prose-td:px-[13px] prose-td:py-1.5",
        // Horizontal rule - GitHub style
        "prose-hr:my-6 prose-hr:h-[0.25em] prose-hr:p-0 prose-hr:border-0 prose-hr:bg-[#d0d7de] dark:prose-hr:bg-[#21262d]",
        // Images - GitHub style
        "prose-img:my-4 prose-img:max-w-full prose-img:h-auto prose-img:bg-transparent prose-img:rounded-md",
        // Strong and emphasis
        "prose-strong:font-semibold prose-strong:text-inherit",
        "prose-em:italic prose-em:text-inherit",
        // Task lists (checkboxes)
        "[&_.task-list-item]:list-none [&_.task-list-item]:ml-[-1.5em]",
        "[&_.task-list-item>input]:mr-[0.5em] [&_.task-list-item>input]:align-middle",
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
                lang={match[1] as any}
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
