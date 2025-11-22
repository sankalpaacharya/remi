"use client";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { Clipboard, Check } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  children: string;
  lang: BundledLanguage;
  height?: string;
  className?: string;
  highlight?: { start: number; end: number };
  theme?: string;
};

export function CodeBlock({
  children,
  theme = "github-dark-default",
  lang,
  height = "600",
  className,
  highlight,
}: Props) {
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generateHtml = useCallback(async () => {
    if (!children) {
      setHtml("<pre><code></code></pre>");
      return;
    }
    const out = await codeToHtml(children, {
      lang,
      theme,
      colorReplacements: {
        "#0d1117": "var(--card)",
        "#ffffff": "var(--card)",
      },
      decorations: highlight
        ? [
            {
              start: { line: highlight.start - 1, character: 0 },
              end: { line: highlight.end, character: 0 },
              properties: { class: "bg-muted inline-block" },
            },
          ]
        : [],
    });
    setHtml(out);
  }, [children, lang, theme, highlight]);

  useEffect(() => {
    generateHtml();
  }, [generateHtml]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative rounded-md overflow-hidden w-full max-w-full group",
        className
      )}
      style={{ maxHeight: `${height}px` }}
    >
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Tooltip>
          <TooltipTrigger
            className="p-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] transition text-gray-300"
            onClick={handleCopy}
          >
            {copied ? <Check size={16} /> : <Clipboard size={16} />}
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copied!" : "Copy to Clipboard"}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {html == null ? (
        <div className="w-full overflow-x-auto text-sm [&>pre]:px-4 [&>pre]:py-3 [&>pre]:my-0">
          <pre className="bg-transparent text-foreground font-mono">
            <code>
              {children.split("\n").map((line, i) => (
                <span key={i} className="line">
                  {line}
                  {"\n"}
                </span>
              ))}
            </code>
          </pre>
        </div>
      ) : (
        <div
          className={cn(
            "w-full overflow-x-auto text-sm [&>pre]:px-4 [&>pre]:py-3 [&>pre]:my-0 [&>pre]:bg-transparent"
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}
